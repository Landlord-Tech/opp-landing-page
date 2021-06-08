export const hashToId = hash => {
  return hash.substring(1)
}

export function addComma(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
