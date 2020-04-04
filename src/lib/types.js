import typeData from './data/types.json'
import multiplierColorData from './data/multiplierColors.json'

export const colorMap = new Map()
multiplierColorData.forEach(m => colorMap.set(m.multiplier, m))

export const types = typeData

export function findType(name) {
  return types.find(type => type.name.toLowerCase() === name?.toLowerCase())
}

export function getStyleForType(name, disabled = false) {
  if (disabled)
    return {
      color: 'white',
      backgroundColor: '#666',
      boxShadow: 'none',
      cursor: 'not-allowed',
    }
  const type = findType(name)
  if (!type) return {}
  return { color: type.textColor, backgroundColor: type.color }
}

export function calculateMatchupResults(def1, def2, atk) {
  if (atk == null) return
  if (def1 == null && def2 == null) return

  function matchup(def, atk) {
    if (def == null) return 1.0
    const byName = type => type.name.toLowerCase() === atk.name.toLowerCase()
    if (def.doubleDamageFrom.find(byName)) return 2.0
    if (def.halfDamageFrom.find(byName)) return 0.5
    if (def.noDamageFrom.find(byName)) return 0
    return 1.0
  }
  return matchup(def1, atk) * matchup(def2, atk)
}

export function calculateMatchupTable(type1, type2) {
  const results = {
    0: [],
    0.25: [],
    0.5: [],
    1: [],
    2: [],
    4: [],
  }
  types.forEach(attackingType => {
    const multiplier = calculateMatchupResults(type1, type2, attackingType)
    results[multiplier].push(attackingType)
  })
  return results
}
