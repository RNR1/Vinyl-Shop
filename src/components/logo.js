import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export default function Logo() {
  const {
    logo,
    site: {
      siteMetadata: { title: alt },
    },
  } = useStaticQuery(query)

  return (
    <Link to="/" style={styles.Logo}>
      <Img fixed={logo.childImageSharp.fixed} alt={alt} />
    </Link>
  )
}

const styles = {
  Logo: {
    userSelect: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
        fixed(height: 29) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
