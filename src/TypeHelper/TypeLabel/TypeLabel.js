import React from 'react'
import { getStyleForType } from '../../lib/types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    width: 75,
    boxShadow: theme.shadows[3],
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    textAlign: 'center',
    display: 'inline-block',
  },
  text: {
    fontSize: '.8rem',
  },
}))

export default function TypeLabel({ type, disabled }) {
  const classes = useStyles()
  const style = getStyleForType(type.name, disabled)
  return (
    <div className={classes.root} style={style}>
      <Typography className={classes.text}>{type.name}</Typography>
    </div>
  )
}
