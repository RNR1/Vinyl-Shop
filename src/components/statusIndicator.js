import React from 'react'
import PropTypes from 'prop-types'

export default function StatusIndicator({ status }) {
  let color
  switch (status) {
    case 'online':
      color = '#91D01F'
      break
    case 'n/a':
      color = '#e89108'
      break
    case 'offline':
      color = '#e74c3c'
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
          backgroundColor: color,
        }}
      />
    </span>
  )
}

StatusIndicator.propTypes = {
  status: PropTypes.string.isRequired,
}
