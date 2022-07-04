import request from '../untils/request'

const userGet = (data) => {
  return request({ url: '/sys/login', method: 'POST', data })
}
const getUserInfo = () => {
  return request({ url: '/sys/profile', method: 'GET' })
}
const getUserManage = (data) => {
  return request({ url: '/user-manage/list', method: 'GET', data })
}
export default { userGet, getUserInfo, getUserManage }
