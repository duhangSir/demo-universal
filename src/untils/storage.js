export const set = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

export const get = (key) => {
  const data = localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

export const remove = (key) => {
  localStorage.removeItem(key)
}

export const removeAllItem = () => {
  localStorage.clear()
}
