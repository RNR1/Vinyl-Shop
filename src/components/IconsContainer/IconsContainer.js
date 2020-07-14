import React from 'react'
import PropTypes from 'prop-types'

import classes from './IconsContainer.module.css'

export default function IconsContainer({ icons = [] }) {
  return (
    <div className={classes.Container}>
      {icons.map((Icon, i) => (
        <Icon key={i.toString()} />
      ))}
    </div>
  )
}

IconsContainer.propTypes = {
  icons: PropTypes.array.isRequired,
}
