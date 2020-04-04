import React from 'react'
import { styled } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { colorMap } from '../../lib/types'
 
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
  let { color, backgroundColor, text } = colorMap.get(multiplier)
  return (
    <Label style={{ color, backgroundColor }}>
      <Text>{text}</Text>
    </Label>
  )
}
