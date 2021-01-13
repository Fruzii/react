export const required = value => {
  if (!value) return 'Required!'
  return undefined
}

export const maxLengthC = (length) => (value) => {
  if (value && value.length > length) return `Max length is ${length}`
  return undefined
}