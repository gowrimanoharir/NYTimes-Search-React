import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";

const App = () =>
  <Router>
    <div className="container">

      {/*Display the Navigation bar*/}
      <Nav />

      {/*Switch routes based on url request*/}
      <Switch>

        {/*Home and search path should go to search page*/}
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />

        {/*saved path should go to saved page*/}
        <Route exact path="/saved" component={Saved} />

        {/*all other paths should go to error page*/}
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
