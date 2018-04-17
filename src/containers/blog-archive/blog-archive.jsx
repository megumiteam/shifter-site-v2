import React, { Component } from "react";
import PropTypes from "prop-types";
import $ from "jquery";
import BlogArchivePost from "./../../components/blog-archive-post/blog-archive-post";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  Button,
  CardSubtitle,
  CardTitle,
  CardText,
  CardColumns
} from "reactstrap";

class BlogArchive extends Component {
  
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    let dataURL = "https://getshifter.io/wp-json/wp/v2/posts?_embed&per_page=100";
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
      return <BlogArchivePost key={index} title={post.title.rendered} excerpt={$(post.excerpt.rendered).text()} date={new Date(post.date).toUTCString()} />;
    });
    
    return <section className="py-5 bg-gray-100">
        <Container>
          <Row className="d-flex flex-wrap">
            {posts}
          </Row>
          <Row>
            <Col className="text-center m-5">
              <a href="https://go.getshifter.io" className="btn text-uppercase btn-gradient-primary btn-lg">
                Read More
              </a>
            </Col>
          </Row>
        </Container>
      </section>;
  }
}

export default BlogArchive;
