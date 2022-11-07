<!--大部分从网上COPY的，很多功能还没对接，但是请求Token验证应该要写在main.js里头,跳转仍然在router里 2022/08/22 by Daniel Li-->
<!--登录功能完成 2022/08/27 by Daniel Li-->
<template>
  <div class="login_container">
    <el-header>
      <div>
        <img :src=logoURL alt="" />
        <span>大连理工大学大黑山五星级大酒店客房管理系统</span>
      </div>
    </el-header>
    <div class="welcome">
      <span>欢迎来到大连理工大学大黑山五星级大酒店客房管理系统!</span>
    </div>
    <div class="login_box">
      <!--表单提交区域-->
      <el-form :rules="loginFormRules" ref="loginFormRef" label-width="0px" class="login_form" :model="loginForm">
        <!--用户名-->
        <el-form-item prop="userName">
          <el-input v-model="loginForm.userName" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <!--密码-->
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" prefix-icon="iconfont icon-3702mima"></el-input>
        </el-form-item>
        <!--按钮区-->
        <el-form-item class="btns">
          <el-button type="primary" @click="login" :loading="loginLoading">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import global_ from './globalVar.vue'
export default {
  name: 'loginPage',
  data() {
    return {
      logoURL: require('../assets/logo.png'),
      loginLoading: false, // 登录限制
      loginForm: {
        // 登录的表单数据的绑定对象
        userName: '',
        password: '',
      },
      loginFormRules: {
        // 验证用户名是否合法
        userName: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    resetLoginForm() {
      // 点击重置按钮,重置登录表单
      // this.$refs[loginFormRef].resetFields()
      this.$refs.loginFormRef.resetFields()
    },
    login() {
      this.loginLoading = true
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) {
          return (this.loginLoading = false)
        }
        const { data: res } = await this.$http.post(
          global_.serverSrc + '/login',
          this.loginForm
        )
        if (res.meta.status == 201) {
          this.loginLoading = false
          return this.$message.error('登录失败,没有查找到此用户')
        } else if (res.meta.status == 202) {
          this.loginLoading = false
          return this.$message.error('登录失败,密码错误!')
        }
        this.$message.success('登录成功!')
        // 1. 将登录成功之后的 token,保存到客户端的 sessionStorage(会话机制/只在当前页面生效)中 localStorage(持久话机制/关闭页面也不会忘记数据)
        //   1.1 项目中除了登录之外的API接口,必须在登录之后才能访问
        //   1.2 token 只应在当前网站打开期间生效, 所以将 token 保存在 sessionStorage中
        window.sessionStorage.setItem('token', res.data.token)
        // 2. 通过编程式路由导航跳转到后台主页
        this.$router.push('homePage')
        this.loginLoading = false
      })
    },
  },
}
</script>

<style lang="less" scoped>
.login_container {
  height: 100vh;
  background-image: url('../assets/background.png');
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(40, 111, 183);
  color: rgb(255, 255, 255);
  font-size: 24px;
  line-height: 72px;
  > div {
    display: flex;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
      border-radius: 10%;
    }
    span {
      margin-left: 8px;
    }
  }
}
.welcome {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(255, 255, 255);
  font-size: 36px;
  line-height: 72px;
  text-shadow: 0 0 5px rgb(40, 111, 183);
}
.login_box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 200px;
  background-color: #fff;
  border-style: solid;
  border-width: thin;
  border-color: rgb(235, 238, 245);
  .login_form {
    box-sizing: border-box;
    position: absolute;
    top: 10%;
    width: 100%;
    padding: 0 20px;
  }
  .btns {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
