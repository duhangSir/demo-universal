<template>
  <div class="login_container">
    <div class="user_login_Interface">
      <div class="user_title">
        <h3>用户登录</h3>
      </div>
      <el-form :rules="ruleFormRef" ref="Loginform" :model="loginForm">
        <el-form-item prop="username">
          <span class="svg-container">
            <el-icon>
              <svg-icon icon="user"></svg-icon>
            </el-icon>
          </span>
          <el-input v-model="loginForm.username" />
        </el-form-item>
        <el-form-item prop="password">
          <span class="svg-container">
            <el-icon>
              <svg-icon icon="password"></svg-icon>
            </el-icon>
          </span>
          <el-input :type="inputType" v-model="loginForm.password" />

          <span class="svg-pwd" @click="handllePassWordStatus">
            <el-icon>
              <svg-icon :icon="passwordIconStatus"></svg-icon>
            </el-icon>
          </span>
        </el-form-item>
        <el-button type="primary" @click="handleLoginButton">登录</el-button>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, computed } from 'vue'
import { validatePassword } from './rule'
const loginForm = reactive({
  username: 'admin',
  password: '123456'
})
const inputType = ref('password')
const passwordIconStatus = computed(() => {
  return inputType.value === 'password' ? 'eye' : 'eye-open'
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
const handllePassWordStatus = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password'
}
</script>
<style scope lang="scss">
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
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
      color: white;
    }
    .svg-pwd {
      position: absolute;
      right: 20px;
      top: 10px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
    .el-form-item__content {
      width: 600px;
      background-color: #1a2027;
      border: 4px solid #343d47;
    }
    .el-input__wrapper {
      background: #1a2027;
      box-shadow: none;

      .el-input__inner {
        display: inline-block;
        box-shadow: 0, 0, 0, 0.5;
        color: white;
      }
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      display: inline-block;
    }
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
