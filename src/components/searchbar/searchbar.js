import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dropdown from '../dropdown/dropdown.js'
import classes from './searchbar.module.css'

export default function SearchBar({ siteTitle = '', searchFilters = [] }) {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div className={classes.Container}>
      <Dropdown items={searchFilters} />
      <input
        type="text"
        placeholder={`Search ${siteTitle}...`}
        aria-label="search"
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
        className={classes.Input}
      />
      <div className={classes.Button}>
        <FontAwesomeIcon icon={faSearch} style={styles.SearchIcon} />
      </div>
    </div>
  )
}

const styles = {
  SearchIcon: { fontSize: 12, color: '#fff' },
}

SearchBar.propTypes = {
  siteTitle: PropTypes.string,
  searchFilters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
}
