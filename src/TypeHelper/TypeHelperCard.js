import React from 'react'
import { calculateMatchupResults } from '../lib/types'
import TypePickerButton from './TypePickerButton'
import MultiplierLabel from './MultiplierLabel'
import PokemonButton from './PokemonButton'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

const useStyles = makeStyles(theme => ({
  grid: {
    gridTemplateColumns: '1fr auto',
  },
  bold: {
    fontWeight: 'bold',
  },
  padLeft: {
    paddingLeft: 50,
  },
}))

function ResultRows({ def1, def2, atk }) {
  const classes = useStyles()
  const multipler = calculateMatchupResults(def1, def2, atk)
  if (multipler == null) return null
  return (
    <TableRow>
      <TableCell className={classes.bold} component="th">
        Multiplier
      </TableCell>
      <TableCell align="right">
        <MultiplierLabel multiplier={multipler} />
      </TableCell>
    </TableRow>
  )
}

export default function TypeHelperCard({
  defendingType1,
  defendingType2,
  attackingType,
  onSetDefendingType1Click,
  onSetDefendingType2Click,
  onSetAttackingType,
  onSelectPokemonClick,
  onSelectMoveClick,
}) {
  const classes = useStyles()
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Type Helper</Typography>
      </CardContent>
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell className={classes.bold} component="th">
              Defending Pokémon
            </TableCell>
            <TableCell align="right">
              <PokemonButton onClick={onSelectPokemonClick} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.padLeft} component="th">
              Type 1
            </TableCell>
            <TableCell align="right">
              <TypePickerButton
                label="Choose"
                type={defendingType1}
                onClick={onSetDefendingType1Click}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.padLeft} component="th">
              Type 2
            </TableCell>
            <TableCell align="right">
              <TypePickerButton
                label="Choose"
                type={defendingType2}
                onClick={onSetDefendingType2Click}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.bold} component="th">
              Attacking Move
            </TableCell>
            <TableCell align="right">
              <PokemonButton label="Choose Move" onClick={onSelectMoveClick} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.padLeft} component="th">
              Type
            </TableCell>
            <TableCell align="right">
              <TypePickerButton
                label="Choose"
                type={attackingType}
                onClick={onSetAttackingType}
              />
            </TableCell>
          </TableRow>
          <ResultRows
            atk={attackingType}
            def1={defendingType1}
            def2={defendingType2}
          />
        </TableBody>
      </Table>
    </Card>
  )
}
