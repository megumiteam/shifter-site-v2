import React, { Component } from "react";
import { Config } from "./../../config";
import { Container, Row, Col } from "reactstrap";

class BlogSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    let postSlug = this.props.match.params.slug;
    let dataURL = `${
      Config.apiUrl
    }/wp-json/wp/v2/posts?_embed&slug=${postSlug}`;
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

      const title = post.title.rendered;
      const options = { year: "numeric", month: "long", day: "numeric" };
      const dateFormatted = new Date(post.date).toLocaleDateString(
        "en-US",
        options
      );
      
      return <article class="h-entry blog-single bg-gray-100">
          <div className="blog-single__header _gradient-purple-dark">
            <Container>
              <Row className="justify-content-center text-center">
                <Col>
                  <header className="mb-5 mt-7">
                    <h1 className="h2 text-white p-name balance-text" dangerouslySetInnerHTML={{ __html: title }} />
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
          <div className="z-1 section-angle--gray">
            <Container className="blog-single__content">
              <Row className="justify-content-center">
                <Col md="11">
                  <Row className="justify-content-center">
                    <Col xs="12" md="1">
                      <div className="socia-list">
                        <a className="social-list__item" href="https://facebook.com/getshifter">
                          <i className="fa fa-facebook" />
                        </a>
                        <a className="social-list__item" href="https://twitter.com/getshifter">
                          <i className="fa fa-twitter" />
                        </a>
                      </div>
                    </Col>
                    <Col xs="12" md="11">
                      <article className="card p-5" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    </Col>
                  </Row>
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
