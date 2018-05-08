import React, { Component } from "react";
import Hero from "./../containers/hero/hero";
import FeaturesOverview from "./../containers/features-overview/features-overview";
import FeaturesHighlights from "./../containers/features-highlights/features-highlights";
import GetStarted from "./../containers/get-started/get-started";
import { content } from "./../content";

class Features extends Component {
  render() {
    return (
      <div>
        <Hero content={content.features.hero} />
        <FeaturesOverview content={content.features.overview} />
        <FeaturesHighlights content={content.features.highlights} />
        <GetStarted content={content.global.get_started} layout="centered" />
      </div>
    );
  }
}

export default Features;
