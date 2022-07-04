export const getChildreRoutes = (routes) => {
  const result = []
  routes.forEach((item) => {
    if (item.children && item.children.length > 0) {
      result.push(...item.children)
    }
  })
  return result
}
export const filterRouters = (routes) => {
  const childrenRoutes = getChildreRoutes(routes)
  return routes.filter((route) => {
    return !childrenRoutes.find((item) => {
      return item.path === route.path
    })
  })
}

const isNull = (data) => {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}
export const generateMenus = (routes) => {
  const result = []
  routes.forEach((item) => {
    if (isNull(item.meta) && isNull(item.children)) return
    const routePath = item.path
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenus(item.children))
    }
    let route = result.find((item) => item.path === routePath)
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }
      if (item.meta.title && item.meta.icon) {
        result.push(route)
      }
    }
    if (item.children) {
      route.children.push(...generateMenus(item.children))
    }
  })
  return result
}
