const API_ROOT = 'https://pokeapi.co/api/v2/'

export async function get(endpoint) {
  if (endpoint[0] === '/') endpoint = endpoint.slice(1)
  const res = await fetch(`${API_ROOT}${endpoint}`)
  if (!res.ok) return null
  return await res.json()
}
