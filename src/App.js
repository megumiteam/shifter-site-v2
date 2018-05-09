import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Intercom from "react-intercom";
import { IntlProvider } from "react-intl";

import NavPrimary from './containers/header/nav-primary';
import NavMobile from "./containers/header/nav-mobile";
import Footer from "./containers/footer/footer";

import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

import SEO from "./components/seo/seo";

class App extends Component {

  render() {
    return <Router>
        <IntlProvider locale="en">
          <div>
            <SEO />
            <NavPrimary />
            <main>
              <Switch>
                <Route exact component={Home} path="/" />
                <Route component={Features} path="/features/" />
                <Route component={Pricing} path="/pricing/" />
                <Route component={Blog} path="/blog/" />
                <Route path="*" component={NotFound} />
              </Switch>
            </main>
            <Footer />
            <NavMobile />
          </div>
        </IntlProvider>
      </Router>;
  }
}

export default App;