import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Bootstrap from 'bootstrap'

import Header from '../components/Common/Header/index'
import Footer from '../components/Common/footer'
import data from '../components/Common/Header/data.json'

import './style.scss'
import SEO from '../components/seo'

class Layout extends Component {
  render() {
    const { siteMetadata: metaData } = this.props.data.site
    const { location, children } = this.props
    const slug = location.pathname.split('/careers/')
    // Gomake impact header
    let menu = [
      {
        id: '1',
        name: 'About us',
        link: 'about',
        type: 'link',
        src: 'gomakeimpact',
      },
      {
        id: '2',
        name: 'GoTroops',
        link: 'goTroops',
        type: 'link',
        src: 'gomakeimpact',
      },
      {
        id: '3',
        name: 'CAREERS',
        link: 'jobs',
        type: 'link',
        src: 'gomakeimpact',
      },
    ]

    let superAppMenu = [
      {
        id: '1',
        name: 'Super Home',
        link: 'home',
        type: 'link',
        src: 'superapp',
      },
      {
        id: '2',
        name: 'Super App',
        link: 'super-app',
        type: 'link',
        src: 'superapp',
      },
      {
        id: '3',
        name: 'Super Facts',
        link: 'super-facts',
        type: 'link',
        src: 'superapp',
      },
      {
        id: '4',
        name: 'Super Blog',
        link: 'super-blog',
        type: 'link',
        src: 'superapp',
      },
      {
        id: '5',
        name: 'Super Jobs',
        link: 'super-jobs',
        type: 'link',
        src: 'superapp',
      },
    ]

    // initial requirement - Do not show header and footer for Job description page
    // const showHeaderFooter = slug[1] !== undefined && slug[1] !== "" ? false : true;

    // new Requirement - Show header footer for all the pages
    const showHeaderFooter = true
    return (
      <div>
        <SEO isDynamic={false}
          description="Gojek is a Super App. It’s one app for ordering food, commuting, digital payments, shopping, hyper-local delivery, getting a massage and two dozen services. It is Indonesia’s first and fastest growing unicorn building an on-demand empire."
          title="Gojek Tech"
          url="https://gojek.io"
        />

        {location.pathname !== '/gomakeimpact/' &&
          location.pathname !== '/superapp/' && (
            <Header
              siteTitle={metaData.title}
              data={data}
              currentPage={location.pathname}
            />
          )}
        {location.pathname === '/gomakeimpact/' && (
          <Header
            siteTitle={metaData.title}
            data={menu}
            currentPage={location.pathname}
          />
        )}
        {location.pathname === '/superapp/' && (
          <Header
            siteTitle={metaData.title}
            data={superAppMenu}
            currentPage={location.pathname}
          />
        )}

        <div>{children()}</div>
        {showHeaderFooter && <Footer />}
      </div>
    )
  }
}
Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery3 {
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
