import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import StatusIndicator from "../statusIndicator"
import colors from "../../config/colors"

export default function NavItem({
  icon,
  color,
  label,
  chevron,
  status,
  ...linkProps
}) {
  return (
    <Link {...linkProps}>
      {icon && (
        <FontAwesomeIcon icon={icon} color={color} style={{ marginRight: 5 }} />
      )}
      {label} {chevron && <FontAwesomeIcon icon={faCaretDown} />}
      {status && <StatusIndicator color={colors.green} />}
    </Link>
  )
}
