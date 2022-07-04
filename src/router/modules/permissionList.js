import Layout from '../../layout/index.vue'

export default {
  path: '/user',
  name: 'permissionList',
  component: Layout,
  meta: {
    title: '用户',
    icon: 'personnel'
  },
  children: [
    {
      path: '/user/permission',
      component: () => import('../..//views/user-permission/index.vue'),
      meta: {
        title: '权限列表',
        icon: 'permission'
      }
    }
  ]
}
