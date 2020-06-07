import React from "react"

import NavItem from "./navItem"
import classes from "./navGroup.module.css"

export default function NavGroup({
  title,
  items,
  Item = NavItem,
  direction = "row",
  ...props
}) {
  return (
    <div style={Container(direction)}>
      {title && <h5 className={classes.Title}>{title}</h5>}
      {items.map(i => (
        <Item
          key={i.label}
          icon={i.icon}
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

const Container = direction => {
  return { display: "flex", flexDirection: direction }
}
