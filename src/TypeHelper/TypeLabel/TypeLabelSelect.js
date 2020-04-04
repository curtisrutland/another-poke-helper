import React, { useState } from 'react'
import { types } from '../../lib/types'
import TypeLabel from './TypeLabel'
import TypeLabelButton from './TypeLabelButton'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

const useStyles = makeStyles(theme => ({
  root: {
    marginRight: theme.spacing(1),
    display: 'inline-block'
  },
}))

export default function TypeLabelSelect({
  type,
  onChange,
  label,
  disabledType = null,
}) {
  const classes = useStyles()
  const [anchor, setAnchor] = useState(null)
  const typesToDisplay = types.filter(t => t.name !== disabledType?.name)

  function handleClick(event) {
    setAnchor(event.currentTarget)
  }

  function handleMenuItemClick(type) {
    return function() {
      onChange(type)
      setAnchor(null)
    }
  }

  function handleClose() {
    setAnchor(null)
  }

  return (
    <div className={classes.root}>
      <TypeLabelButton type={type} label={label} onClick={handleClick} />
      <Menu
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        <MenuItem key={-1} onClick={handleMenuItemClick(null)}>
          Clear
        </MenuItem>
        {typesToDisplay.map(t => (
          <MenuItem
            key={t.name}
            selected={t.name === type?.name}
            onClick={handleMenuItemClick(t)}
          >
            <TypeLabel type={t} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
