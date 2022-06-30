<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-header>
          <div class="header-top">
            <div class="header-PersonCenter">
              <span>
                <el-icon>
                  <svg-icon icon="hamburger-opened"></svg-icon>
                </el-icon>
              </span>
              <span class="personCenter-content">个人中心</span>
            </div>
            <div class="interface-function">
              <span>
                <el-icon>
                  <svg-icon icon="guide"></svg-icon>
                </el-icon>
              </span>
              <span>
                <el-icon>
                  <svg-icon icon="search"></svg-icon>
                </el-icon>
              </span>
              <span>
                <el-icon>
                  <svg-icon icon="fullscreen"></svg-icon>
                </el-icon>
              </span>
              <span>
                <el-icon>
                  <svg-icon icon="change-theme"></svg-icon>
                </el-icon>
              </span>
              <span>
                <el-icon>
                  <svg-icon icon="language"></svg-icon>
                </el-icon>
              </span>
              <div>
                <el-dropdown trigger="click" @command="handleCommand">
                  <span class="person_function_img">
                    <img :src="userInfo.avatar" alt="" />
                  </span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item command="首页">首页</el-dropdown-item>
                      <el-dropdown-item command="课程主页"
                        >课程主页</el-dropdown-item
                      >
                      <el-dropdown-item command="退出登录"
                        >退出登录</el-dropdown-item
                      >
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
            </div>
          </div>
          <div class="header-bottom">
            <div class="historySelected">
              <div class="bottom-dot"></div>
              个人中心
            </div>
          </div>
        </el-header>
        <el-container> </el-container>
      </el-container>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const userInfo = store.getters.userInfo
const router = useRouter()
const handleCommand = (command) => {
  if (command === '退出登录') {
    store.dispatch('user/loging')
    router.push('/login')
  }
}
</script>

<style lang="scss" scoped>
.person_function_img {
  width: 40px;
  margin-bottom: 20px;
  height: 40px;
}
.person_function_img img {
  margin-bottom: 10px;
  width: 40px;
  height: 40px;
}
::v-deep .common-layout {
  .el-header {
    box-shadow: 0px 0px 2px 0px #1b1818;
    width: 100%;
    height: 80px;
    padding: 0;
    .header-top {
      height: 50px;
      align-items: center;
      display: flex;
      padding: 0 10px;
      box-shadow: 0px 0px 1px 0px rgb(44, 42, 42);
      .personCenter-content {
        color: #97a8be;
        font-size: 10px;
        margin-left: 16px;
      }
      .header-PersonCenter {
        margin-right: auto;
        display: flex;
        align-items: center;
      }
      .interface-function {
        display: flex;
        align-items: center;
        span {
          display: inline-block;
          width: 45px;
          height: 20px;
        }
        .el-icon {
          font-size: 20px;
        }
      }
    }
    .header-bottom {
      height: 30px;
      display: flex;
      align-items: center;
      padding: 10px;
      .historySelected {
        background-color: #304156;
        display: flex;
        align-items: center;
        margin-right: 4px;
        color: white;
        font-size: 10px;
        padding: 7px 6px;
        position: relative;
      }
      .bottom-dot {
        width: 8px;
        height: 8px;
        background-color: white;
        margin: 0 2px;
        border-radius: 50%;
      }
    }
  }
}
</style>
