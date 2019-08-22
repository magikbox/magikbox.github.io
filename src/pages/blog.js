import React, { Component } from "react"

import CallToAction from "../components/Common/callToAction"
// import Posts from "../components/Blog/posts"
import Heading from "../components/Blog/heading"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Posts from "../components/Blog";

class Blog extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title="Insightful articles by GOJEK about why they do what they do"
          description="The blog section provides valuable information on GOJEK's work culture, their engineering ideals and insights on what makes a person an excellent developer."
        />

        <div className="first-section">
       
          <Heading heading="Read what we do" />

          <Posts count="9" />

          <CallToAction
            theme="green"
            text="Build the tech that powers an entire country. Soon: Singapore, Thailand, Vietnam & Philippines."
            btnText="APPLY NOW"
            link="/careers/"
          />
        </div>
      </Layout>
    )
  }
}

export default Blog
