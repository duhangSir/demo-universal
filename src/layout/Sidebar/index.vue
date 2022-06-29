<template>
  <div>
    <!-- <el-menu
        active-text-color="#fff"
        background-color="#304156"
        class="el-menu-vertical-demo"
        default-active="1"
        text-color="#bfcbd8"
        @open="handleOpen"
        @close="handleClose"
      >
        <div class="logo-container">
          <div>
            <img src="../../icons/logo.png" class="logo-img" alt="" />
          </div>
          <span class="mb-2"> imooc-admin</span>
        </div>
        <el-menu-item index="1">
          <el-icon>
            <svg-icon icon="personnel"></svg-icon>
          </el-icon>
          <span>个人中心</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon>
            <svg-icon icon="reward"></svg-icon>
          </el-icon>
          <span>数据可视化</span>
        </el-menu-item>
        <el-sub-menu index="3">
          <template #title>
            <el-icon>
              <svg-icon icon="personnel"></svg-icon>
            </el-icon>
            <span>用户</span>
          </template>
          <el-menu-item index="1-1">
            <el-icon>
              <svg-icon icon="personnel-manage"></svg-icon>
            </el-icon>
            员工管理
          </el-menu-item>
          <el-menu-item index="1-2">
            <el-icon>
              <svg-icon icon="role"></svg-icon>
            </el-icon>
            角色列表
          </el-menu-item>
          <el-menu-item index="1-3">
            <el-icon>
              <svg-icon icon="permission"></svg-icon>
            </el-icon>
            权限列表
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon>
              <svg-icon icon="article"></svg-icon>
            </el-icon>
            <span>文章</span>
          </template>
          <el-menu-item index="2-1">
            <el-icon>
              <svg-icon icon="article-ranking"></svg-icon>
            </el-icon>
            文章排名
          </el-menu-item>
          <el-menu-item index="2-2">
            <el-icon>
              <svg-icon icon="article-create"></svg-icon>
            </el-icon>
            创建文章
          </el-menu-item>
        </el-sub-menu>
      </el-menu> -->
    <menu-tree :data="menuList"></menu-tree>
  </div>
</template>
<script setup>
import menuTree from './MenuTree'
const menuList = [
  {
    path: '/profile',
    name: 'profile',
    meta: {
      title: '个人中心',
      icon: 'personnel'
    },
    children: []
  },
  {
    path: '/user',
    redirect: '/user/manage',
    meta: {
      title: '用户',
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage',
        name: 'userManage',
        meta: {
          title: '员工管理',
          icon: 'personnel-manage'
        },
        children: []
      },
      {
        path: '/user/role',
        name: 'userRole',
        meta: {
          title: '角色列表',
          icon: 'role'
        }
      },
      {
        path: '/user/permission',
        name: 'userPermission',
        meta: {
          title: '权限列表',
          icon: 'permission'
        }
      }
    ]
  },
  {
    path: '/article',
    redirect: '/article/ranking',
    meta: {
      title: '文章',
      icon: 'article'
    },
    props: {
      default: false
    },
    children: [
      {
        path: '/article/ranking',
        name: 'articleRanking',
        meta: {
          title: '文章排名',
          icon: 'article-ranking'
        }
      },
      {
        path: '/article/create',
        name: 'articleCreate',
        meta: {
          title: '文章创建',
          icon: 'article-create'
        }
      }
    ]
  }
]
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
