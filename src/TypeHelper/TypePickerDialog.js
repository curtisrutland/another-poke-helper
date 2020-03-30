import React from 'react'
import { types } from '../lib/types'
import TypePickerButton from './TypePickerButton'
import { styled } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const Wrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(1.2),
  display: 'flex',
  justifyContent: 'center'
}))

export default function TypePickerDialog({
  onClose,
  open,
  onSelection,
  disabled = [],
}) {
  function handleTypeClick(type) {
    onSelection(type)
    onClose()
  }

  function show(type) {
    return !Boolean(
      disabled.find(d => d?.toLowerCase() === type.name.toLowerCase()),
    )
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Select A Type</DialogTitle>
      <Grid container justify="center">
        {types.filter(show).map(type => (
          <Grid item xs={4} key={type.id}>
            <Wrapper>
              <TypePickerButton
                type={type}
                onClick={() => handleTypeClick(type)}
              />
            </Wrapper>
          </Grid>
        ))}
        <Grid item xs={4}>
          <Wrapper>
            <TypePickerButton
              label="Clear"
              onClick={() => handleTypeClick(null)}
            />
          </Wrapper>
        </Grid>
      </Grid>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}
