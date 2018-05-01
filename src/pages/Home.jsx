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
        <Hero title={content.home.hero.title} subtitle={content.home.hero.subtitle} />
        <HomeOverview content={content.home.overview} />
        <Process content={content.home.process} />
        <Testimonials title="What people are saying" subtitle="Follow these simple steps and you’ll have a brand new site in no time." />
        <Learn title="Expand &amp; Learn" subtitle="Follow these simple steps and you’ll have a brand new site in no time." />
        <GetStarted title="Ready to get started?" subtitle="Are you ready for the next big thing?
Get started with Shifter today!" />
      </div>;
  }
}

export default Home;
