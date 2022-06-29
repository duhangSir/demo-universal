const checkDataType = (data) => {
  const dataType = Object.prototype.toString.call(data)
  const dataConversion = {
    '[object Object]': 'object',
    '[object Array]': 'array',
    '[object Function]': 'function',
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object Symbol]': 'symbol',
    '[object Undefined]': 'undefined',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Null]': 'null'
  }
  return dataConversion[dataType]
}

const deepCopy = (data) => {
  const type = checkDataType(data)
  let test = null
  if (type === 'array') {
    test = []
    for (let i = 0; i < data.length; i++) {
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
