import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  link: {
    fontSize: '.55rem',
  },
  button: {
  },
})

export default function PokemonLink({ onClick }) {
  const classes = useStyles()
  return (
    <Button
      size="small"
      variant="outlined"
      onClick={onClick}
      className={classes.button}
    >
      <Typography className={classes.link}>Choose Pokémon</Typography>
    </Button>
  )
}
