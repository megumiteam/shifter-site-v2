import React, { Component } from "react";
import BlogArchiveHeader from "./../../containers/blog-archive-header/blog-archive-header";
import BlogArchivePost from "./../../components/blog-archive-post/blog-archive-post";
import PropTypes from "prop-types";
import { Config } from "./../../config";
import { content } from "./../../content";
import { Container, Row, Col } from "reactstrap";

class BlogArchive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    let dataURL = `${Config.apiUrl}/wp-json/wp/v2/posts?_embed&per_page=100`;
    // let dataURL = 'https://d2znkzoth8y387.cloudfront.net/wp-content/uploads/wp-sls-api/posts.json';
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          posts: res
        });
      });
  }

  render() {
    let posts = this.state.posts.map((post, index) => {
      console.log(post);
      return <BlogArchivePost key={index} content={post} />;
    });

    const title = content.blog.title;
    const subtitle = content.blog.subtitle;

    return (
      <div>
        <section className="bg-gray-100">
          <BlogArchiveHeader title={title} subtitle={subtitle} />
          <Container className="z-1">
            <Row className="justify-content-md-center">
              <Col sm="10">
                <Row className="mb-gutter-row d-flex flex-wrap pb-7">
                  {posts}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

BlogArchive.propTypes = {
  content: PropTypes.object,
};

BlogArchive.defaultProps = {
  content: null
};

export default BlogArchive;
