import React from 'react'
import { styled } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const multipliers = {
  0: {
    color: 'white',
    backgroundColor: 'black',
    text: '0x',
  },
  0.25: {
    color: 'white',
    backgroundColor: '#dd2c00',
    text: '¼x',
  },
  0.5: {
    color: 'white',
    backgroundColor: '#d32f2f',
    text: '½x',
  },
  1: {
    color: 'black',
    backgroundColor: 'white',
    text: '1x',
  },
  2: {
    color: 'white',
    backgroundColor: '#388e3c',
    text: '2x',
  },
  4: {
    color: 'black',
    backgroundColor: '#c6ff00',
    text: '4x',
  },
}

const Label = styled('div')(({ theme }) => ({
  boxShadow: theme.shadows[3],
  borderRadius: theme.spacing(.5),
  fontWeight: 'bold',
  padding: theme.spacing(0.75),
  width: 75,
  textAlign: 'center',
  display: 'inline-block',
  justifyContent: 'center',
  alignItems: 'center',
}))

const Text = styled(Typography)({
  fontSize: '.8rem',
})

export default function MultiplierLabel({ multiplier }) {
  let { color, backgroundColor, text } = multipliers[multiplier]
  return (
    <Label style={{ color, backgroundColor }}>
      <Text>{text}</Text>
    </Label>
  )
}
