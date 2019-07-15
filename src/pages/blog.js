import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import OpenSourceprojects from '../components/OpenSource/index'
import CallToAction from '../components/Common/callToAction'
import Posts from '../components/Blog/posts'
import Heading from '../components/Blog/heading'

class Blog extends Component {
  render() {
    return (
      <div className="first-section">
        <Helmet>
          <title>
            Insightful articles by GOJEK about why they do what they do
          </title>
          <meta
            data-react-helmet="true"
            property="og:title"
            content="Insightful articles by GOJEK about why they do what they do"
          />
          <meta
            data-react-helmet="true"
            name="twitter:title"
            content="Insightful articles by GOJEK about why they do what they do"
          />
          <meta
            data-react-helmet="true"
            name="description"
            content="The blog section provides valuable information on GOJEK's work culture, their engineering ideals and insights on what makes a person an excellent developer."
          />
          <meta
            data-react-helmet="true"
            name="twitter:description"
            content="The blog section provides valuable information on GOJEK's work culture, their engineering ideals and insights on what makes a person an excellent developer."
          />
          <meta
            data-react-helmet="true"
            property="og:description"
            content="The blog section provides valuable information on GOJEK's work culture, their engineering ideals and insights on what makes a person an excellent developer."
          />
        </Helmet>

        <Heading heading="Read what we do" />

        <Posts count="9" />

        <CallToAction
          theme="green"
          text="Build the tech that powers an entire country. Soon: Singapore, Thailand, Vietnam & Philippines."
          btnText="APPLY NOW"
          link="/careers/"
        />
      </div>
    )
  }
}

export default Blog
