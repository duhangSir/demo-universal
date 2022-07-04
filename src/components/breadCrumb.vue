<template>
  <el-breadcrumb separator="/">
    <template v-for="(item,index) in breadCrumbData" :key="index">
      <el-breadcrumb-item v-if="index !== breadCrumbData.length - 1" :to="{ path: item.path }">{{item.meta.title}}</el-breadcrumb-item>
      <el-breadcrumb-item v-else>{{item.meta.title}}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const breadCrumbData = computed(() => {
  return route.matched.filter((item) => item.meta.title && item.meta.icon)
})
console.log(breadCrumbData)
</script>
<style scoped lang="scss"></style>
