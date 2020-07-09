import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import StatusIndicator from '../statusIndicator/statusIndicator'
import FlagIcon from '@bit/ronbraha.codebyron.flag-icon.flag-icon'
import useCurrentWidth from '../../utils/useCurrentWidth'

export default function NavItem({
  chevron,
  item: { icon, iconColor, iso, label, status, short },
  responsive,
  ...linkProps
}) {
  let width = useCurrentWidth()
  const largeScreen = width >= 1024 || !responsive

  return (
    <a {...linkProps}>
      {iso && <FlagIcon iso={iso} />}
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          color={iconColor}
          size={largeScreen ? 'sm' : 'lg'}
          style={{ marginRight: 5 }}
        />
      )}
      <span>
        {largeScreen ? label : short}
        {chevron && <FontAwesomeIcon icon={faCaretDown} />}
      </span>
      {status && <StatusIndicator status={status} />}
    </a>
  )
}

NavItem.propTypes = {
  chevron: PropTypes.bool,
  item: PropTypes.shape({
    icon: PropTypes.object,
    iconColor: PropTypes.string,
    iso: PropTypes.string,
    label: PropTypes.string,
    status: PropTypes.string,
    short: PropTypes.string,
  }),
  responsive: PropTypes.bool,
}
