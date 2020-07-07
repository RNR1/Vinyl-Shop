import React, { useState } from 'react'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import classes from './dropdown.module.css'
import DropdownItem from './dropdownItem'

function Dropdown({ label = 'Select', items = [], multiSelect = false }) {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState([])
  const toggle = () => setOpen(!open)
  Dropdown.handleClickOutside = () => setOpen(false)

  const onClick = item => {
    if (isItemInSelection(item))
      return setSelection(selection.filter(current => current.id !== item.id))

    if (multiSelect) return setSelection([...selection, item])

    setSelection([item])
    toggle()
  }

  const isItemInSelection = item => {
    return selection.some(current => current.id === item.id)
  }

  const currentSelection = () => {
    if (multiSelect) return label
    if (selection.length) return selection[0].label
    return (items[0] && items[0].label) || label
  }

  return (
    <div>
      <div
        className={classes.Dropdown}
        tabIndex={0}
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        {currentSelection()}
        <FontAwesomeIcon icon={faCaretDown} size="sm" style={caretStyle} />
      </div>
      {open && (
        <ul className={classes.List}>
          {items.map(item => (
            <DropdownItem
              key={item.id}
              className={classes.Item}
              item={item}
              selected={multiSelect && isItemInSelection(item)}
              onClick={() => onClick(item)}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

const caretStyle = {
  position: 'relative',
  top: -4,
  marginLeft: 4,
}

Dropdown.propTypes = {
  label: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  multiSelect: PropTypes.bool,
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
}

export default onClickOutside(Dropdown, clickOutsideConfig)
