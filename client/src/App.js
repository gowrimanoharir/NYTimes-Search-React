import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Search from "./pages/Search";

const App = () =>
  <Router>
    <div className="container">
      <Nav />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </div>
  </Router>;

export default App;
