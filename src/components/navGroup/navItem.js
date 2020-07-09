import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import StatusIndicator from '../statusIndicator/statusIndicator'
import FlagIcon from '@bit/ronbraha.codebyron.flag-icon.flag-icon'
import useCurrentWidth from '../../utils/useCurrentWidth'

export default function NavItem({
  icon,
  iso,
  color,
  label,
  chevron,
  status,
  responsive,
  ...linkProps
}) {
  let width = useCurrentWidth()
  const largeScreenMode = width >= 1024 || !responsive
  return (
    <a {...linkProps}>
      {iso && <FlagIcon iso={iso} />}
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          color={color}
          size={largeScreenMode ? 'sm' : 'lg'}
          style={{ marginRight: 5 }}
        />
      )}
      <span>
        {largeScreenMode && label}{' '}
        {chevron && <FontAwesomeIcon icon={faCaretDown} />}
      </span>
      {status && <StatusIndicator status={status} />}
    </a>
  )
}

NavItem.propTypes = {
  icon: PropTypes.object,
  iso: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
  chevron: PropTypes.bool,
  status: PropTypes.string,
  responsive: PropTypes.bool,
}
