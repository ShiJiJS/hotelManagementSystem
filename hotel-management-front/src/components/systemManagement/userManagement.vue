<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 24px; margin-bottom: 12px;">
      <el-breadcrumb-item>系统管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-row :gutter="20" style="margin-bottom: 12px;">
      <el-col :span="10">
        <el-input style="line-height: 36px;" v-model="searchForm.id" placeholder="请输入用户编号">
        </el-input>
      </el-col>
      <el-col :span="9">
        <el-input style="line-height: 36px;" v-model="searchForm.userName" placeholder="请输入用户名">
        </el-input>
      </el-col>
      <el-col :span="1">
        <el-button icon="el-icon-search" @click="conditionQuery">
        </el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="addUserDialogVisible = true">
          添加用户
        </el-button>
      </el-col>
      <el-col :span="2">
        <el-button @click="massDeletionDialogVisible=true" type="danger">
          批量删除
        </el-button>
      </el-col>
    </el-row>

    <!-- 用户列表 -->
    <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="id" label="编号" width="180">
      </el-table-column>
      <el-table-column prop="userName" label="用户名">
      </el-table-column>
      <el-table-column fixed="right" prop="type" label="权限" width="180">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <!-- 需要在这里加一个slot-scope属性，这样就可以获取到每列的id值 -->
        <template slot-scope="scope">
          <el-button @click="showEditDialog(scope.row.id)" type="primary">编辑</el-button>
          <el-button @click="showDeleteDialog(scope.row.id)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--     <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[20, 50, 100, 200]" :page-size="20"
      layout="total, sizes, prev, pager, next, jumper" :total="400" style="margin-top: 12px;text-align: center;">
    </el-pagination> -->

    <!-- 添加用户对话框 -->
    <el-dialog title="添加用户" :visible.sync="addUserDialogVisible" width="30%" center>
      <el-form :model="addUserForm" :rules="newUserRules" ref="addUserFormRef" label-width="80px">
        <el-form-item label="编号" prop="id">
          <el-input v-model="addUserForm.id"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="addUserForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="addUserForm.password"></el-input>
        </el-form-item>
        <el-form-item label="权限" prop="type">
          <el-select v-model="addUserForm.type" placeholder="请选择权限">
            <el-option label="管理员" value="管理员"></el-option>
            <el-option label="经理" value="经理"></el-option>
            <el-option label="前台人员" value="前台人员"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="addUserForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addUserDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 修改用户对话框 -->
    <el-dialog title="修改用户" :visible.sync="editUserDialogVisible" width="30%" center>
      <el-form :model="editUserForm" :rules="editUserRules" ref="editUserFormRef" label-width="80px">
        <el-form-item label="编号" prop="id">
          <el-input v-model="editUserForm.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="editUserForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="editUserForm.password"></el-input>
        </el-form-item>
        <el-form-item label="权限" prop="type">
          <el-select v-model="editUserForm.type" placeholder="请选择权限">
            <el-option label="管理员" value="管理员"></el-option>
            <el-option label="经理" value="经理"></el-option>
            <el-option label="前台人员" value="前台人员"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="editUserForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editUserDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUser">确 定</el-button>
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

    <!-- 批量删除对话框 -->
    <el-dialog title="批量删除" :visible.sync="massDeletionDialogVisible" width="30%" center>
      <span>确定要批量删除选中的项目吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="massDeletionDialogVisible = false">取 消</el-button>
        <el-button type="danger" @click="massDeletion">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<!--别找了，很多按钮的点击事件并没有预留methods，自己写吧-->
<script>
import axios from 'axios'
import global_ from '../globalVar.vue'
export default {
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
    this.getAllUsers()
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
        this.getAllUsers()
      } else {
        var _this = this
        axios({
          method: 'post',
          url: global_.serverSrc + '/users/search',
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify(_this.searchForm),
        }).then((resopnse) => {
          _this.tableData = resopnse.data.data
        })
      }
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    //处理复选框变化
    handleSelectionChange(val) {
      this.multipleSelection = val
    },

    getAllUsers() {
      //保留axios外的this指针
      var _this = this
      axios.get(global_.serverSrc + '/users').then((resopnse) => {
        if (resopnse.data.code == global_.GET_OK) {
          _this.tableData = resopnse.data.data
        } else {
          alert(resopnse.data.msg)
        }
      })
    },

    //添加用户请求
    addUser() {
      this.$refs.addUserFormRef.validate((valid) => {
        if (valid) {
          var _this = this
          axios({
            method: 'post',
            url: global_.serverSrc + '/users',
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify(_this.addUserForm),
          }).then((resopnse) => {
            if (resopnse.data.code == global_.SAVE_ERR) {
              alert('添加失败')
            }
          })
          //刷新用户列表
          _this.getAllUsers()
          window.location.reload()
          this.addUserDialogVisible = false
        } else {
          return false
        }
      })
    },

    //点击编辑按钮后的事件
    showEditDialog(id) {
      // 发送请求通过id拿到用户的旧数据，填在表格里
      var _this = this
      axios.get(global_.serverSrc + '/users/' + id).then((resopnse) => {
        _this.editUserForm = resopnse.data.data
        this.currentEditingUserName = resopnse.data.data.userName
      })
      this.editUserDialogVisible = true
    },

    showDeleteDialog(id) {
      //把id存储起来
      this.deletionDialogVisible = true
      this.deleteId = id
    },
    cancelDeleteDialog() {
      //清空要删除的id序列
      this.deleteId = 0
      this.deletionDialogVisible = false
    },

    deleteByIds() {
      var url = global_.serverSrc + '/users/'
      //拼接删除用字符串
      for (var i = 0; i < this.multipleSelection.length; i++) {
        //如果为最后一个则不加逗号
        if (i == this.multipleSelection.length - 1) {
          url = url + this.multipleSelection[i].id
        } else {
          url = url + this.multipleSelection[i].id + ','
        }
      }
      console.log(url)
      //发送删除请求
      axios.delete(url).then((resopnse) => {
        if (resopnse.data.code == global_.DELETE_ERR) {
          alert('删除失败')
        }
      })

      this.deletionDialogVisible = false

      //刷新用户列表
      this.getAllUsers()
      window.location.reload()
    },

    deleteById() {
      var url = global_.serverSrc + '/users/'
      url = url + this.deleteId
      axios.delete(url).then((resopnse) => {
        if (resopnse.data.code == global_.DELETE_ERR) {
          alert('删除失败')
        }
      })

      //刷新用户列表
      this.getAllUsers()
      window.location.reload()
    },
    massDeletion() {
      this.deleteByIds()
      this.massDeletionDialogVisible = false
    },

    //修改用户对话框点击提交按钮后的事件
    editUser() {
      this.$refs.editUserFormRef.validate((valid) => {
        if (valid) {
          var _this = this
          axios({
            method: 'put',
            url: global_.serverSrc + '/users',
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify(_this.editUserForm),
          }).then((resopnse) => {
            if (resopnse.data.code == global_.SAVE_ERR) {
              alert('添加失败')
            }
          })
          this.editUserDialogVisible = false
          this.getAllUsers()
          window.location.reload()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  },

  data() {
    var validateNewID = (rule, value, callback) => {
      for (var i in this.tableData) {
        if (value == this.tableData[i].id) {
          callback(new Error('编号重复'))
        }
      }
      callback()
    }

    var validateNewUserName = (rule, value, callback) => {
      for (var i in this.tableData) {
        if (value == this.tableData[i].userName) {
          callback(new Error('用户名重复'))
        }
      }
      callback()
    }

    var validateEditUserName = (rule, value, callback) => {
      for (var i in this.tableData) {
        if (value == this.tableData[i].userName) {
          if (value != this.currentEditingUserName) {
            callback(new Error('用户名重复'))
          }
        }
      }
      callback()
    }

    return {
      massDeletionDialogVisible: false,
      deletionDialogVisible: false,
      addUserDialogVisible: false,
      currentEditingUserName: '',
      addUserForm: {
        id: '',
        userName: '',
        password: '',
        type: '',
        remark: '',
      },
      editUserDialogVisible: false,
      editUserForm: {},
      newUserRules: {
        id: [
          { required: true, message: '请输入编号', trigger: 'blur' },
          { validator: validateNewID, trigger: 'blur' },
        ],
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { validator: validateNewUserName, trigger: 'blur' },
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        type: [{ required: true, message: '请选择权限', trigger: 'change' }],
      },
      editUserRules: {
        id: [{ required: true, message: '请输入编号', trigger: 'blur' }],
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { validator: validateEditUserName, trigger: 'blur' },
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        type: [{ required: true, message: '请选择权限', trigger: 'change' }],
      },
      tableData: [],
      input: '',
      currentPage4: 0,
      //存储删除按钮对应的id
      deleteId: 0,
      //存储复选框勾选的对象
      multipleSelection: [],
      searchForm: {},
    }
  },
}
</script>