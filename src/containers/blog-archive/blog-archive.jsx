import React, { Component } from "react";
import BlogArchiveHeader from "./../../containers/blog-archive-header/blog-archive-header";
import BlogArchivePost from "./../../components/blog-archive-post/blog-archive-post";
import BlogArchiveLoading from "./../../components/blog-archive-post/blog-archive-post-loading";
import PropTypes from "prop-types";
import { content } from "./../../content";
import { Container, Row, Col } from "reactstrap";
// fetch
import wp from '../../wp';

const BlogPosts = ({posts, hasLoadPosts}) => {
  return hasLoadPosts ?
    <Row className="mb-gutter-row d-flex flex-wrap pb-7">
      {posts.map((post, index) => <BlogArchivePost key={index} content={post} />)}
    </Row>
    : <Row className="mb-gutter-row d-flex flex-wrap pb-7">
      <BlogArchiveLoading />
      <BlogArchiveLoading />
      <BlogArchiveLoading />
    </Row>
}

const withFetchPosts = (WrappedComponent) => {
  return class extends Component {
    state = {
      posts: [],
      hasLoadPosts: false,
    }
    fetchPosts()  {
      const promise = wp.posts().embed()
      return promise.then(posts => {this.setState({posts})})
    }
    componentDidMount() {
      this.fetchPosts()
        .then(() => {
          this.setState({
            hasLoadPosts: true,
          });
          window.prerenderReady = true;
        })
    }
    render = () => <WrappedComponent {...this.props} {...this.state} />
  }
}

const BlogArchive  = (props) => {
  const title = content.blog.title;
  const subtitle = content.blog.subtitle;

  return <section className="bg-gray-100">
    <BlogArchiveHeader title={title} subtitle={subtitle} />
    <Container className="z-1">
      <Row className="justify-content-md-center">
        <Col sm="11">
          <BlogPosts {...props} />
        </Col>
      </Row>
    </Container>
  </section>;
}

BlogArchive.propTypes = {
  content: PropTypes.object
};

BlogArchive.defaultProps = {
  content: null
};

export default withFetchPosts(BlogArchive);
