import React, { Component } from "react";
import Plans from "./../containers/plans/plans";
import PlansTable from "./../containers/plans-table/plans-table";
import PlansOverview from "./../containers/plans-overview/plans-overview";
import Slider from "react-slick";

class Pricing extends Component {
  render() {
    return <div>
        <Plans title="Pricing" subtitle="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo." />
        <PlansTable title="Many more features, all the details" />
        <PlansOverview title="Included in all plans" />
      </div>;
  }
}

export default Pricing;
