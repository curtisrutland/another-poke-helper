import React from 'react'
import { calculateMatchupTable } from '../lib/types'
import MultiplierLabel from './TypeLabel/MultiplierLabel'
import TypeLabelGrid from './TypeLabel/TypeLabelGrid'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

function TypeRelationship({ multiplier, data = [] }) {
  if (data.length < 1) return null
  return (
    <TableRow>
      <TableCell>
        <MultiplierLabel multiplier={multiplier} />
      </TableCell>
      <TableCell>
        <TypeLabelGrid types={data} />
      </TableCell>
    </TableRow>
  )
}

export default function MatchupsTable({ type1, type2 }) {
  if (type1 == null && type2 == null) return null
  const matchupData = calculateMatchupTable(type1, type2)
  console.log(matchupData)

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Will Take</TableCell>
          <TableCell>From</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TypeRelationship multiplier={4} data={matchupData[4]} />
        <TypeRelationship multiplier={2} data={matchupData[2]} />
        <TypeRelationship multiplier={1} data={matchupData[1]} />
        <TypeRelationship multiplier={0.5} data={matchupData[0.5]} />
        <TypeRelationship multiplier={0.25} data={matchupData[0.25]} />
        <TypeRelationship multiplier={0} data={matchupData[0]} />
      </TableBody>
    </Table>
  )
}
