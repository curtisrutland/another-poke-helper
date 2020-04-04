import pokemonData from './data/pokemon.json'

export default pokemonData.sort((a, b) => a.name.localeCompare(b.name))