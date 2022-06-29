<template>
  <template v-if="(props.data && !props.data.children) || props.data.children.length === 0">
    <el-menu-item :index="props.data.path">
      <el-icon>
        <svg-icon :icon="props.data.meta.icon"></svg-icon>
      </el-icon>
      {{ props.data.meta.title }}
    </el-menu-item>
  </template>
  <template v-if="props.data && props.data.children && props.data.children.length > 0">
    <el-sub-menu :index="props.data.path">
      <template #title>
        <el-icon>
          <svg-icon :icon="props.data.meta.icon"></svg-icon>
        </el-icon>
        <span>{{ props.data.meta.title }}</span>
      </template>
      <Item
        v-for="(item, index) in props.data.children"
        :key="index"
        :data="item"
      ></Item>
    </el-sub-menu>
  </template>
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  }
})
</script>
<style scoped lang="scss"></style>
