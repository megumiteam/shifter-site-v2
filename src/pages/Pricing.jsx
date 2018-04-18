import React, { Component } from "react";
import Plans from "./../containers/plans/plans";
import PlansTable from "./../containers/plans-table/plans-table";
import PlansOverview from "./../containers/plans-overview/plans-overview";
import Faqs from "./../containers/faqs/faqs";
import GetStarted from "./../containers/get-started/get-started";

class Pricing extends Component {
  render() {
    return <div>
        <Plans title="Pricing" subtitle="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo." />
        <PlansTable title="Many more features, all the details" />
        <PlansOverview title="Included in all plans" />
        <Faqs title="Frequently Asked Questions" />
        <GetStarted layout="centered" />
      </div>;
  }
}

export default Pricing;
