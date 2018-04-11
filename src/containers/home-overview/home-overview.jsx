import React, { Component } from "react";
import $ from "jquery";
import {
  Container,
  Row,
  Col
} from "reactstrap";

class HomeOverview extends Component {
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
      return post.id === 20;
    });

    console.log(this.state.data);
    
    return <section className="home-overview">
        <Container>
          {data.map(function(post) {
            return <Row className="justify-content-md-center" key={post.id}>
                <Col md="8" className="text-center mt-10">
                  <h4>{post.acf.data[0].text_field}</h4>
                </Col>
              </Row>;
          })}
        </Container>
      </section>;
  }
}

export default HomeOverview;
