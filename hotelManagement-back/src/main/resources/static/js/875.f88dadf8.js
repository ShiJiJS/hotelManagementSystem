"use strict";(self["webpackChunkvue_hotel_management_project"]=self["webpackChunkvue_hotel_management_project"]||[]).push([[875],{9875:function(e,t,o){o.r(t),o.d(t,{default:function(){return m}});var l=function(){var e=this,t=e._self._c;return t("div",[t("el-breadcrumb",{staticStyle:{"font-size":"24px","margin-bottom":"12px"},attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",[e._v("基础信息管理")]),t("el-breadcrumb-item",[e._v("商品管理")])],1),t("el-row",{staticStyle:{"margin-bottom":"12px"},attrs:{gutter:20}},[t("el-col",{attrs:{span:20}},[t("el-input",{staticStyle:{"line-height":"36px"},attrs:{placeholder:"请输入商品类别"},model:{value:e.searchForm.type,callback:function(t){e.$set(e.searchForm,"type",t)},expression:"searchForm.type"}},[t("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.conditionQuery},slot:"append"})],1)],1),t("el-col",{attrs:{span:2}},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addgoodsDialogVisible=!0}}},[e._v(" 添加商品 ")])],1),t("el-col",{attrs:{span:2}},[t("el-button",{attrs:{type:"danger"},on:{click:function(t){e.massDeletionDialogVisible=!0}}},[e._v(" 批量删除 ")])],1)],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),t("el-table-column",{attrs:{prop:"id",label:"商品代码",width:"180"}}),t("el-table-column",{attrs:{prop:"name",label:"商品名称",width:"180"}}),t("el-table-column",{attrs:{prop:"type",label:"商品类别",width:"180"}}),t("el-table-column",{attrs:{prop:"price",label:"商品价格",width:"180"}}),t("el-table-column",{attrs:{prop:"unit",label:"商品单位",width:"180"}}),t("el-table-column",{attrs:{prop:"remark",label:"备注"}}),t("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.showEditDialog(o.row.id)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.showDeleteDialog(o.row.id)}}},[e._v("删除")])]}}])})],1),t("el-dialog",{attrs:{title:"添加商品",visible:e.addgoodsDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.addgoodsDialogVisible=t}}},[t("el-form",{ref:"addgoodsFormRef",attrs:{model:e.addgoodsForm,rules:e.goodsRules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"商品名称",prop:"name"}},[t("el-input",{model:{value:e.addgoodsForm.name,callback:function(t){e.$set(e.addgoodsForm,"name",t)},expression:"addgoodsForm.name"}})],1),t("el-form-item",{attrs:{label:"商品类别",prop:"type"}},[t("el-select",{attrs:{placeholder:"请选择商品类别"},model:{value:e.addgoodsForm.type,callback:function(t){e.$set(e.addgoodsForm,"type",t)},expression:"addgoodsForm.type"}},e._l(e.goodsTypes,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})})),1)],1),t("el-form-item",{attrs:{label:"商品价格",prop:"price"}},[t("el-input",{model:{value:e.addgoodsForm.price,callback:function(t){e.$set(e.addgoodsForm,"price",t)},expression:"addgoodsForm.price"}})],1),t("el-form-item",{attrs:{label:"商品单位",prop:"unit"}},[t("el-input",{model:{value:e.addgoodsForm.unit,callback:function(t){e.$set(e.addgoodsForm,"unit",t)},expression:"addgoodsForm.unit"}})],1),t("el-form-item",{attrs:{label:"备注",prop:"remark"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.addgoodsForm.remark,callback:function(t){e.$set(e.addgoodsForm,"remark",t)},expression:"addgoodsForm.remark"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.addgoodsDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.addgoods}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"修改类别",visible:e.editgoodsDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.editgoodsDialogVisible=t}}},[t("el-form",{ref:"editgoodsFormRef",attrs:{model:e.editgoodsForm,rules:e.goodsRules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"商品代码",prop:"id"}},[t("el-input",{attrs:{disabled:""},model:{value:e.editgoodsForm.id,callback:function(t){e.$set(e.editgoodsForm,"id",t)},expression:"editgoodsForm.id"}})],1),t("el-form-item",{attrs:{label:"商品名称",prop:"name"}},[t("el-input",{model:{value:e.editgoodsForm.name,callback:function(t){e.$set(e.editgoodsForm,"name",t)},expression:"editgoodsForm.name"}})],1),t("el-form-item",{attrs:{label:"商品类别",prop:"type"}},[t("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.editgoodsForm.type,callback:function(t){e.$set(e.editgoodsForm,"type",t)},expression:"editgoodsForm.type"}},e._l(e.goodsTypes,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})})),1)],1),t("el-form-item",{attrs:{label:"商品价格",prop:"price"}},[t("el-input",{model:{value:e.editgoodsForm.price,callback:function(t){e.$set(e.editgoodsForm,"price",t)},expression:"editgoodsForm.price"}})],1),t("el-form-item",{attrs:{label:"商品单位",prop:"unit"}},[t("el-input",{model:{value:e.editgoodsForm.unit,callback:function(t){e.$set(e.editgoodsForm,"unit",t)},expression:"editgoodsForm.unit"}})],1),t("el-form-item",{attrs:{label:"备注",prop:"remark"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.editgoodsForm.remark,callback:function(t){e.$set(e.editgoodsForm,"remark",t)},expression:"editgoodsForm.remark"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.editgoodsDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.editgoods}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"删除",visible:e.deletionDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.deletionDialogVisible=t}}},[t("span",[e._v("确定要删除该项目吗？")]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.cancelDeleteDialog}},[e._v("取 消")]),t("el-button",{attrs:{type:"danger"},on:{click:e.deleteById}},[e._v("确 定")])],1)]),t("el-dialog",{attrs:{title:"批量删除",visible:e.massDeletionDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.massDeletionDialogVisible=t}}},[t("span",[e._v("确定要批量删除选中的项目吗？")]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.massDeletionDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"danger"},on:{click:e.deleteByIds}},[e._v("确 定")])],1)])],1)},a=[],i=o(6265),r=o.n(i),s=o(8763),d={mounted(){r()({method:"post",url:s.Z.serverSrc+"/login/currentUser",headers:{"Content-Type":"text/plain"},data:window.sessionStorage.getItem("token")}).then((e=>{this.currentUserName=e.data.userName,this.currentUserType=e.data.userType,"管理员"!=this.currentUserType&&(alert(this.currentUserType+"没有此权限"),this.$router.push("/homePage"))})),this.getAllGoods(),this.getAllGoodsTypes()},methods:{conditionQuery(){var e=!0;for(let o in this.searchForm)""!=this.searchForm[o]&&(e=!1);if(e)this.getAllGoods();else{var t=this;r()({method:"post",url:s.Z.serverSrc+"/goods/search",headers:{"Content-Type":"application/json"},data:JSON.stringify(t.searchForm)}).then((e=>{t.tableData=e.data.data}))}},getAllGoodsTypes(){var e=this;r().get(s.Z.serverSrc+"/goodsTypes").then((t=>{t.data.code==s.Z.GET_OK?e.goodsTypes=t.data.data:alert(t.data.msg)}))},getAllGoods(){var e=this;r().get(s.Z.serverSrc+"/goods").then((t=>{t.data.code==s.Z.GET_OK?e.tableData=t.data.data:alert(t.data.msg)}))},showEditDialog(e){var t=this;r().get(s.Z.serverSrc+"/goods/"+e).then((e=>{t.editgoodsForm=e.data.data})),this.editgoodsDialogVisible=!0},handleSelectionChange(e){this.multipleSelection=e},showDeleteDialog(e){this.deletionDialogVisible=!0,this.deleteId=e},cancelDeleteDialog(){this.deleteId=0,this.deletionDialogVisible=!1},deleteByIds(){for(var e=s.Z.serverSrc+"/goods/",t=0;t<this.multipleSelection.length;t++)t==this.multipleSelection.length-1?e+=this.multipleSelection[t].id:e=e+this.multipleSelection[t].id+",";r()["delete"](e).then((e=>{e.data.code==s.Z.DELETE_ERR&&alert("删除失败")})),this.deletionDialogVisible=!1,this.getAllGoods(),window.location.reload()},deleteById(){var e=s.Z.serverSrc+"/goods/";e+=this.deleteId,r()["delete"](e).then((e=>{e.data.code==s.Z.DELETE_ERR&&alert("删除失败")})),this.getAllGoods(),window.location.reload()},massDeletion(){this.deleteByIds(),this.massDeletionDialogVisible=!1},handleSizeChange(e){console.log(`每页 ${e} 条`)},handleCurrentChange(e){console.log(`当前页: ${e}`)},addgoods(){this.$refs.addgoodsFormRef.validate((e=>{if(!e)return console.log("error submit!!"),!1;var t=this;r()({method:"post",url:s.Z.serverSrc+"/goods",headers:{"Content-Type":"application/json"},data:JSON.stringify(t.addgoodsForm)}).then((e=>{e.data.code==s.Z.SAVE_ERR&&alert("添加失败")})),t.getAllGoods(),window.location.reload(),this.addgoodsDialogVisible=!1}))},editgoods(){this.$refs.editgoodsFormRef.validate((e=>{if(!e)return console.log("error submit!!"),!1;var t=this;r()({method:"put",url:s.Z.serverSrc+"/goods",headers:{"Content-Type":"application/json"},data:JSON.stringify(t.editgoodsForm)}).then((e=>{e.data.code==s.Z.SAVE_ERR&&alert("添加失败")})),this.getAllGoods(),window.location.reload(),this.editgoodsDialogVisible=!1}))}},data(){return{massDeletionDialogVisible:!1,deletionDialogVisible:!1,addgoodsDialogVisible:!1,addgoodsForm:{id:"",name:"",type:"",price:"",unit:"",remark:""},editgoodsDialogVisible:!1,editgoodsForm:{id:"",name:"",type:"",price:"",unit:"",remark:""},goodsRules:{id:[{required:!0,message:"请输入商品代码",trigger:"blur"}],name:[{required:!0,message:"请输入商品名称",trigger:"blur"}],type:[{required:!0,message:"请输入商品类别",trigger:"blur"}],price:[{required:!0,message:"请输入商品价格",trigger:"blur"}],unit:[{required:!0,message:"请输入商品单位",trigger:"blur"}]},tableData:[],input:"",currentPage4:0,deleteId:0,multipleSelection:[],goodsTypes:[],searchForm:{}}}},n=d,c=o(3736),g=(0,c.Z)(n,l,a,!1,null,null,null),m=g.exports},8763:function(e,t,o){o.d(t,{Z:function(){return v}});const l="http://localhost:8080",a=20011,i=20021,r=20031,s=20041,d=20010,n=20020,c=20030,g=20040;var m,p,u={serverSrc:l,SAVE_OK:a,DELETE_OK:i,UPDATE_OK:r,GET_OK:s,SAVE_ERR:d,DELETE_ERR:n,UPDATE_ERR:c,GET_ERR:g},b=u,h=o(3736),f=(0,h.Z)(b,m,p,!1,null,null,null),v=f.exports}}]);
//# sourceMappingURL=875.f88dadf8.js.map