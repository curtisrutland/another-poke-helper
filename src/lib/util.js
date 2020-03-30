export function chunk(collection, size) {
  const result = []
  let i = 0
  while(i < collection.length) {
    let row = []
    for(let j = 0; j < size; j++){
      row.push(collection[i++])
      if(i >= collection.length) {
        break
      }
    }
    result.push(row)
  }
  return result
}