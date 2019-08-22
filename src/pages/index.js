import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/Home/Carousel"
import GoJekFacts from "../components/Home/Facts/index"
import CallToAction from "../components/Common/callToAction"
import Principles from "../components/Home/Principles"
import TechFacts from "../components/Home/TechFacts"
import OpenSource from "../components/Home/OpenSource"
import ImpactStories from "../components/Home/Impact/index"
import Posts from "../components/Blog";

const IndexPage = props => {
  return (
    <Layout location={props.location}>
      <SEO
        title="GOJEK: On-Demand Services for Transport, Payment, Food Delivery, etc."
        description="GOJEK is a Super App. It's one app for ordering food, commuting, digital payments, shopping, hyper-local delivery, getting a massage and two dozen services. It is Indonesia's first and fastest growing unicorn building an on-demand empire."
      />
      <Carousel />

      <GoJekFacts />

      <CallToAction
        theme="white"
        text="Help us build startups within a startup"
        btnText="APPLY NOW"
        link="/careers/"
      />

      {/* GO-JEK Principles */}
      <Principles />
      {/* End GO-JEK Principles */}

      <TechFacts />

      {/* BLog Section */}
      <Posts heading=" Read what we do" count="4" />
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
    </Layout>
  )
}

export default IndexPage
