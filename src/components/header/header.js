import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'

import Navbar from '../navbar/navbar'
import Logo from '../logo'
import SearchBar from '../searchbar/searchbar'
import classes from './header.module.css'
import { searchTypes } from '../../data/searchTypes'

export default function Header({ siteTitle, banner }) {
  return (
    <header className={classes.Header}>
      <div className={classes.HeaderRow}>
        <Logo />
        <div className={classes.SearchStack}>
          <SearchBar siteTitle={siteTitle} searchFilters={searchTypes} />
          <Img fixed={banner} alt={siteTitle} className={classes.Banner} />
        </div>
      </div>
      <div className={classes.HeaderRow}>
        <Navbar />
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
