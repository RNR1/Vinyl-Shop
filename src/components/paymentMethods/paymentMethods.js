import React from 'react'
import PropTypes from 'prop-types'

import classes from './paymentMethods.module.css'
import paymentIcons from './paymentIcons'

export default function PaymentMethods({ icons = paymentIcons }) {
  return (
    <div className={classes.PaymentMethods}>
      {icons.map((Icon, i) => (
        <Icon key={i.toString()} />
      ))}
    </div>
  )
}

PaymentMethods.propTypes = {
  icons: PropTypes.array,
}
