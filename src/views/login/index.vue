<template>
  <div class="login_container">
    <div class="user_login_Interface">
      <div class="user_title">
        <h3>用户登录</h3>
      </div>
      <el-form :rules="ruleFormRef" ref="Loginform" :model="loginForm">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" />
        </el-form-item>
        <el-button type="primary" @click="handleLoginButton">登录</el-button>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { validatePassword } from './rule'
const loginForm = reactive({
  username: 'admin',
  password: '123456'
})
const Loginform = ref()
const ruleFormRef = reactive({
  username: [{ required: true, message: '用户名必须填', trigger: 'blur' }],
  password: [{ required: true, trigger: 'blur', validator: validatePassword }]
})
const handleLoginButton = async () => {
  await Loginform.value.validate((valid) => {
    if (valid) {
      alert('登录成功')
    }
  })
}
</script>
<style scope lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: #2f3747;
  position: relative;
  .user_login_Interface {
    width: 600px;
    height: 350px;
    background: #2f3747;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .user_title {
      text-align: center;
      color: white;
      line-height: 70px;
    }
    .el-input {
      width: 200px;
      color: white !important;
    }
    .el-form-item__content {
      width: 600px;
      background-color: #1a2027;
    }
    .el-input__wrapper {
      background: #1a2027;
      box-shadow: none;
      .el-input__inner {
        display: inline-block;
        color: white;
      }
    }
    //#409eff
    .el-button--primary {
      width: 100%;
      background-color: #358af3;
      border: none;
    }
    .el-button--primary:hover {
      background-color: #409eff;
    }
  }
}
</style>
