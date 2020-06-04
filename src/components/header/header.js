import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

import Navbar from "../navbar/navbar"
import Logo from "../logo"
import SearchBar from "../searchbar/searchbar"
import classes from "./header.module.css"

export default function Header({ siteTitle, banner }) {
  return (
    <header className={classes.Header}>
      <div className={classes.HeaderRow}>
        <Logo />
        <div className={classes.SearchStack}>
          <SearchBar />
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
}

Header.defaultProps = {
  siteTitle: `Vinyl-Shop`,
}
