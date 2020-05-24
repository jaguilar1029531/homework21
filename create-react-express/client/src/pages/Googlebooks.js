import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";

import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Googlebooks() {
  // Setting our component's initial state
  const [googlebooks, setGooglebooks] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadGooglebooks()
  }, [])

  // Loads all books and sets them to books
  function loadGooglebooks() {
    API.getGooglebooks()
      .then(res => 
        setGooglebooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteGooglebook(id) {
    API.deleteGooglebook(id)
      .then(res => loadGooglebooks())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveGooglebook({
        title: formObject.title,
        author: formObject.author,
        description: formObject.description,
        
      })
        .then(res => loadGooglebooks())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Googlebooks Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="description"
                placeholder="Description (Optional)"
              />
              <TextArea
                onChange={handleInputChange}
                name="imageURL"
                placeholder="ImageURL (Optional)"
              />
              <TextArea
                onChange={handleInputChange}
                name="link"
                placeholder="Link (Optional)"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Googlebook
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Googlebooks On My List</h1>
            </Jumbotron>
            {googlebooks.length ? (
              <List>
                {googlebooks.map(googlebook => (
                  <ListItem key={googlebook._id}>
                    <Link to={"/googlebooks/" + googlebook._id}>
                      <strong>
                        {googlebook.title} by {googlebook.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteGooglebook(googlebook._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Googlebooks;
