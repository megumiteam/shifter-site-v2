import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, CardBody, CardImg, CardTitle } from "reactstrap";
import ContentLoader from "react-content-loader";

class BlogArchivePost extends Component {
  render() {

    const loadingCSS = {
      overflow: 'hidden'
    };

    const CardImage = props => (
      <article style={loadingCSS} className="post card box-shadow-sm">
        <div className="card-img-top">
          <ContentLoader
            height={180}
            width={300}
            speed={2}
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
            {...props}
          >
            <rect x="0" y="0" rx="0" ry="0" width="400" height="180" />
          </ContentLoader>
        </div>
        <CardBody className="post-content">
          <ContentLoader
            height={180}
            width={250}
            speed={2}
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
            {...props}
          >
            <rect x="0" y="0" rx="6" ry="6" width="100" height="15" />
            <rect x="0" y="40" rx="6" ry="6" width="250" height="15" />
            <rect x="0" y="70" rx="6" ry="6" width="200" height="15" />
            <rect x="0" y="100" rx="6" ry="6" width="240" height="15" />
          </ContentLoader>
        </CardBody>
      </article>
    )

    return <Col md="6" lg="4" className="d-flex align-items-stretch">
      <CardImage />
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
