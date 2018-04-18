import React, { Component } from "react";
import { Config } from "./../../config";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText
} from "reactstrap";

class BlogSingle extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    let postSlug = this.props.match.params.slug;
    let dataURL = `${Config.apiUrl}/wp-json/wp/v2/posts?_embed&slug=${postSlug}`;
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          posts: res
        });
      });
  }

  render() {

    let postContent = this.state.posts.map((post, index) => {
      var options = { year: "numeric", month: "long", day: "numeric" };
      var dateFormatted = new Date(post.date).toLocaleDateString("en-US", options);;
      return <article class="h-entry blog-single">
          <div className="blog-single__header _gradient-purple-dark section-angle--overlap">
            <Container>
              <Row className="justify-content-md-center">
                <Col md="10">
                  <header>
                    <h1 className="h2 text-white p-name mt-5">
                      {post.title.rendered}
                    </h1>
                    <div>
                      <ul class="text-uppercase font-weight-bold h6 small list-inline blog-archive-header__tags mt-4">
                        <li class="list-inline-item blog-archive-header__tag">
                          <a className="text-white text-decoration-none p-category" rel="tag">
                            #Blog
                          </a>
                        </li>
                        <li class="list-inline-item blog-archive-header__tag">
                          <time datetime={post.date} class="text-white dt-published">
                            {dateFormatted}
                          </time>
                        </li>
                      </ul>
                    </div>
                  </header>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="bg-gray-100">
            <Container className="blog-single__content">
              <Row className="justify-content-center">
                <Col xs="12" md="1">
                </Col>
                <Col xs="12" md="11">
                  <Card>
                    <CardBody>
                      <CardText dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </article>;
    });

    return <div>{postContent}</div>;
  }
}

export default BlogSingle;