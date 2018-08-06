import React, { Component } from "react";
import BlogArchiveHeader from "./../../containers/blog-archive-header/blog-archive-header";
import BlogArchivePost from "./../../components/blog-archive-post/blog-archive-post";
import BlogArchiveLoading from "./../../components/blog-archive-post/blog-archive-post-loading";
import PropTypes from "prop-types";
import { content } from "./../../content";
import { Container, Row, Col } from "reactstrap";

import InfiniteScroll from 'react-infinite-scroll-component';

// fetch
import wp from '../../wp';

const BlogPostLoading = () => (
  <Row className="mb-gutter-row d-flex flex-wrap pb-7">
    <BlogArchiveLoading />
    <BlogArchiveLoading />
    <BlogArchiveLoading />
  </Row>
)

const withFetchPosts = (WrappedComponent) => {
  return class extends Component {
    state = {
      posts: [],
      currentPage: 1,
      totalPages: 0,
      hasLoadPosts: false,
    }
    fetchPosts = () => {
      let { currentPage, totalPages } = this.state;
      if (currentPage === totalPages) return
        currentPage += 1
      const promise = wp.posts().embed().page(currentPage).perPage(9)
      return promise.then(nextPosts => {
        const { totalPages } = nextPosts._paging
        const { posts } = this.state
        Array.prototype.push.apply(posts, nextPosts)
        this.setState({
          posts,
          totalPages: Number(totalPages),
          currentPage
        })
      })
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
    render = () => <WrappedComponent {...this.props} {...this.state} fetchPosts={this.fetchPosts}/>
  }
}

const BlogArchive  = ({currentPage,totalPages, posts, fetchPosts}) => {
  const title = content.blog.title;
  const subtitle = content.blog.subtitle;

  const InfiniteScrollCSS = {
    'overflowX': 'hidden'
  };

  return <section className="bg-gray-100">
    <BlogArchiveHeader title={title} subtitle={subtitle} />
    <Container className="z-1">
      <Row className="justify-content-md-center">
        <Col md="11">
          <InfiniteScroll
            dataLength={posts.length}
            next={fetchPosts}
            hasMore={!(currentPage === totalPages)}
            loader={<BlogPostLoading />}
            style={InfiniteScrollCSS}
          >
            <Row className="mb-gutter-row d-flex flex-wrap pb-7">
             {posts.map((post, index) => <BlogArchivePost key={index} content={post} />)}
            </Row>
          </InfiniteScroll>
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
