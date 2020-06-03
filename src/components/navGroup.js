import React from "react"
import NavItem from "./navItem"

export default function NavGroup({
  items,
  title,
  Item = NavItem,
  direction = "row",
  ...props
}) {
  return (
    <>
      <div style={styles.Container(direction)}>
        {title && <h5 style={styles.Title}>{title}</h5>}
        {items.map(i => (
          <Item
            key={i.label}
            icon={i.icon}
            to={i.to}
            label={i.label}
            status={i.status}
            {...props}
          />
        ))}
      </div>
    </>
  )
}

const styles = {
  Container: direction => {
    return { display: "flex", flexDirection: direction }
  },
  Title: {
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    fontWeight: 600,
    fontSize: "1.05rem",
  },
}
