import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TitleBar from './TitleBar'

const useStyles = makeStyles(theme => ({
  root: {
    width: '96%',
    paddingTop: 5,
    margin: '0 auto',
    display: 'flex',
    flexFlow: 'column',
    maxWidth: 800
  },
}))

export default function AppContainer({ children }) {
  const classes = useStyles()
  return (
    <>
      <TitleBar />
      <div className={classes.root}>{children}</div>
    </>
  )
}
