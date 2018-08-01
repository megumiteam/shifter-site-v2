import React, { Component } from "react";
import PropTypes from "prop-types";
import Hero from "./../containers/hero/hero";
import HomeOverview from "./../containers/home-overview/home-overview";
import Testimonials from "./../containers/testimonials/testimonials";
import Learn from "./../containers/learn/learn";
import GetStarted from "./../containers/get-started/get-started";
import Process from "./../containers/process/process";
import BlogRecent from "./../containers/blog-recent/blog-recent";
import { content } from "./../content";

class Home extends Component {
  componentDidMount() {
    window.prerenderReady = true;
  }
  render() {
    return <div>
        <Hero content={content.home.hero} />
        <HomeOverview content={content.home.overview} />
        <Process content={content.home.process} />
        <Testimonials content={content.home.testimonials} />
        <Learn content={content.global.learn} />
        <GetStarted content={content.global.get_started} />
      </div>;
  }
}

Home.propTypes = {
  content: PropTypes.object
};


export default Home;
