import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import OpenSourceprojects from '../components/OpenSource/index'
import CallToAction from '../components/Common/callToAction'
import Posts from '../components/Blog/posts'
import Heading from '../components/Blog/heading'
import Slide from '../components/Home/ImpactStories/slide'
import data from '../components/Blog/data.json'

class Videos extends Component {
  render() {
    return (
      <div className="first-section">
        <Helmet>
          <title>Conference talks, Events we attend, and all our videos.</title>
          <meta
            data-react-helmet="true"
            property="og:title"
            content="Conference talks, Events we attend, and all our videos."
          />
          <meta
            data-react-helmet="true"
            name="twitter:title"
            content="Conference talks, Events we attend, and all our videos."
          />
          <meta
            data-react-helmet="true"
            name="description"
            content="The Videos section has a list of conferences and events we’ve attended and spoken in and all of our videos around culture, ad films, webinars."
          />
          <meta
            data-react-helmet="true"
            name="twitter:description"
            content="The Videos section has a list of conferences and events we’ve attended and spoken in and all of our videos around culture, ad films, webinars."
          />
          <meta
            data-react-helmet="true"
            property="og:description"
            content="The Videos section has a list of conferences and events we’ve attended and spoken in and all of our videos around culture, ad films, webinars."
          />
        </Helmet>

        <Heading heading="See what we do" />
        <div className="container">
          <div className="d-flex flex-row flex-wrap">
            {data.data.map((sliderItem, key) => (
              <div key={key} className="col-12 col-md-6 col-lg-4">
                <Slide data={sliderItem} key={key} targetId="youtubeVideo" />
              </div>
            ))}
          </div>
        </div>

        <div
          className="modal fade"
          id="youtubeVideo"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="youtubeModalLabel"
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-body embed-responsive embed-responsive-21by9">
                <iframe
                  id="iframeYoutube"
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/bdHfntRaAoo?rel=0&amp;showinfo=0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* <Posts count="9" /> */}

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

export default Videos
