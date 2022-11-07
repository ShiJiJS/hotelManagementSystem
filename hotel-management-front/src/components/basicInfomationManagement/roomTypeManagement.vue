<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 24px; margin-bottom: 12px;">
      <el-breadcrumb-item>基础信息管理</el-breadcrumb-item>
      <el-breadcrumb-item>客房类型管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="20" style="margin-bottom: 12px;">
      <el-col :span="20">
        <el-input style="line-height: 36px;" v-model="searchForm.type" placeholder="请输入客房类别">
          <el-button slot="append" icon="el-icon-search" @click="conditionQuery">
          </el-button>
        </el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="addRoomTypeDialogVisible = true">
          添加类型
        </el-button>
      </el-col>
      <el-col :span="2">
        <el-button @click="massDeletionDialogVisible=true" type="danger">
          批量删除
        </el-button>
      </el-col>
    </el-row>

    <!-- 基础列表 -->
    <!-- 更改@selection-change scope -->
    <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="type" label="类型名称" width="180">
      </el-table-column>
      <el-table-column prop="numberOfPerson" label="额定人数" width="180">
      </el-table-column>
      <el-table-column prop="remark" label="备注">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <!-- 这里需要更改slot-scope -->
        <template slot-scope="scope">
          <el-button @click="showEditDialog(scope.row.id)" type="primary">编辑</el-button>
          <el-button @click="showDeleteDialog(scope.row.id)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--     <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[20, 50, 100, 200]" :page-size="20"
      layout="total, sizes, prev, pager, next, jumper" :total="400" style="margin-top: 12px;text-align: center;">
    </el-pagination> -->

    <!-- 添加类型对话框 -->
    <el-dialog title="添加类型" :visible.sync="addRoomTypeDialogVisible" width="30%" center>
      <el-form :model="addRoomTypeForm" :rules="RoomTypeRules" ref="addRoomTypeFormRef" label-width="80px">
        <el-form-item label="类型名称" prop="type">
          <el-input v-model="addRoomTypeForm.type"></el-input>
        </el-form-item>
        <el-form-item label="额定人数" prop="numberOfPerson">
          <el-input v-model="addRoomTypeForm.numberOfPerson"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="addRoomTypeForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addRoomTypeDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addRoomType">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 修改类型对话框 -->
    <el-dialog title="修改类型" :visible.sync="editRoomTypeDialogVisible" width="30%" center>
      <el-form :model="editRoomTypeForm" :rules="RoomTypeRules" ref="editRoomTypeFormRef" label-width="80px">
        <el-form-item label="类型名称" prop="type">
          <el-input v-model="editRoomTypeForm.type"></el-input>
        </el-form-item>
        <el-form-item label="额定人数" prop="numberOfPerson">
          <el-input v-model="editRoomTypeForm.numberOfPerson"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="editRoomTypeForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editRoomTypeDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editRoomType">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 删除对话框 -->
    <el-dialog title="删除" :visible.sync="deletionDialogVisible" width="30%" center>
      <span>确定要删除该项目吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelDeleteDialog">取 消</el-button>
        <el-button type="danger" @click="deleteById">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="批量删除" :visible.sync="massDeletionDialogVisible" width="30%" center>
      <span>确定要批量删除选中的项目吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="massDeletionDialogVisible = false">取 消</el-button>
        <el-button type="danger" @click="deleteByIds">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<!--别找了，很多按钮的点击事件并没有预留methods，自己写吧-->
<script>
import axios from 'axios'
import global_ from '../globalVar.vue'
export default {
  //挂载时的事件
  mounted() {
    axios({
      method: 'post',
      url: global_.serverSrc + '/login/currentUser',
      headers: {
        'Content-Type': 'text/plain',
      },
      data: window.sessionStorage.getItem('token'),
    }).then((response) => {
      this.currentUserName = response.data.userName
      this.currentUserType = response.data.userType
      if (this.currentUserType != '管理员') {
        alert(this.currentUserType + '没有此权限')
        this.$router.push('/homePage')
      }
    })
    this.getAllRoomTypes()
  },
  methods: {
    //条件查询
    conditionQuery() {
      //判断是否应重新获取列表
      var flag = true
      for (let i in this.searchForm) {
        if (this.searchForm[i] != '') flag = false
      }

      if (flag) {
        this.getAllRoomTypes()
      } else {
        var _this = this
        axios({
          method: 'post',
          url: global_.serverSrc + '/roomTypes/search',
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify(_this.searchForm),
        }).then((resopnse) => {
          _this.tableData = resopnse.data.data
        })
      }
    },
    //获取所有信息
    getAllRoomTypes() {
      var _this = this
      axios.get(global_.serverSrc + '/roomTypes').then((resopnse) => {
        if (resopnse.data.code == global_.GET_OK) {
          _this.tableData = resopnse.data.data
        } else {
          alert(resopnse.data.msg)
        }
      })
    },

    //显示编辑对话框
    showEditDialog(id) {
      // 发送请求通过id拿到旧数据，填在表格里
      var _this = this
      axios.get(global_.serverSrc + '/roomTypes/' + id).then((resopnse) => {
        _this.editRoomTypeForm = resopnse.data.data
      })
      this.editRoomTypeDialogVisible = true
    },

    //处理多选框
    handleSelectionChange(val) {
      this.multipleSelection = val
    },

    //点击删除按钮时触发的事件
    showDeleteDialog(id) {
      //把id存储起来
      this.deletionDialogVisible = true
      this.deleteId = id
    },

    //删除对话框点击取消时触发的事件
    cancelDeleteDialog() {
      //清空要删除的id序列
      this.deleteId = 0
      this.deletionDialogVisible = false
    },

    //按照id批量删除
    deleteByIds() {
      var url = global_.serverSrc + '/roomTypes/'
      //拼接删除用字符串
      for (var i = 0; i < this.multipleSelection.length; i++) {
        //如果为最后一个则不加逗号
        if (i == this.multipleSelection.length - 1) {
          url = url + this.multipleSelection[i].id
        } else {
          url = url + this.multipleSelection[i].id + ','
        }
      }
      //发送删除请求
      axios.delete(url).then((resopnse) => {
        if (resopnse.data.code == global_.DELETE_ERR) {
          alert('删除失败')
        }
      })

      this.deletionDialogVisible = false

      //刷新用户列表
      this.getAllRoomTypes()
      window.location.reload()
    },

    //按照id删除单个
    deleteById() {
      var url = global_.serverSrc + '/roomTypes/'
      url = url + this.deleteId
      axios.delete(url).then((resopnse) => {
        if (resopnse.data.code == global_.DELETE_ERR) {
          alert('删除失败')
        }
      })

      //刷新用户列表
      this.getAllRoomTypes()
      window.location.reload()
    },

    //批量删除对话框确定时触发的事件
    massDeletion() {
      this.deleteByIds()
      this.massDeletionDialogVisible = false
    },

    //打开表格点击确定后添加的请求写在这里
    addRoomType() {
      this.$refs.addRoomTypeFormRef.validate((valid) => {
        if (valid) {
          var _this = this
          axios({
            method: 'post',
            url: global_.serverSrc + '/roomTypes',
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify(_this.addRoomTypeForm),
          }).then((resopnse) => {
            if (resopnse.data.code == global_.SAVE_ERR) {
              alert('添加失败')
            }
          })
          //刷新列表
          _this.getAllRoomTypes()
          window.location.reload()
          this.addRoomTypeDialogVisible = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    //打开表格点击确定后修改的请求写在这里
    editRoomType() {
      this.$refs.editRoomTypeFormRef.validate((valid) => {
        if (valid) {
          var _this = this
          axios({
            method: 'put',
            url: global_.serverSrc + '/checkOutInfos',
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify(_this.editRoomTypeForm),
          }).then((resopnse) => {
            if (resopnse.data.code == global_.SAVE_ERR) {
              alert('添加失败')
            }
          })
          this.getAllRoomTypes()
          window.location.reload()
          this.editRoomTypeDialogVisible = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
  },

  data() {
    return {
      massDeletionDialogVisible: false,
      deletionDialogVisible: false,
      addRoomTypeDialogVisible: false,
      addRoomTypeForm: {
        type: '',
        numberOfPerson: '',
        remark: '',
      },
      editRoomTypeDialogVisible: false,
      editRoomTypeForm: {
        type: '',
        numberOfPerson: '',
        remark: '',
      },
      RoomTypeRules: {
        type: [{ required: true, message: '请输入类型名称', trigger: 'blur' }],
        numberOfPerson: [
          { required: true, message: '请输入额定人数', trigger: 'blur' },
        ],
      },
      tableData: [],
      //new
      input: '',
      currentPage4: 0,
      deleteId: 0,
      multipleSelection: [],
      searchForm: {},
    }
  },
}
</script>