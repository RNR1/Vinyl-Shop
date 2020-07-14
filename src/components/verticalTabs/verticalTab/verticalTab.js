import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './verticalTab.module.css'

const classNames = [classes.VerticalTab]

export default function VerticalTab({
  label,
  color = '#000',
  className,
  caret = false,
}) {
  if (className) classNames.push(className)
  return (
    <div
      className={classNames}
      style={{
        background: color,
      }}
    >
      <span className={classes.Label}>
        <strong>juno</strong>
        {label}
      </span>
      {caret && (
        <span className={classes.Caret}>
          <FontAwesomeIcon icon="caret-down" color="white" size="xs" />
        </span>
      )}
    </div>
  )
}

VerticalTab.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.object,
  color: PropTypes.string,
  caret: PropTypes.bool,
}
