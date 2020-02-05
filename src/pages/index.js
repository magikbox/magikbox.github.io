import React, { Component } from "react";

import Carousel from "../components/Home/Carousel/index";
import GoJekFacts from "../components/Home/Facts/index";
import CallToAction from "../components/Common/callToAction";
import Principles from "../components/Home/Principles/index";
import TechFacts from "../components/Home/TechFacts/index";
import OpenSource from "../components/Home/OpenSource/index";
import ImpactStories from "../components/Home/Impact/index";
import Posts from "../components/Blog/posts";
import SEO from "../components/seo";

class IndexPage extends Component {
  render() {
    return (
      <div>
        <SEO
          isDynamic={false}
          title="Gojek: On-Demand Services for Transport, Payment, Food Delivery,  etc."
          description="Gojek is a Super App. It's one app for ordering food, commuting, digital payments, shopping, hyper-local delivery, getting a massage and two dozen services. It is Indonesia's first and fastest growing unicorn building an on-demand empire."
          url="https://gojek.io"
        />

        <Carousel />

        <GoJekFacts />

        <CallToAction
          theme="white"
          text="Help us build startups within a startup"
          btnText="APPLY NOW"
          link="/all-open-positions"
        />

        {/* GO-JEK Principles */}
        <Principles />
        {/* End GO-JEK Principles */}

        <TechFacts />

        {/* BLog Section */}
        <Posts heading=" Read what we do" count="3" />
        {/* End Blog Section */}

        {/* Open Source */}
        <OpenSource />
        {/* End Open Source */}

        <ImpactStories />

        <CallToAction
          theme="green"
          text="We have no dearth of Hard Technical Problems&trade;, work with us"
          btnText="APPLY NOW"
          link="/careers/"
        />
      </div>
    );
  }
}

export default IndexPage;
