import React from 'react'
import PropTypes from 'prop-types'

import NavGroup from '../navGroup/navGroup'
import classes from './navbar.module.css'
import { useStaticQuery, graphql } from 'gatsby'

export default function Navbar({ addSearch = false, removeWishlist = false }) {
  const {
    site: {
      siteMetadata: {
        headerData: {
          navbarData: { categories, misc, search, account },
        },
      },
    },
  } = useStaticQuery(query)

  let accountGroup = []
  accountGroup = [...account]
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
  data: PropTypes.object,
  addSearch: PropTypes.bool,
  removeWishlist: PropTypes.bool,
}

const query = graphql`
  {
    site {
      siteMetadata {
        headerData {
          navbarData {
            account {
              icon
              iconColor
              label
              status
              to
            }
            categories {
              label
              short
              to
            }
            misc {
              icon
              iso
              label
              to
            }
            search {
              icon
              label
            }
          }
        }
      }
    }
  }
`
