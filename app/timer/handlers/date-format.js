export const mmss = (timestamp) => {
  let date = new Date(Number(timestamp))
  return `${pad(date.getMinutes())}:${pad(date.getSeconds())}`
}

export const pad = (value, size = 2, replacement = '0') => {
  let pad = new Array(size).fill(replacement).join('')
  let valueSize = String(value).length
  return pad.substring(0, pad.length - valueSize) + value
}
