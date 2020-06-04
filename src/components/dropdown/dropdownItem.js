import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export default function DropdownItem({ item, selected, ...props }) {
  return (
    <li {...props}>
      {item.label}
      {selected && <FontAwesomeIcon icon={faCheck} />}
    </li>
  )
}
