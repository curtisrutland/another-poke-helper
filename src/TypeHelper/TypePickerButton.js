import React from 'react'
import TypeLabel from './TypeLabel'
import { makeStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  button: {
    width: 75,
  },
  text: {
    fontSize: '.8rem',
  },
  link: {
    fontSize: '.6rem',
  },
})

function SelectButton({ label, onClick }) {
  const classes = useStyles()
  return (
    <Button
      variant="outlined"
      className={classes.button}
      onClick={onClick}
    >
      <Typography className={classes.text}>{label}</Typography>
    </Button>
  )
}

export default function TypePickerButton({ onClick, type, label }) {
  if (type) {
    return (
      <ButtonBase onClick={onClick}>
        <TypeLabel type={type} />
      </ButtonBase>
    )
  } else {
    return <SelectButton label={label} onClick={onClick} />
  }
}
