import React from 'react'

import classes from './secureStatement.module.css'
import SecureIcon from './secureIcon/secureIcon'

export default function SecureStatement() {
  return (
    <h5 className={classes.SecureStatement}>
      <SecureIcon /> 100% Secure Shopping
    </h5>
  )
}
