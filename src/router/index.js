import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '../layout/index.vue'
const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../layout/index.vue'),
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/profile/index.vue'),
        meta: {
          title: '个人中心',
          icon: 'personnel'
        }
      },
      {
        path: '/chart',
        name: 'chart',
        component: () => import('../views/chart/index.vue')
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../views/error-page/404.vue')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('../views/error-page/401.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  }
]

const privateRoutes = [
  {
    path: '/user',
    name: 'user',
    redirect: '/user/manage',
    component: layout,
    meta: {
      title: '用户',
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage',
        name: 'userManage',
        component: () => import('../views/user-manage/index.vue'),
        meta: {
          title: '员工管理',
          icon: 'personnel-manage'
        }
      },
      {
        path: '/user/role',
        name: 'userRole',
        component: () => import('../views/user-role/index.vue'),
        meta: {
          title: '角色列表',
          icon: 'role'
        }
      },
      {
        path: '/user/permission',
        name: 'userPermission',
        component: () => import('../views/user-permission/index.vue'),
        meta: {
          title: '权限列表',
          icon: 'permission'
        }
      },
      {
        path: '/user/info/:id',
        name: 'userInfo',
        component: () => import('../views/user-info/index.vue')
      },
      {
        path: '/user/import',
        name: 'userImport',
        component: () => import('../views/user-import/index.vue')
      }
    ]
  },
  {
    path: '/article',
    name: 'article',
    component: () => layout,
    meta: {
      title: '文章',
      icon: 'article'
    },
    redirect: '/article/ranking',
    children: [
      {
        path: '/article/ranking',
        name: 'articleRanking',
        component: () => import('../views/article-ranking'),
        meta: {
          title: '文章排名',
          icon: 'article-ranking'
        }
      },
      {
        path: '/article/create',
        name: 'articleCreate',
        component: () => import('../views/article-create'),
        meta: {
          title: '创建文章',
          icon: 'article-create'
        }
      },
      {
        path: '/article/:id',
        name: 'articleDetail',
        component: () => import('../views/article-detail')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...privateRoutes]
})

export default router
