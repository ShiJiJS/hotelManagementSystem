"use strict";(self["webpackChunkvue_hotel_management_project"]=self["webpackChunkvue_hotel_management_project"]||[]).push([[200],{8763:function(e,t,n){n.d(t,{Z:function(){return _}});const a="http://localhost:8080",r=20011,i=20021,s=20031,o=20041,c=20010,l=20020,u=20030,m=20040;var v,f,d={serverSrc:a,SAVE_OK:r,DELETE_OK:i,UPDATE_OK:s,GET_OK:o,SAVE_ERR:c,DELETE_ERR:l,UPDATE_ERR:u,GET_ERR:m},g=d,p=n(3736),h=(0,p.Z)(g,v,f,!1,null,null,null),_=h.exports},8200:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=function(){var e=this,t=e._self._c;return t("el-container",{staticClass:"homePageContainer"},[t("el-header",[t("el-row",[t("el-col",{attrs:{span:6}},[t("span",[e._v("M-I-C-K-E-Y H-O-T-E-L")])]),t("el-col",{attrs:{span:12}},[t("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:e.logoURL,alt:""}}),t("span",[e._v("米奇妙妙酒店")]),t("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:e.logoURL,alt:""}})]),t("el-col",{attrs:{span:4}},[t("span",{staticClass:"spanStyle"},[e._v(e._s(e.currentUserType)+" "+e._s(e.currentUserName))])]),t("el-col",{attrs:{span:2}},[t("el-button",{staticStyle:{"margin-left":"36px"},attrs:{type:"danger"},on:{click:e.logout}},[e._v("退出")])],1)],1)],1),t("el-header",[t("el-row",{attrs:{justify:"center",type:"flex","background-color":"#000"}},[t("el-menu",{attrs:{router:!0,"unique-opened":!0,"default-active":e.activePath,mode:"horizontal","background-color":"#000","text-color":"#fff","active-text-color":"#fff"}},[t("el-submenu",{attrs:{index:"1",disabled:"管理员"!=this.currentUserType}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-setting",staticStyle:{color:"#ffffff"}}),e._v(" 系统管理 ")]),t("el-menu-item",{attrs:{index:"userManagement"},on:{click:function(t){return e.saveActivePath("userManagement")}}},[e._v("用户管理")])],2),t("el-submenu",{attrs:{index:"2",disabled:"管理员"!=this.currentUserType&&"经理"!=this.currentUserType}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-s-claim",staticStyle:{color:"#ffffff"}}),e._v(" 报表管理 ")]),t("el-menu-item",{attrs:{index:"reservationReportManagement"},on:{click:function(t){return e.saveActivePath("reservationReportManagement")}}},[e._v("预定客人报表")]),t("el-menu-item",{attrs:{index:"checkInReportManagement"},on:{click:function(t){return e.saveActivePath("checkInReportManagement")}}},[e._v("入住客人报表")]),t("el-menu-item",{attrs:{index:"receiptsReportManagement"},on:{click:function(t){return e.saveActivePath("receiptsReportManagement")}}},[e._v("财务进账报表")])],2),t("el-submenu",{attrs:{index:"3",disabled:"管理员"!=this.currentUserType&&"前台人员"!=this.currentUserType}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-s-custom",staticStyle:{color:"#ffffff"}}),e._v(" 房客管理 ")]),t("el-menu-item",{attrs:{index:"reservationManagement"},on:{click:function(t){return e.saveActivePath("reservationManagement")}}},[e._v("客房预订管理")]),t("el-menu-item",{attrs:{index:"checkInManagement"},on:{click:function(t){return e.saveActivePath("checkInManagement")}}},[e._v("入住登记管理")]),t("el-menu-item",{attrs:{index:"roomChangeManagement"},on:{click:function(t){return e.saveActivePath("roomChangeManagement")}}},[e._v("换房管理")]),t("el-menu-item",{attrs:{index:"checkOutManagement"},on:{click:function(t){return e.saveActivePath("checkOutManagement")}}},[e._v("结账管理")])],2),t("el-submenu",{attrs:{index:"4",disabled:"管理员"!=this.currentUserType}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-s-home",staticStyle:{color:"#ffffff"}}),e._v(" 客房管理 ")]),t("el-menu-item",{attrs:{index:"guestRoomInformationManagement"},on:{click:function(t){return e.saveActivePath("guestRoomInformationManagement")}}},[e._v("客房信息管理")])],2),t("el-submenu",{attrs:{index:"5",disabled:"管理员"!=this.currentUserType&&"前台人员"!=this.currentUserType}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-s-finance",staticStyle:{color:"#ffffff"}}),e._v(" 消费管理 ")]),t("el-menu-item",{attrs:{index:"additionalConsumptionManagement"},on:{click:function(t){return e.saveActivePath("additionalConsumptionManagement")}}},[e._v(" 附加消费入账 ")])],2),t("el-submenu",{attrs:{index:"6",disabled:"管理员"!=this.currentUserType}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-menu",staticStyle:{color:"#ffffff"}}),e._v(" 基础信息管理 ")]),t("el-menu-item",{attrs:{index:"roomTypeManagement"},on:{click:function(t){return e.saveActivePath("roomTypeManagement")}}},[e._v("客房类型管理")]),t("el-menu-item",{attrs:{index:"floorManagement"},on:{click:function(t){return e.saveActivePath("floorManagement")}}},[e._v("楼层管理")]),t("el-menu-item",{attrs:{index:"goodsTypeManagement"},on:{click:function(t){return e.saveActivePath("goodsTypeManagement")}}},[e._v("商品类别管理")]),t("el-menu-item",{attrs:{index:"goodsManagement"},on:{click:function(t){return e.saveActivePath("goodsManagement")}}},[e._v("商品管理")]),t("el-menu-item",{attrs:{index:"vipManagement"},on:{click:function(t){return e.saveActivePath("vipManagement")}}},[e._v("会员管理")])],2)],1)],1)],1),t("el-container",[t("el-main",[t("router-view")],1)],1)],1)},r=[],i=n(6265),s=n.n(i),o=n(8763),c={mounted(){s()({method:"post",url:o.Z.serverSrc+"/login/currentUser",headers:{"Content-Type":"text/plain"},data:window.sessionStorage.getItem("token")}).then((e=>{this.currentUserName=e.data.userName,this.currentUserType=e.data.userType}))},data(){return{logoURL:n(6949),activePath:window.sessionStorage.getItem("activePath"),currentUserName:"",currentUserType:"",showClose:!0}},methods:{logout(){window.sessionStorage.clear(),this.$router.push("/loginPage")},saveActivePath(e){window.sessionStorage.setItem("activePath",e)}}},l=c,u=n(3736),m=(0,u.Z)(l,a,r,!1,null,"5e31dd4e",null),v=m.exports},6949:function(e,t,n){e.exports=n.p+"img/logo.a3b04ad9.png"}}]);
//# sourceMappingURL=200.ba990372.js.map