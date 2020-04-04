import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles({
  stack: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  },
  row: {
    display: 'flex',
    flexFlow: 'row',
    width: '100%',
  },
})

export function Stack({ children, className = '' }) {
  const classes = useStyles()
  return <div className={clsx(classes.stack, className)}>{children}</div>
}

export function Row({ children, className = '' }) {
  const classes = useStyles()
  return <div className={clsx(classes.row, className)}>{children}</div>
}

export function Flex({ children, className = '', grow = 1 }) {
  return (
    <div className={className} style={{ flexGrow: grow }}>
      {children}
    </div>
  )
}
