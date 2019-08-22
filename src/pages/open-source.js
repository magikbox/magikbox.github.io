import React, { Component } from "react"
import OpenSourceprojects from "../components/OpenSource/index"
import Layout from "../components/layout";
import SEO from "../components/seo";

class OpenSource extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title="Contributions by GOJEK towards free and open source software"
          description="GOJEK understands and appreciates the value of free and open source software. Check out some of our contributions towards the community on our GitHub page."
        />
        <div className="first-section">
     
          <OpenSourceprojects />
        </div>
      </Layout>
    )
  }
}

export default OpenSource
