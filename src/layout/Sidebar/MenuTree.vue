<template>
  <el-menu
    active-text-color="#fff"
    background-color="#304156"
    class="el-menu-vertical-demo"
    default-active="/profile"
    text-color="#bfcbd8"
    unique-opened
    router
  >
    <div class="logo-container">
      <div>
        <img src="../../icons/logo.png" class="logo-img" alt="" />
      </div>
      <span class="mb-2"> imooc-admin</span>
    </div>
    <Item v-for="item in props.data" :key="item" :data="item"></Item>
  </el-menu>
</template>
<script setup>
import Item from './Item'
import { defineProps } from 'vue'
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})
</script>
<style lang="scss" scoped>
.logo-img {
  width: 35px;
  height: 35px;
  margin-right: 10px;
}
.logo-container {
  width: 100%;
  height: 50px;
  font-size: 14px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
