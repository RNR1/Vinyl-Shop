/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header/header'
import Footer from './footer/footer'
import './layout.css'

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      banner: file(relativePath: { eq: "banner.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div style={styles.Container}>
      <Header
        siteTitle={data.site.siteMetadata.title}
        banner={data.banner.childImageSharp.fixed}
      />
      <div style={styles.Main}>
        <main>{children}</main>
      </div>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </div>
  )
}

const styles = {
  Container: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  Main: {
    margin: '0 auto',
    maxWidth: 1320,
    padding: '0 1.0875rem 1.45rem',
    flex: 1,
  },
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
