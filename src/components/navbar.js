import React from "react"

import NavGroup from "./navGroup"
import colors from "../config/colors"
import { categories, misc, account } from "../data/navbarData"

export default function Navbar() {
  return (
    <div style={styles.Container}>
      <NavGroup items={categories} chevron style={styles.Categories} />
      <NavGroup items={misc} style={styles.Misc} />
      <NavGroup items={account} style={styles.Account} />
    </div>
  )
}

const styles = {
  Container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    fontFamily: "Arial, sans-serif",
  },
  Categories: {
    color: colors.white,
    fontSize: 16,
    textDecoration: "none",
    fontWeight: 600,
    marginLeft: 15,
  },
  Misc: {
    color: colors.white,
    fontSize: 14,
    textDecoration: "none",
    fontWeight: 500,
    marginLeft: 15,
  },
  Account: {
    color: colors.white,
    fontSize: 14,
    textDecoration: "none",
    fontWeight: 500,
    marginLeft: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}
