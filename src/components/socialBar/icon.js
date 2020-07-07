import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Icon({ icon, to, color = '#fff', className, ...props }) {
  return (
    <a href={to} className={className}>
      <FontAwesomeIcon
        icon={icon}
        color={props.iconColor || color}
        {...props}
      />
    </a>
  )
}

Icon.propTypes = {
  icon: PropTypes.object,
  to: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  iconColor: PropTypes.string,
}

export default Icon
