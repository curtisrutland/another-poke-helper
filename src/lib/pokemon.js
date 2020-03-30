import * as pokeapi from './data/pokeapi'

export async function getPokemon(name) {
  name = name.toLowerCase()
  const key = `p/${name}`
  let data = localStorage.getItem(key)
  if (data == null) {
    const res = await pokeapi.get(`pokemon/${name}`)
    if (res == null) return null
    data = {
      name: res.name,
      id: res.id,
      types: res.types.sort((a, b) => a.slot - b.slot).map(t => t.type.name),
    }
    localStorage.setItem(key, JSON.stringify(data))
  } else {
    data = JSON.parse(data)
  }
  return data
}
