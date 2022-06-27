const checkDataType = (data) => {
  const dataType = Object.prototype.toString.call(data)
  const dataConversion = {
    '[Object object]': 'object',
    '[Object Array]': 'array',
    '[Object Function]': 'function',
    '[Object Boolean]': 'boolean',
    '[Object Number]': 'number',
    '[Object Symbol]': 'symbol',
    '[Object Undefined]': 'undefined',
    '[Object Date]': 'date',
    '[Object RegExp]': 'regExp',
    '[Object Null]': 'null'
  }
  return dataConversion[dataType]
}

const deepCopy = (data) => {
  const type = checkDataType(data)
  let test = null
  if (type === 'array') {
    for (let i = 0; i < data.length; i++) {
      test = []
      test.push(deepCopy(data[i]))
    }
  } else if (type === 'object') {
    test = {}
    for (const i in data) {
      test[i] = deepCopy(data[i])
    }
  } else {
    return data
  }
  return test
}
export default { deepCopy }
