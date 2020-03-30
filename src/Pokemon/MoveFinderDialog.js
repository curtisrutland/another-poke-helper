import React, { useState } from 'react'
import { getMove } from '../lib/pokemon'
import SearchDialog from '../components/SearchDialog'

export default function MoveFinderDialog({ onResult, open, onClose }) {
  const [error, setError] = useState('')

  async function handleSearch(text) {
    const move = await getMove(text)
    if (!move) setError("Can't find that move!")
    else {
      onResult(move)
      onClose()
    }
  }

  return (
    <SearchDialog
      open={open}
      onClose={onClose}
      onResult={onResult}
      label="Move Name"
      title="Find a Pokémon"
      error={error}
      onSearch={handleSearch}
    />
  )
}
