import React, { useState } from 'react'
import { findType } from '../lib/types'
import TypeHelperCard from './TypeHelperCard'
import TypePickerDialog from './TypePickerDialog'
import PokemonFinderDialog from '../Pokemon/PokemonFinderDialog'

export default function TypeHelper() {
  const [defendingType1, setDefendingType1] = useState(null)
  const [defendingType2, setDefendingType2] = useState(null)
  const [attackingType, setAttackingType] = useState(null)
  const [typeDialogOpen, setTypeDialogOpen] = useState(false)
  const [pokemonDialogOpen, setPokemonDialogOpen] = useState(false)
  const [dialogTarget, setDialogTarget] = useState(null)
  const [hidden, setHidden] = useState([])

  function handleSetDefendingType1Click() {
    setHidden([defendingType1?.name, defendingType2?.name])
    setTypeDialogOpen(true)
    setDialogTarget('d1')
  }

  function handleSetDefendingType2Click() {
    setHidden([defendingType1?.name, defendingType2?.name])
    setTypeDialogOpen(true)
    setDialogTarget('d2')
  }

  function handleSetAttackingTypeClick() {
    setHidden([])
    setTypeDialogOpen(true)
    setDialogTarget('a')
  }

  function handleTypeSelection(type) {
    switch (dialogTarget) {
      case 'd1':
        setDefendingType1(type)
        break
      case 'd2':
        setDefendingType2(type)
        break
      default:
        setAttackingType(type)
        break
    }
    setTypeDialogOpen(false)
    setDialogTarget(null)
  }

  function handlePokemonSelection(pokemon) {
    const [t1, t2] = pokemon.types
    setDefendingType1(findType(t1))
    if(t2)
      setDefendingType2(findType(t2))
    else
      setDefendingType2(null)
  }

  function handleSelectPokemonClick() {
    setPokemonDialogOpen(true)
  }

  return (
    <>
      <TypeHelperCard
        defendingType1={defendingType1}
        onSetDefendingType1Click={handleSetDefendingType1Click}
        defendingType2={defendingType2}
        onSetDefendingType2Click={handleSetDefendingType2Click}
        attackingType={attackingType}
        onSetAttackingType={handleSetAttackingTypeClick}
        onSelectPokemonClick={handleSelectPokemonClick}
      />
      <TypePickerDialog
        open={typeDialogOpen}
        disabled={hidden}
        onClose={_ => setTypeDialogOpen(false)}
        onSelection={handleTypeSelection}
      />
      <PokemonFinderDialog
        open={pokemonDialogOpen}
        onClose={_ => setPokemonDialogOpen(false)}
        onResult={handlePokemonSelection}
      />
    </>
  )
}
