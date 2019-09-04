import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Heading from '../components/News/heading'
import LatestNews from '../components/News/news'
import SEO from '../components/seo'

class News extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTab: 'all-stories-tab',
    }
  }

  render() {
    const { selectedTab } = this.state

    return (
      <div className="first-section">
        <SEO isDynamic={false}
          title="Keep yourself updated with the latest news | Gojek Tech News"
          description="Read on to know more about the technological innovations and major business decisions made by Gojek for providing an unforgettable experience to their clients."
          url="https://gojek.io"
        />

        <Heading />

        <div className="d-flex flex-row flex-wrap pt-3 justify-content-center">
          <div className="col-lg-2 col-xl-1 pt-5 d-none d-lg-block ">
            <ul className="nav flex-column position-fixed text-center">
              <li className="nav-item">
                <a
                  className={`nav-link scroll font-weight-bold ${
                    selectedTab === 'all-stories-tab'
                      ? 'active btn btn-success'
                      : ''
                  }`}
                  onClick={() => {
                    this.setState({ selectedTab: 'all-stories-tab' })
                  }}
                >
                  All Media
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link scroll font-weight-bold ${
                    selectedTab === 'press-release-tab'
                      ? 'active btn btn-success'
                      : ''
                  }`}
                  onClick={() => {
                    this.setState({ selectedTab: 'press-release-tab' })
                  }}
                >
                  Press Release
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link scroll font-weight-bold ${
                    selectedTab === 'press-featuring-tab'
                      ? 'active btn btn-success'
                      : ''
                  }`}
                  onClick={() => {
                    this.setState({ selectedTab: 'press-featuring-tab' })
                  }}
                >
                  News Coverage
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 d-block d-lg-none">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item scroll">
                <a
                  className={`nav-link  roboto-bold text-uppercase ${
                    selectedTab === 'all-stories-tab'
                      ? 'active text-success'
                      : ''
                  }`}
                  id={`#all-stories-tab`}
                  data-toggle="tab"
                  onClick={() => {
                    this.setState({ selectedTab: 'all-stories-tab' })
                  }}
                  role="tab"
                  aria-controls={`all-stories-tab`}
                  aria-selected="true"
                >
                  All Media
                </a>
              </li>
              <li className="nav-item scroll">
                <a
                  className={`nav-link  roboto-bold text-uppercase ${
                    selectedTab === 'press-release-tab'
                      ? 'active text-success'
                      : ''
                  }`}
                  id={`#press-release-tab`}
                  data-toggle="tab"
                  onClick={() => {
                    this.setState({ selectedTab: 'press-release-tab' })
                  }}
                  role="tab"
                  aria-controls={`press-release-tab`}
                  aria-selected="true"
                >
                  Press Release
                </a>
              </li>
              <li className="nav-item scroll">
                <a
                  className={`nav-link  roboto-bold text-uppercase ${
                    selectedTab === 'press-featuring-tab'
                      ? 'active text-success'
                      : ''
                  }`}
                  id={`#press-featuring-tab`}
                  data-toggle="tab"
                  onClick={() => {
                    this.setState({ selectedTab: 'press-featuring-tab' })
                  }}
                  role="tab"
                  aria-controls={`press-featuring-tab`}
                  aria-selected="true"
                >
                  News Coverage
                </a>
              </li>
            </ul>
          </div>

          <div
            className="tab-content col-12 col-lg-10 col-xl-11 px-lg-0"
            id="myTabContent"
          >
            <div
              className={`tab-pane fade show ${
                selectedTab === 'all-stories-tab' ? 'active ' : ''
              }`}
              id={`all-stories-tab`}
              role="tabpanel"
              aria-labelledby={`all-stories-tab`}
            >
              <section className="roboto-regular">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 pt-4 description-font px-lg-0">
                      <LatestNews type="allMedia" />
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div
              className={`tab-pane fade show ${
                selectedTab === 'press-release-tab' ? 'active' : ''
              }`}
              id={`press-release-tab`}
              role="tabpanel"
              aria-labelledby={`press-release-tab`}
            >
              <section className="roboto-regular">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 row pt-4 description-font">
                      <ul className="">
                        <div className=" job-points">
                          <LatestNews type="pressRelease" />
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div
              className={`tab-pane fade show ${
                selectedTab === 'press-featuring-tab' ? 'active' : ''
              }`}
              id={`press-featuring-tab`}
              role="tabpanel"
              aria-labelledby={`press-featuring-tab`}
            >
              <section className="roboto-regular">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 row pt-4 description-font">
                      <ul className="">
                        <div className=" job-points">
                          <LatestNews type="newsCoverage" />
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        {/* <LatestNews /> */}
      </div>
    )
  }
}

export default News
