<template>
  <div class="containeer">
    <div class="el-aside">
      <div class="introduce">介绍 (已升级element-plus 正式版)</div>
    </div>
    <el-main>Main</el-main>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.containeer {
  display: flex;
}
.el-aside {
  height: 100vh;
  box-shadow: 0px 0px 6px rgb(148, 146, 146);
  .introduce {
    font-size: 13px;
    border-bottom: 1px solid rgb(148, 146, 146);
  }
}
</style>
