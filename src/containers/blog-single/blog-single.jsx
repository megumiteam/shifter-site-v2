import React, { Component } from "react";
import { Config } from "./../../config";
import { Container, Row, Col } from "reactstrap";
import {Helmet} from "react-helmet";
import SEO from "./../../components/seo/seo";
import BlogRecent from "./../blog-recent/blog-recent";

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
        window.prerenderReady = true
      });
  }

  render() {
    let postContent = this.state.posts.map((post, index) => {

      const title = post.title.rendered;
      const canonical = Config.canonicalUrl + '/blog/' + post.slug;
      const description = post.excerpt.rendered;
      const shareImage = post._embedded["wp:featuredmedia"]["0"].media_details.sizes.full.source_url
      const id = post.id;
      const options = { year: "numeric", month: "long", day: "numeric" };
      const dateFormatted = new Date(post.date).toLocaleDateString(
        "en-US",
        options
      );

      return <article key={id} className="h-entry blog-single bg-gray-100">
          <SEO title={title + ' | Shifter'} description={description} canonical={canonical} />
          <Helmet>
            <meta name="image" content={shareImage} />
            <meta name="twitter:image" content={shareImage} />
            <meta name="og:image" content={shareImage} />
          </Helmet>
          <div className="blog-single__header _gradient-purple-dark section-angle--purple-dark">
            <Container>
              <Row className="justify-content-center text-center">
                <Col md="10">
                  <header className="mb-5 mt-7">
                    <h1 className="h2 text-white p-name balance-text" dangerouslySetInnerHTML={{ __html: title }} />
                    <div>
                      <ul className="text-uppercase font-weight-bold h6 small list-inline blog-archive-header__tags mt-4">
                        <li className="list-inline-item blog-archive-header__tag">
                          <a className="text-white text-decoration-none p-category" rel="tag">
                            #Blog
                          </a>
                        </li>
                        <li className="list-inline-item blog-archive-header__tag">
                          <time dateTime={post.date} className="text-white dt-published">
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
                        <a className="social-list__item" target="_blank" title="Facebook Share" href={`https://www.facebook.com/sharer.php?u=${canonical}`}>
                          <i className="fa fa-facebook" />
                        </a>
                        <a className="social-list__item" target="_blank" title="Twitter Share" href={`https://twitter.com/share?url=${canonical}&amp;text=${title}&amp;hashtags=getshifter`}>
                          <i className="fa fa-twitter" />
                        </a>
                      </div>
                    </Col>
                    <Col xs="12" md="11">
                      <article className="card p-4 m-md-5 box-shadow-sm" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <BlogRecent />
          </div>
        </article>;
    });

    return <div>{postContent}</div>;
  }
}

export default BlogSingle;
