import React, { useState } from 'react'
import { getPokemon } from '../lib/pokemon'
import SearchDialog from '../components/SearchDialog'

export default function PokemonFinderDialog({ onResult, open, onClose }) {
  const [error, setError] = useState('')

  async function handleSearch(text) {
    const pokemon = await getPokemon(text)
    if (!pokemon) setError("Can't find that pokémon!")
    else {
      onResult(pokemon)
      onClose()
    }
  }

  return (
    <SearchDialog
      open={open}
      onClose={onClose}
      onResult={onResult}
      label="Pokémon Name"
      title="Find a Pokémon"
      error={error}
      onSearch={handleSearch}
    />
  )
}
