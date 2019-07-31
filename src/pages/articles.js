import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import OpenSourceprojects from '../components/OpenSource/index'
import CallToAction from '../components/Common/callToAction'
import Posts from '../components/Blog/posts'
import Heading from '../components/Blog/heading'

class Articles extends Component {
  render() {
    return (
      <div className="first-section">
        <Helmet>
          <title>Insightful articles on how we do what we do</title>
          <meta
            data-react-helmet="true"
            property="og:title"
            content="Insightful articles on how we do what we do"
          />
          <meta
            data-react-helmet="true"
            name="twitter:title"
            content="Insightful articles on how we do what we do"
          />
          <meta
            data-react-helmet="true"
            name="description"
            content="The blog section provides valuable information on Gojek's work culture, their engineering ideals and insights on what makes a person an excellent developer."
          />
          <meta
            data-react-helmet="true"
            name="twitter:description"
            content="The blog section provides valuable information on Gojek's work culture, their engineering ideals and insights on what makes a person an excellent developer."
          />
          <meta
            data-react-helmet="true"
            property="og:description"
            content="The blog section provides valuable information on Gojek's work culture, their engineering ideals and insights on what makes a person an excellent developer."
          />
        </Helmet>

        <Heading heading="Read what we do" />

        <Posts count="9" />

        <CallToAction
          theme="green"
          text="Build the tech that powers an entire country."
          btnText="APPLY NOW"
          link="/careers/"
        />
      </div>
    )
  }
}

export default Articles
