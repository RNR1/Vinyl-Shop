import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'

import Navbar from '../navbar/navbar'
import Logo from '../logo'
import SearchBar from '../searchbar/searchbar'
import classes from './header.module.css'
import { searchTypes } from '../../data/searchTypes'
import useCurrentWidth from '../../utils/useCurrentWidth'
import HamburgerIcon from '../hamburgerIcon/hamburgerIcon'

export default function Header({ siteTitle, banner }) {
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
              <SearchBar siteTitle={siteTitle} searchFilters={searchTypes} />
            )}
            <div className={classes.Banner}>
              <Img fixed={banner} alt={siteTitle} />
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

Header.propTypes = {
  siteTitle: PropTypes.string,
  banner: PropTypes.object,
}

Header.defaultProps = {
  siteTitle: 'Vinyl-Shop',
}
