import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import blue from '@material-ui/core/colors/blue'

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: blue,
    type: 'dark',
  },
})

export default function Theme({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
