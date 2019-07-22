import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import OpenSourceprojects from '../components/OpenSource/index'

class OpenSource extends Component {
  render() {
    return (
      <div className="first-section">
        <Helmet>
          <title>
            Contributions by Gojek towards free and open source software
          </title>
          <meta
            data-react-helmet="true"
            property="og:title"
            content="Contributions by Gojek towards free and open source software"
          />
          <meta
            data-react-helmet="true"
            name="twitter:title"
            content="Contributions by Gojek towards free and open source software"
          />
          <meta
            data-react-helmet="true"
            name="description"
            content="Gojek understands and appreciates the value of free and open source software. Check out some of our contributions towards the community on our GitHub page."
          />
          <meta
            data-react-helmet="true"
            name="twitter:description"
            content="Gojek understands and appreciates the value of free and open source software. Check out some of our contributions towards the community on our GitHub page."
          />
          <meta
            data-react-helmet="true"
            property="og:description"
            content="Gojek understands and appreciates the value of free and open source software. Check out some of our contributions towards the community on our GitHub page."
          />
        </Helmet>

        <OpenSourceprojects />
      </div>
    )
  }
}

export default OpenSource
