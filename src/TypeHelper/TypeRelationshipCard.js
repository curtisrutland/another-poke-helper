import React from 'react'
import { findType } from '../lib/types'
import MultiplierLabel from './MultiplierLabel'
import TypeLabel from './TypeLabel'
import TypeLabelGrid from './TypeLabelGrid'
import { styled } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

const CardTitle = styled('div')({
  display: 'flex',
  flexFlow: 'row',
  alignItems: 'center',
})

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

export function DefenderCard({ type }) {
  const data = findType(type.name)

  return (
    <Card style={{ marginTop: 10 }}>
      <CardContent>
        <CardTitle>
          <Typography variant="h6">Defending Type</Typography>
          <div style={{ width: 30 }} />
          <TypeLabel type={type} />
        </CardTitle>
      </CardContent>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Takes</TableCell>
            <TableCell>From</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TypeRelationship multiplier={0} data={data.noDamageFrom} />
          <TypeRelationship multiplier={0.5} data={data.halfDamageFrom} />
          <TypeRelationship multiplier={2} data={data.doubleDamageFrom} />
        </TableBody>
      </Table>
    </Card>
  )
}

export function AttackerCard({ type }) {
  const data = findType(type.name)

  return (
    <Card style={{ marginTop: 10 }}>
      <CardContent>
        <CardTitle>
          <Typography variant="h6">Attacking Type</Typography>
          <div style={{ width: 30 }} />
          <TypeLabel type={type} />
        </CardTitle>
      </CardContent>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Deals</TableCell>
            <TableCell>To</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TypeRelationship multiplier={0} data={data.noDamageTo} />
          <TypeRelationship multiplier={0.5} data={data.halfDamageTo} />
          <TypeRelationship multiplier={2} data={data.doubleDamageTo} />
        </TableBody>
      </Table>
    </Card>
  )
}
