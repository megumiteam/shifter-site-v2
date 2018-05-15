import React, { Component } from "react";
import {Helmet} from "react-helmet";
import Hero from "./../containers/hero/hero";
import FeaturesOverview from "./../containers/features-overview/features-overview";
import FeaturesHighlights from "./../containers/features-highlights/features-highlights";
import GetStarted from "./../containers/get-started/get-started";
import { content } from "./../content";

class Features extends Component {
  componentDidMount() {
    window.prerenderReady = true;
  }
  render() {
    return (
      <div>
        <Helmet title={content.features.hero.title + ' | Shifter'} />
        <Hero content={content.features.hero} />
        <FeaturesOverview content={content.features.overview} />
        <FeaturesHighlights content={content.features.highlights} />
        <GetStarted content={content.global.get_started} layout="centered" />
      </div>
    );
  }
}

export default Features;
