import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col
} from "reactstrap";

class BlogArchiveHeader extends Component {
  render() {
    return <section className="blog-archive-header py-10 _gradient-purple-dark">
        <Container>
          <Row className="justify-content-md-center mb-5">
            <Col md="8" lg="6" className="text-center text-white">
              <h1 className="h2">{this.props.title}</h1>
              <div className="mt-3 small">{this.props.subtitle}</div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center text-uppercase font-weight-bold h6 small">
              <ul class="list-inline blog-archive-header__tags">
                <li class="list-inline-item blog-archive-header__tag">
                  <a className="text-white text-decoration-none" href="">
                    #Blog
                  </a>
                </li>
                <li class="list-inline-item blog-archive-header__tag">
                  <a className="text-white text-decoration-none" href="">
                    #Events
                  </a>
                </li>
                <li class="list-inline-item blog-archive-header__tag">
                  <a className="text-white text-decoration-none" href="">
                    #Integration
                  </a>
                </li>
                <li class="list-inline-item blog-archive-header__tag">
                  <a className="text-white text-decoration-none" href="">
                    #Media
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>;
  }
}

BlogArchiveHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

BlogArchiveHeader.propTypes = {
  title: "",
  subtitle: ""
};

export default BlogArchiveHeader;
