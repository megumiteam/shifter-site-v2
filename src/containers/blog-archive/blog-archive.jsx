import React, { Component } from "react";
import $ from "jquery";
import BlogArchiveHeader from "./../../containers/blog-archive-header/blog-archive-header";
import BlogArchivePost from "./../../components/blog-archive-post/blog-archive-post";
import { Config } from "./../../config"
import {
  Container,
  Row,
  Col
} from "reactstrap";

class BlogArchive extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    let dataURL = `${Config.apiUrl}/wp-json/wp/v2/posts?_embed&per_page=100`
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          posts: res
        });
      });
  }

  render() {

    console.log(this.state.posts);

    // ["0"]._embedded["wp:featuredmedia"]["0"].media_details.sizes.large;

    let posts = this.state.posts.map((post, index) => {
      return <BlogArchivePost key={index} slug={post.slug} title={post.title.rendered} excerpt={$(post.excerpt.rendered).text()} thumbnail={post._embedded["wp:featuredmedia"]["0"].source_url} date={new Date(post.date).toUTCString()} />;
    });
    
    return <div>
        <BlogArchiveHeader title="Blog" subtitle="Get the latest and greatest updates from team Shifter. And make sure to check back often to learn what’s new and exciting in our world." />
        <section className="py-5 bg-gray-100">
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
        </section>
      </div>;
  }
}

export default BlogArchive;
