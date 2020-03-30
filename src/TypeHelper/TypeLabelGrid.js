import React from 'react'
import TypeLabel from './TypeLabel'
import Grid from '@material-ui/core/Grid'

const sizes = {
  xs: 4,
  sm: 3,
  md: 2,
}

export default function TypeLabelGrid({ types = [] }) {
  return (
    <Grid container spacing={1}>
      {types.map(type => (
        <Grid
          item
          {...sizes}
          key={type.id}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TypeLabel type={type} />
        </Grid>
      ))}
    </Grid>
  )
}
