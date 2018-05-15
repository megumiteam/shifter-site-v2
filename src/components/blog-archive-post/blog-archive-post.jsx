import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, CardBody, CardImg, CardTitle } from "reactstrap";
import { FormattedDate } from "react-intl";

class BlogArchivePost extends Component {
  render() {
    const slug = `/blog/${this.props.content.slug}`;
    const title = this.props.content.title.rendered;
    const thumbnail = this.props.content._embedded["wp:featuredmedia"]["0"].source_url;
    const date = new Date(this.props.content.date).toUTCString();

    return <Col md="6" lg="4" className="d-flex align-items-stretch">
        <article className="post card box-shadow-sm">
          <div className="post-feature m-0">
            <a href={slug}>
              <CardImg top className="post-feature__img rounded-top" src={thumbnail} alt={title} />
            </a>
          </div>
          <CardBody className="post-content">
            <header>
              <div className="mb-2">
                <time>
                  <FormattedDate value={date} day="numeric" month="long" year="numeric" />
                </time>
              </div>
              <CardTitle className="h5">
                <a className="text-black text-decoration-none" href={slug} dangerouslySetInnerHTML={{ __html: title }} />
              </CardTitle>
            </header>
          </CardBody>
        </article>
      </Col>;
  }
}

BlogArchivePost.propTypes = {
  content: PropTypes.object
};

BlogArchivePost.defaultProps = {
  content: null
};

export default BlogArchivePost;
