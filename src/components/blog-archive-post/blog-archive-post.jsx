import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Col, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import { FormattedDate } from "react-intl";

class BlogArchivePost extends Component {
  render() {
    console.log(
      this.props.content._embedded["wp:featuredmedia"]["0"].media_details.sizes
        .medium.source_url
    );

    const slug = `/blog/${this.props.content.slug}`;
    const title = this.props.content.title.rendered;
    const excerpt = this.props.excerpt;
    const thumbnail = this.props.content._embedded["wp:featuredmedia"]["0"]
      .media_details.sizes.medium.source_url;
    const date = new Date(this.props.content.date).toUTCString();

    return <Col md="6" lg="4" className="d-flex align-items-stretch">
        <article className="post card box-shadow-sm">
          <div className="post-feature m-0">
            <Link to={slug}>
              <CardImg top className="post-feature__img rounded-top" src={thumbnail} alt={excerpt} />
            </Link>
          </div>
          <CardBody className="post-content">
            <header>
              <div className="mb-2">
                <time>
                  <FormattedDate value={date} day="numeric" month="long" year="numeric" />
                </time>
              </div>
              <CardTitle className="h5">
                <Link className="text-black text-decoration-none" to={slug} dangerouslySetInnerHTML={{ __html: title }} />
              </CardTitle>
            </header>
            <CardText className="sr-only">{excerpt}</CardText>
          </CardBody>
        </article>
      </Col>;
  }
}

BlogArchivePost.propTypes = {
  content: PropTypes.object
};

BlogArchivePost.defaultProps = {
  thumbnail: ""
};

export default BlogArchivePost;
