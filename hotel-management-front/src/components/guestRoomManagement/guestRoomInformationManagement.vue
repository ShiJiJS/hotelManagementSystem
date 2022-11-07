<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 24px; margin-bottom: 12px;">
      <el-breadcrumb-item>客房管理</el-breadcrumb-item>
      <el-breadcrumb-item>客房信息管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="20" style="margin-bottom: 12px;">
      <el-col :span="4">
        <el-input style="line-height: 36px;" v-model="searchForm.id" placeholder="请输入客房编号">
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-input style="line-height: 36px;" v-model="searchForm.type" placeholder="请输入客房类型">
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-input style="line-height: 36px;" v-model="searchForm.status" placeholder="请输入客房状态">
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-input style="line-height: 36px;" v-model="searchForm.floor" placeholder="请输入楼层">
        </el-input>
      </el-col>
      <el-col :span="3">
        <el-input style="line-height: 36px;" v-model="searchForm.standardPrice" placeholder="请输入标准价格">
        </el-input>
      </el-col>
      <el-col :span="1">
        <el-button icon="el-icon-search" @click="conditionQuery">
        </el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="addRoomDialogVisible = true">
          添加客房
        </el-button>
      </el-col>
      <el-col :span="2">
        <el-button @click="massDeletionDialogVisible = true" type="danger">
          批量删除
        </el-button>
      </el-col>
    </el-row>

    <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="id" label="编号">
      </el-table-column>
      <el-table-column prop="type" label="类型" width="180">
      </el-table-column>
      <el-table-column prop="status" label="状态" width="180">
      </el-table-column>
      <el-table-column prop="floor" label="楼层" width="180">
      </el-table-column>
      <el-table-column prop="standardPrice" label="标准价格" width="180">
      </el-table-column>
      <el-table-column prop="discountPrice" label="折扣价格" width="180">
      </el-table-column>
      <el-table-column prop="standardUserPrice" label="普通会员价格" width="180">
      </el-table-column>
      <el-table-column prop="vipUserPrice" label="尊贵会员价格" width="180">
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
    <el-dialog title="添加客房信息" :visible.sync="addRoomDialogVisible" width="30%" center>
      <el-form :model="addRoomForm" :rules="RoomRules" ref="addRoomFormRef" label-width="80px">
        <el-form-item label="编号" prop="id">
          <el-input v-model="addRoomForm.id"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <!-- 房间类型选框 -->
          <el-select v-model="addRoomForm.type" placeholder="请选择类型">
            <el-option v-for="item in roomTypes" :key="item.id" :label="item.type" :value="item.type">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-input v-model="addRoomForm.status"></el-input>
          <!-- <el-select v-model="editRoomForm.status" placeholder="请选择状态">
            <el-option label="空房" value="空房"></el-option>
            <el-option label="预定" value="预定"></el-option>
            <el-option label="入住" value="入住"></el-option>
          </el-select> -->
        </el-form-item>
        <!-- 楼层选框 -->
        <el-form-item label="楼层" prop="floor">
          <el-select v-model="addRoomForm.floor" placeholder="请选择楼层">
            <el-option v-for="item in floors" :key="item.id" :label="item.name" :value="item.name">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标准价格" prop="standardPrice">
          <el-input v-model="addRoomForm.standardPrice"></el-input>
        </el-form-item>
        <el-form-item label="折扣价格" prop="discountPrice">
          <el-input v-model="addRoomForm.discountPrice"></el-input>
        </el-form-item>
        <el-form-item label="普通会员价格" prop="standardUserPrice">
          <el-input v-model="addRoomForm.standardUserPrice"></el-input>
        </el-form-item>
        <el-form-item label="尊贵会员价格" prop="vipUserPrice">
          <el-input v-model="addRoomForm.vipUserPrice"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="addRoomForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addRoomDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addRoom">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="修改客房信息" :visible.sync="editRoomDialogVisible" width="30%" center>
      <el-form :model="editRoomForm" :rules="RoomRules" ref="editRoomFormRef" label-width="120px">
        <el-form-item label="编号" prop="id">
          <el-input v-model="editRoomForm.id"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-select v-model="editRoomForm.type" placeholder="请选择类型">
            <el-option label="单人间"></el-option>
            <el-option label="双人间"></el-option>
            <el-option label="钟点房"></el-option>
            <el-option label="总统套房"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-input v-model="editRoomForm.status"></el-input>
        </el-form-item>
        <el-form-item label="楼层" prop="floor">
          <el-select v-model="editRoomForm.floor" placeholder="请选择楼层">
            <el-option label="一楼" value="firstFloor"></el-option>
            <el-option label="二楼" value="secondFloor"></el-option>
            <el-option label="三楼" value="thirdFloor"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标准价格" prop="standardPrice">
          <el-input v-model="editRoomForm.standardPrice"></el-input>
        </el-form-item>
        <el-form-item label="折扣价格" prop="discountPrice">
          <el-input v-model="editRoomForm.discountPrice"></el-input>
        </el-form-item>
        <el-form-item label="普通会员价格" prop="standardUserPrice">
          <el-input v-model="editRoomForm.standardUserPrice"></el-input>
        </el-form-item>
        <el-form-item label="尊贵会员价格" prop="vipUserPrice">
          <el-input v-model="editRoomForm.vipUserPrice"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="editRoomForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editRoomDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editRoom">确 定</el-button>
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
    this.getAllRooms()
    this.getAllfloors()
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
        this.getAllRooms()
      } else {
        var _this = this
        axios({
          method: 'post',
          url: global_.serverSrc + '/rooms/search',
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify(_this.searchForm),
        }).then((resopnse) => {
          _this.tableData = resopnse.data.data
        })
      }
    },
    //获取所有楼层信息，供下拉选单使用
    getAllfloors() {
      var _this = this
      axios.get(global_.serverSrc + '/floors').then((resopnse) => {
        if (resopnse.data.code == global_.GET_OK) {
          _this.floors = resopnse.data.data
        } else {
          alert(resopnse.data.msg)
        }
      })
    },

    //获取所有房间类型信息，供下拉选单使用
    getAllRoomTypes() {
      var _this = this
      axios.get(global_.serverSrc + '/roomTypes').then((resopnse) => {
        if (resopnse.data.code == global_.GET_OK) {
          _this.roomTypes = resopnse.data.data
        } else {
          alert(resopnse.data.msg)
        }
      })
    },

    //获取所有信息
    getAllRooms() {
      var _this = this
      axios.get(global_.serverSrc + '/rooms').then((resopnse) => {
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
      axios.get(global_.serverSrc + '/rooms/' + id).then((resopnse) => {
        _this.editRoomForm = resopnse.data.data
      })
      this.editRoomDialogVisible = true
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
      var url = global_.serverSrc + '/rooms/'
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
      this.getAllRooms()
      window.location.reload()
    },

    //按照id删除单个
    deleteById() {
      var url = global_.serverSrc + '/rooms/'
      url = url + this.deleteId
      axios.delete(url).then((resopnse) => {
        if (resopnse.data.code == global_.DELETE_ERR) {
          alert('删除失败')
        }
      })

      //刷新用户列表
      this.getAllRooms()
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

    //打开表格点击确定后添加客房信息的请求写在这里
    addRoom() {
      this.$refs.addRoomFormRef.validate((valid) => {
        if (valid) {
          var _this = this
          axios({
            method: 'post',
            url: global_.serverSrc + '/rooms',
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify(_this.addRoomForm),
          }).then((resopnse) => {
            if (resopnse.data.code == global_.SAVE_ERR) {
              alert('添加失败')
            }
          })
          //刷新列表
          _this.getAllRooms()
          window.location.reload()
          this.addRoomDialogVisible = false
        } else {
          console.log(this.addRoomForm)
          console.log('error submit!!')
          return false
        }
      })
    },
    //打开表格点击确定后修改客房信息的请求写在这里
    editRoom() {
      this.$refs.editRoomFormRef.validate((valid) => {
        if (valid) {
          var _this = this
          axios({
            method: 'put',
            url: global_.serverSrc + '/rooms',
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify(_this.editRoomForm),
          }).then((resopnse) => {
            if (resopnse.data.code == global_.SAVE_ERR) {
              alert('添加失败')
            }
          })
          this.getAllRooms()
          window.location.reload()
          this.editRoomDialogVisible = false
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
      addRoomDialogVisible: false,
      addRoomForm: {
        id: '',
        type: '',
        status: '',
        floor: '',
        standardPrice: '',
        discountPrice: '',
        standardUserPrice: '',
        vipUserPrice: '',
        remark: '',
      },
      editRoomDialogVisible: false,
      editRoomForm: {
        id: '',
        type: '',
        status: '',
        floor: '',
        standardPrice: '',
        discountPrice: '',
        standardUserPrice: '',
        vipUserPrice: '',
        remark: '',
      },
      RoomRules: {
        id: [{ required: true, message: '请输入编号', trigger: 'blur' }],
        type: [{ required: true, message: '请选择类型', trigger: 'change' }],
        status: [{ required: true, message: '请输入状态', trigger: 'change' }],
        floor: [{ required: true, message: '请选择楼层', trigger: 'change' }],
        standardPrice: [
          { required: true, message: '请输入标准价格', trigger: 'blur' },
        ],
        discountPrice: [
          { required: true, message: '请输入折扣价格', trigger: 'blur' },
        ],
        standardUserPrice: [
          { required: true, message: '请输入标准会员价格', trigger: 'blur' },
        ],
        vipUserPrice: [
          { required: true, message: '请输入尊贵会员价格', trigger: 'blur' },
        ],
      },
      tableData: [],
      //new
      input: '',
      currentPage4: 0,
      deleteId: 0,
      multipleSelection: [],
      roomTypes: [],
      floors: [],
      searchForm: {},
    }
  },
}
</script>