import React from 'react'
import PropTypes from 'prop-types'

import NavItem from './navItem'
import classes from './navGroup.module.css'

/** @flow */
/**
 * A flexible navigation group component which accepts a group of items and displays them accordingly
 * @name NavGroup
 * @param {string} title
 * @param {[]} items
 * @param {ReactElement} Item
 * @param {string} direction
 * @param {bool} responsiveItems
 * @example
 *  <NavGroup items={[{ label: "Music", short: "Music", to: "/" }]} chevron className={classes.Categories} />
 */
export default function NavGroup({
  title,
  items = [],
  Item = NavItem,
  direction = 'row',
  responsiveItems,
  ...props
}) {
  return (
    <div style={Container(direction)}>
      {title && <h5 className={classes.Title}>{title}</h5>}
      {items &&
        items.map(item => (
          <Item
            key={item.label}
            item={item}
            responsive={Item === NavItem ? responsiveItems : null}
            {...props}
          />
        ))}
    </div>
  )
}

NavGroup.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array.isRequired,
  Item: PropTypes.func,
  direction: PropTypes.oneOf(['row', 'column']),
  responsiveItems: PropTypes.bool,
}

const Container = direction => {
  return { display: 'flex', flexDirection: direction }
}
