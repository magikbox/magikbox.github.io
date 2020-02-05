/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
import { Helmet } from 'react-helmet'
// import { Helmet, HelmetProvider } from 'react-helmet-async'

function SEO({ description, title, url, isDynamic }) {
  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
        <meta
          data-react-helmet={isDynamic}
          content="yes"
          name="apple-mobile-web-app-capable"
        />
        <meta
          data-react-helmet={isDynamic}
          property={`description`}
          content={title}
        />
        <meta
          data-react-helmet={isDynamic}
          property="twitter:title"
          content={title}
        />
        <meta
          data-react-helmet={isDynamic}
          property={`twitter:card`}
          content={title}
        />
        <meta
          data-react-helmet={isDynamic}
          property={`twitter:site`}
          content="@gojektech"
        />
        <meta
          data-react-helmet={isDynamic}
          property={`twitter:image`}
          content="https://www.gojek.io/images/LinkImage.jpg"
        />
        <meta
          data-react-helmet={isDynamic}
          property="twitter:description"
          content={description}
        />
        <meta
          data-react-helmet={isDynamic}
          property="og:title"
          content={title}
        />
        <meta data-react-helmet={isDynamic} property="og:url" content={url} />
        <meta
          data-react-helmet={isDynamic}
          property="og:image"
          content="https://www.gojek.io/images/LinkImage.jpg"
        />
        <meta
          data-react-helmet={isDynamic}
          property="og:description"
          content={description}
        />
        <meta
          data-react-helmet={isDynamic}
          property="og:type"
          content={'website'}
        />
        <link
          rel="shortcut icon"
          href="/../images/favicon.png"
          type="image/x-icon "
        />
        <link rel="icon" href="./../images/favicon.png" type="image/x-icon" />
      </Helmet>
    </React.Fragment>
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SEO
