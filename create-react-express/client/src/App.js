import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Googlebooks from "./pages/Googlebooks";
import Description from "./pages/Description";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";


function App() {
  return (
   <Router>
     <div>
       <Nav />
       <Switch>
         <Route exact path={["/", "/googlebooks"]}>
           <Googlebooks />
         </Route>
         <Route exact path="/googlebooks/:id">
           <Description />
         </Route>
         <Route>
           <NoMatch />
         </Route>
       </Switch>
     </div>
   </Router>
  );
}


export default App;
