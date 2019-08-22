/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import "../../_styles/style.scss"
import Footer from "./Common/footer"
import Header from "./Common/Header/index"
import headerData from "./Common/Header/data.json"
const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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
  `)

  const { siteMetadata: metaData } = data.site
  let menu = [
    {
      id: "1",
      name: "About us",
      link: "about",
      type: "link",
      src: "gomakeimpact",
    },
    {
      id: "2",
      name: "GO-TROOPS",
      link: "goTroops",
      type: "link",
      src: "gomakeimpact",
    },
    {
      id: "3",
      name: "CAREERS",
      link: "jobs",
      type: "link",
      src: "gomakeimpact",
    },
  ]

  let superAppMenu = [
    {
      id: "1",
      name: "Super Home",
      link: "home",
      type: "link",
      src: "superapp",
    },
    {
      id: "2",
      name: "Super App",
      link: "super-app",
      type: "link",
      src: "superapp",
    },
    {
      id: "3",
      name: "Super Facts",
      link: "super-facts",
      type: "link",
      src: "superapp",
    },
    {
      id: "4",
      name: "Super Blog",
      link: "super-blog",
      type: "link",
      src: "superapp",
    },
    {
      id: "5",
      name: "Super Jobs",
      link: "super-jobs",
      type: "link",
      src: "superapp",
    },
  ]

  // new Requirement - Show header footer for all the pages
  const showHeaderFooter = true
  return (
    <div>
      <Helmet>
        <title>GOJEK</title>
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta name="description" content={metaData.description} />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={metaData.twitter} />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:image" content={metaData.siteImage} />

        {/* og meta tags */}
        <meta property="og:title" content={metaData.title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaData.siteUrl} />
        <meta property="og:image" content={metaData.siteImage} />
        <meta property="og:description" content={metaData.description} />
        <link
          rel="shortcut icon"
          href="/../images/favicon.ico"
          type="image/x-icon "
        />
        <link rel="icon" href="/../images/favicon.ico" type="image/x-icon" />
      </Helmet>
      {location.pathname !== "/gomakeimpact/" &&
        location.pathname !== "/superapp/" && (
          <Header
            siteTitle={metaData.title}
            data={headerData}
            currentPage={location.pathname}
          />
        )}
      {location.pathname === "/gomakeimpact/" && (
        <Header
          siteTitle={metaData.title}
          data={menu}
          currentPage={location.pathname}
        />
      )}
      {location.pathname === "/superapp/" && (
        <Header
          siteTitle={metaData.title}
          data={superAppMenu}
          currentPage={location.pathname}
        />
      )}
      <div>{children}</div>

      {showHeaderFooter && <Footer />}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
