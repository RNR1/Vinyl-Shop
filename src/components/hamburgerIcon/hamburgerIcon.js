import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './hamburgerIcon.module.css'
import PropTypes from 'prop-types'

export default function HamburgerIcon({ onClick }) {
  return (
    <div className={classes.HamburgerIcon} onClick={onClick}>
      <FontAwesomeIcon icon="bars" size="lg" />
    </div>
  )
}

HamburgerIcon.propTypes = {
  onClick: PropTypes.func,
}
