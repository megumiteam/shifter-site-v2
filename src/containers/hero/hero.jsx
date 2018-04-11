import React, { Component } from "react";
import $ from "jquery";
import {
  Container,
  Row,
  Col
} from "reactstrap";

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {

    $.ajax({
      url:
        "http://dev-wp-sls-rest-api.pantheonsite.io/wp-json/acf/v3/shifter/",
      dataType: "json",
      success: function(data) {
        this.setState({ data: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("#GET Error", status, err.toString());
      }
    });
  }

  render() {
    
    var data = $.grep(this.state.data, function(post, index) {
      return post.id === 11;
    });

    console.log(this.state.data);
    
    return <Container className="text-white hero">
        {data.map(function(post) {
          return <Row key={post.id}>
              <Col md={{ size: 9, offset: 1 }}>
                <h2 className="mt-10">
                  {post.acf.data[0].text_field}
                </h2>
                <div className="mt-3">
                  <p>{post.acf.data[1].text_area}</p>
                </div>
                <div className="hero__links mt-5">
                  <a href="https://go.getshifter.io" className="btn btn-gradient-primary text-uppercase">
                    Free Trial &rarr;
                  </a> <a href="https://go.getshifter.io" className="btn btn-outline-white text-uppercase">
                    Sign Up &rarr;
                  </a>
                </div>
              </Col>
            </Row>;
        })}
      </Container>;
  }
}

export default Hero;
