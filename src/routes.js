import React from "react";
import { Route  } from "react-router-dom";

/**
 * Import all page components here
 */
import App from "./App";
import Home from "./pages/Home";
import Features from "./pages/Features";

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <Route exact path="/" component={Home} />
    <Route path="/features" component={Features} />
  </Route>
);
