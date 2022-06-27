import request from '../untils/request'

const userGet = (data) => {
  return request({ url: '/sys/login', method: 'POST', data })
}
const getUserInfo = () => {
  return request({ url: '/sys/profile', method: 'GET' })
}
export default { userGet, getUserInfo }
