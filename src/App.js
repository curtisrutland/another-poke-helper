import React from 'react'
import Theme from './theme'
import AppContainer from './components/AppContainer'
import TypeHelper from './TypeHelper/'
import { getPokemon} from './lib/pokemon'

window.getPokemon = getPokemon 

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
