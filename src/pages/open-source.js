import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import OpenSourceprojects from '../components/OpenSource/index'
import SEO from '../components/seo'

class OpenSource extends Component {
  render() {
    return (
      <div className="first-section">
        <SEO isDynamic={false}
          title="Contributions by Gojek towards free and open source software"
          description="Gojek understands and appreciates the value of free and open source software. Check out some of our contributions towards the community on our GitHub page."
          url="https://gojek.io"
        />

        <OpenSourceprojects />
      </div>
    )
  }
}

export default OpenSource
