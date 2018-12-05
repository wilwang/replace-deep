function replaceDeep (obj, findValue, replaceValue) {
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (typeof obj[property] === 'object') {
        obj[property] = replaceDeep(obj[property], findValue, replaceValue)
      } else if (typeof obj[property] === 'string' || typeof obj[property] === 'number') {
        const stringValue = obj[property].toString()
        if (stringValue.indexOf(findValue) > -1) {
          obj[property] = stringValue.replace(findValue, replaceValue)
        }
      }
    }
  }

  return obj
}

module.exports = replaceDeep
