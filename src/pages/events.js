import React, { Component } from 'react'

import Heading from '../components/Events/heading'
import LatestEvents from '../components/Events/events'
import CallToAction from '../components/Common/callToAction'
import SEO from '../components/seo'

class Events extends Component {
  render() {
    return (
      <div className="first-section">
        <SEO isDynamic={false}
          title={`Gojek Tech Events`}
          description={`Gojek Tech Events`}
          url="https://gojek.io"
        />

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
