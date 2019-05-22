export const getSlug = team => {
  const stringToArray = team.split('')

  let returnSlug = ''
  for (let i = 0; i < stringToArray.length; i++) {
    if (stringToArray[i] === ' ' || stringToArray[i] === ',') {
      returnSlug = returnSlug + '-'
    } else if (stringToArray[i] === '&') {
      returnSlug = returnSlug + '-and-'
    } else {
      returnSlug = returnSlug + stringToArray[i]
    }
  }
  return returnSlug.replace(/ /g, '').toLowerCase()
}
