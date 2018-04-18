import React, { Component } from "react";
import Hero from "./../containers/hero/hero";
import FeaturesOverview from "./../containers/features-overview/features-overview";
import FeaturesHighlights from "./../containers/features-highlights/features-highlights";
import GetStarted from "./../containers/get-started/get-started";

class Features extends Component {
  render() {
    return (
      <div>
        <Hero
          title="Features"
          subtitle="Shifter is a full-service WordPress hosting solution that brings serverless architecture to the world’s most popular CMS. It transforms WordPress to static so you can create secure sites that scale and end downtime."
        />
        <FeaturesOverview
          title="WordPress hosting, reimagined."
          subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
        <FeaturesHighlights
          title="WordPress hosting, reimagined."
          subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
        <GetStarted
          layout="centered"
          title="Ready to get started?"
          subtitle="Are you ready for the next big thing?
Get started with Shifter today!"
        />
      </div>
    );
  }
}

export default Features;
