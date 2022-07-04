<template>
  <div>
    <menu-tree :data="menuList"></menu-tree>
  </div>
</template>
<script setup>
import menuTree from './MenuTree'
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '../../untils/router'
const router = useRouter()
const response = filterRouters(router.getRoutes())
const res = generateMenus(response)
const menuList = res
// const menuList = [
//   {
//     path: '/profile',
//     name: 'profile',
//     meta: {
//       title: '个人中心',
//       icon: 'personnel'
//     },
//     children: []
//   },
//   {
//     path: '/user',
//     redirect: '/user/manage',
//     meta: {
//       title: '用户',
//       icon: 'personnel'
//     },
//     children: [
//       {
//         path: '/user/manage',
//         name: 'userManage',
//         meta: {
//           title: '员工管理',
//           icon: 'personnel-manage'
//         },
//         children: []
//       },
//       {
//         path: '/user/role',
//         name: 'userRole',
//         meta: {
//           title: '角色列表',
//           icon: 'role'
//         }
//       },
//       {
//         path: '/user/permission',
//         name: 'userPermission',
//         meta: {
//           title: '权限列表',
//           icon: 'permission'
//         }
//       }
//     ]
//   },
//   {
//     path: '/article',
//     redirect: '/article/ranking',
//     meta: {
//       title: '文章',
//       icon: 'article'
//     },
//     props: {
//       default: false
//     },
//     children: [
//       {
//         path: '/article/ranking',
//         name: 'articleRanking',
//         meta: {
//           title: '文章排名',
//           icon: 'article-ranking'
//         }
//       },
//       {
//         path: '/article/create',
//         name: 'articleCreate',
//         meta: {
//           title: '文章创建',
//           icon: 'article-create'
//         }
//       }
//     ]
//   }
// ]
console.log(menuList)
</script>

<style lang="scss" scoped>
::v-deep .el-menu-vertical-demo {
  text-align: center;
  height: 100vh;
  margin: 0;
  width: 169px;
  font-size: 16px;
  color: white;
  border-right: none;
  .el-menu-item {
    font-size: 10px;
    height: 45px;
    width: 169px;
    min-width: 169px !important;
  }
  .el-icon {
    width: 15px;
    font-size: 12px;
    height: 15px;
  }
  .el-sub-menu__title {
    font-size: 10px;
  }
}
</style>
