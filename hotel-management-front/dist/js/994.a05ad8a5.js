"use strict";(self["webpackChunkvue_hotel_management_project"]=self["webpackChunkvue_hotel_management_project"]||[]).push([[994],{8763:function(e,t,o){o.d(t,{Z:function(){return g}});const a="http://localhost:8080",r=20011,l=20021,i=20031,c=20041,s=20010,n=20020,d=20030,u=20040;var h,m,p={serverSrc:a,SAVE_OK:r,DELETE_OK:l,UPDATE_OK:i,GET_OK:c,SAVE_ERR:s,DELETE_ERR:n,UPDATE_ERR:d,GET_ERR:u},k=p,b=o(3736),f=(0,b.Z)(k,h,m,!1,null,null,null),g=f.exports},6994:function(e,t,o){o.r(t),o.d(t,{default:function(){return h}});var a=function(){var e=this,t=e._self._c;return t("div",[t("el-breadcrumb",{staticStyle:{"font-size":"24px","margin-bottom":"12px"},attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",[e._v("房客管理")]),t("el-breadcrumb-item",[e._v("结账管理")])],1),t("el-row",{staticStyle:{"margin-bottom":"12px"},attrs:{gutter:20}},[t("el-col",{attrs:{span:7}},[t("el-input",{staticStyle:{"line-height":"36px"},attrs:{placeholder:"请输入入住单号"},model:{value:e.searchForm.id,callback:function(t){e.$set(e.searchForm,"id",e._n(t))},expression:"searchForm.id"}})],1),t("el-col",{attrs:{span:6}},[t("el-input",{staticStyle:{"line-height":"36px"},attrs:{placeholder:"请输入客房编号"},model:{value:e.searchForm.roomNumber,callback:function(t){e.$set(e.searchForm,"roomNumber",t)},expression:"searchForm.roomNumber"}})],1),t("el-col",{attrs:{span:6}},[t("el-input",{staticStyle:{"line-height":"36px"},attrs:{placeholder:"请输入入住人"},model:{value:e.searchForm.personName,callback:function(t){e.$set(e.searchForm,"personName",t)},expression:"searchForm.personName"}})],1),t("el-col",{attrs:{span:1}},[t("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.conditionQuery}})],1),t("el-col",{attrs:{span:2}},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addcheckOutDialogVisible=!0}}},[e._v(" 添加结账 ")])],1),t("el-col",{attrs:{span:2}},[t("el-button",{attrs:{type:"danger"},on:{click:function(t){e.massDeletionDialogVisible=!0}}},[e._v(" 批量删除 ")])],1)],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),t("el-table-column",{attrs:{prop:"id",label:"入住单号",width:"180"}}),t("el-table-column",{attrs:{prop:"roomNumber",label:"客房编号",width:"180"}}),t("el-table-column",{attrs:{prop:"discountPrice",label:"房价",width:"180"}}),t("el-table-column",{attrs:{prop:"deposit",label:"押金"}}),t("el-table-column",{attrs:{prop:"actualReceivable",label:"实际应收"}}),t("el-table-column",{attrs:{fixed:"right",prop:"paidIn",label:"实收",width:"180"}}),t("el-table-column",{attrs:{fixed:"right",prop:"change",label:"找零",width:"180"}}),t("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.showEditDialog(o.row.id)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.showDeleteDialog(o.row.id)}}},[e._v("删除")])]}}])})],1),t("el-dialog",{attrs:{title:"添加结账",visible:e.addcheckOutDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.addcheckOutDialogVisible=t}}},[t("el-form",{ref:"addcheckOutFormRef",attrs:{model:e.addcheckOutForm,rules:e.checkOutRules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"入住单号",prop:"id"}},[t("el-select",{attrs:{placeholder:"请选择入住单号"},model:{value:e.addcheckOutForm.id,callback:function(t){e.$set(e.addcheckOutForm,"id",t)},expression:"addcheckOutForm.id"}},e._l(e.checkInInfos,(function(e){return t("el-option",{key:e.id,attrs:{label:e.id,value:e.id}})})),1)],1),t("el-form-item",{attrs:{label:"餐费",prop:"foodCost"}},[t("el-input",{model:{value:e.addcheckOutForm.foodCost,callback:function(t){e.$set(e.addcheckOutForm,"foodCost",e._n(t))},expression:"addcheckOutForm.foodCost"}})],1),t("el-form-item",{attrs:{label:"电话费",prop:"phoneCost"}},[t("el-input",{model:{value:e.addcheckOutForm.phoneCost,callback:function(t){e.$set(e.addcheckOutForm,"phoneCost",e._n(t))},expression:"addcheckOutForm.phoneCost"}})],1),t("el-form-item",{attrs:{label:"实际应收",prop:"actualReceivable"}},[t("el-input",{attrs:{disabled:""},model:{value:e.addcheckOutForm.actualReceivable,callback:function(t){e.$set(e.addcheckOutForm,"actualReceivable",e._n(t))},expression:"addcheckOutForm.actualReceivable"}}),t("el-button",{attrs:{type:"primary"},on:{click:e.calActualReceivable}},[e._v("计算实际应收")])],1),t("el-form-item",{attrs:{label:"付款方式",prop:"paymentMethod"}},[t("el-input",{model:{value:e.addcheckOutForm.paymentMethod,callback:function(t){e.$set(e.addcheckOutForm,"paymentMethod",t)},expression:"addcheckOutForm.paymentMethod"}})],1),t("el-form-item",{attrs:{label:"实收",prop:"paidIn"}},[t("el-input",{on:{change:e.calChange},model:{value:e.addcheckOutForm.paidIn,callback:function(t){e.$set(e.addcheckOutForm,"paidIn",e._n(t))},expression:"addcheckOutForm.paidIn"}})],1),t("el-form-item",{attrs:{label:"找零",prop:"change"}},[t("el-input",{attrs:{disabled:""},model:{value:e.addcheckOutForm.change,callback:function(t){e.$set(e.addcheckOutForm,"change",e._n(t))},expression:"addcheckOutForm.change"}})],1),t("el-form-item",{attrs:{label:"操作员",prop:"operator"}},[t("el-input",{model:{value:e.addcheckOutForm.operator,callback:function(t){e.$set(e.addcheckOutForm,"operator",t)},expression:"addcheckOutForm.operator"}})],1),t("el-form-item",{attrs:{label:"备注",prop:"remark"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.addcheckOutForm.remark,callback:function(t){e.$set(e.addcheckOutForm,"remark",t)},expression:"addcheckOutForm.remark"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.addcheckOutDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.addcheckOut}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"修改结账",visible:e.editcheckOutDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.editcheckOutDialogVisible=t}}},[t("el-form",{ref:"editcheckOutFormRef",attrs:{model:e.editcheckOutForm,rules:e.checkOutRules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"入住单号",prop:"id"}},[t("el-input",{model:{value:e.editcheckOutForm.id,callback:function(t){e.$set(e.editcheckOutForm,"id",e._n(t))},expression:"editcheckOutForm.id"}})],1),t("el-form-item",{attrs:{label:"客房编号",prop:"roomNumber"}},[t("el-input",{model:{value:e.editcheckOutForm.roomNumber,callback:function(t){e.$set(e.editcheckOutForm,"roomNumber",e._n(t))},expression:"editcheckOutForm.roomNumber"}})],1),t("el-form-item",{attrs:{label:"房价",prop:"discountPrice"}},[t("el-input",{model:{value:e.editcheckOutForm.discountPrice,callback:function(t){e.$set(e.editcheckOutForm,"discountPrice",e._n(t))},expression:"editcheckOutForm.discountPrice"}})],1),t("el-form-item",{attrs:{label:"押金",prop:"deposit"}},[t("el-input",{model:{value:e.editcheckOutForm.deposit,callback:function(t){e.$set(e.editcheckOutForm,"deposit",e._n(t))},expression:"editcheckOutForm.deposit"}})],1),t("el-form-item",{attrs:{label:"住宿天数",prop:"days"}},[t("el-input",{model:{value:e.editcheckOutForm.days,callback:function(t){e.$set(e.editcheckOutForm,"days",e._n(t))},expression:"editcheckOutForm.days"}})],1),t("el-form-item",{attrs:{label:"住宿费",prop:"totalRoomPrice"}},[t("el-input",{model:{value:e.editcheckOutForm.totalRoomPrice,callback:function(t){e.$set(e.editcheckOutForm,"totalRoomPrice",e._n(t))},expression:"editcheckOutForm.totalRoomPrice"}})],1),t("el-form-item",{attrs:{label:"店内消费",prop:"goodsCost"}},[t("el-input",{model:{value:e.editcheckOutForm.goodsCost,callback:function(t){e.$set(e.editcheckOutForm,"goodsCost",e._n(t))},expression:"editcheckOutForm.goodsCost"}})],1),t("el-form-item",{attrs:{label:"餐费",prop:"foodCost"}},[t("el-input",{model:{value:e.editcheckOutForm.foodCost,callback:function(t){e.$set(e.editcheckOutForm,"foodCost",e._n(t))},expression:"editcheckOutForm.foodCost"}})],1),t("el-form-item",{attrs:{label:"电话费",prop:"phoneCost"}},[t("el-input",{model:{value:e.editcheckOutForm.phoneCost,callback:function(t){e.$set(e.editcheckOutForm,"phoneCost",e._n(t))},expression:"editcheckOutForm.phoneCost"}})],1),t("el-form-item",{attrs:{label:"实际应收",prop:"actualReceivable"}},[t("el-input",{model:{value:e.editcheckOutForm.actualReceivable,callback:function(t){e.$set(e.editcheckOutForm,"actualReceivable",e._n(t))},expression:"editcheckOutForm.actualReceivable"}})],1),t("el-form-item",{attrs:{label:"应退押金",prop:"refundableDeposit"}},[t("el-input",{model:{value:e.editcheckOutForm.refundableDeposit,callback:function(t){e.$set(e.editcheckOutForm,"refundableDeposit",e._n(t))},expression:"editcheckOutForm.refundableDeposit"}})],1),t("el-form-item",{attrs:{label:"付款方式",prop:"paymentMethod"}},[t("el-input",{model:{value:e.editcheckOutForm.paymentMethod,callback:function(t){e.$set(e.editcheckOutForm,"paymentMethod",t)},expression:"editcheckOutForm.paymentMethod"}})],1),t("el-form-item",{attrs:{label:"实收",prop:"paidIn"}},[t("el-input",{model:{value:e.editcheckOutForm.paidIn,callback:function(t){e.$set(e.editcheckOutForm,"paidIn",e._n(t))},expression:"editcheckOutForm.paidIn"}})],1),t("el-form-item",{attrs:{label:"找零",prop:"change"}},[t("el-input",{model:{value:e.editcheckOutForm.change,callback:function(t){e.$set(e.editcheckOutForm,"change",e._n(t))},expression:"editcheckOutForm.change"}})],1),t("el-form-item",{attrs:{label:"操作员",prop:"operator"}},[t("el-input",{model:{value:e.editcheckOutForm.operator,callback:function(t){e.$set(e.editcheckOutForm,"operator",t)},expression:"editcheckOutForm.operator"}})],1),t("el-form-item",{attrs:{label:"备注",prop:"remark"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.editcheckOutForm.remark,callback:function(t){e.$set(e.editcheckOutForm,"remark",t)},expression:"editcheckOutForm.remark"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.editcheckOutDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.editcheckOut}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"删除",visible:e.deletionDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.deletionDialogVisible=t}}},[t("span",[e._v("确定要删除该项目吗？")]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.deletionDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"danger"},on:{click:e.deleteById}},[e._v("确 定")])],1)]),t("el-dialog",{attrs:{title:"批量删除",visible:e.massDeletionDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.massDeletionDialogVisible=t}}},[t("span",[e._v("确定要批量删除选中的项目吗？")]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.massDeletionDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"danger"},on:{click:e.massDeletion}},[e._v("确 定")])],1)])],1)},r=[],l=o(6265),i=o.n(l),c=o(8763),s={mounted(){i()({method:"post",url:c.Z.serverSrc+"/login/currentUser",headers:{"Content-Type":"text/plain"},data:window.sessionStorage.getItem("token")}).then((e=>{this.currentUserName=e.data.userName,this.currentUserType=e.data.userType,"管理员"!=this.currentUserType&&"前台人员"!=this.currentUserType&&(alert(this.currentUserType+"没有此权限"),this.$router.push("/homePage"))})),this.getAllCheckOutInfos(),this.getAllCheckInInfos()},methods:{conditionQuery(){var e=!0;for(let o in this.searchForm)""!=this.searchForm[o]&&(e=!1);if(e)this.getAllCheckOutInfos();else{var t=this;i()({method:"post",url:c.Z.serverSrc+"/checkOutInfos/search",headers:{"Content-Type":"application/json"},data:JSON.stringify(t.searchForm)}).then((e=>{t.tableData=e.data.data}))}},getAllCheckOutInfos(){var e=this;i().get(c.Z.serverSrc+"/checkOutInfos").then((t=>{t.data.code==c.Z.GET_OK?e.tableData=t.data.data:alert(t.data.msg)}))},getAllCheckInInfos(){var e=this;i().get(c.Z.serverSrc+"/checkInInfos").then((t=>{t.data.code==c.Z.GET_OK?e.checkInInfos=t.data.data:alert(t.data.msg)}))},showEditDialog(e){var t=this;i().get(c.Z.serverSrc+"/checkOutInfos/"+e).then((e=>{t.editcheckOutForm=e.data.data})),this.editcheckOutDialogVisible=!0},handleSelectionChange(e){this.multipleSelection=e},showDeleteDialog(e){this.deletionDialogVisible=!0,this.deleteId=e},cancelDeleteDialog(){this.deleteId=0,this.deletionDialogVisible=!1},deleteByIds(){for(var e=c.Z.serverSrc+"/checkOutInfos/",t=0;t<this.multipleSelection.length;t++)t==this.multipleSelection.length-1?e+=this.multipleSelection[t].id:e=e+this.multipleSelection[t].id+",";i()["delete"](e).then((e=>{e.data.code==c.Z.DELETE_ERR&&alert("删除失败")})),this.deletionDialogVisible=!1,this.getAllCheckOutInfos(),window.location.reload()},deleteById(){var e=c.Z.serverSrc+"/checkOutInfos/";e+=this.deleteId,i()["delete"](e).then((e=>{e.data.code==c.Z.DELETE_ERR&&alert("删除失败")})),this.getAllCheckOutInfos(),window.location.reload()},massDeletion(){this.deleteByIds(),this.massDeletionDialogVisible=!1},handleSizeChange(e){console.log(`每页 ${e} 条`)},handleCurrentChange(e){console.log(`当前页: ${e}`)},addcheckOut(){this.$refs.addcheckOutFormRef.validate((e=>{if(!e)return console.log("error submit!!"),!1;var t=this;i()({method:"post",url:c.Z.serverSrc+"/checkOutInfos",headers:{"Content-Type":"application/json"},data:JSON.stringify(t.addcheckOutForm)}).then((e=>{e.data.code==c.Z.SAVE_ERR&&alert("添加失败")})),t.getAllCheckOutInfos(),window.location.reload(),this.addcheckOutDialogVisible=!1}))},editcheckOut(){this.$refs.editcheckOutFormRef.validate((e=>{if(!e)return console.log("error submit!!"),!1;var t=this;"是"==this.editcheckOutForm.breakfast?this.editcheckOutForm.breakfast=!0:"否"==this.editcheckOutForm.breakfast&&(this.editcheckOutForm.breakfast=!1),"是"==this.editcheckOutForm.wakeUp?this.editcheckOutForm.wakeUp=!0:"否"==this.editcheckOutForm.wakeUp&&(this.editcheckOutForm.wakeUp=!1),i()({method:"put",url:c.Z.serverSrc+"/roomTypes",headers:{"Content-Type":"application/json"},data:JSON.stringify(t.editcheckOutForm)}).then((e=>{e.data.code==c.Z.SAVE_ERR&&alert("添加失败")})),this.getAllCheckOutInfos(),window.location.reload(),this.editcheckOutDialogVisible=!1}))},calActualReceivable(){var e=this,t={};t.id=this.addcheckOutForm.id,t.foodCost=this.addcheckOutForm.foodCost,t.phoneCost=this.addcheckOutForm.phoneCost,console.log(JSON.stringify(t)),i()({method:"post",url:c.Z.serverSrc+"/checkOutInfos/count",headers:{"Content-Type":"application/json"},data:JSON.stringify(t)}).then((t=>{this.$set(e.addcheckOutForm,"actualReceivable",t.data.data)}))},calChange(){var e=this.addcheckOutForm.paidIn-this.addcheckOutForm.actualReceivable;this.$set(this.addcheckOutForm,"change",e)}},data(){return{massDeletionDialogVisible:!1,deletionDialogVisible:!1,addcheckOutDialogVisible:!1,addcheckOutForm:{id:"",roomNumber:"",discountPrice:"",deposit:"",days:"",totalRoomPrice:"",goodsCost:"",foodCost:"",phoneCost:"",actualReceivable:"",refundableDeposit:"",paymentMethod:"",paidIn:"",change:"",operator:"",remark:""},editcheckOutDialogVisible:!1,editcheckOutForm:{id:"",roomNumber:"",discountPrice:"",deposit:"",days:"",totalRoomPrice:"",goodsCost:"",foodCost:"",phoneCost:"",actualReceivable:"",refundableDeposit:"",paymentMethod:"",paidIn:"",change:"",operator:"",remark:""},checkOutRules:{id:[{required:!0,message:"请输入入住单号",trigger:"blur"}],roomNumber:[{required:!0,message:"请输入客房编号",trigger:"blur"}],discountPrice:[{required:!0,message:"请输入房价",trigger:"blur"}],deposit:[{required:!0,message:"请输入住宿押金",trigger:"blur"}],days:[{required:!0,message:"请输入住宿天数",trigger:"blur"}],totalRoomPrice:[{required:!0,message:"请输入住宿费",trigger:"blur"}],actualReceivable:[{required:!0,message:"请输入实际应收",trigger:"blur"}],refundableDeposit:[{required:!0,message:"请输入应退押金",trigger:"blur"}],paymentMethod:[{required:!0,message:"请输入付款方式",trigger:"blur"}],paidIn:[{required:!0,message:"请输入实收",trigger:"blur"}],change:[{required:!0,message:"请输入找零",trigger:"blur"}],operator:[{required:!0,message:"请输入操作员",trigger:"blur"}]},tableData:[],checkInInfos:[],input:"",currentPage4:0,deleteId:0,multipleSelection:[],searchForm:{}}}},n=s,d=o(3736),u=(0,d.Z)(n,a,r,!1,null,null,null),h=u.exports}}]);
//# sourceMappingURL=994.a05ad8a5.js.map