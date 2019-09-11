import React, { Component } from 'react'
import Parser from 'html-react-parser'
import { Helmet } from 'react-helmet'
import { getShareButton } from '../components/Careers/PositionCard/positionCard.jsx'
import SEO from '../components/seo.js'

class Description extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   categoryId: '1',
    //   openPositionId: 'null',
    // }
  }

  render() {
    const { job } = this.props

    const { siteMetadata: metaData } = this.props.data.site
    return (
      <div className="py-5 my-5 py-md-2 my-md-0">
        {job !== undefined && (
          <SEO
            isDynamic={true}
            title={`Gojek Careers: ${job.text}`}
            description={`${job.descriptionPlain}`}
            url="https://gojek.io"
          />
        )}

        {<div className="pt-5 d-md-none">{getShareButton(job)}</div>}
        <p className="  roboto-bold text-black font-sm">Overview</p>
        {job !== undefined && (
          <div className=" description-font text-dark col-12 pl-1">
            {Parser(job.description)}
          </div>
        )}
        {job !== undefined && (
          <React.Fragment>
            {job.lists[0] !== undefined && (
              <React.Fragment>
                <p className="pt-3 roboto-bold text-black font-sm">
                  Responsibilities
                </p>
                <div className=" description-font text-dark col-12 pl-0">
                  <ul className="pl-3">
                    <div className=" job-points">
                      {Parser(job.lists[0].content)}
                    </div>
                  </ul>
                </div>
              </React.Fragment>
            )}
            {job.lists[0] !== undefined && (
              <React.Fragment>
                <p className="pt-3 roboto-bold text-black font-sm">
                  Experience
                </p>
                <div className=" description-font text-dark col-12 pl-0 pb-5 pb-md-0">
                  <ul className="pl-3">
                    <div className=" job-points">
                      {Parser(job.lists[1].content)}
                    </div>
                  </ul>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default Description

export const query = graphql`
  query SiteTitleQuery1 {
    site {
      siteMetadata {
        title
        description
        siteUrl
        siteImage
        twitter
      }
    }
  }
`
