import Layout from '../../layout/index.vue'

export default {
  path: '/article',
  name: 'articleCreate',
  component: Layout,
  meta: {
    title: '文章',
    icon: 'article'
  },
  children: [
    {
      path: '/article/create',
      component: () => import('../../views/article-create'),
      meta: {
        title: '创建文章',
        icon: 'article-create'
      }
    }
  ]
}
