import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dropdown from '../dropdown/dropdown.js'
import classes from './searchbar.module.css'

/** @flow */
/**
 * Search bar with a build-in filters dropdown.
 * @name Searchbar
 * @param {string} siteTitle
 * @param {[]} searchFilters
 * @param {bool} multiSelect
 * @param {string} filtersLabel
 * @example
 *  <Searchbar siteTitle="My App" searchFilters={[{ id: 'all', value: 'all', label: 'All' }]} />
 */

export default function SearchBar({
  siteTitle = '',
  searchFilters = [],
  multiSelect = false,
  filtersLabel = 'Filters',
}) {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div className={classes.Container}>
      <Dropdown
        label={filtersLabel}
        items={searchFilters}
        multiSelect={multiSelect}
      />
      <input
        type="text"
        placeholder={`Search ${siteTitle}...`}
        aria-label="search"
        value={searchValue}
        onChange={({ target: { value } }) => setSearchValue(value)}
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
  multiSelect: PropTypes.bool,
  filtersLabel: PropTypes.string,
}
