"use strict";(self["webpackChunkvue_hotel_management_project"]=self["webpackChunkvue_hotel_management_project"]||[]).push([[498],{8763:function(e,t,r){r.d(t,{Z:function(){return I}});const o="http://localhost:8080",a=20011,i=20021,l=20031,c=20041,n=20010,s=20020,d=20030,m=20040;var p,h,u={serverSrc:o,SAVE_OK:a,DELETE_OK:i,UPDATE_OK:l,GET_OK:c,SAVE_ERR:n,DELETE_ERR:s,UPDATE_ERR:d,GET_ERR:m},k=u,b=r(3736),f=(0,b.Z)(k,p,h,!1,null,null,null),I=f.exports},498:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var o=function(){var e=this,t=e._self._c;return t("div",[t("el-breadcrumb",{staticStyle:{"font-size":"24px","margin-bottom":"12px"},attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",[e._v("房客管理")]),t("el-breadcrumb-item",[e._v("客房入住管理")])],1),t("el-row",{staticStyle:{"margin-bottom":"12px"},attrs:{gutter:20}},[t("el-col",{attrs:{span:5}},[t("el-input",{staticStyle:{"line-height":"36px"},attrs:{placeholder:"请输入入住单号"},model:{value:e.searchForm.id,callback:function(t){e.$set(e.searchForm,"id",e._n(t))},expression:"searchForm.id"}})],1),t("el-col",{attrs:{span:4}},[t("el-input",{staticStyle:{"line-height":"36px"},attrs:{placeholder:"请输入客房类型"},model:{value:e.searchForm.roomType,callback:function(t){e.$set(e.searchForm,"roomType",t)},expression:"searchForm.roomType"}})],1),t("el-col",{attrs:{span:4}},[t("el-input",{staticStyle:{"line-height":"36px"},attrs:{placeholder:"请输入客房编号"},model:{value:e.searchForm.roomNumber,callback:function(t){e.$set(e.searchForm,"roomNumber",e._n(t))},expression:"searchForm.roomNumber"}})],1),t("el-col",{attrs:{span:4}},[t("el-input",{staticStyle:{"line-height":"36px"},attrs:{placeholder:"请输入入住人"},model:{value:e.searchForm.personName,callback:function(t){e.$set(e.searchForm,"personName",t)},expression:"searchForm.personName"}})],1),t("el-col",{attrs:{span:1}},[t("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.conditionQuery}})],1),t("el-col",{attrs:{span:2}},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addcheckInDialogVisible=!0}}},[e._v(" 添加入住 ")])],1),t("el-col",{attrs:{span:2}},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.reservationToCheckInDialogVisible=!0}}},[e._v(" 预定转入住 ")])],1),t("el-col",{attrs:{span:2}},[t("el-button",{attrs:{type:"danger"},on:{click:function(t){e.massDeletionDialogVisible=!0}}},[e._v(" 批量删除 ")])],1)],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),t("el-table-column",{attrs:{prop:"id",label:"入住单号",width:"180"}}),t("el-table-column",{attrs:{prop:"roomType",label:"客房类型"}}),t("el-table-column",{attrs:{prop:"roomNumber",label:"客房编号",width:"180"}}),t("el-table-column",{attrs:{prop:"personName",label:"入住人",width:"180"}}),t("el-table-column",{attrs:{prop:"phoneNumber",label:"联系电话"}}),t("el-table-column",{attrs:{fixed:"right",prop:"arriveTime",label:"抵店时间",width:"180"}}),t("el-table-column",{attrs:{fixed:"right",prop:"leaveTime",label:"离店时间",width:"180"}}),t("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.showEditDialog(r.row.id)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.showDeleteDialog(r.row.id)}}},[e._v("删除")])]}}])})],1),t("el-dialog",{attrs:{title:"添加入住",visible:e.addcheckInDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.addcheckInDialogVisible=t}}},[t("el-form",{ref:"addcheckInFormRef",attrs:{model:e.addcheckInForm,rules:e.checkInRules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"客房编号",prop:"roomNumber"}},[t("el-select",{attrs:{placeholder:"请选择客房编号"},on:{change:e.roomIdSelectChange},model:{value:e.addcheckInForm.roomNumber,callback:function(t){e.$set(e.addcheckInForm,"roomNumber",t)},expression:"addcheckInForm.roomNumber"}},e._l(e.rooms,(function(e){return t("el-option",{key:e.id,attrs:{label:e.id,value:e.id}})})),1)],1),t("el-form-item",{attrs:{label:"客房类型",prop:"roomType"}},[t("el-input",{attrs:{disabled:""},model:{value:e.addcheckInForm.roomType,callback:function(t){e.$set(e.addcheckInForm,"roomType",t)},expression:"addcheckInForm.roomType"}})],1),t("el-form-item",{attrs:{label:"标准价",prop:"standardPrice"}},[t("el-input",{attrs:{disabled:""},model:{value:e.addcheckInForm.standardPrice,callback:function(t){e.$set(e.addcheckInForm,"standardPrice",t)},expression:"addcheckInForm.standardPrice"}})],1),t("el-form-item",{attrs:{label:"折后价",prop:"discountPrice"}},[t("el-input",{attrs:{disabled:""},model:{value:e.addcheckInForm.discountPrice,callback:function(t){e.$set(e.addcheckInForm,"discountPrice",t)},expression:"addcheckInForm.discountPrice"}})],1),t("el-form-item",{attrs:{label:"押金",prop:"deposit"}},[t("el-input",{model:{value:e.addcheckInForm.deposit,callback:function(t){e.$set(e.addcheckInForm,"deposit",e._n(t))},expression:"addcheckInForm.deposit"}})],1),t("el-form-item",{attrs:{label:"入住人",prop:"personName"}},[t("el-input",{model:{value:e.addcheckInForm.personName,callback:function(t){e.$set(e.addcheckInForm,"personName",t)},expression:"addcheckInForm.personName"}})],1),t("el-form-item",{attrs:{label:"证件类型",prop:"certificateCategory"}},[t("el-input",{model:{value:e.addcheckInForm.certificateCategory,callback:function(t){e.$set(e.addcheckInForm,"certificateCategory",t)},expression:"addcheckInForm.certificateCategory"}})],1),t("el-form-item",{attrs:{label:"证件号码",prop:"certificateNumber"}},[t("el-input",{model:{value:e.addcheckInForm.certificateNumber,callback:function(t){e.$set(e.addcheckInForm,"certificateNumber",t)},expression:"addcheckInForm.certificateNumber"}})],1),t("el-form-item",{attrs:{label:"电话号码",prop:"phoneNumber"}},[t("el-input",{model:{value:e.addcheckInForm.phoneNumber,callback:function(t){e.$set(e.addcheckInForm,"phoneNumber",t)},expression:"addcheckInForm.phoneNumber"}})],1),t("el-form-item",{attrs:{label:"抵店时间",prop:"arriveTime"}},[t("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间","default-time":"12:00:00","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.addcheckInForm.arriveTime,callback:function(t){e.$set(e.addcheckInForm,"arriveTime",t)},expression:"addcheckInForm.arriveTime"}})],1),t("el-form-item",{attrs:{label:"离店时间",prop:"leaveTime"}},[t("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间","default-time":"12:00:00","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.addcheckInForm.leaveTime,callback:function(t){e.$set(e.addcheckInForm,"leaveTime",t)},expression:"addcheckInForm.leaveTime"}})],1),t("el-form-item",{attrs:{label:"入住人数",prop:"numberOfOccupants"}},[t("el-input",{model:{value:e.addcheckInForm.numberOfOccupants,callback:function(t){e.$set(e.addcheckInForm,"numberOfOccupants",t)},expression:"addcheckInForm.numberOfOccupants"}})],1),t("el-form-item",{attrs:{label:"操作员",prop:"operator"}},[t("el-input",{model:{value:e.addcheckInForm.operator,callback:function(t){e.$set(e.addcheckInForm,"operator",t)},expression:"addcheckInForm.operator"}})],1),t("el-form-item",{attrs:{label:"会员编号",prop:"vipId"}},[t("el-input",{model:{value:e.addcheckInForm.vipId,callback:function(t){e.$set(e.addcheckInForm,"vipId",t)},expression:"addcheckInForm.vipId"}})],1),t("el-form-item",{attrs:{label:"会员价",prop:"vipPrice"}},[t("el-input",{model:{value:e.addcheckInForm.vipPrice,callback:function(t){e.$set(e.addcheckInForm,"vipPrice",t)},expression:"addcheckInForm.vipPrice"}})],1),t("el-form-item",{attrs:{label:"提供早餐",prop:"breakfast"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.addcheckInForm.breakfast,callback:function(t){e.$set(e.addcheckInForm,"breakfast",t)},expression:"addcheckInForm.breakfast"}},[t("el-option",{attrs:{label:"是",value:"true"}}),t("el-option",{attrs:{label:"否",value:"false"}})],1)],1),t("el-form-item",{attrs:{label:"定时叫醒",prop:"wakeUp"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.addcheckInForm.wakeUp,callback:function(t){e.$set(e.addcheckInForm,"wakeUp",t)},expression:"addcheckInForm.wakeUp"}},[t("el-option",{attrs:{label:"是",value:"true"}}),t("el-option",{attrs:{label:"否",value:"false"}})],1)],1),t("el-form-item",{attrs:{label:"备注",prop:"remark"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.addcheckInForm.remark,callback:function(t){e.$set(e.addcheckInForm,"remark",t)},expression:"addcheckInForm.remark"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.addcheckInDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.addcheckIn}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"预定转入住",visible:e.reservationToCheckInDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.reservationToCheckInDialogVisible=t}}},[t("el-form",{ref:"reservationToCheckInFormRef",attrs:{model:e.reservationToCheckInForm,rules:e.checkInRules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"预定单号",prop:"id"}},[t("el-input",{model:{value:e.reservationToCheckInForm.id,callback:function(t){e.$set(e.reservationToCheckInForm,"id",t)},expression:"reservationToCheckInForm.id"}})],1),t("el-form-item",{attrs:{label:"操作员",prop:"operator"}},[t("el-input",{model:{value:e.reservationToCheckInForm.operator,callback:function(t){e.$set(e.reservationToCheckInForm,"operator",t)},expression:"reservationToCheckInForm.operator"}})],1),t("el-form-item",{attrs:{label:"提供早餐",prop:"breakfast"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.reservationToCheckInForm.breakfast,callback:function(t){e.$set(e.reservationToCheckInForm,"breakfast",t)},expression:"reservationToCheckInForm.breakfast"}},[t("el-option",{attrs:{label:"是",value:"true"}}),t("el-option",{attrs:{label:"否",value:"false"}})],1)],1),t("el-form-item",{attrs:{label:"定时叫醒",prop:"wakeUp"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.reservationToCheckInForm.wakeUp,callback:function(t){e.$set(e.reservationToCheckInForm,"wakeUp",t)},expression:"reservationToCheckInForm.wakeUp"}},[t("el-option",{attrs:{label:"是",value:"true"}}),t("el-option",{attrs:{label:"否",value:"false"}})],1)],1),t("el-form-item",{attrs:{label:"备注",prop:"remark"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.addcheckInForm.remark,callback:function(t){e.$set(e.addcheckInForm,"remark",t)},expression:"addcheckInForm.remark"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.reservationToCheckInDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.reservationToCheckIn}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"修改入住",visible:e.editcheckInDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.editcheckInDialogVisible=t}}},[t("el-form",{ref:"editcheckInFormRef",attrs:{model:e.editcheckInForm,rules:e.checkInRules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"客房编号",prop:"roomNumber"}},[t("el-input",{model:{value:e.editcheckInForm.roomNumber,callback:function(t){e.$set(e.editcheckInForm,"roomNumber",t)},expression:"editcheckInForm.roomNumber"}})],1),t("el-form-item",{attrs:{label:"客房类型",prop:"roomType"}},[t("el-input",{model:{value:e.editcheckInForm.roomType,callback:function(t){e.$set(e.editcheckInForm,"roomType",t)},expression:"editcheckInForm.roomType"}})],1),t("el-form-item",{attrs:{label:"标准价",prop:"standardPrice"}},[t("el-input",{model:{value:e.editcheckInForm.standardPrice,callback:function(t){e.$set(e.editcheckInForm,"standardPrice",t)},expression:"editcheckInForm.standardPrice"}})],1),t("el-form-item",{attrs:{label:"折后价",prop:"discountPrice"}},[t("el-input",{model:{value:e.editcheckInForm.discountPrice,callback:function(t){e.$set(e.editcheckInForm,"discountPrice",t)},expression:"editcheckInForm.discountPrice"}})],1),t("el-form-item",{attrs:{label:"押金",prop:"deposit"}},[t("el-input",{model:{value:e.editcheckInForm.deposit,callback:function(t){e.$set(e.editcheckInForm,"deposit",t)},expression:"editcheckInForm.deposit"}})],1),t("el-form-item",{attrs:{label:"姓名",prop:"personName"}},[t("el-input",{model:{value:e.editcheckInForm.personName,callback:function(t){e.$set(e.editcheckInForm,"personName",t)},expression:"editcheckInForm.personName"}})],1),t("el-form-item",{attrs:{label:"证件类型",prop:"certificateCategory"}},[t("el-input",{model:{value:e.editcheckInForm.certificateCategory,callback:function(t){e.$set(e.editcheckInForm,"certificateCategory",t)},expression:"editcheckInForm.certificateCategory"}})],1),t("el-form-item",{attrs:{label:"证件号码",prop:"certificateNumber"}},[t("el-input",{model:{value:e.editcheckInForm.certificateNumber,callback:function(t){e.$set(e.editcheckInForm,"certificateNumber",t)},expression:"editcheckInForm.certificateNumber"}})],1),t("el-form-item",{attrs:{label:"电话号码",prop:"phoneNumber"}},[t("el-input",{model:{value:e.editcheckInForm.phoneNumber,callback:function(t){e.$set(e.editcheckInForm,"phoneNumber",t)},expression:"editcheckInForm.phoneNumber"}})],1),t("el-form-item",{attrs:{label:"抵店时间",prop:"arriveTime"}},[t("el-input",{model:{value:e.editcheckInForm.arriveTime,callback:function(t){e.$set(e.editcheckInForm,"arriveTime",t)},expression:"editcheckInForm.arriveTime"}})],1),t("el-form-item",{attrs:{label:"离店时间",prop:"leaveTime"}},[t("el-input",{model:{value:e.editcheckInForm.leaveTime,callback:function(t){e.$set(e.editcheckInForm,"leaveTime",t)},expression:"editcheckInForm.leaveTime"}})],1),t("el-form-item",{attrs:{label:"入住人数",prop:"numberOfOccupants"}},[t("el-input",{model:{value:e.editcheckInForm.numberOfOccupants,callback:function(t){e.$set(e.editcheckInForm,"numberOfOccupants",t)},expression:"editcheckInForm.numberOfOccupants"}})],1),t("el-form-item",{attrs:{label:"操作员",prop:"operator"}},[t("el-input",{model:{value:e.editcheckInForm.operator,callback:function(t){e.$set(e.editcheckInForm,"operator",t)},expression:"editcheckInForm.operator"}})],1),t("el-form-item",{attrs:{label:"会员编号",prop:"vipId"}},[t("el-input",{model:{value:e.editcheckInForm.vipId,callback:function(t){e.$set(e.editcheckInForm,"vipId",t)},expression:"editcheckInForm.vipId"}})],1),t("el-form-item",{attrs:{label:"会员价",prop:"vipPrice"}},[t("el-input",{model:{value:e.editcheckInForm.vipPrice,callback:function(t){e.$set(e.editcheckInForm,"vipPrice",t)},expression:"editcheckInForm.vipPrice"}})],1),t("el-form-item",{attrs:{label:"提供早餐",prop:"breakfast"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editcheckInForm.breakfast,callback:function(t){e.$set(e.editcheckInForm,"breakfast",t)},expression:"editcheckInForm.breakfast"}},[t("el-option",{attrs:{label:"是",value:"true"}}),t("el-option",{attrs:{label:"否",value:"false"}})],1)],1),t("el-form-item",{attrs:{label:"定时叫醒",prop:"wakeUp"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editcheckInForm.wakeUp,callback:function(t){e.$set(e.editcheckInForm,"wakeUp",t)},expression:"editcheckInForm.wakeUp"}},[[t("el-option",{attrs:{label:"是",value:"true"}}),t("el-option",{attrs:{label:"否",value:"false"}})]],2)],1),t("el-form-item",{attrs:{label:"备注",prop:"remark"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.editcheckInForm.remark,callback:function(t){e.$set(e.editcheckInForm,"remark",t)},expression:"editcheckInForm.remark"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.editcheckInDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.editcheckIn}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"删除",visible:e.deletionDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.deletionDialogVisible=t}}},[t("span",[e._v("确定要删除该项目吗？")]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.deletionDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"danger"},on:{click:e.deleteById}},[e._v("确 定")])],1)]),t("el-dialog",{attrs:{title:"批量删除",visible:e.massDeletionDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.massDeletionDialogVisible=t}}},[t("span",[e._v("确定要批量删除选中的项目吗？")]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.massDeletionDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"danger"},on:{click:e.massDeletion}},[e._v("确 定")])],1)])],1)},a=[],i=r(6265),l=r.n(i),c=r(8763),n={mounted(){l()({method:"post",url:c.Z.serverSrc+"/login/currentUser",headers:{"Content-Type":"text/plain"},data:window.sessionStorage.getItem("token")}).then((e=>{this.currentUserName=e.data.userName,this.currentUserType=e.data.userType,"管理员"!=this.currentUserType&&"前台人员"!=this.currentUserType&&(alert(this.currentUserType+"没有此权限"),this.$router.push("/homePage"))})),this.getAllCheckInInfos(),this.getAllRooms()},methods:{conditionQuery(){var e=!0;for(let r in this.searchForm)""!=this.searchForm[r]&&(e=!1);if(e)this.getAllCheckInInfos();else{var t=this;l()({method:"post",url:c.Z.serverSrc+"/checkInInfos/search",headers:{"Content-Type":"application/json"},data:JSON.stringify(t.searchForm)}).then((e=>{t.tableData=e.data.data}))}},getAllCheckInInfos(){var e=this;l().get(c.Z.serverSrc+"/checkInInfos").then((t=>{t.data.code==c.Z.GET_OK?e.tableData=t.data.data:alert(t.data.msg)}))},getAllRooms(){var e=this;l().get(c.Z.serverSrc+"/rooms").then((t=>{t.data.code==c.Z.GET_OK?e.rooms=t.data.data:alert(t.data.msg)}))},showEditDialog(e){var t=this;l().get(c.Z.serverSrc+"/checkInInfos/"+e).then((e=>{t.editcheckInForm=e.data.data,1==e.data.data.breakfast?t.editcheckInForm.breakfast="是":0==e.data.data.breakfast&&(t.editcheckInForm.breakfast="否"),1==e.data.data.wakeUp?t.editcheckInForm.wakeUp="是":0==e.data.data.wakeUp&&(t.editcheckInForm.wakeUp="否")})),this.editcheckInDialogVisible=!0},handleSelectionChange(e){this.multipleSelection=e},showDeleteDialog(e){this.deletionDialogVisible=!0,this.deleteId=e},cancelDeleteDialog(){this.deleteId=0,this.deletionDialogVisible=!1},deleteByIds(){for(var e=c.Z.serverSrc+"/checkInInfos/",t=0;t<this.multipleSelection.length;t++)t==this.multipleSelection.length-1?e+=this.multipleSelection[t].id:e=e+this.multipleSelection[t].id+",";console.log(e),l()["delete"](e).then((e=>{e.data.code==c.Z.DELETE_ERR&&alert("删除失败")})),this.deletionDialogVisible=!1,this.getAllCheckInInfos(),window.location.reload()},deleteById(){var e=c.Z.serverSrc+"/checkInInfos/";e+=this.deleteId,l()["delete"](e).then((e=>{e.data.code==c.Z.DELETE_ERR&&alert("删除失败")})),this.getAllCheckInInfos(),window.location.reload()},massDeletion(){this.deleteByIds(),this.massDeletionDialogVisible=!1},handleSizeChange(e){console.log(`每页 ${e} 条`)},handleCurrentChange(e){console.log(`当前页: ${e}`)},addcheckIn(){this.$refs.addcheckInFormRef.validate((e=>{if(!e)return console.log("error submit!!"),!1;var t=this;l()({method:"post",url:c.Z.serverSrc+"/checkInInfos",headers:{"Content-Type":"application/json"},data:JSON.stringify(t.addcheckInForm)}).then((e=>{e.data.code==c.Z.SAVE_ERR&&alert("添加失败")})),t.getAllCheckInInfos(),window.location.reload(),this.addcheckInDialogVisible=!1}))},editcheckIn(){this.$refs.editcheckInFormRef.validate((e=>{if(!e)return console.log("error submit!!"),!1;var t=this;"是"==this.editcheckInForm.breakfast?this.editcheckInForm.breakfast=!0:"否"==this.editcheckInForm.breakfast&&(this.editcheckInForm.breakfast=!1),"是"==this.editcheckInForm.wakeUp?this.editcheckInForm.wakeUp=!0:"否"==this.editcheckInForm.wakeUp&&(this.editcheckInForm.wakeUp=!1),l()({method:"put",url:c.Z.serverSrc+"/checkInInfos",headers:{"Content-Type":"application/json"},data:JSON.stringify(t.editcheckInForm)}).then((e=>{e.data.code==c.Z.SAVE_ERR&&alert("添加失败")})),this.getAllCheckInInfos(),window.location.reload(),this.editcheckInDialogVisible=!1}))},reservationToCheckIn(){var e=this;l()({method:"post",url:c.Z.serverSrc+"/checkInInfos/reserved",headers:{"Content-Type":"application/json"},data:JSON.stringify(e.reservationToCheckInForm)}).then((e=>{e.data.code==c.Z.SAVE_ERR&&alert("添加失败")})),e.getAllCheckInInfos(),window.location.reload(),this.reservationToCheckInDialogVisible=!1},roomIdSelectChange(){for(var e in this.rooms)this.rooms[e].id==this.addcheckInForm.roomNumber&&(this.$set(this.addcheckInForm,"roomType",this.rooms[e].type),this.$set(this.addcheckInForm,"standardPrice",this.rooms[e].standardPrice),this.$set(this.addcheckInForm,"discountPrice",this.rooms[e].discountPrice),this.$set(this.addcheckInForm,"vipPrice",this.rooms[e].vipUserPrice))}},data(){return{massDeletionDialogVisible:!1,deletionDialogVisible:!1,addcheckInDialogVisible:!1,reservationToCheckInDialogVisible:!1,addcheckInForm:{id:"",roomNumber:"",roomType:"",standardPrice:"",discountPrice:"",deposit:"",personName:"",certificateCategory:"",certificateNumber:"",phoneNumber:"",arriveTime:"",leaveTime:"",numberOfOccupants:"",operator:"",vipId:"",vipPrice:"",breakfast:"",wakeUp:"",remark:""},editcheckInDialogVisible:!1,editcheckInForm:{id:"",roomNumber:"",roomType:"",standardPrice:"",discountPrice:"",deposit:"",personName:"",certificateCategory:"",certificateNumber:"",phoneNumber:"",arriveTime:"",leaveTime:"",numberOfOccupants:"",operator:"",vipId:"",vipPrice:"",breakfast:"",wakeUp:"",remark:""},reservationToCheckInForm:{},checkInRules:{roomNumber:[{required:!0,message:"请输入客房编号",trigger:"blur"}],personName:[{required:!0,message:"请输入入住人",trigger:"blur"}],deposit:[{required:!0,message:"请输入住宿押金",trigger:"blur"}],certificateCategory:[{required:!0,message:"请输入证件类型",trigger:"blur"}],certificateNumber:[{required:!0,message:"请输入证件号码",trigger:"blur"}],phoneNumber:[{required:!0,message:"请输入电话号码",trigger:"blur"}],arriveTime:[{required:!0,message:"请输入抵店时间",trigger:"blur"}],leaveTime:[{required:!0,message:"请输入离店时间",trigger:"blur"}],numberOfOccupants:[{required:!0,message:"请输入入住人数",trigger:"blur"}]},tableData:[],input:"",currentPage4:0,deleteId:0,multipleSelection:[],searchForm:{},rooms:[]}}},s=n,d=r(3736),m=(0,d.Z)(s,o,a,!1,null,null,null),p=m.exports}}]);
//# sourceMappingURL=498.b13e730e.js.map