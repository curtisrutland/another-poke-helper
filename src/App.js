import React from 'react'
import Theme from './theme'
import AppContainer from './layout/AppContainer'
import TypeHelper from './TypeHelper/TypeHelper'

function App() {
  return (
    <Theme>
      <AppContainer>
        <TypeHelper />
      </AppContainer>
    </Theme>
  )
}

export default App
