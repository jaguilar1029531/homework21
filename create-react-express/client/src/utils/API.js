import axios from "axios";

export default {
  // Gets all googlebooks
  getGooglebooks: function() {
    return axios.get("/api/googlebooks");
  },
  // Gets the book with the given id
  getGooglebook: function(id) {
    return axios.get("/api/googlebooks/" + id);
  },
  // Deletes the book with the given id
  deleteGooglebook: function(id) {
    return axios.delete("/api/googlebooks/" + id);
  },
  // Saves a book to the database
  saveGooglebook: function(googlebookData) {
    return axios.post("/api/googlebooks", googlebookData);
  }
};