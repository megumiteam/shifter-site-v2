import React, { Component } from "react";
import Hero from "./../containers/hero/hero";
import HomeOverview from "./../containers/home-overview/home-overview";
import Testimonials from "./../containers/testimonials/testimonials";
import Learn from "./../containers/learn/learn";
import GetStarted from "./../containers/get-started/get-started";
import Process from "./../containers/process/process";
import { content } from "./../content";

class Home extends Component {
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

export default Home;
