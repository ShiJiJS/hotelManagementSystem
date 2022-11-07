"use strict";(self["webpackChunkvue_hotel_management_project"]=self["webpackChunkvue_hotel_management_project"]||[]).push([[555],{1555:function(e,t,o){o.r(t),o.d(t,{default:function(){return g}});var l=function(){var e=this,t=e._self._c;return t("div",[t("el-breadcrumb",{staticStyle:{"font-size":"24px","margin-bottom":"12px"},attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",[e._v("基础信息管理")]),t("el-breadcrumb-item",[e._v("商品类别管理")])],1),t("el-row",{staticStyle:{"margin-bottom":"12px"},attrs:{gutter:20}},[t("el-col",{attrs:{span:20}},[t("el-input",{staticStyle:{"line-height":"36px"},attrs:{placeholder:"请输入商品类别"},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}},[t("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.conditionQuery},slot:"append"})],1)],1),t("el-col",{attrs:{span:2}},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addgoodsTypeDialogVisible=!0}}},[e._v(" 添加类别 ")])],1),t("el-col",{attrs:{span:2}},[t("el-button",{attrs:{type:"danger"},on:{click:function(t){e.massDeletionDialogVisible=!0}}},[e._v(" 批量删除 ")])],1)],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),t("el-table-column",{attrs:{prop:"id",label:"类别代码",width:"180"}}),t("el-table-column",{attrs:{prop:"name",label:"类别名称",width:"180"}}),t("el-table-column",{attrs:{prop:"remark",label:"备注"}}),t("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.showEditDialog(o.row.id)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.showDeleteDialog(o.row.id)}}},[e._v("删除")])]}}])})],1),t("el-dialog",{attrs:{title:"添加类别",visible:e.addgoodsTypeDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.addgoodsTypeDialogVisible=t}}},[t("el-form",{ref:"addgoodsTypeFormRef",attrs:{model:e.addgoodsTypeForm,rules:e.goodsTypeRules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"类别名称",prop:"name"}},[t("el-input",{model:{value:e.addgoodsTypeForm.name,callback:function(t){e.$set(e.addgoodsTypeForm,"name",t)},expression:"addgoodsTypeForm.name"}})],1),t("el-form-item",{attrs:{label:"备注",prop:"remark"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.addgoodsTypeForm.remark,callback:function(t){e.$set(e.addgoodsTypeForm,"remark",t)},expression:"addgoodsTypeForm.remark"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.addgoodsTypeDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.addgoodsType}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"修改类别",visible:e.editgoodsTypeDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.editgoodsTypeDialogVisible=t}}},[t("el-form",{ref:"editgoodsTypeFormRef",attrs:{model:e.editgoodsTypeForm,rules:e.goodsTypeRules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"类别代码",prop:"id"}},[t("el-input",{attrs:{disabled:""},model:{value:e.editgoodsTypeForm.id,callback:function(t){e.$set(e.editgoodsTypeForm,"id",t)},expression:"editgoodsTypeForm.id"}})],1),t("el-form-item",{attrs:{label:"类别名称",prop:"name"}},[t("el-input",{model:{value:e.editgoodsTypeForm.name,callback:function(t){e.$set(e.editgoodsTypeForm,"name",t)},expression:"editgoodsTypeForm.name"}})],1),t("el-form-item",{attrs:{label:"备注",prop:"remark"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.editgoodsTypeForm.remark,callback:function(t){e.$set(e.editgoodsTypeForm,"remark",t)},expression:"editgoodsTypeForm.remark"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.editgoodsTypeDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.editgoodsType}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"删除",visible:e.deletionDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.deletionDialogVisible=t}}},[t("span",[e._v("确定要删除该项目吗？")]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.cancelDeleteDialog}},[e._v("取 消")]),t("el-button",{attrs:{type:"danger"},on:{click:e.deleteById}},[e._v("确 定")])],1)]),t("el-dialog",{attrs:{title:"批量删除",visible:e.massDeletionDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.massDeletionDialogVisible=t}}},[t("span",[e._v("确定要批量删除选中的项目吗？")]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.massDeletionDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"danger"},on:{click:e.deleteByIds}},[e._v("确 定")])],1)])],1)},a=[],i=o(6265),s=o.n(i),r=o(8763),d={mounted(){s()({method:"post",url:r.Z.serverSrc+"/login/currentUser",headers:{"Content-Type":"text/plain"},data:window.sessionStorage.getItem("token")}).then((e=>{this.currentUserName=e.data.userName,this.currentUserType=e.data.userType,"管理员"!=this.currentUserType&&(alert(this.currentUserType+"没有此权限"),this.$router.push("/homePage"))})),this.getAllGoodsTypes()},methods:{conditionQuery(){var e=!0;for(let o in this.searchForm)""!=this.searchForm[o]&&(e=!1);if(e)this.getAllGoodsTypes();else{var t=this;s()({method:"post",url:r.Z.serverSrc+"/goodsTypes/search",headers:{"Content-Type":"application/json"},data:JSON.stringify(t.searchForm)}).then((e=>{t.tableData=e.data.data}))}},getAllGoodsTypes(){var e=this;s().get(r.Z.serverSrc+"/goodsTypes").then((t=>{t.data.code==r.Z.GET_OK?e.tableData=t.data.data:alert(t.data.msg)}))},showEditDialog(e){var t=this;s().get(r.Z.serverSrc+"/goodsTypes/"+e).then((e=>{t.editgoodsTypeForm=e.data.data})),this.editgoodsTypeDialogVisible=!0},handleSelectionChange(e){this.multipleSelection=e},showDeleteDialog(e){this.deletionDialogVisible=!0,this.deleteId=e},cancelDeleteDialog(){this.deleteId=0,this.deletionDialogVisible=!1},deleteByIds(){for(var e=r.Z.serverSrc+"/goodsTypes/",t=0;t<this.multipleSelection.length;t++)t==this.multipleSelection.length-1?e+=this.multipleSelection[t].id:e=e+this.multipleSelection[t].id+",";s()["delete"](e).then((e=>{e.data.code==r.Z.DELETE_ERR&&alert("删除失败")})),this.deletionDialogVisible=!1,this.getAllGoodsTypes(),window.location.reload()},deleteById(){var e=r.Z.serverSrc+"/goodsTypes/";e+=this.deleteId,s()["delete"](e).then((e=>{e.data.code==r.Z.DELETE_ERR&&alert("删除失败")})),this.getAllGoodsTypes(),window.location.reload()},massDeletion(){this.deleteByIds(),this.massDeletionDialogVisible=!1},handleSizeChange(e){console.log(`每页 ${e} 条`)},handleCurrentChange(e){console.log(`当前页: ${e}`)},addgoodsType(){this.$refs.addgoodsTypeFormRef.validate((e=>{if(!e)return console.log("error submit!!"),!1;var t=this;s()({method:"post",url:r.Z.serverSrc+"/goodsTypes",headers:{"Content-Type":"application/json"},data:JSON.stringify(t.addgoodsTypeForm)}).then((e=>{e.data.code==r.Z.SAVE_ERR&&alert("添加失败")})),t.getAllGoodsTypes(),window.location.reload(),this.addgoodsTypeDialogVisible=!1}))},editgoodsType(){this.$refs.editgoodsTypeFormRef.validate((e=>{if(!e)return console.log("error submit!!"),!1;var t=this;s()({method:"put",url:r.Z.serverSrc+"/goodsTypes",headers:{"Content-Type":"application/json"},data:JSON.stringify(t.editgoodsTypeForm)}).then((e=>{e.data.code==r.Z.SAVE_ERR&&alert("添加失败")})),this.getAllGoodsTypes(),window.location.reload(),this.editgoodsTypeDialogVisible=!1}))}},data(){return{massDeletionDialogVisible:!1,deletionDialogVisible:!1,addgoodsTypeDialogVisible:!1,addgoodsTypeForm:{id:"",name:"",remark:""},editgoodsTypeDialogVisible:!1,editgoodsTypeForm:{id:"",name:"",remark:""},goodsTypeRules:{id:[{required:!0,message:"请输入类别代码",trigger:"blur"}],name:[{required:!0,message:"请输入类别名称",trigger:"blur"}]},tableData:[],input:"",currentPage4:0,deleteId:0,multipleSelection:[],searchForm:{}}}},n=d,p=o(3736),c=(0,p.Z)(n,l,a,!1,null,null,null),g=c.exports},8763:function(e,t,o){o.d(t,{Z:function(){return T}});const l="http://localhost:8080",a=20011,i=20021,s=20031,r=20041,d=20010,n=20020,p=20030,c=20040;var g,m,u={serverSrc:l,SAVE_OK:a,DELETE_OK:i,UPDATE_OK:s,GET_OK:r,SAVE_ERR:d,DELETE_ERR:n,UPDATE_ERR:p,GET_ERR:c},h=u,y=o(3736),b=(0,y.Z)(h,g,m,!1,null,null,null),T=b.exports}}]);
//# sourceMappingURL=555.06fa5252.js.map