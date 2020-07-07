import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function DropdownItem({ item, selected, ...props }) {
  return (
    <li {...props}>
      <span>{item.label}</span>
      {selected && (
        <span>
          <FontAwesomeIcon icon={faCheck} />
        </span>
      )}
    </li>
  )
}

DropdownItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  selected: PropTypes.bool,
}
