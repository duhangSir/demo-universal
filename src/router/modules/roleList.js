import Layout from '../../layout/index.vue'

export default {
  path: '/user',
  name: 'roleList',
  component: Layout,
  meta: {
    title: '用户',
    icon: 'personnel'
  },
  children: [
    {
      path: '/user/role',
      component: () => import('../..//views/user-role/index.vue'),
      meta: {
        title: '角色列表',
        icon: 'role'
      }
    }
  ]
}
