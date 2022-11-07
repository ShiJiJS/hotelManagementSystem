<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 24px; margin-bottom: 12px;">
      <el-breadcrumb-item>房客管理</el-breadcrumb-item>
      <el-breadcrumb-item>客房入住管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="20" style="margin-bottom: 12px;">
      <el-col :span="5">
        <el-input style="line-height: 36px;" v-model.number="searchForm.id" placeholder="请输入入住单号">
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-input style="line-height: 36px;" v-model="searchForm.roomType" placeholder="请输入客房类型">
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-input style="line-height: 36px;" v-model.number="searchForm.roomNumber" placeholder="请输入客房编号">
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-input style="line-height: 36px;" v-model="searchForm.personName" placeholder="请输入入住人">
        </el-input>
      </el-col>
      <el-col :span="1">
        <el-button icon="el-icon-search" @click="conditionQuery">
        </el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="addcheckInDialogVisible = true">
          添加入住
        </el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="reservationToCheckInDialogVisible = true">
          预定转入住
        </el-button>
      </el-col>
      <el-col :span="2">
        <el-button @click="massDeletionDialogVisible=true" type="danger">
          批量删除
        </el-button>
      </el-col>
    </el-row>

    <!-- 信息列表 -->
    <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="id" label="入住单号" width="180">
      </el-table-column>
      <el-table-column prop="roomType" label="客房类型">
      </el-table-column>
      <el-table-column prop="roomNumber" label="客房编号" width="180">
      </el-table-column>
      <el-table-column prop="personName" label="入住人" width="180">
      </el-table-column>
      <el-table-column prop="phoneNumber" label="联系电话">
      </el-table-column>
      <el-table-column fixed="right" prop="arriveTime" label="抵店时间" width="180">
      </el-table-column>
      <el-table-column fixed="right" prop="leaveTime" label="离店时间" width="180">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="showEditDialog(scope.row.id)" type="primary">编辑</el-button>
          <el-button @click="showDeleteDialog(scope.row.id)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <!--     <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[20, 50, 100, 200]" :page-size="20"
      layout="total, sizes, prev, pager, next, jumper" :total="400" style="margin-top: 12px;text-align: center;">
    </el-pagination> -->

    <!-- 添加对话框 -->
    <el-dialog title="添加入住" :visible.sync="addcheckInDialogVisible" width="30%" center>
      <el-form :model="addcheckInForm" :rules="checkInRules" ref="addcheckInFormRef" label-width="80px">
        <!-- <el-form-item label="入住单号" prop="id">
          <el-input v-model="addcheckInForm.id"></el-input>
        </el-form-item> -->
        <el-form-item label="客房编号" prop="roomNumber">
          <!-- <el-input v-model="addcheckInForm.roomNumber"></el-input> -->
          <el-select v-model="addcheckInForm.roomNumber" placeholder="请选择客房编号" @change="roomIdSelectChange">
            <el-option v-for="room in rooms" :key="room.id" :label="room.id" :value="room.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客房类型" prop="roomType">
          <el-input v-model="addcheckInForm.roomType" disabled></el-input>
        </el-form-item>
        <el-form-item label="标准价" prop="standardPrice">
          <el-input v-model="addcheckInForm.standardPrice" disabled></el-input>
        </el-form-item>
        <el-form-item label="折后价" prop="discountPrice">
          <el-input v-model="addcheckInForm.discountPrice" disabled></el-input>
        </el-form-item>
        <el-form-item label="押金" prop="deposit">
          <el-input v-model.number="addcheckInForm.deposit"></el-input>
        </el-form-item>
        <el-form-item label="入住人" prop="personName">
          <el-input v-model="addcheckInForm.personName"></el-input>
        </el-form-item>
        <el-form-item label="证件类型" prop="certificateCategory">
          <el-input v-model="addcheckInForm.certificateCategory"></el-input>
        </el-form-item>
        <el-form-item label="证件号码" prop="certificateNumber">
          <el-input v-model="addcheckInForm.certificateNumber"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="phoneNumber">
          <el-input v-model="addcheckInForm.phoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="抵店时间" prop="arriveTime">
          <el-date-picker v-model="addcheckInForm.arriveTime" type="datetime" placeholder="选择日期时间" default-time="12:00:00" value-format="yyyy-MM-dd HH:mm:ss">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="离店时间" prop="leaveTime">
          <el-date-picker v-model="addcheckInForm.leaveTime" type="datetime" placeholder="选择日期时间" default-time="12:00:00" value-format="yyyy-MM-dd HH:mm:ss">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="入住人数" prop="numberOfOccupants">
          <el-input v-model="addcheckInForm.numberOfOccupants"></el-input>
        </el-form-item>
        <el-form-item label="操作员" prop="operator">
          <el-input v-model="addcheckInForm.operator"></el-input>
        </el-form-item>
        <el-form-item label="会员编号" prop="vipId">
          <el-input v-model="addcheckInForm.vipId"></el-input>
        </el-form-item>
        <el-form-item label="会员价" prop="vipPrice">
          <el-input v-model="addcheckInForm.vipPrice"></el-input>
        </el-form-item>
        <el-form-item label="提供早餐" prop="breakfast">
          <el-select v-model="addcheckInForm.breakfast" placeholder="请选择">
            <el-option label="是" value="true"></el-option>
            <el-option label="否" value="false"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="定时叫醒" prop="wakeUp">
          <el-select v-model="addcheckInForm.wakeUp" placeholder="请选择">
            <el-option label="是" value="true"></el-option>
            <el-option label="否" value="false"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="addcheckInForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addcheckInDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addcheckIn">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 预定转入住对话框 -->
    <el-dialog title="预定转入住" :visible.sync="reservationToCheckInDialogVisible" width="30%" center>
      <el-form :model="reservationToCheckInForm" :rules="checkInRules" ref="reservationToCheckInFormRef" label-width="80px">
        <el-form-item label="预定单号" prop="id">
          <el-input v-model="reservationToCheckInForm.id"></el-input>
        </el-form-item>
        <el-form-item label="操作员" prop="operator">
          <el-input v-model="reservationToCheckInForm.operator"></el-input>
        </el-form-item>
        <el-form-item label="提供早餐" prop="breakfast">
          <el-select v-model="reservationToCheckInForm.breakfast" placeholder="请选择">
            <el-option label="是" value="true"></el-option>
            <el-option label="否" value="false"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="定时叫醒" prop="wakeUp">
          <el-select v-model="reservationToCheckInForm.wakeUp" placeholder="请选择">
            <el-option label="是" value="true"></el-option>
            <el-option label="否" value="false"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="addcheckInForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="reservationToCheckInDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="reservationToCheckIn">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 修改对话框 -->
    <el-dialog title="修改入住" :visible.sync="editcheckInDialogVisible" width="30%" center>
      <el-form :model="editcheckInForm" :rules="checkInRules" ref="editcheckInFormRef" label-width="80px">
        <!-- <el-form-item label="入住单号" prop="id">
          <el-input v-model="editcheckInForm.id"></el-input>
        </el-form-item> -->
        <el-form-item label="客房编号" prop="roomNumber">
          <el-input v-model="editcheckInForm.roomNumber"></el-input>
        </el-form-item>
        <el-form-item label="客房类型" prop="roomType">
          <el-input v-model="editcheckInForm.roomType"></el-input>
        </el-form-item>
        <el-form-item label="标准价" prop="standardPrice">
          <el-input v-model="editcheckInForm.standardPrice"></el-input>
        </el-form-item>
        <el-form-item label="折后价" prop="discountPrice">
          <el-input v-model="editcheckInForm.discountPrice"></el-input>
        </el-form-item>
        <el-form-item label="押金" prop="deposit">
          <el-input v-model="editcheckInForm.deposit"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="personName">
          <el-input v-model="editcheckInForm.personName"></el-input>
        </el-form-item>
        <el-form-item label="证件类型" prop="certificateCategory">
          <el-input v-model="editcheckInForm.certificateCategory"></el-input>
        </el-form-item>
        <el-form-item label="证件号码" prop="certificateNumber">
          <el-input v-model="editcheckInForm.certificateNumber"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="phoneNumber">
          <el-input v-model="editcheckInForm.phoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="抵店时间" prop="arriveTime">
          <el-input v-model="editcheckInForm.arriveTime"></el-input>
        </el-form-item>
        <el-form-item label="离店时间" prop="leaveTime">
          <el-input v-model="editcheckInForm.leaveTime"></el-input>
        </el-form-item>
        <el-form-item label="入住人数" prop="numberOfOccupants">
          <el-input v-model="editcheckInForm.numberOfOccupants"></el-input>
        </el-form-item>
        <el-form-item label="操作员" prop="operator">
          <el-input v-model="editcheckInForm.operator"></el-input>
        </el-form-item>
        <el-form-item label="会员编号" prop="vipId">
          <el-input v-model="editcheckInForm.vipId"></el-input>
        </el-form-item>
        <el-form-item label="会员价" prop="vipPrice">
          <el-input v-model="editcheckInForm.vipPrice"></el-input>
        </el-form-item>
        <el-form-item label="提供早餐" prop="breakfast">
          <el-select v-model="editcheckInForm.breakfast" placeholder="请选择">
            <el-option label="是" value="true"></el-option>
            <el-option label="否" value="false"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="定时叫醒" prop="wakeUp">
          <el-select v-model="editcheckInForm.wakeUp" placeholder="请选择">
            <template>
              <el-option label="是" value="true"></el-option>
              <el-option label="否" value="false"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="editcheckInForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editcheckInDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editcheckIn">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 删除对话框 -->
    <el-dialog title="删除" :visible.sync="deletionDialogVisible" width="30%" center>
      <span>确定要删除该项目吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deletionDialogVisible = false">取 消</el-button>
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
      if (
        this.currentUserType != '管理员' &&
        this.currentUserType != '前台人员'
      ) {
        alert(this.currentUserType + '没有此权限')
        this.$router.push('/homePage')
      }
    })
    this.getAllCheckInInfos()
    this.getAllRooms()
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
        this.getAllCheckInInfos()
      } else {
        var _this = this
        axios({
          method: 'post',
          url: global_.serverSrc + '/checkInInfos/search',
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
    getAllCheckInInfos() {
      var _this = this
      axios.get(global_.serverSrc + '/checkInInfos').then((resopnse) => {
        if (resopnse.data.code == global_.GET_OK) {
          _this.tableData = resopnse.data.data
        } else {
          alert(resopnse.data.msg)
        }
      })
    },
    //获取所有房间信息
    getAllRooms() {
      var _this = this
      axios.get(global_.serverSrc + '/rooms').then((resopnse) => {
        if (resopnse.data.code == global_.GET_OK) {
          _this.rooms = resopnse.data.data
        } else {
          alert(resopnse.data.msg)
        }
      })
    },

    //显示编辑对话框
    showEditDialog(id) {
      // 发送请求通过id拿到旧数据，填在表格里
      var _this = this
      axios.get(global_.serverSrc + '/checkInInfos/' + id).then((resopnse) => {
        _this.editcheckInForm = resopnse.data.data
        if (resopnse.data.data.breakfast == true) {
          _this.editcheckInForm.breakfast = '是'
        } else if (resopnse.data.data.breakfast == false) {
          _this.editcheckInForm.breakfast = '否'
        }
        if (resopnse.data.data.wakeUp == true) {
          _this.editcheckInForm.wakeUp = '是'
        } else if (resopnse.data.data.wakeUp == false) {
          _this.editcheckInForm.wakeUp = '否'
        }
      })
      this.editcheckInDialogVisible = true
      //console.log(this.editcheckInForm)
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
      var url = global_.serverSrc + '/checkInInfos/'
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
      this.getAllCheckInInfos()
      window.location.reload()
    },

    //按照id删除单个
    deleteById() {
      var url = global_.serverSrc + '/checkInInfos/'
      url = url + this.deleteId
      axios.delete(url).then((resopnse) => {
        if (resopnse.data.code == global_.DELETE_ERR) {
          alert('删除失败')
        }
      })

      //刷新用户列表
      this.getAllCheckInInfos()
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
    addcheckIn() {
      this.$refs.addcheckInFormRef.validate((valid) => {
        if (valid) {
          var _this = this
          axios({
            method: 'post',
            url: global_.serverSrc + '/checkInInfos',
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify(_this.addcheckInForm),
          }).then((resopnse) => {
            if (resopnse.data.code == global_.SAVE_ERR) {
              alert('添加失败')
            }
          })
          //刷新列表
          _this.getAllCheckInInfos()
          window.location.reload()
          this.addcheckInDialogVisible = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    //打开表格点击确定后修改的请求写在这里
    editcheckIn() {
      this.$refs.editcheckInFormRef.validate((valid) => {
        if (valid) {
          var _this = this
          if (this.editcheckInForm.breakfast == '是') {
            this.editcheckInForm.breakfast = true
          } else if (this.editcheckInForm.breakfast == '否') {
            this.editcheckInForm.breakfast = false
          }
          if (this.editcheckInForm.wakeUp == '是') {
            this.editcheckInForm.wakeUp = true
          } else if (this.editcheckInForm.wakeUp == '否') {
            this.editcheckInForm.wakeUp = false
          }
          axios({
            method: 'put',
            url: global_.serverSrc + '/checkInInfos',
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify(_this.editcheckInForm),
          }).then((resopnse) => {
            if (resopnse.data.code == global_.SAVE_ERR) {
              alert('添加失败')
            }
          })
          this.getAllCheckInInfos()
          window.location.reload()
          this.editcheckInDialogVisible = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    reservationToCheckIn() {
      var _this = this
      axios({
        method: 'post',
        url: global_.serverSrc + '/checkInInfos/reserved',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(_this.reservationToCheckInForm),
      }).then((resopnse) => {
        if (resopnse.data.code == global_.SAVE_ERR) {
          alert('添加失败')
        }
      })
      //刷新列表
      _this.getAllCheckInInfos()
      window.location.reload()
      this.reservationToCheckInDialogVisible = false
    },

    roomIdSelectChange() {
      for (var i in this.rooms) {
        if (this.rooms[i].id == this.addcheckInForm.roomNumber) {
          this.$set(this.addcheckInForm, 'roomType', this.rooms[i].type)
          this.$set(
            this.addcheckInForm,
            'standardPrice',
            this.rooms[i].standardPrice
          )
          this.$set(
            this.addcheckInForm,
            'discountPrice',
            this.rooms[i].discountPrice
          )
          this.$set(this.addcheckInForm, 'vipPrice', this.rooms[i].vipUserPrice)
        }
      }
    },
  },

  data() {
    return {
      massDeletionDialogVisible: false,
      deletionDialogVisible: false,
      addcheckInDialogVisible: false,
      reservationToCheckInDialogVisible: false,
      addcheckInForm: {
        id: '',
        roomNumber: '',
        roomType: '',
        standardPrice: '',
        discountPrice: '',
        deposit: '',
        personName: '',
        certificateCategory: '',
        certificateNumber: '',
        phoneNumber: '',
        arriveTime: '',
        leaveTime: '',
        numberOfOccupants: '',
        operator: '',
        vipId: '',
        vipPrice: '',
        breakfast: '',
        wakeUp: '',
        remark: '',
      },
      editcheckInDialogVisible: false,
      editcheckInForm: {
        id: '',
        roomNumber: '',
        roomType: '',
        standardPrice: '',
        discountPrice: '',
        deposit: '',
        personName: '',
        certificateCategory: '',
        certificateNumber: '',
        phoneNumber: '',
        arriveTime: '',
        leaveTime: '',
        numberOfOccupants: '',
        operator: '',
        vipId: '',
        vipPrice: '',
        breakfast: '',
        wakeUp: '',
        remark: '',
      },

      reservationToCheckInForm: {},
      checkInRules: {
        roomNumber: [
          { required: true, message: '请输入客房编号', trigger: 'blur' },
        ],
        personName: [
          { required: true, message: '请输入入住人', trigger: 'blur' },
        ],
        deposit: [
          { required: true, message: '请输入住宿押金', trigger: 'blur' },
        ],
        certificateCategory: [
          { required: true, message: '请输入证件类型', trigger: 'blur' },
        ],
        certificateNumber: [
          { required: true, message: '请输入证件号码', trigger: 'blur' },
        ],
        phoneNumber: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
        ],
        arriveTime: [
          { required: true, message: '请输入抵店时间', trigger: 'blur' },
        ],
        leaveTime: [
          { required: true, message: '请输入离店时间', trigger: 'blur' },
        ],
        numberOfOccupants: [
          { required: true, message: '请输入入住人数', trigger: 'blur' },
        ],
      },
      tableData: [],
      input: '',
      currentPage4: 0,
      deleteId: 0,
      multipleSelection: [],
      searchForm: {},
      rooms: [],
    }
  },
}
</script>