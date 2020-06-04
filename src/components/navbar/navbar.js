import React from "react"

import NavGroup from "../navGroup/navGroup"
import { categories, misc, account } from "../../data/navbarData"
import classes from "./navbar.module.css"

export default function Navbar() {
  return (
    <div className={classes.Container}>
      <NavGroup items={categories} chevron className={classes.Categories} />
      <NavGroup items={misc} className={classes.Misc} />
      <NavGroup items={account} className={classes.Account} />
    </div>
  )
}
