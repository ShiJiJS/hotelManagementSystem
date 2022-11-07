<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 24px; margin-bottom: 12px;">
      <el-breadcrumb-item>系统管理</el-breadcrumb-item>
      <el-breadcrumb-item>会员管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="20" style="margin-bottom: 12px;">
      <el-col :span="10">
        <el-input style="line-height: 36px;" v-model="searchForm.id" placeholder="请输入会员编号">
        </el-input>
      </el-col>
      <el-col :span="10">
        <el-input style="line-height: 36px;" v-model="searchForm.name" placeholder="请输入会员名">
          <el-button slot="append" icon="el-icon-search" @click="conditionQuery">
          </el-button>
        </el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="addVipDialogVisible = true">
          添加会员
        </el-button>
      </el-col>
      <el-col :span="2">
        <el-button @click="massDeletionDialogVisible=true" type="danger">
          批量删除
        </el-button>
      </el-col>
    </el-row>

    <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="id" label="编号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="gender" label="性别" width="90">
      </el-table-column>
      <el-table-column prop="phoneNumber" label="电话">
      </el-table-column>
      <el-table-column fixed="right" prop="mark" label="积分" width="180">
      </el-table-column>
      <el-table-column fixed="right" prop="level" label="等级" width="90">
      </el-table-column>
      <el-table-column fixed="right" prop="latestCheckInTime" label="最后一次入住时间" width="180">
      </el-table-column>
      <el-table-column fixed="right" prop="latestReserveTime" label="最后一次预约时间" width="180">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="showEditDialog(scope.row.id)" type="primary">编辑</el-button>
          <el-button @click="showDeleteDialog(scope.row.id)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加对话框 -->
    <!--     <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[20, 50, 100, 200]" :page-size="20"
      layout="total, sizes, prev, pager, next, jumper" :total="400" style="margin-top: 12px;text-align: center;">
    </el-pagination> -->
    <el-dialog title="添加会员" :visible.sync="addVipDialogVisible" width="30%" center>
      <el-form :model="addVipForm" :rules="VipRules" ref="addVipFormRef" label-width="80px">
        <!-- <el-form-item label="编号" prop="id">
          <el-input v-model="addVipForm.id"></el-input>
        </el-form-item> -->
        <el-form-item label="姓名" prop="name">
          <el-input v-model="addVipForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-input v-model="addVipForm.gender"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="addVipForm.password"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="phoneNumber">
          <el-input v-model="addVipForm.phoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="addVipForm.address"></el-input>
        </el-form-item>
        <el-form-item label="E-mail" prop="email">
          <el-input v-model="addVipForm.email"></el-input>
        </el-form-item>
        <el-form-item label="积分" prop="mark">
          <el-input v-model="addVipForm.mark"></el-input>
        </el-form-item>
        <el-form-item label="等级" prop="level">
          <el-select v-model="addVipForm.level" placeholder="请选择等级">
            <el-option label="普通" value="普通"></el-option>
            <el-option label="VIP" value="VIP"></el-option>
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="最后一次入住时间" prop="latestCheckInTime">
          <el-input v-model="addVipForm.latestCheckInTime"></el-input>
        </el-form-item>
        <el-form-item label="最后一次预约时间" prop="latestReserveTime">
          <el-input v-model="addVipForm.latestReserveTime"></el-input>
        </el-form-item> -->

        <el-form-item label="最后一次入住时间" prop="latestCheckInTime">
          <el-date-picker v-model="addVipForm.latestCheckInTime" type="datetime" placeholder="选择日期时间" default-time="12:00:00">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="最后一次预约时间" prop="latestReserveTime">
          <el-date-picker v-model="addVipForm.latestReserveTime" type="datetime" placeholder="选择日期时间" default-time="12:00:00">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="addVipForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addVipDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addVip">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="修改会员" :visible.sync="editVipDialogVisible" width="30%" center>
      <el-form :model="editVipForm" :rules="VipRules" ref="editVipFormRef" label-width="80px">
        <el-form-item label="编号" prop="id">
          <el-input v-model="editVipForm.id"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="editVipForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-input v-model="editVipForm.gender"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="editVipForm.password"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="phoneNumber">
          <el-input v-model="editVipForm.phoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="editVipForm.address"></el-input>
        </el-form-item>
        <el-form-item label="E-mail" prop="email">
          <el-input v-model="editVipForm.email"></el-input>
        </el-form-item>
        <el-form-item label="积分" prop="mark">
          <el-input v-model="editVipForm.mark"></el-input>
        </el-form-item>
        <el-form-item label="等级" prop="level">
          <el-select v-model="editVipForm.level" placeholder="请选择等级">
            <el-option label="普通" value="普通"></el-option>
            <el-option label="VIP" value="vip"></el-option>
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="最后一次入住时间" prop="latestCheckInTime">
          <el-input v-model="editVipForm.latestCheckInTime"></el-input>
        </el-form-item>
        <el-form-item label="最后一次预约时间" prop="latestReserveTime">
          <el-input v-model="editVipForm.latestReserveTime"></el-input>
        </el-form-item> -->

        <el-form-item label="最后一次入住时间" prop="latestCheckInTime">
          <el-date-picker v-model="editVipForm.latestCheckInTime" type="datetime" placeholder="选择日期时间" default-time="12:00:00">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="最后一次预约时间" prop="latestReserveTime">
          <el-date-picker v-model="editVipForm.latestReserveTime" type="datetime" placeholder="选择日期时间" default-time="12:00:00">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="editVipForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVipDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editVip">确 定</el-button>
      </span>
    </el-dialog>

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
    this.getAllVips()
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
        this.getAllVips()
      } else {
        var _this = this
        axios({
          method: 'post',
          url: global_.serverSrc + '/vips/search',
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
    getAllVips() {
      var _this = this
      axios.get(global_.serverSrc + '/vips').then((resopnse) => {
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
      axios.get(global_.serverSrc + '/vips/' + id).then((resopnse) => {
        _this.editVipForm = resopnse.data.data
      })
      this.editVipDialogVisible = true
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
      var url = global_.serverSrc + '/vips/'
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
      this.getAllVips()
      window.location.reload()
    },

    //按照id删除单个
    deleteById() {
      var url = global_.serverSrc + '/vips/'
      url = url + this.deleteId
      axios.delete(url).then((resopnse) => {
        if (resopnse.data.code == global_.DELETE_ERR) {
          alert('删除失败')
        }
      })

      //刷新用户列表
      this.getAllVips()
      window.location.reload()
    },

    //批量删除对话框确定时触发的事件
    massDeletion() {
      this.deleteByIds()
      this.massDeletionDialogVisible = false
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },

    //打开表格点击确定后添加的请求写在这里
    addVip() {
      this.$refs.addVipFormRef.validate((valid) => {
        if (valid) {
          var _this = this
          axios({
            method: 'post',
            url: global_.serverSrc + '/vips',
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify(_this.addVipForm),
          }).then((resopnse) => {
            if (resopnse.data.code == global_.SAVE_ERR) {
              alert('添加失败')
            }
          })
          //刷新列表
          _this.getAllVips()
          window.location.reload()
          this.addVipDialogVisible = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    //打开表格点击确定后修改的请求写在这里
    editVip() {
      this.$refs.editVipFormRef.validate((valid) => {
        if (valid) {
          var _this = this
          axios({
            method: 'put',
            url: global_.serverSrc + '/vips',
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify(_this.editVipForm),
          }).then((resopnse) => {
            if (resopnse.data.code == global_.SAVE_ERR) {
              alert('添加失败')
            }
          })
          this.getAllVips()
          window.location.reload()
          this.editVipDialogVisible = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  },

  data() {
    return {
      massDeletionDialogVisible: false,
      deletionDialogVisible: false,
      addVipDialogVisible: false,
      addVipForm: {
        id: '',
        name: '',
        gender: '',
        password: '',
        phoneNumber: '',
        address: '',
        email: '',
        mark: '',
        level: '',
        latestCheckInTime: '',
        latestReserveTime: '',
        remark: '',
      },
      editVipDialogVisible: false,
      editVipForm: {
        id: '',
        name: '',
        gender: '',
        password: '',
        phoneNumber: '',
        address: '',
        email: '',
        mark: '',
        level: '',
        latestCheckInTime: '',
        latestReserveTime: '',
        remark: '',
      },
      VipRules: {
        // id: [{ required: true, message: '请输入编号', trigger: 'blur' }],
        name: [{ required: true, message: '请输入会员名', trigger: 'blur' }],
        gender: [{ required: true, message: '请输入性别', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        phoneNumber: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
        ],
      },
      tableData: [],
      //new
      currentPage4: 0,
      deleteId: 0,
      multipleSelection: [],
      searchForm: {
        // id: '',
        // name: ''
      },
    }
  },
}
</script>