import React from 'react'
import PropTypes from 'prop-types'

import NavGroup from '../navGroup/navGroup'
import { categories, misc, search, account } from '../../data/navbarData'
import classes from './navbar.module.css'

export default function Navbar({ addSearch = false, removeWishlist = false }) {
  let accountGroup = [...account]
  if (addSearch) accountGroup = [{ ...search }, ...account]
  if (removeWishlist)
    accountGroup = [
      { ...search },
      ...account.filter(i => i.label !== 'Wishlist'),
    ]
  return (
    <div className={classes.Container}>
      <NavGroup items={categories} chevron className={classes.Categories} />
      <NavGroup items={misc} className={classes.Misc} />
      <NavGroup
        items={accountGroup}
        className={classes.Account}
        responsiveItems
      />
    </div>
  )
}

Navbar.propTypes = {
  addSearch: PropTypes.bool,
  removeWishlist: PropTypes.bool,
}
