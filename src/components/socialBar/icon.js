import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Icon({
  item: { icon, iconColor, to },
  color = '#fff',
  className,
  ...props
}) {
  return (
    <a href={to} className={className}>
      <FontAwesomeIcon icon={icon} color={iconColor || color} {...props} />
    </a>
  )
}

Icon.propTypes = {
  color: PropTypes.string,
  item: PropTypes.shape({
    icon: PropTypes.object,
    iconColor: PropTypes.string,
    to: PropTypes.string,
  }),
  className: PropTypes.string,
}

export default Icon
