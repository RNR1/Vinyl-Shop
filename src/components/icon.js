import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import colors from "../config/colors"

function Icon({ icon, to, color = colors.white, className, ...props }) {
  return (
    <a href={to} className={className}>
      <FontAwesomeIcon icon={icon} color={color} {...props} />
    </a>
  )
}

export default Icon
