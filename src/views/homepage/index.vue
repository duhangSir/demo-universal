<template>
  <div>
    <div class="left">
      <!-- <el-col :span="2"> -->
      <el-menu
        active-text-color="#fff"
        background-color="#304156"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#bfcbd8"
        @open="handleOpen"
        @close="handleClose"
      >
        <div class="logo-container">
          <span class="mb-2">imooc-admin</span>
        </div>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>个人中心</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><icon-menu /></el-icon>
          <span>数据可视化</span>
        </el-menu-item>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>用户</span>
          </template>
          <el-menu-item index="1-1">员工管理</el-menu-item>
          <el-menu-item index="1-2">角色列表</el-menu-item>
          <el-menu-item index="1-3">权限列表</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>文章</span>
          </template>
          <el-menu-item index="2-1">文章排名</el-menu-item>
          <el-menu-item index="2-2">创建文章</el-menu-item>
        </el-sub-menu>
      </el-menu>
      <!-- </el-col> -->
    </div>
    <div class="right"></div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.logo-container{
  width: 100%;
  height: 50px;
  line-height: 50px;
}
::v-deep .el-menu-vertical-demo {
  text-align: center;
  height: 100vh;
  width: 170px;
  font-size: 16px;
  color: white;
  .el-menu-item {
    font-size: 8px;
    height: 45px;
  }
  .el-icon{
    width: 15px;
    height: 15px;
  }
  .el-sub-menu__title{
    font-size: 8px;
  }
}
</style>
