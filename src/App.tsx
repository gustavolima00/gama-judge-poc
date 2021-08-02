import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Problem from "./components/Problem";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/problem/:problemId" component={Problem} />
    </div>
  </Router>
);

export default App;