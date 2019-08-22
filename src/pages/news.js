import React, { Component } from "react"
import Heading from "../components/News/heading"
import LatestNews from "../components/News/news"
import Layout from "../components/layout";
import SEO from "../components/seo";

class News extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title="Keep yourself updated with the latest news | GOJEK Tech News"
          description="Read on to know more about the technological innovations and major business decisions made by GOJEK for providing an unforgettable experience to their clients."
        />
        <div className="first-section">
      
          <Heading />
          <LatestNews />
        </div>
      </Layout>
    )
  }
}

export default News
