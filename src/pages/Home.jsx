import React, { Component } from "react";
import Hero from "./../containers/hero/hero";
import HomeOverview from "./../containers/home-overview/home-overview";
import Testimonials from "./../containers/testimonials/testimonials";
import Learn from "./../containers/learn/learn";
import GetStarted from "./../containers/get-started/get-started";
import Process from "./../containers/process/process";

class Home extends Component {
  render() {
    return <div>
        <Hero title="The new standard in static web hosting" subtitle="Shifter is a full-service WordPress hosting solution that brings serverless architecture to the world’s most popular CMS. It transforms WordPress to static so you can create secure sites that scale and end downtime." />
        <HomeOverview title="Shifter brings the best of both worlds together—
so you can build the best website." />
        <Process title="How Shifter Works" subtitle="Follow these simple steps and you’ll have a brand new site in no time." />
        <Testimonials title="What people are saying" subtitle="Follow these simple steps and you’ll have a brand new site in no time." />
        <Learn title="Expand &amp; Learn" subtitle="Follow these simple steps and you’ll have a brand new site in no time." />
        <GetStarted title="Ready to get started?" subtitle="Are you ready for the next big thing?
Get started with Shifter today!" />
      </div>;
  }
}

export default Home;
