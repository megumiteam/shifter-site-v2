import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Col,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";

class BlogArchivePost extends Component {
  render() {
    return <Col md="6" lg="4" className="d-flex align-items-stretch">
        <article className="card box-shadow-light mb-4">
          <figure className="post-img m-0">
            <CardImg top className="rounded-top card-img-top--fill" src={this.props.thumbnail} alt="" />
          </figure>
          <CardBody>
            <header>
              <div className="mb-2">
                <time>April 1, 2018</time>
              </div>
              <CardTitle className="h5">
                <Link className="text-black text-decoration-none" to={`/blog/${this.props.slug}`}>
                  {this.props.title}
                </Link>
              </CardTitle>
            </header>
            <CardText className="sr-only">{this.props.excerpt}</CardText>
          </CardBody>
        </article>
      </Col>;
  }
}

BlogArchivePost.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
  date: PropTypes.string,
  thumbnail: PropTypes.string
};

BlogArchivePost.defaultProps = {
  title: "",
  excerpt: "",
  date: "",
  thumbnail:
    "https://getshifter.io/app/uploads/2017/12/release-note-detail@2-1024x391.png"
};

export default BlogArchivePost;
