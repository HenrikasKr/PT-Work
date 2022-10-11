import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeSassOne from "../themes/index1/HomeSassOne";
import HomeSassTwo from "../themes/index2/HomeSassTwo";
import ScrollToTop from "../components/common/ScrollToTop";
import HomeAppLanding from "../themes/index4/HomeAppLanding";
import Contact from "../pages/Contact";

class Routes extends Component {
  render() {
    return (
      <>
        <Router>
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={HomeSassOne} />
            <Route exact path="/solutions" component={HomeSassTwo} />
            <Route exact path="/sectors" component={HomeAppLanding} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </>
    );
  }
}
export default Routes;
