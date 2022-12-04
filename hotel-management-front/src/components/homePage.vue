<template>
  <el-container class="homePageContainer">
    <el-header>
      <el-row>
        <el-col :span="6">
          <span>M-I-C-K-E-Y M-O-U-S-E</span>
        </el-col>
        <el-col :span="12">
          <img :src=logoURL alt="" style="vertical-align:middle" />
          <span>米奇妙妙屋</span>
          <img :src=logoURL alt="" style="vertical-align:middle" />
        </el-col>
        <el-col :span="6">
          <span>当前登录用户：</span>
          <span>{{ currentUserType }}</span>
          <span>{{ currentUserName }}</span>
          <el-button style="margin-left: 36px" type="danger" @click="logout">退出</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-header>
      <el-row justify="center" type="flex" background-color="#000">
        <el-menu
          :router="true"
          :unique-opened="true"
          :default-active="activePath"
          mode="horizontal"
          background-color="#000"
          text-color="#fff"
          active-text-color="#fff">
          <el-submenu index="1" :disabled="this.currentUserType != '管理员' ? true : false">
            <template slot="title">
              <i class="el-icon-setting" style="color: #ffffff"></i>
              系统管理
            </template>
            <el-menu-item index="userManagement" @click="saveActivePath('userManagement')">用户管理</el-menu-item>
            <el-menu-item index="logManagement" disabled @click="saveActivePath('logManagement')">日志管理</el-menu-item>
          </el-submenu>
          <el-submenu index="2" :disabled="this.currentUserType != '管理员' && this.currentUserType != '经理' ? true : false">
            <template slot="title">
              <i class="el-icon-s-claim" style="color: #ffffff"></i>
              报表管理
            </template>
            <el-menu-item index="reservationReportManagement" @click="saveActivePath('reservationReportManagement')">预定客人报表</el-menu-item>
            <el-menu-item index="checkInReportManagement" @click="saveActivePath('checkInReportManagement')">入住客人报表</el-menu-item>
            <el-menu-item index="checkOutReportManagement" disabled @click="saveActivePath('checkOutReportManagement')">离店客人报表</el-menu-item>
            <el-menu-item index="receiptsReportManagement" @click="saveActivePath('receiptsReportManagement')">财务进账报表</el-menu-item>
          </el-submenu>
          <el-submenu index="3" :disabled="this.currentUserType != '管理员' && this.currentUserType != '前台人员' ? true : false">
            <template slot="title">
              <i class="el-icon-s-custom" style="color: #ffffff"></i>
              房客管理
            </template>
            <el-menu-item index="reservationManagement" @click="saveActivePath('reservationManagement')">客房预订管理</el-menu-item>
            <el-menu-item index="checkInManagement" @click="saveActivePath('checkInManagement')">入住登记管理</el-menu-item>
            <el-menu-item index="roomChangeManagement" @click="saveActivePath('roomChangeManagement')">换房管理</el-menu-item>
            <el-menu-item index="checkOutManagement" @click="saveActivePath('checkOutManagement')">结账管理</el-menu-item>
          </el-submenu>
          <el-submenu index="4" :disabled="this.currentUserType != '管理员' ? true : false">
            <template slot="title">
              <i class="el-icon-s-home" style="color: #ffffff"></i>
              客房管理
            </template>
            <el-menu-item index="guestRoomInformationManagement" @click="saveActivePath('guestRoomInformationManagement')">客房信息管理</el-menu-item>
          </el-submenu>
          <el-submenu index="5" :disabled="this.currentUserType != '管理员' && this.currentUserType != '前台人员' ? true : false">
            <template slot="title">
              <i class="el-icon-s-finance" style="color: #ffffff"></i>
              消费管理
            </template>
            <el-menu-item index="additionalConsumptionManagement" @click="saveActivePath('additionalConsumptionManagement')">
              附加消费入账
            </el-menu-item>
          </el-submenu>
          <el-submenu index="6" :disabled="this.currentUserType != '管理员' ? true : false">
            <template slot="title">
              <i class="el-icon-menu" style="color: #ffffff"></i>
              基础信息管理
            </template>
            <el-menu-item index="roomTypeManagement" @click="saveActivePath('roomTypeManagement')">客房类型管理</el-menu-item>
            <el-menu-item index="floorManagement" @click="saveActivePath('floorManagement')">楼层管理</el-menu-item>
            <el-menu-item index="goodsTypeManagement" @click="saveActivePath('goodsTypeManagement')">商品类别管理</el-menu-item>
            <el-menu-item index="goodsManagement" @click="saveActivePath('goodsManagement')">商品管理</el-menu-item>
            <el-menu-item index="vipManagement" @click="saveActivePath('vipManagement')">会员管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-row>
    </el-header>
    <el-container>
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import axios from "axios";
import global_ from "./globalVar.vue";
export default {
  mounted() {
    axios({
      method: "post",
      url: global_.serverSrc + "/login/currentUser",
      headers: {
        "Content-Type": "text/plain",
      },
      data: window.sessionStorage.getItem("token"),
    }).then((response) => {
      this.currentUserName = response.data.userName;
      this.currentUserType = response.data.userType;
    });
  },
  data() {
    return {
      logoURL: require('../assets/logo.png'),
      activePath: window.sessionStorage.getItem("activePath"),
      currentUserName: "",
      currentUserType: "",
      showClose: true,
    };
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    saveActivePath(activePath) {
      window.sessionStorage.setItem("activePath", activePath);
      // console.log(this.$route.path)
    },
  },
};
</script>

<style lang="less" scoped>
.homePageContainer {
  height: 100vh;
  background-image: url('../assets/background.png');
  background-color: #eeeeee;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size:cover
}

.el-header {
  background-color: rgb(0,0,0);
  // background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
  color: rgb(255,255,255);
  font-size: 30px;
  line-height: 60px;
  > div {
    text-align:center;
    img {
      text-align:center;
      width: 60px;
      height: 60px;
      margin-left: 32px;
      margin-right: 32px;
    }
  }
}

.el-menu {
  border-right: none;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
}

.el-menu.el-menu--horizontal{
    border-bottom:none !important;
}
</style>
