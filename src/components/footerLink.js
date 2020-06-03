import React from "react"
import { Link } from "gatsby"

export default function FooterLink({ to, label, style, activeStyle }) {
  return (
    <Link to={to} style={style} activeStyle={activeStyle}>
      {label}
    </Link>
  )
}
