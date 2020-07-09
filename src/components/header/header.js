import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'

import Navbar from '../navbar/navbar'
import Logo from '../logo'
import SearchBar from '../searchbar/searchbar'
import classes from './header.module.css'
import { searchTypes } from '../../data/searchTypes'
import useCurrentWidth from '../../utils/useCurrentWidth'

export default function Header({ siteTitle, banner }) {
  const width = useCurrentWidth()
  return (
    <header className={classes.Header}>
      <div className={classes.HeaderRow}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <div className={classes.SearchStack}>
          <SearchBar siteTitle={siteTitle} searchFilters={searchTypes} />
          <div className={classes.Banner}>
            <Img fixed={banner} alt={siteTitle} />
          </div>
          {width < 1024 && <Navbar />}
        </div>
      </div>
      {width >= 1024 && (
        <div className={classes.HeaderRow}>
          <Navbar />
        </div>
      )}
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
