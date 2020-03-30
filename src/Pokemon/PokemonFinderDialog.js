import React from 'react'
import SearchDialog from '../components/SearchDialog'

export default function PokemonFinderDialog({ onResult, open, onClose }) {
  return (
    <SearchDialog
      open={open}
      onClose={onClose}
      onResult={onResult}
      label="Pokémon Name"
      title="Find a Pokémon"
    />
  )
}
