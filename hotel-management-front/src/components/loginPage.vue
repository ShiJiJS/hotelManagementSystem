<!--大部分从网上COPY的，很多功能还没对接，但是请求Token验证应该要写在main.js里头,跳转仍然在router里 2022/08/22 by Daniel Li-->
<!--登录功能完成 2022/08/27 by Daniel Li-->
<template>
  <div class="login_container">
    <el-header>
      <el-row>
        <el-col :span="6">
          <span>大家好！是我，米老鼠！</span>
        </el-col>
        <el-col :span="12">
          <img :src="logoURL" alt="" style="vertical-align: middle" />
          <span>米奇妙妙酒店</span>
          <img :src="logoURL" alt="" style="vertical-align: middle" />
        </el-col>
        <el-col :span="6">
          <span>對了，要不要管理我的妙妙酒店</span>
        </el-col>
      </el-row>
    </el-header>
    <div class="welcome">
      <span><p>哦！我差一點忘記了，要管理妙妙酒店</p></span>
      <span><p>我們必須要唸奇妙的咒語</p></span>
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
          <el-button type="primary" @click="login" :loading="loginLoading">“米斯卡，慕斯卡，米老鼠！”</el-button>
          <el-button type="info" @click="resetLoginForm">重新唸</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import global_ from "./globalVar.vue";
export default {
  name: "loginPage",
  data() {
    return {
      logoURL: require("../assets/logo.png"),
      loginLoading: false, // 登录限制
      loginForm: {
        // 登录的表单数据的绑定对象
        userName: "",
        password: "",
      },
      loginFormRules: {
        // 验证用户名是否合法
        userName: [{ required: true, message: "请输入登录名称", trigger: "blur" }],
        // 验证密码是否合法
        password: [{ required: true, message: "请输入登录密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    resetLoginForm() {
      // 点击重置按钮,重置登录表单
      // this.$refs[loginFormRef].resetFields()
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      this.loginLoading = true;
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) {
          return (this.loginLoading = false);
        }
        const { data: res } = await this.$http.post(global_.serverSrc + "/login", this.loginForm);
        if (res.meta.status == 201) {
          this.loginLoading = false;
          return this.$message.error("登录失败,没有查找到此用户");
        } else if (res.meta.status == 202) {
          this.loginLoading = false;
          return this.$message.error("登录失败,密码错误!");
        }
        this.$message.success("登录成功!");
        // 1. 将登录成功之后的 token,保存到客户端的 sessionStorage(会话机制/只在当前页面生效)中 localStorage(持久话机制/关闭页面也不会忘记数据)
        //   1.1 项目中除了登录之外的API接口,必须在登录之后才能访问
        //   1.2 token 只应在当前网站打开期间生效, 所以将 token 保存在 sessionStorage中
        window.sessionStorage.setItem("token", res.data.token);
        // 2. 通过编程式路由导航跳转到后台主页
        this.$router.push("homePage");
        this.loginLoading = false;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login_container {
  height: 100vh;
  background-image: url("../assets/loginpagePic.png");
  background-color: #eeeeee;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}
.el-header {
  background-color: rgb(0, 0, 0);
  // background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
  color: rgb(255, 255, 255);
  font-size: 30px;
  line-height: 60px;
  > div {
    text-align: center;
    img {
      text-align: center;
      width: 60px;
      height: 60px;
      margin-left: 32px;
      margin-right: 32px;
    }
  }
}
.welcome {
  margin-top: 10%;
  color: rgb(255, 255, 255);
  text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000;
  font-size: 32px;
}
.welcome span {
  width: 100%;
  margin: auto 0;
  text-align: center;
}
.login_box {
  margin: auto auto;
  width: 450px;
  height: 200px;
  color: rgb(255, 255, 255);
  .login_form {
  }
  .btns {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
