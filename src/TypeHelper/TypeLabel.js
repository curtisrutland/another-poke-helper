import React from 'react'
import { getStyleForType } from '../lib/types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    width: 75,
    boxShadow: theme.shadows[3],
    borderRadius: theme.spacing(.5),
    padding: theme.spacing(.75),
    textAlign: 'center'
  },
  text: {
    fontSize: '.8rem'
  }
}))

export default function TypeLabel({ type }) {
  const classes = useStyles()
  const style = getStyleForType(type.name)
  return (
    <div className={classes.root} style={style}>
      <Typography className={classes.text}>{type.name}</Typography>
    </div>
  )
}
