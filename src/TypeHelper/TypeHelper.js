import React, { useState } from 'react'
import { findType } from '../lib/types'
import TypeLabelSelect from './TypeLabel/TypeLabelSelect'
import PokemonAutocomplete from '../Pokemon/PokemonAutocomplete'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import MatchupsTable from './MatchupsTable'

export default function TypeHelper() {
  const [type1, setType1] = useState(null)
  const [type2, setType2] = useState(null)
  const [pokemon, setPokemon] = useState(null)

  function onChangePokemon(p) {
    setPokemon(p)
    setType1(findType(p?.types[0]))
    setType2(findType(p?.types[1]))
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Type Matchup Helper</Typography>
        <PokemonAutocomplete onChange={onChangePokemon} pokemon={pokemon} />
        <TypeLabelSelect label="Type 1" onChange={setType1} type={type1} />
        <TypeLabelSelect label="Type 2" onChange={setType2} type={type2} />
      </CardContent>
      <MatchupsTable type1={type1} type2={type2} />
    </Card>
  )
}
