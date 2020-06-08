import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import StatusIndicator from "../statusIndicator"
import colors from "../../config/colors"
import FlagIcon from "../flagIcon"

export default function NavItem({
  icon,
  iso,
  color,
  label,
  chevron,
  status,
  ...linkProps
}) {
  return (
    <Link {...linkProps}>
      {iso && <FlagIcon iso={iso} />}
      {icon && (
        <FontAwesomeIcon icon={icon} color={color} style={{ marginRight: 5 }} />
      )}
      {label} {chevron && <FontAwesomeIcon icon={faCaretDown} />}
      {status && <StatusIndicator color={colors.green} />}
    </Link>
  )
}
