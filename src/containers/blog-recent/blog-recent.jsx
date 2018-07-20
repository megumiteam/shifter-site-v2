import React, { Component } from "react";
import BlogArchiveHeader from "./../../containers/blog-archive-header/blog-archive-header";
import BlogArchivePost from "./../../components/blog-archive-post/blog-archive-post";
import PropTypes from "prop-types";
import { Config } from "./../../config";
import { content } from "./../../content";
import { Container, Row, Col } from "reactstrap";

class BlogRecent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      data: false
    };
  }

  componentWillMount() {
    let dataURL = `${Config.apiUrl}/wp-json/wp/v2/posts?_embed&per_page=3`;
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          posts: res,
          data: true
        });
        window.prerenderReady = true;
      });
  }

  render() {

    let posts = this.state.posts.map((post, index) => {
      return <BlogArchivePost key={index} content={post} />;
    });

    const title = 'Recent Posts';
    const subtitle = content.blog.subtitle;

    return <section className="bg-gray-100">
        <BlogArchiveHeader title={title} subtitle={subtitle} />
        <Container className="z-1">
          <Row className="justify-content-md-center">
            <Col sm="11">
              <Row className="mb-gutter-row d-flex flex-wrap pb-5">
                {posts}
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-md-center text-center">
            <Col>
              <a href="/blog" className="btn btn-gradient-purple text-uppercase btn-arrow">
                Read More
              </a>
            </Col>
          </Row>
        </Container>
      </section>;
  }
}

BlogRecent.propTypes = {
  content: PropTypes.object
};

BlogRecent.defaultProps = {
  content: null
};

export default BlogRecent;
