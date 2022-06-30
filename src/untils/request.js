import axios from 'axios'
import loading from './loading'
import md5 from 'md5'
import store from '@/store'
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在请求发送之前做一些事情
    loading.open()
    const token = store.getters.token
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time
    return config
  },
  (error) => {
    loading.close()
    // 做一些请求错误的事情
    return Promise.reject(error)
  }
)
// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    loading.close()
    // 对响应数据执行操作
    if (response.data.code === 200) {
      return response.data.data
    }
    return response
  },
  (error) => {
    loading.close()
    // 对响应错误执行操作
    return Promise.reject(error)
  }
)

const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return instance(options)
}
// 获取icode、
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}
export default request
