import React from "react"

export default function FlagIcon({ iso = "gb" }) {
  return (
    <span
      className={`flag-icon flag-icon-${iso}`}
      style={{ marginRight: 5, zIndex: -1 }}
    ></span>
  )
}
