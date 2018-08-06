import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, CardBody, CardImg, CardTitle } from "reactstrap";

class BlogArchivePost extends Component {

  render() {
    const slug = `/blog/${this.props.content.slug}`;
    const title = this.props.content.title.rendered;
    const thumbnail = this.props.content._embedded["wp:featuredmedia"]["0"].media_details.sizes.medium.source_url;
    const options = { year: "numeric", month: "long", day: "numeric" };
    const dateFormatted = new Date(this.props.content.date).toLocaleDateString(
      "en-US",
      options
    );

    console.log(this.props.content._embedded["wp:featuredmedia"]["0"].media_details.sizes.medium.source_url)

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
                  {dateFormatted}
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
