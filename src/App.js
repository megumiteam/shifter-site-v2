import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrimaryNav from './containers/header/nav-primary';

import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <PrimaryNav />
          <main>
            <Switch>
              <Route exact component={Home} path="/" />
              <Route component={Features} path="/features/" />
              <Route component={Pricing} path="/pricing/" />
              <Route component={Blog} path="/blog/" />
              <Route path="*" component={NotFound} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;