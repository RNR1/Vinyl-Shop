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
 * @example
 *  <NavGroup items={[{ label: "Music", short: "Music", to: "/" }]} chevron className={classes.Categories} />
 */
export default function NavGroup({
  title,
  items,
  Item = NavItem,
  direction = 'row',
  ...props
}) {
  return (
    <div style={Container(direction)}>
      {title && <h5 className={classes.Title}>{title}</h5>}
      {items &&
        items.map(i => (
          <Item
            key={i.label}
            icon={i.icon}
            iso={i.iso}
            color={i.iconColor}
            to={i.to}
            label={i.label}
            status={i.status}
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
}

const Container = direction => {
  return { display: 'flex', flexDirection: direction }
}
