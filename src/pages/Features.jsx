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
        <Hero
          title={content.features.hero.title}
          subtitle={content.features.hero.subtitle}
        />
        <FeaturesOverview
          title={content.features.overview.title}
          subtitle={content.features.overview.subtitle}
          featureOverviewItems={content.features.overview.items}
        />
        <FeaturesHighlights
          title={content.features.highlights.title}
          subtitle={content.features.highlights.subtitle}
          featureHilightItems={content.features.highlights.items}
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
