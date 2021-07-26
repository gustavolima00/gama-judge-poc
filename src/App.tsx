import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Problem from "./components/problem";
import 'katex/dist/katex.min.css'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/problem" component={Problem} />
    </div>
  </Router>
);

export default App;