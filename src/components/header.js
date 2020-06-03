import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

import Navbar from "./navbar"
import Logo from "./logo"
import SearchBar from "./searchbar"

export default function Header({ siteTitle, banner }) {
  return (
    <header style={styles.Header}>
      <div style={styles.HeaderRow}>
        <Logo />
        <div style={styles.SearchStack}>
          <SearchBar />
          <Img fixed={banner} alt={siteTitle} style={styles.Banner} />
        </div>
      </div>
      <div style={styles.HeaderRow}>
        <Navbar />
      </div>
    </header>
  )
}

const styles = {
  Header: {
    background: `#2c495b`,
    padding: 10,
  },
  HeaderRow: {
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-around`,
    alignItems: `center`,
  },
  SearchStack: { display: "flex" },
  Banner: { marginLeft: 14 },
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Vinyl-Shop`,
}
