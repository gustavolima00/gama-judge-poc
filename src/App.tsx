import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Problem from "./components/problem";
import 'katex/dist/katex.min.css'
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <Router>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/problem" component={Problem} />
    </div>
  </Router>
);

export default App;