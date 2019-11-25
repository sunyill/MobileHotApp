<template>
  <div>
    <van-nav-bar title="登录" @click-left="onClickLeft" left-arrow></van-nav-bar>

    <van-cell-group>
      <van-field v-model="value" left-icon="phone-o" clearable placeholder="请输入手机号码"></van-field>
      <van-field v-model="value" left-icon="idcard" clearable placeholder="请输入验证码">
        <van-button slot="button" type="primary" size="small">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="btn_login">
      <van-button click="btn" size="large" type="primary">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    data () {
      return {
        value: ''
      }
    },
    onClickLeft () {
      console.log('返回')
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
