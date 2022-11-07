"use strict";(self["webpackChunkvue_hotel_management_project"]=self["webpackChunkvue_hotel_management_project"]||[]).push([[55],{8763:function(e,r,t){t.d(r,{Z:function(){return F}});const a="http://localhost:8080",o=20011,i=20021,s=20031,l=20041,n=20010,d=20020,m=20030,c=20040;var p,u,v={serverSrc:a,SAVE_OK:o,DELETE_OK:i,UPDATE_OK:s,GET_OK:l,SAVE_ERR:n,DELETE_ERR:d,UPDATE_ERR:m,GET_ERR:c},b=v,h=t(3736),f=(0,h.Z)(b,p,u,!1,null,null,null),F=f.exports},7055:function(e,r,t){t.r(r),t.d(r,{default:function(){return p}});var a=function(){var e=this,r=e._self._c;return r("div",[r("el-breadcrumb",{staticStyle:{"font-size":"24px","margin-bottom":"12px"},attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",[e._v("房客管理")]),r("el-breadcrumb-item",[e._v("客房预订管理")])],1),r("el-row",{staticStyle:{"margin-bottom":"12px"},attrs:{gutter:20}},[r("el-col",{attrs:{span:4}},[r("el-input",{staticStyle:{"line-height":"36px"},attrs:{placeholder:"请输入预订单号"},model:{value:e.searchForm.id,callback:function(r){e.$set(e.searchForm,"id",e._n(r))},expression:"searchForm.id"}})],1),r("el-col",{attrs:{span:4}},[r("el-input",{staticStyle:{"line-height":"36px"},attrs:{placeholder:"请输入客房类型"},model:{value:e.searchForm.roomType,callback:function(r){e.$set(e.searchForm,"roomType",r)},expression:"searchForm.roomType"}})],1),r("el-col",{attrs:{span:4}},[r("el-input",{staticStyle:{"line-height":"36px"},attrs:{placeholder:"请输入客房编号"},model:{value:e.searchForm.roomNumber,callback:function(r){e.$set(e.searchForm,"roomNumber",e._n(r))},expression:"searchForm.roomNumber"}})],1),r("el-col",{attrs:{span:4}},[r("el-input",{staticStyle:{"line-height":"36px"},attrs:{placeholder:"请输入预订人"},model:{value:e.searchForm.personName,callback:function(r){e.$set(e.searchForm,"personName",r)},expression:"searchForm.personName"}})],1),r("el-col",{attrs:{span:3}},[r("el-input",{staticStyle:{"line-height":"36px"},attrs:{placeholder:"请输入预定状态"},model:{value:e.searchForm.reservationStatus,callback:function(r){e.$set(e.searchForm,"reservationStatus",r)},expression:"searchForm.reservationStatus"}})],1),r("el-col",{attrs:{span:1}},[r("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.conditionQuery}})],1),r("el-col",{attrs:{span:2}},[r("el-button",{attrs:{type:"primary"},on:{click:function(r){e.addreservationDialogVisible=!0}}},[e._v(" 添加预订 ")])],1),r("el-col",{attrs:{span:2}},[r("el-button",{attrs:{type:"danger"},on:{click:function(r){e.massDeletionDialogVisible=!0}}},[e._v(" 批量删除 ")])],1)],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55"}}),r("el-table-column",{attrs:{prop:"id",label:"预订单号",width:"180"}}),r("el-table-column",{attrs:{prop:"roomType",label:"客房类型"}}),r("el-table-column",{attrs:{prop:"roomNumber",label:"客房编号",width:"180"}}),r("el-table-column",{attrs:{prop:"personName",label:"预订人",width:"180"}}),r("el-table-column",{attrs:{prop:"phoneNumber",label:"联系电话"}}),r("el-table-column",{attrs:{fixed:"right",prop:"arriveTime",label:"抵店时间",width:"180"}}),r("el-table-column",{attrs:{fixed:"right",prop:"leaveTime",label:"离店时间",width:"180"}}),r("el-table-column",{attrs:{fixed:"right",prop:"reservationStatus",label:"预定状态",width:"180"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.showEditDialog(t.row.id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"danger"},on:{click:function(r){return e.showDeleteDialog(t.row.id)}}},[e._v("删除")])]}}])})],1),r("el-dialog",{attrs:{title:"添加预订",visible:e.addreservationDialogVisible,width:"30%",center:""},on:{"update:visible":function(r){e.addreservationDialogVisible=r}}},[r("el-form",{ref:"addreservationFormRef",attrs:{model:e.addreservationForm,rules:e.reservationRules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"客房编号",prop:"roomNumber"}},[r("el-select",{attrs:{placeholder:"请选择客房编号"},on:{change:e.roomIdSelectChange},model:{value:e.addreservationForm.roomNumber,callback:function(r){e.$set(e.addreservationForm,"roomNumber",r)},expression:"addreservationForm.roomNumber"}},e._l(e.rooms,(function(e){return r("el-option",{key:e.id,attrs:{label:e.id,value:e.id}})})),1)],1),r("el-form-item",{attrs:{label:"客房类型",prop:"roomType"}},[r("el-input",{attrs:{disabled:""},model:{value:e.addreservationForm.roomType,callback:function(r){e.$set(e.addreservationForm,"roomType",r)},expression:"addreservationForm.roomType"}})],1),r("el-form-item",{attrs:{label:"标准价",prop:"standardPrice"}},[r("el-input",{attrs:{disabled:""},model:{value:e.addreservationForm.standardPrice,callback:function(r){e.$set(e.addreservationForm,"standardPrice",r)},expression:"addreservationForm.standardPrice"}})],1),r("el-form-item",{attrs:{label:"折后价",prop:"discountPrice"}},[r("el-input",{attrs:{disabled:""},model:{value:e.addreservationForm.discountPrice,callback:function(r){e.$set(e.addreservationForm,"discountPrice",r)},expression:"addreservationForm.discountPrice"}})],1),r("el-form-item",{attrs:{label:"押金",prop:"deposit"}},[r("el-input",{model:{value:e.addreservationForm.deposit,callback:function(r){e.$set(e.addreservationForm,"deposit",r)},expression:"addreservationForm.deposit"}})],1),r("el-form-item",{attrs:{label:"预订人",prop:"personName"}},[r("el-input",{model:{value:e.addreservationForm.personName,callback:function(r){e.$set(e.addreservationForm,"personName",r)},expression:"addreservationForm.personName"}})],1),r("el-form-item",{attrs:{label:"证件类型",prop:"certificateCategory"}},[r("el-input",{model:{value:e.addreservationForm.certificateCategory,callback:function(r){e.$set(e.addreservationForm,"certificateCategory",r)},expression:"addreservationForm.certificateCategory"}})],1),r("el-form-item",{attrs:{label:"证件号码",prop:"certificateNumber"}},[r("el-input",{model:{value:e.addreservationForm.certificateNumber,callback:function(r){e.$set(e.addreservationForm,"certificateNumber",r)},expression:"addreservationForm.certificateNumber"}})],1),r("el-form-item",{attrs:{label:"电话号码",prop:"phoneNumber"}},[r("el-input",{model:{value:e.addreservationForm.phoneNumber,callback:function(r){e.$set(e.addreservationForm,"phoneNumber",r)},expression:"addreservationForm.phoneNumber"}})],1),r("el-form-item",{attrs:{label:"抵店时间",prop:"arriveTime"}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间","default-time":"12:00:00","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.addreservationForm.arriveTime,callback:function(r){e.$set(e.addreservationForm,"arriveTime",r)},expression:"addreservationForm.arriveTime"}})],1),r("el-form-item",{attrs:{label:"离店时间",prop:"leaveTime"}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间","default-time":"12:00:00","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.addreservationForm.leaveTime,callback:function(r){e.$set(e.addreservationForm,"leaveTime",r)},expression:"addreservationForm.leaveTime"}})],1),r("el-form-item",{attrs:{label:"入住人数",prop:"numberOfOccupants"}},[r("el-input",{model:{value:e.addreservationForm.numberOfOccupants,callback:function(r){e.$set(e.addreservationForm,"numberOfOccupants",r)},expression:"addreservationForm.numberOfOccupants"}})],1),r("el-form-item",{attrs:{label:"操作员",prop:"operator"}},[r("el-input",{model:{value:e.addreservationForm.operator,callback:function(r){e.$set(e.addreservationForm,"operator",r)},expression:"addreservationForm.operator"}})],1),r("el-form-item",{attrs:{label:"会员编号",prop:"vipId"}},[r("el-input",{model:{value:e.addreservationForm.vipId,callback:function(r){e.$set(e.addreservationForm,"vipId",r)},expression:"addreservationForm.vipId"}})],1),r("el-form-item",{attrs:{label:"会员价",prop:"vipPrice"}},[r("el-input",{model:{value:e.addreservationForm.vipPrice,callback:function(r){e.$set(e.addreservationForm,"vipPrice",r)},expression:"addreservationForm.vipPrice"}})],1),r("el-form-item",{attrs:{label:"预定状态",prop:"reservationStatus"}},[r("el-select",{attrs:{placeholder:"请选择状态"},model:{value:e.addreservationForm.reservationStatus,callback:function(r){e.$set(e.addreservationForm,"reservationStatus",r)},expression:"addreservationForm.reservationStatus"}},[r("el-option",{attrs:{label:"正常",value:"正常"}}),r("el-option",{attrs:{label:"已取消",value:"已取消"}}),r("el-option",{attrs:{label:"已入住",value:"已入住"}})],1)],1),r("el-form-item",{attrs:{label:"备注",prop:"remark"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.addreservationForm.remark,callback:function(r){e.$set(e.addreservationForm,"remark",r)},expression:"addreservationForm.remark"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(r){e.addreservationDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addreservation}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"修改预订",visible:e.editreservationDialogVisible,width:"30%",center:""},on:{"update:visible":function(r){e.editreservationDialogVisible=r}}},[r("el-form",{ref:"editreservationFormRef",attrs:{model:e.editreservationForm,rules:e.reservationRules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"客房编号",prop:"roomNumber"}},[r("el-input",{model:{value:e.editreservationForm.roomNumber,callback:function(r){e.$set(e.editreservationForm,"roomNumber",r)},expression:"editreservationForm.roomNumber"}})],1),r("el-form-item",{attrs:{label:"客房类型",prop:"roomType"}},[r("el-input",{model:{value:e.editreservationForm.roomType,callback:function(r){e.$set(e.editreservationForm,"roomType",r)},expression:"editreservationForm.roomType"}})],1),r("el-form-item",{attrs:{label:"标准价",prop:"standardPrice"}},[r("el-input",{model:{value:e.editreservationForm.standardPrice,callback:function(r){e.$set(e.editreservationForm,"standardPrice",r)},expression:"editreservationForm.standardPrice"}})],1),r("el-form-item",{attrs:{label:"折后价",prop:"discountPrice"}},[r("el-input",{model:{value:e.editreservationForm.discountPrice,callback:function(r){e.$set(e.editreservationForm,"discountPrice",r)},expression:"editreservationForm.discountPrice"}})],1),r("el-form-item",{attrs:{label:"押金",prop:"deposit"}},[r("el-input",{model:{value:e.editreservationForm.deposit,callback:function(r){e.$set(e.editreservationForm,"deposit",r)},expression:"editreservationForm.deposit"}})],1),r("el-form-item",{attrs:{label:"姓名",prop:"personName"}},[r("el-input",{model:{value:e.editreservationForm.personName,callback:function(r){e.$set(e.editreservationForm,"personName",r)},expression:"editreservationForm.personName"}})],1),r("el-form-item",{attrs:{label:"证件类型",prop:"certificateCategory"}},[r("el-input",{model:{value:e.editreservationForm.certificateCategory,callback:function(r){e.$set(e.editreservationForm,"certificateCategory",r)},expression:"editreservationForm.certificateCategory"}})],1),r("el-form-item",{attrs:{label:"证件号码",prop:"certificateNumber"}},[r("el-input",{model:{value:e.editreservationForm.certificateNumber,callback:function(r){e.$set(e.editreservationForm,"certificateNumber",r)},expression:"editreservationForm.certificateNumber"}})],1),r("el-form-item",{attrs:{label:"电话号码",prop:"phoneNumber"}},[r("el-input",{model:{value:e.editreservationForm.phoneNumber,callback:function(r){e.$set(e.editreservationForm,"phoneNumber",r)},expression:"editreservationForm.phoneNumber"}})],1),r("el-form-item",{attrs:{label:"抵店时间",prop:"arriveTime"}},[r("el-input",{model:{value:e.editreservationForm.arriveTime,callback:function(r){e.$set(e.editreservationForm,"arriveTime",r)},expression:"editreservationForm.arriveTime"}})],1),r("el-form-item",{attrs:{label:"离店时间",prop:"leaveTime"}},[r("el-input",{model:{value:e.editreservationForm.leaveTime,callback:function(r){e.$set(e.editreservationForm,"leaveTime",r)},expression:"editreservationForm.leaveTime"}})],1),r("el-form-item",{attrs:{label:"入住人数",prop:"numberOfOccupants"}},[r("el-input",{model:{value:e.editreservationForm.numberOfOccupants,callback:function(r){e.$set(e.editreservationForm,"numberOfOccupants",r)},expression:"editreservationForm.numberOfOccupants"}})],1),r("el-form-item",{attrs:{label:"操作员",prop:"operator"}},[r("el-input",{model:{value:e.editreservationForm.operator,callback:function(r){e.$set(e.editreservationForm,"operator",r)},expression:"editreservationForm.operator"}})],1),r("el-form-item",{attrs:{label:"会员编号",prop:"vipId"}},[r("el-input",{model:{value:e.editreservationForm.vipId,callback:function(r){e.$set(e.editreservationForm,"vipId",r)},expression:"editreservationForm.vipId"}})],1),r("el-form-item",{attrs:{label:"会员价",prop:"vipPrice"}},[r("el-input",{model:{value:e.editreservationForm.vipPrice,callback:function(r){e.$set(e.editreservationForm,"vipPrice",r)},expression:"editreservationForm.vipPrice"}})],1),r("el-form-item",{attrs:{label:"预定状态",prop:"reservationStatus"}},[r("el-select",{attrs:{placeholder:"请选择状态"},model:{value:e.editreservationForm.reservationStatus,callback:function(r){e.$set(e.editreservationForm,"reservationStatus",r)},expression:"editreservationForm.reservationStatus"}},[r("el-option",{attrs:{label:"正常",value:"正常"}}),r("el-option",{attrs:{label:"已取消",value:"已取消"}}),r("el-option",{attrs:{label:"已入住",value:"已入住"}})],1)],1),r("el-form-item",{attrs:{label:"备注",prop:"remark"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.editreservationForm.remark,callback:function(r){e.$set(e.editreservationForm,"remark",r)},expression:"editreservationForm.remark"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(r){e.editreservationDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.editreservation}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"删除",visible:e.deletionDialogVisible,width:"30%",center:""},on:{"update:visible":function(r){e.deletionDialogVisible=r}}},[r("span",[e._v("确定要删除该项目吗？")]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(r){e.deletionDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"danger"},on:{click:e.deleteById}},[e._v("确 定")])],1)]),r("el-dialog",{attrs:{title:"批量删除",visible:e.massDeletionDialogVisible,width:"30%",center:""},on:{"update:visible":function(r){e.massDeletionDialogVisible=r}}},[r("span",[e._v("确定要批量删除选中的项目吗？")]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(r){e.massDeletionDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"danger"},on:{click:e.massDeletion}},[e._v("确 定")])],1)])],1)},o=[],i=t(6265),s=t.n(i),l=t(8763),n={mounted(){s()({method:"post",url:l.Z.serverSrc+"/login/currentUser",headers:{"Content-Type":"text/plain"},data:window.sessionStorage.getItem("token")}).then((e=>{this.currentUserName=e.data.userName,this.currentUserType=e.data.userType,"管理员"!=this.currentUserType&&"前台人员"!=this.currentUserType&&(alert(this.currentUserType+"没有此权限"),this.$router.push("/homePage"))})),this.getAllReservations(),this.getAllRooms()},methods:{conditionQuery(){var e=!0;for(let t in this.searchForm)""!=this.searchForm[t]&&(e=!1);if(e)this.getAllReservations();else{var r=this;s()({method:"post",url:l.Z.serverSrc+"/reservations/search",headers:{"Content-Type":"application/json"},data:JSON.stringify(r.searchForm)}).then((e=>{r.tableData=e.data.data}))}},getAllReservations(){var e=this;s().get(l.Z.serverSrc+"/reservations").then((r=>{r.data.code==l.Z.GET_OK?e.tableData=r.data.data:alert(r.data.msg)}))},getAllRooms(){var e=this;s().get(l.Z.serverSrc+"/rooms").then((r=>{r.data.code==l.Z.GET_OK?e.rooms=r.data.data:alert(r.data.msg)}))},showEditDialog(e){var r=this;s().get(l.Z.serverSrc+"/reservations/"+e).then((e=>{r.editreservationForm=e.data.data,1==e.data.data.breakfast?r.editreservationForm.breakfast="是":0==e.data.data.breakfast&&(r.editreservationForm.breakfast="否"),1==e.data.data.wakeUp?r.editreservationForm.wakeUp="是":0==e.data.data.wakeUp&&(r.editreservationForm.wakeUp="否")})),this.editreservationDialogVisible=!0},handleSelectionChange(e){this.multipleSelection=e},showDeleteDialog(e){this.deletionDialogVisible=!0,this.deleteId=e},cancelDeleteDialog(){this.deleteId=0,this.deletionDialogVisible=!1},deleteByIds(){for(var e=l.Z.serverSrc+"/reservations/",r=0;r<this.multipleSelection.length;r++)r==this.multipleSelection.length-1?e+=this.multipleSelection[r].id:e=e+this.multipleSelection[r].id+",";s()["delete"](e).then((e=>{e.data.code==l.Z.DELETE_ERR&&alert("删除失败")})),this.deletionDialogVisible=!1,this.getAllReservations(),window.location.reload()},deleteById(){var e=l.Z.serverSrc+"/reservations/";e+=this.deleteId,s()["delete"](e).then((e=>{e.data.code==l.Z.DELETE_ERR&&alert("删除失败")})),this.getAllReservations(),window.location.reload()},massDeletion(){this.deleteByIds(),this.massDeletionDialogVisible=!1},handleSizeChange(e){console.log(`每页 ${e} 条`)},handleCurrentChange(e){console.log(`当前页: ${e}`)},roomIdSelectChange(){for(var e in this.rooms)this.rooms[e].id==this.addreservationForm.roomNumber&&(this.$set(this.addreservationForm,"roomType",this.rooms[e].type),this.$set(this.addreservationForm,"standardPrice",this.rooms[e].standardPrice),this.$set(this.addreservationForm,"discountPrice",this.rooms[e].discountPrice),this.$set(this.addreservationForm,"vipPrice",this.rooms[e].vipUserPrice))},addreservation(){this.$refs.addreservationFormRef.validate((e=>{if(!e)return console.log("error submit!!"),!1;var r=this;s()({method:"post",url:l.Z.serverSrc+"/reservations",headers:{"Content-Type":"application/json"},data:JSON.stringify(r.addreservationForm)}).then((e=>{e.data.code==l.Z.SAVE_ERR&&alert("添加失败")})),r.getAllReservations(),window.location.reload(),this.addreservationDialogVisible=!1}))},editreservation(){this.$refs.editreservationFormRef.validate((e=>{if(!e)return console.log("error submit!!"),!1;var r=this;"是"==this.editreservationForm.breakfast?this.editreservationForm.breakfast=!0:"否"==this.editreservationForm.breakfast&&(this.editreservationForm.breakfast=!1),"是"==this.editreservationForm.wakeUp?this.editreservationForm.wakeUp=!0:"否"==this.editreservationForm.wakeUp&&(this.editreservationForm.wakeUp=!1),s()({method:"put",url:l.Z.serverSrc+"/reservations",headers:{"Content-Type":"application/json"},data:JSON.stringify(r.editreservationForm)}).then((e=>{e.data.code==l.Z.SAVE_ERR&&alert("添加失败")})),this.getAllReservations(),window.location.reload(),this.editreservationDialogVisible=!1}))}},data(){return{massDeletionDialogVisible:!1,deletionDialogVisible:!1,addreservationDialogVisible:!1,addreservationForm:{id:"",roomNumber:"",roomType:"",standardPrice:"",discountPrice:"",deposit:"",personName:"",certificateCategory:"",certificateNumber:"",phoneNumber:"",arriveTime:"",leaveTime:"",numberOfOccupants:"",operator:"",vipId:"",vipPrice:"",reservationStatus:"",remark:""},editreservationDialogVisible:!1,editreservationForm:{id:"",roomNumber:"",roomType:"",standardPrice:"",discountPrice:"",deposit:"",personName:"",certificateCategory:"",certificateNumber:"",phoneNumber:"",arriveTime:"",leaveTime:"",numberOfOccupants:"",operator:"",vipId:"",vipPrice:"",reservationStatus:"",remark:""},reservationRules:{roomNumber:[{required:!0,message:"请输入客房编号",trigger:"blur"}],deposit:[{required:!0,message:"请输入住宿押金",trigger:"blur"}],personName:[{required:!0,message:"请输入预订人",trigger:"blur"}],certificateCategory:[{required:!0,message:"请输入证件类型",trigger:"blur"}],certificateNumber:[{required:!0,message:"请输入证件号码",trigger:"blur"}],phoneNumber:[{required:!0,message:"请输入电话号码",trigger:"blur"}],arriveTime:[{required:!0,message:"请输入抵店时间",trigger:"blur"}],leaveTime:[{required:!0,message:"请输入离店时间",trigger:"blur"}],numberOfOccupants:[{required:!0,message:"请输入入住人数",trigger:"blur"}]},tableData:[],rooms:[],input:"",currentPage4:0,deleteId:0,multipleSelection:[],goodsTypes:[],searchForm:{}}}},d=n,m=t(3736),c=(0,m.Z)(d,a,o,!1,null,null,null),p=c.exports}}]);
//# sourceMappingURL=55.8c4a114b.js.map