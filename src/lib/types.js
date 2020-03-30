import typeData from './data/types.json'

export const types = typeData.types

window.types = types

export function findType(name) {
  return types.find(type => type.name.toLowerCase() === name.toLowerCase())
}

export function getStyleForType(name) {
  const type = findType(name)
  if (!type) return {}
  return { color: type.textColor, backgroundColor: type.color }
}

export function calculateMatchupResults(def1, def2, atk) {
  if (atk == null) return
  if (def1 == null && def2 == null) return
  if (def1 && !def2) return calculateMatchupResultsSingle(def1, atk)
  if (def2 && !def1) return calculateMatchupResultsSingle(def2, atk)
  return (
    calculateMatchupResultsSingle(def1, atk) *
    calculateMatchupResultsSingle(def2, atk)
  )
}

function calculateMatchupResultsSingle(def, atk) {
  const f = findByName(atk.name)
  if (def.doubleDamageFrom.find(f)) return 2.0
  if (def.halfDamageFrom.find(f)) return 0.5
  if (def.noDamageFrom.find(f)) return 0
  return 1.0
}

function findByName(name) {
  return function(type) {
    return type.name.toLowerCase() === name.toLowerCase()
  }
}
