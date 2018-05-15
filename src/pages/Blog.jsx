import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import BlogArchive from "./../containers/blog-archive/blog-archive";
import BlogSingle from "./../containers/blog-single/blog-single";
import GetStarted from "./../containers/get-started/get-started";
import { content } from "./../content";

class Blog extends Component {

  render () {

    return <div>
        <Helmet title={content.blog.title + ' | Shifter'} />
        <Switch>
          <Route exact path="/blog" component={BlogArchive} />
          <Route path="/blog/:slug" component={BlogSingle} />
        </Switch>
        <GetStarted content={content.global.get_started} layout="centered" />
      </div>;
  }
}

export default Blog;
