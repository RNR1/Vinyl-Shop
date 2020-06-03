import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import React from "react"

export default function logo() {
  return (
    <Link to="/">
      <StaticQuery
        query={query}
        render={data => (
          <Img
            fixed={data.logo.childImageSharp.fixed}
            alt={data.site.siteMetadata.title}
          />
        )}
      />
    </Link>
  )
}

const query = graphql`
  query titleAndLogo {
    site {
      siteMetadata {
        title
      }
    }
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
