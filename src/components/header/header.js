import React from 'react'
import Img from 'gatsby-image'

import Navbar from '../navbar/navbar'
import Logo from '../logo'
import SearchBar from '../searchbar/searchbar'
import classes from './header.module.css'
import useCurrentWidth from '../../utils/useCurrentWidth'
import HamburgerIcon from '../hamburgerIcon/hamburgerIcon'
import { useStaticQuery, graphql } from 'gatsby'

export default function Header() {
  const {
    site: {
      siteMetadata: {
        title,
        headerData: { searchTypes },
      },
    },
    banner,
  } = useStaticQuery(query)
  const width = useCurrentWidth()
  const smallScreen = width < 575
  const midScreen = width >= 768
  const largeScreen = width >= 1024
  return (
    <header className={classes.Header}>
      <div className={classes.Container}>
        <div className={classes.HeaderRow}>
          <div className={classes.LogoStack}>
            {!largeScreen && <HamburgerIcon />}
            <Logo />
          </div>
          <div className={classes.SearchStack}>
            {midScreen && (
              <SearchBar siteTitle={title} searchFilters={searchTypes} />
            )}
            <div className={classes.Banner}>
              <Img fixed={banner.childImageSharp.fixed} alt={title} />
            </div>
            {!largeScreen && (
              <Navbar addSearch={!midScreen} removeWishlist={smallScreen} />
            )}
          </div>
        </div>
        {largeScreen && (
          <div className={classes.HeaderRow}>
            <Navbar />
          </div>
        )}
      </div>
    </header>
  )
}

const query = graphql`
  {
    site {
      siteMetadata {
        headerData {
          searchTypes {
            id
            label
            value
          }
        }
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
`
