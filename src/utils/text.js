export const split = (text) => {
  return text.split('')
}

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const truncate = (str, length = 100) => {
  return str.length > length ? str.substring(0, length) + '...' : str
}