import React, { Component } from "react";
import BlogArchive from "./../containers/blog-archive/blog-archive";
import BlogSingle from "./../containers/blog-single/blog-single";

import { BrowserRouter as Route, Switch } from "react-router-dom";

class Blog extends Component {
  

  render () {

    return <Switch>
        <Route exact path="/blog" component={BlogArchive} />
        <Route path="/blog/:slug" component={BlogSingle} />
      </Switch>;
  }
}

export default Blog;
