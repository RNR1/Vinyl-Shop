import React from 'react'
import PropTypes from 'prop-types'

/** @flow */
/**
 * A simple circle used for indicating user/account status.
 * @name StatusIndicator
 * @param {string} status
 * @example
 *  <StatusIndicator status="online" />
 */
export default function StatusIndicator({ status }) {
  let backgroundColor
  switch (status) {
    case 'online':
      backgroundColor = '#91D01F'
      break
    case 'n/a':
      backgroundColor = '#e89108'
      break
    case 'offline':
      backgroundColor = '#e74c3c'
      break
  }
  return (
    <span>
      <div
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          marginLeft: 5,
          backgroundColor,
        }}
      />
    </span>
  )
}

StatusIndicator.propTypes = {
  status: PropTypes.oneOf(['online', 'n/a', 'offline']),
}
