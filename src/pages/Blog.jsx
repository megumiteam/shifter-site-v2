import React, { Component } from "react";
import BlogArchiveHeader from "./../containers/blog-archive-header/blog-archive-header"
import BlogArchive from "./../containers/blog-archive/blog-archive";
import GetStarted from "./../containers/get-started/get-started";

class Blog extends Component {
  render() {
    return <div>
        <BlogArchiveHeader title="Blog" subtitle="Get the latest and greatest updates from team Shifter. And make sure to check back often to learn what’s new and exciting in our world." />
        <BlogArchive />
        <GetStarted layout="centered" />
      </div>;
  }
}

export default Blog;
