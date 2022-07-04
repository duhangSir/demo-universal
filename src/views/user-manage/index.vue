<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="username" label="姓名" width="180" />
      <el-table-column prop="mobile" label="联系方式" width="180" />
      <el-table-column prop="avatar" label="头像" >
      </el-table-column>
    </el-table>
  </div>
</template>
<script setup>
// import User from '../../api/user'
// import { created, reactive } from 'vue'
// const tableData = reactive([
//   {
//     date: '2016-05-03',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles'
//   },
//   {
//     date: '2016-05-02',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles'
//   },
//   {
//     date: '2016-05-04',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles'
//   },
//   {
//     date: '2016-05-01',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles'
//   }
// ])
// const data = reactive({
//   page: 1,
//   size: 3
// })
// const getdata = async () => {
//   const response = await User.getUserManage(data)
//   tableData = response.list
//   console.log(response)
//   console.log(tableData);
// }
// getdata()
// created() {

// },
</script>
<style scoped lang="scss"></style>
