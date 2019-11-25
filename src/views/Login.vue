<template>
  <div>
    <van-nav-bar title="登录" @click-left="onClickLeft" left-arrow></van-nav-bar>

    <van-cell-group>
      <van-field v-model="user.mobile" left-icon="phone-o" clearable placeholder="请输入手机号码"></van-field>
      <van-field v-model="user.code" left-icon="idcard" clearable placeholder="请输入验证码">
        <van-button slot="button" type="primary" size="small">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="btn_login">
      <van-button click="btn" size="large" type="primary" @click="handleLogin">登录</van-button>
    </div>
  </div>
</template>

<script>
import { Login } from '@/Api/login.js'
export default {
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  methods: {
    onClickLeft () {
      console.log('返回')
    },
    async handleLogin () {
      try {
        let res = await Login(this.user)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang='less' scoped>
.btn_login {
    margin-top: 30px;
    padding: 15px;
    .btn {
        width: 100%;
    }
}
</style>
