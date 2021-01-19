<template>
  <div>
    <van-nav-bar title="登录" @click-left="onClickLeft" left-arrow></van-nav-bar>

    <van-cell-group>
<<<<<<< HEAD
      <van-field v-model="user.mobile" left-icon="phone-o" clearable placeholder="请输入手机号码"></van-field>
      <van-field v-model="user.code" left-icon="idcard" clearable placeholder="请输入验证码">
=======
      <van-field v-model="value" left-icon="phone-o" clearable placeholder="请输入手机号码"></van-field>
      <van-field v-model="value" left-icon="idcard" clearable placeholder="请输入验证码">
>>>>>>> 9b15ce6... 6.登录|登录页界面
        <van-button slot="button" type="primary" size="small">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="btn_login">
<<<<<<< HEAD
      <van-button click="btn" size="large" type="primary" @click="handleLogin">登录</van-button>
=======
      <van-button click="btn" size="large" type="primary">登录</van-button>
>>>>>>> 9b15ce6... 6.登录|登录页界面
    </div>
  </div>
</template>

<script>
import { Login } from '@/Api/login.js'
import { mapMutations } from '@/store/index.js'
export default {
<<<<<<< HEAD
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    onClickLeft () {
      console.log('返回')
    },
    async handleLogin () {
      try {
        let data = await Login(this.user)
        // 将登录的状态, token , reflesh-token 保存在vuex
        // 将token保存在本地
        // this.$store.commit('setUser', data)
        // 将状态保存本地和vuex
        this.setUser(data)
        this.$toast('登录成功')
        this.$router.push('/')
        console.log(data)
      } catch (error) {
        this.$toast('登录失败')
        console.log(error)
      }
=======
  methods: {
    data () {
      return {
        value: ''
      }
    },
    onClickLeft () {
      console.log('返回')
>>>>>>> 9b15ce6... 6.登录|登录页界面
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
