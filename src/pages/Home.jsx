import React, { Component } from "react";
import Hero from "./../containers/hero/hero";
import HomeOverview from "./../containers/home-overview/home-overview";

class Home extends Component {
  render() {
    return <div>
        <Hero />
        <HomeOverview />
      </div>;
  }
}

export default Home;