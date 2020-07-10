import React from 'react'
import PropTypes from 'prop-types'

import 'flag-icon-css/css/flag-icon.css'
/** @flow */
/**
 * A flag icon component based on ISO codes, add the correct "iso" prop and get the country flag icon.
 * @name FlagIcon
 * @param {string} iso
 * @returns {ReactElement} Icon component representing the ISO-country flag
 * @example
 *  <FlagIcon iso="gb" />
 */
export default function FlagIcon({ iso }) {
  return (
    <span
      className={`flag-icon flag-icon-${iso}`}
      style={{ marginRight: 5, zIndex: -1 }}
    ></span>
  )
}

FlagIcon.propTypes = {
  iso: PropTypes.string.isRequired,
}
