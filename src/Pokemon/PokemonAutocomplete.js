import React from 'react'
import pokemonData from '../lib/pokemon'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

const useStyles = makeStyles(theme => ({
  combobox: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1)
  },
}))

export default function PokemonAutocomplete({ pokemon, onChange }) {
  const classes = useStyles()

  function handleChange(_, value) {
    onChange(value)
  }

  return (
    <Autocomplete
      options={pokemonData}
      getOptionLabel={p => p.name}
      className={classes.combobox}
      renderInput={params => (
        <TextField
          {...params}
          label="Pick a Pokémon"
          variant="standard"
          color="secondary"
        />
      )}
      onChange={handleChange}
      value={pokemon}
      blurOnSelect
    />
  )
}
