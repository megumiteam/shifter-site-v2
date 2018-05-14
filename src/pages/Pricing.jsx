import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Plans from "./../containers/plans/plans";
import PlansTable from "./../containers/plans-table/plans-table";
import PlansOverview from "./../containers/plans-overview/plans-overview";
import Faqs from "./../containers/faqs/faqs";
import GetStarted from "./../containers/get-started/get-started";
import SEO from "./../components/seo/seo";
import { content } from "./../content";

class Pricing extends Component {
  render() {

    return <div>
        <SEO title={content.pricing.plans.title + ' | Shifter'} />
        <Plans content={content.pricing.plans} />
        <PlansTable content={content.pricing.table} />
        <PlansOverview content={content.pricing.overview} />
        <Faqs content={content.pricing.faqs} />
        <GetStarted content={content.global.get_started} layout="centered" />
      </div>;
  }
}

export default Pricing;
