import React, { Component } from "react";
import Helmet from "react-helmet";

class NotFound extends Component {
  componentDidMount() {
    window.prerenderReady = true;
  }
  render() {
    return <div>
      <Helmet>
        <title>404</title>
      </Helmet>
      page not found
      </div>;
  }
}

export default NotFound;
