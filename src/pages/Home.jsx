import React, { Component } from "react";
import Hero from "./../containers/hero/hero";
import HomeOverview from "./../containers/home-overview/home-overview";
import Testimonials from "./../containers/testimonials/testimonials";
import GetStarted from "./../containers/get-started/get-started";

class Home extends Component {
  render() {
    return <div>
        <Hero title="The new standard in static web hosting" subtitle="Shifter is a full-service WordPress hosting solution that brings serverless architecture to the world’s most popular CMS. It transforms WordPress to static so you can create secure sites that scale and end downtime." />
        <HomeOverview title="Shifter brings the best of both worlds together—
so you can build the best website." />
        <GetStarted title="How Shifter Works" subitle="Follow these simple steps and you’ll have a brand new site in no time." />
        <Testimonials title="What people are saying" />
      </div>;
  }
}

export default Home;
