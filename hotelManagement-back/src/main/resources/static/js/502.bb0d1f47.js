"use strict";(self["webpackChunkvue_hotel_management_project"]=self["webpackChunkvue_hotel_management_project"]||[]).push([[502],{502:function(e,t,o){o.r(t),o.d(t,{default:function(){return f}});var l=function(){var e=this,t=e._self._c;return t("div",[t("el-breadcrumb",{staticStyle:{"font-size":"24px","margin-bottom":"12px"},attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",[e._v("基础信息管理")]),t("el-breadcrumb-item",[e._v("楼层信息管理")])],1),t("el-row",{staticStyle:{"margin-bottom":"12px"},attrs:{gutter:20}},[t("el-col",{attrs:{span:20}},[t("el-input",{staticStyle:{"line-height":"36px"},attrs:{placeholder:"请输入楼层"},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}},[t("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.conditionQuery},slot:"append"})],1)],1),t("el-col",{attrs:{span:2}},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addfloorDialogVisible=!0}}},[e._v(" 添加楼层 ")])],1),t("el-col",{attrs:{span:2}},[t("el-button",{attrs:{type:"danger"},on:{click:function(t){e.massDeletionDialogVisible=!0}}},[e._v(" 批量删除 ")])],1)],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),t("el-table-column",{attrs:{prop:"name",label:"楼层名称",width:"180"}}),t("el-table-column",{attrs:{prop:"remark",label:"备注"}}),t("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.showEditDialog(o.row.id)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.showDeleteDialog(o.row.id)}}},[e._v("删除")])]}}])})],1),t("el-dialog",{attrs:{title:"添加楼层",visible:e.addfloorDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.addfloorDialogVisible=t}}},[t("el-form",{ref:"addfloorFormRef",attrs:{model:e.addfloorForm,rules:e.floorRules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"楼层名称",prop:"name"}},[t("el-input",{model:{value:e.addfloorForm.name,callback:function(t){e.$set(e.addfloorForm,"name",t)},expression:"addfloorForm.name"}})],1),t("el-form-item",{attrs:{label:"备注",prop:"remark"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.addfloorForm.remark,callback:function(t){e.$set(e.addfloorForm,"remark",t)},expression:"addfloorForm.remark"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.addfloorDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.addfloor}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"修改楼层",visible:e.editfloorDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.editfloorDialogVisible=t}}},[t("el-form",{ref:"editfloorFormRef",attrs:{model:e.editfloorForm,rules:e.floorRules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"楼层名称",prop:"name"}},[t("el-input",{model:{value:e.editfloorForm.name,callback:function(t){e.$set(e.editfloorForm,"name",t)},expression:"editfloorForm.name"}})],1),t("el-form-item",{attrs:{label:"备注",prop:"remark"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.editfloorForm.remark,callback:function(t){e.$set(e.editfloorForm,"remark",t)},expression:"editfloorForm.remark"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.editfloorDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.editfloor}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"删除",visible:e.deletionDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.deletionDialogVisible=t}}},[t("span",[e._v("确定要删除该项目吗？")]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.cancelDeleteDialog}},[e._v("取 消")]),t("el-button",{attrs:{type:"danger"},on:{click:e.deleteById}},[e._v("确 定")])],1)]),t("el-dialog",{attrs:{title:"批量删除",visible:e.massDeletionDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.massDeletionDialogVisible=t}}},[t("span",[e._v("确定要批量删除选中的项目吗？")]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.massDeletionDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"danger"},on:{click:e.deleteByIds}},[e._v("确 定")])],1)])],1)},r=[],a=o(6265),i=o.n(a),s=o(8763),n={mounted(){i()({method:"post",url:s.Z.serverSrc+"/login/currentUser",headers:{"Content-Type":"text/plain"},data:window.sessionStorage.getItem("token")}).then((e=>{this.currentUserName=e.data.userName,this.currentUserType=e.data.userType,"管理员"!=this.currentUserType&&(alert(this.currentUserType+"没有此权限"),this.$router.push("/homePage"))})),this.getAllfloors()},methods:{conditionQuery(){var e=!0;for(let o in this.searchForm)""!=this.searchForm[o]&&(e=!1);if(e)this.getAllfloors();else{var t=this;i()({method:"post",url:s.Z.serverSrc+"/floors/search",headers:{"Content-Type":"application/json"},data:JSON.stringify(t.searchForm)}).then((e=>{t.tableData=e.data.data}))}},getAllfloors(){var e=this;i().get(s.Z.serverSrc+"/floors").then((t=>{t.data.code==s.Z.GET_OK?e.tableData=t.data.data:alert(t.data.msg)}))},showEditDialog(e){var t=this;i().get(s.Z.serverSrc+"/floors/"+e).then((e=>{t.editfloorForm=e.data.data})),this.editfloorDialogVisible=!0},handleSelectionChange(e){this.multipleSelection=e},showDeleteDialog(e){this.deletionDialogVisible=!0,this.deleteId=e},cancelDeleteDialog(){this.deleteId=0,this.deletionDialogVisible=!1},deleteByIds(){for(var e=s.Z.serverSrc+"/floors/",t=0;t<this.multipleSelection.length;t++)t==this.multipleSelection.length-1?e+=this.multipleSelection[t].id:e=e+this.multipleSelection[t].id+",";console.log(e),i()["delete"](e).then((e=>{e.data.code==s.Z.DELETE_ERR&&alert("删除失败")})),this.deletionDialogVisible=!1,this.getAllfloors(),window.location.reload()},deleteById(){var e=s.Z.serverSrc+"/floors/";e+=this.deleteId,i()["delete"](e).then((e=>{e.data.code==s.Z.DELETE_ERR&&alert("删除失败")})),this.getAllfloors(),window.location.reload()},massDeletion(){this.deleteByIds(),this.massDeletionDialogVisible=!1},handleSizeChange(e){console.log(`每页 ${e} 条`)},handleCurrentChange(e){console.log(`当前页: ${e}`)},addfloor(){this.$refs.addfloorFormRef.validate((e=>{if(!e)return console.log("error submit!!"),!1;var t=this;i()({method:"post",url:s.Z.serverSrc+"/floors",headers:{"Content-Type":"application/json"},data:JSON.stringify(t.addfloorForm)}).then((e=>{e.data.code==s.Z.SAVE_ERR&&alert("添加失败")})),t.getAllfloors(),window.location.reload(),this.addfloorDialogVisible=!1}))},editfloor(){this.$refs.editfloorFormRef.validate((e=>{if(!e)return console.log("error submit!!"),!1;var t=this;i()({method:"put",url:s.Z.serverSrc+"/floors",headers:{"Content-Type":"application/json"},data:JSON.stringify(t.editfloorForm)}).then((e=>{e.data.code==s.Z.SAVE_ERR&&alert("添加失败")})),this.getAllfloors(),window.location.reload(),this.editfloorDialogVisible=!1}))}},data(){return{massDeletionDialogVisible:!1,deletionDialogVisible:!1,addfloorDialogVisible:!1,addfloorForm:{name:"",remark:""},editfloorDialogVisible:!1,editfloorForm:{name:"",remark:""},floorRules:{name:[{required:!0,message:"请输入楼层名称",trigger:"blur"}]},tableData:[],input:"",currentPage4:0,deleteId:0,multipleSelection:[],searchForm:{}}}},d=n,c=o(3736),m=(0,c.Z)(d,l,r,!1,null,null,null),f=m.exports},8763:function(e,t,o){o.d(t,{Z:function(){return v}});const l="http://localhost:8080",r=20011,a=20021,i=20031,s=20041,n=20010,d=20020,c=20030,m=20040;var f,u,h={serverSrc:l,SAVE_OK:r,DELETE_OK:a,UPDATE_OK:i,GET_OK:s,SAVE_ERR:n,DELETE_ERR:d,UPDATE_ERR:c,GET_ERR:m},p=h,g=o(3736),b=(0,g.Z)(p,f,u,!1,null,null,null),v=b.exports}}]);
//# sourceMappingURL=502.bb0d1f47.js.map