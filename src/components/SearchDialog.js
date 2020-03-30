import React, { useState } from 'react'
import { getPokemon } from '../lib/pokemon'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Button from '@material-ui/core/Button'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'

export default function PokemonFinderDialog({
  open,
  onClose,
  onResult,
  label,
  title,
}) {
  const [text, setText] = useState('')
  const [error, setError] = useState('')

  async function search(e) {
    e.preventDefault()
    const pokemon = await getPokemon(text)
    if (!pokemon) setError("Can't find that pokémon!")
    else {
      onResult(pokemon)
      onClose()
    }
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <form onSubmit={search}>
          <TextField
            label={label}
            value={text}
            onChange={e => setText(e.currentTarget.value)}
            error={Boolean(error)}
            helperText={error}
            autoFocus
            fullWidth
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={search}>Search</Button>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}
