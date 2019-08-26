/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

function SEO({ description, title, url }) {
  return (
    <React.Fragment>
      <Helmet
        title={title}
        meta={[
          {
            name: `description`,
            content: description,
          },
          {
            name: `twitter:card`,
            content: description,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: 'twitter:site',
            content: '@gojektech',
          },
          {
            name: 'twitter:image',
            content: 'https://www.gojek.io/images/Go-Jek.png',
          },
          {
            name: `twitter:description`,
            content: description,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: 'og:url',
            content: { url },
          },
          {
            property: 'og:image',
            content: 'https://www.gojek.io/images/Go-Jek.png',
          },
          {
            property: `og:description`,
            content: description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
        ]}
      />
      <link rel="icon" href="./../images/favicon.png" type="image/x-icon" />
    </React.Fragment>
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SEO
