import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Heading from '../components/Events/heading'
import LatestEvents from '../components/Events/events'
import CallToAction from '../components/Common/callToAction'

class Events extends Component {
  render() {
    return (
      <div className="first-section">
        <Helmet>
          <title> Gojek Tech Events </title>
          <meta
            data-react-helmet="true"
            property="og:title"
            content="Gojek Tech Events"
          />
          <meta
            data-react-helmet="true"
            name="twitter:title"
            content="Gojek Tech Events"
          />
        </Helmet>

        <Heading />
        <LatestEvents />

        <CallToAction
          theme="green"
          text="Want to make the world a better place? 
                    We’ve got the Source Code!"
          btnText="APPLY NOW"
          link="/careers/"
        />
      </div>
    )
  }
}

export default Events
