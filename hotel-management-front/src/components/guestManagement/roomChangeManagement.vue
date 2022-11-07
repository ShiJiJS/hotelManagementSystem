<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 24px; margin-bottom: 12px;">
      <el-breadcrumb-item>房客管理</el-breadcrumb-item>
      <el-breadcrumb-item>换房管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="20" style="margin-bottom: 12px;">
      <el-col :span="4">
        <el-input style="line-height: 36px;" v-model="searchForm.id" placeholder="请输入入住单号">
        </el-input>
      </el-col>
      <el-col :span="3">
        <el-input style="line-height: 36px;" v-model="searchForm.roomType" placeholder="请输入客房类型">
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-input style="line-height: 36px;" v-model="searchForm.originalRoomNumber" placeholder="请输入原客房编号">
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-input style="line-height: 36px;" v-model="searchForm.afterRoomNumber" placeholder="请输入现客房编号">
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
        <el-button type="primary" @click="addroomChangeDialogVisible = true">
          添加换房
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
      <el-table-column prop="id" label="入住单号" width="180">
      </el-table-column>
      <el-table-column prop="roomType" label="客房类型">
      </el-table-column>
      <el-table-column prop="originalRoomNumber" label="原客房编号" width="180">
      </el-table-column>
      <el-table-column prop="afterRoomNumber" label="更换后客房编号" width="180">
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

    <!--     <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[20, 50, 100, 200]" :page-size="20"
      layout="total, sizes, prev, pager, next, jumper" :total="400" style="margin-top: 12px;text-align: center;">
    </el-pagination> -->

    <!-- 添加对话框 -->
    <el-dialog title="添加换房" :visible.sync="addroomChangeDialogVisible" width="30%" center>
      <el-form :model="addroomChangeForm" :rules="roomChangeRules" ref="addroomChangeFormRef" label-width="140px">
        <el-form-item label="入住单号" prop="id">
          <!-- <el-input v-model="addroomChangeForm.id"></el-input> -->
          <el-select v-model="addroomChangeForm.id" placeholder="请选择入住单号" @change="idSelectChange">
            <el-option v-for="checkInInfo in checkInInfos" :key="checkInInfo.id" :label="checkInInfo.id" :value="checkInInfo.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="原客房编号" prop="originalRoomNumber">
          <el-input v-model="addroomChangeForm.originalRoomNumber"></el-input>
        </el-form-item>
        <el-form-item label="更换后客房编号" prop="afterRoomNumber">
          <!-- <el-input v-model="addroomChangeForm.afterRoomNumber"></el-input> -->
          <el-select v-model="addroomChangeForm.afterRoomNumber" placeholder="请选择客房编号" @change="roomIdSelectChangeAdd">
            <el-option v-for="room in rooms" :key="room.id" :label="room.id" :value="room.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客房类型" prop="roomType">
          <el-input v-model="addroomChangeForm.roomType" disabled></el-input>
        </el-form-item>
        <el-form-item label="标准价" prop="standardPrice">
          <el-input v-model="addroomChangeForm.standardPrice" disabled></el-input>
        </el-form-item>
        <el-form-item label="折后价" prop="discountPrice">
          <el-input v-model="addroomChangeForm.discountPrice" disabled></el-input>
        </el-form-item>
        <el-form-item label="押金" prop="deposit">
          <el-input v-model.number="addroomChangeForm.deposit"></el-input>
        </el-form-item>
        <el-form-item label="入住人" prop="personName">
          <el-input v-model="addroomChangeForm.personName"></el-input>
        </el-form-item>
        <el-form-item label="证件类型" prop="certificateCategory">
          <el-input v-model="addroomChangeForm.certificateCategory"></el-input>
        </el-form-item>
        <el-form-item label="证件号码" prop="certificateNumber">
          <el-input v-model="addroomChangeForm.certificateNumber"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="phoneNumber">
          <el-input v-model="addroomChangeForm.phoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="抵店时间" prop="arriveTime">
          <!-- <el-input v-model="addroomChangeForm.arriveTime"></el-input> -->
          <el-date-picker v-model="addroomChangeForm.arriveTime" type="datetime" placeholder="选择日期时间" default-time="12:00:00" value-format="yyyy-MM-dd HH:mm:ss">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="离店时间" prop="leaveTime">
          <!-- <el-input v-model="addroomChangeForm.leaveTime"></el-input> -->
          <el-date-picker v-model="addroomChangeForm.leaveTime" type="datetime" placeholder="选择日期时间" default-time="12:00:00" value-format="yyyy-MM-dd HH:mm:ss">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="入住人数" prop="numberOfOccupants">
          <el-input v-model="addroomChangeForm.numberOfOccupants"></el-input>
        </el-form-item>
        <el-form-item label="操作员" prop="operator">
          <el-input v-model="addroomChangeForm.operator"></el-input>
        </el-form-item>
        <el-form-item label="会员编号" prop="vipId">
          <el-input v-model="addroomChangeForm.vipId"></el-input>
        </el-form-item>
        <el-form-item label="会员价" prop="vipPrice">
          <el-input v-model="addroomChangeForm.vipPrice"></el-input>
        </el-form-item>
        <el-form-item label="提供早餐" prop="breakfast">
          <el-select v-model="addroomChangeForm.breakfast" placeholder="请选择">
            <el-option label="是" value="true"></el-option>
            <el-option label="否" value="false"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="定时叫醒" prop="wakeUp">
          <el-select v-model="addroomChangeForm.wakeUp" placeholder="请选择">
            <el-option label="是" value="true"></el-option>
            <el-option label="否" value="false"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="addroomChangeForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addroomChangeDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addroomChange">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 修改对话框 -->
    <el-dialog title="修改换房" :visible.sync="editroomChangeDialogVisible" width="30%" center>
      <el-form :model="editroomChangeForm" :rules="roomChangeRules" ref="editroomChangeFormRef" label-width="140px">
        <el-form-item label="入住单号" prop="id">
          <!-- <el-input v-model="editroomChangeForm.id"></el-input> -->
          <el-select v-model="editroomChangeForm.id" placeholder="请选择入住单号" @change="idSelectChange" disabled>
            <el-option v-for="checkInInfo in checkInInfos" :key="checkInInfo.id" :label="checkInInfo.id" :value="checkInInfo.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="原客房编号" prop="originalRoomNumber">
          <el-input v-model="editroomChangeForm.originalRoomNumber" disabled></el-input>
        </el-form-item>
        <el-form-item label="更换后客房编号" prop="afterRoomNumber">
          <!-- <el-input v-model="editroomChangeForm.afterRoomNumber"></el-input> -->
          <el-select v-model="editroomChangeForm.afterRoomNumber" placeholder="请选择客房编号" @change="roomIdSelectChangeEdit">
            <el-option v-for="room in rooms" :key="room.id" :label="room.id" :value="room.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客房类型" prop="roomType">
          <el-input v-model="editroomChangeForm.roomType"></el-input>
        </el-form-item>
        <el-form-item label="标准价" prop="standardPrice">
          <el-input v-model="editroomChangeForm.standardPrice"></el-input>
        </el-form-item>
        <el-form-item label="折后价" prop="discountPrice">
          <el-input v-model="editroomChangeForm.discountPrice"></el-input>
        </el-form-item>
        <el-form-item label="押金" prop="deposit">
          <el-input v-model.number="editroomChangeForm.deposit"></el-input>
        </el-form-item>
        <el-form-item label="入住人" prop="personName">
          <el-input v-model="editroomChangeForm.personName"></el-input>
        </el-form-item>
        <el-form-item label="证件类型" prop="certificateCategory">
          <el-input v-model="editroomChangeForm.certificateCategory"></el-input>
        </el-form-item>
        <el-form-item label="证件号码" prop="certificateNumber">
          <el-input v-model="editroomChangeForm.certificateNumber"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="phoneNumber">
          <el-input v-model="editroomChangeForm.phoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="抵店时间" prop="arriveTime">
          <!-- <el-input v-model="editroomChangeForm.arriveTime"></el-input> -->
          <el-date-picker v-model="editroomChangeForm.arriveTime" type="datetime" placeholder="选择日期时间" default-time="12:00:00" value-format="yyyy-MM-dd HH:mm:ss">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="离店时间" prop="leaveTime">
          <!-- <el-input v-model="editroomChangeForm.leaveTime"></el-input> -->
          <el-date-picker v-model="editroomChangeForm.leaveTime" type="datetime" placeholder="选择日期时间" default-time="12:00:00" value-format="yyyy-MM-dd HH:mm:ss">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="入住人数" prop="numberOfOccupants">
          <el-input v-model="editroomChangeForm.numberOfOccupants"></el-input>
        </el-form-item>
        <el-form-item label="操作员" prop="operator">
          <el-input v-model="editroomChangeForm.operator"></el-input>
        </el-form-item>
        <el-form-item label="会员编号" prop="vipId">
          <el-input v-model="editroomChangeForm.vipId"></el-input>
        </el-form-item>
        <el-form-item label="会员价" prop="vipPrice">
          <el-input v-model="editroomChangeForm.vipPrice"></el-input>
        </el-form-item>
        <el-form-item label="提供早餐" prop="breakfast">
          <el-select v-model="editroomChangeForm.breakfast" placeholder="请选择">
            <el-option label="是" value="true"></el-option>
            <el-option label="否" value="false"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="定时叫醒" prop="wakeUp">
          <el-select v-model="editroomChangeForm.wakeUp" placeholder="请选择">
            <el-option label="是" value="true"></el-option>
            <el-option label="否" value="false"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="editroomChangeForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editroomChangeDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editroomChange">确 定</el-button>
      </span>
    </el-dialog>

    <!-- <el-dialog title="修改换房" :visible.sync="editroomChangeDialogVisible" width="30%" center>
      <el-form :model="editroomChangeForm" :rules="roomChangeRules" ref="editroomChangeFormRef" label-width="80px">
        <el-form-item label="入住单号" prop="id">
          <el-input v-model="editroomChangeForm.id"></el-input>
        </el-form-item>
        <el-form-item label="原客房编号" prop="originalRoomNumber">
          <el-input v-model="editroomChangeForm.originalRoomNumber"></el-input>
        </el-form-item>
        <el-form-item label="更换后客房编号" prop="afterRoomNumber">
          <el-input v-model="editroomChangeForm.afterRoomNumber"></el-input>
        </el-form-item>
        <el-form-item label="客房类型" prop="roomType">
          <el-input v-model="editroomChangeForm.roomType"></el-input>
        </el-form-item>
        <el-form-item label="标准价" prop="standardPrice">
          <el-input v-model="editroomChangeForm.standardPrice"></el-input>
        </el-form-item>
        <el-form-item label="折后价" prop="discountPrice">
          <el-input v-model="editroomChangeForm.discountPrice"></el-input>
        </el-form-item>
        <el-form-item label="押金" prop="deposit">
          <el-input v-model.number="editroomChangeForm.deposit"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="personName">
          <el-input v-model="editroomChangeForm.personName"></el-input>
        </el-form-item>
        <el-form-item label="证件类型" prop="certificateCategory">
          <el-input v-model="editroomChangeForm.certificateCategory"></el-input>
        </el-form-item>
        <el-form-item label="证件号码" prop="certificateNumber">
          <el-input v-model="editroomChangeForm.certificateNumber"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="phoneNumber">
          <el-input v-model="editroomChangeForm.phoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="抵店时间" prop="arriveTime">
          <el-input v-model="editroomChangeForm.arriveTime"></el-input>
        </el-form-item>
        <el-form-item label="离店时间" prop="leaveTime">
          <el-input v-model="editroomChangeForm.leaveTime"></el-input>
        </el-form-item>
        <el-form-item label="入住人数" prop="numberOfOccupants">
          <el-input v-model="editroomChangeForm.numberOfOccupants"></el-input>
        </el-form-item>
        <el-form-item label="操作员" prop="operator">
          <el-input v-model="editroomChangeForm.operator"></el-input>
        </el-form-item>
        <el-form-item label="会员编号" prop="vipId">
          <el-input v-model="editroomChangeForm.vipId"></el-input>
        </el-form-item>
        <el-form-item label="会员价" prop="vipPrice">
          <el-input v-model="editroomChangeForm.vipPrice"></el-input>
        </el-form-item>
        <el-form-item label="提供早餐" prop="breakfast">
          <el-select v-model="editroomChangeForm.breakfast" placeholder="请选择">
            <el-option label="是" value="true"></el-option>
            <el-option label="否" value="false"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="定时叫醒" prop="wakeUp">
          <el-select v-model="editroomChangeForm.wakeUp" placeholder="请选择">
            <el-option label="是" value="true"></el-option>
            <el-option label="否" value="false"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="editroomChangeForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editroomChangeDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editroomChange">确 定</el-button>
      </span>
    </el-dialog> -->

    <el-dialog title="删除" :visible.sync="deletionDialogVisible" width="30%" center>
      <span>确定要删除该项目吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deletionDialogVisible = false">取 消</el-button>
        <el-button type="danger" @click="deleteById">确 定</el-button>
      </span>
    </el-dialog>
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
    this.getAllRoomChangeInfos()
    this.getAllRooms()
    this.getAllCheckInInfos()
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
        this.getAllRoomChangeInfos()
      } else {
        var _this = this
        axios({
          method: 'post',
          url: global_.serverSrc + '/roomChangeInfos/search',
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
    getAllRoomChangeInfos() {
      var _this = this
      axios.get(global_.serverSrc + '/roomChangeInfos').then((resopnse) => {
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
    //获取所有入住信息
    getAllCheckInInfos() {
      var _this = this
      axios.get(global_.serverSrc + '/checkInInfos').then((resopnse) => {
        if (resopnse.data.code == global_.GET_OK) {
          _this.checkInInfos = resopnse.data.data
        } else {
          alert(resopnse.data.msg)
        }
      })
    },

    //显示编辑对话框
    showEditDialog(id) {
      // 发送请求通过id拿到旧数据，填在表格里
      var _this = this
      axios
        .get(global_.serverSrc + '/roomChangeInfos/' + id)
        .then((resopnse) => {
          _this.editroomChangeForm = resopnse.data.data
          if (resopnse.data.data.breakfast == true) {
            _this.editroomChangeForm.breakfast = '是'
          } else if (resopnse.data.data.breakfast == false) {
            _this.editroomChangeForm.breakfast = '否'
          }
          if (resopnse.data.data.wakeUp == true) {
            _this.editroomChangeForm.wakeUp = '是'
          } else if (resopnse.data.data.wakeUp == false) {
            _this.editroomChangeForm.wakeUp = '否'
          }
        })
      this.editroomChangeDialogVisible = true
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
      var url = global_.serverSrc + '/roomChangeInfos/'
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
      this.getAllRoomChangeInfos()
      window.location.reload()
    },

    //按照id删除单个
    deleteById() {
      var url = global_.serverSrc + '/roomChangeInfos/'
      url = url + this.deleteId
      axios.delete(url).then((resopnse) => {
        if (resopnse.data.code == global_.DELETE_ERR) {
          alert('删除失败')
        }
      })

      //刷新用户列表
      this.getAllRoomChangeInfos()
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
    addroomChange() {
      this.$refs.addroomChangeFormRef.validate((valid) => {
        if (valid) {
          var _this = this
          if (this.addroomChangeForm.breakfast == '是') {
            this.addroomChangeForm.breakfast = true
          } else if (this.addroomChangeForm.breakfast == '否') {
            this.addroomChangeForm.breakfast = false
          }
          if (this.addroomChangeForm.wakeUp == '是') {
            this.addroomChangeForm.wakeUp = true
          } else if (this.addroomChangeForm.wakeUp == '否') {
            this.addroomChangeForm.wakeUp = false
          }
          axios({
            method: 'post',
            url: global_.serverSrc + '/roomChangeInfos',
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify(_this.addroomChangeForm),
          }).then((resopnse) => {
            if (resopnse.data.code == global_.SAVE_ERR) {
              alert('添加失败')
            }
          })
          //刷新列表
          _this.getAllRoomChangeInfos()
          window.location.reload()
          this.addroomChangeDialogVisible = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    //打开表格点击确定后修改的请求写在这里
    editroomChange() {
      this.$refs.editroomChangeFormRef.validate((valid) => {
        if (valid) {
          var _this = this
          if (this.editroomChangeForm.breakfast == '是') {
            this.editroomChangeForm.breakfast = true
          } else if (this.editroomChangeForm.breakfast == '否') {
            this.editroomChangeForm.breakfast = false
          }
          if (this.editroomChangeForm.wakeUp == '是') {
            this.editroomChangeForm.wakeUp = true
          } else if (this.editroomChangeForm.wakeUp == '否') {
            this.editroomChangeForm.wakeUp = false
          }
          axios({
            method: 'put',
            url: global_.serverSrc + '/roomChangeInfos',
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify(_this.editroomChangeForm),
          }).then((resopnse) => {
            if (resopnse.data.code == global_.SAVE_ERR) {
              alert('添加失败')
            }
          })
          this.getAllRoomChangeInfos()
          window.location.reload()
          this.editroomChangeDialogVisible = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    roomIdSelectChangeAdd() {
      for (var i in this.rooms) {
        if (this.rooms[i].id == this.addroomChangeForm.afterRoomNumber) {
          this.$set(this.addroomChangeForm, 'roomType', this.rooms[i].type)
          this.$set(
            this.addroomChangeForm,
            'standardPrice',
            this.rooms[i].standardPrice
          )
          this.$set(
            this.addroomChangeForm,
            'discountPrice',
            this.rooms[i].discountPrice
          )
          this.$set(
            this.addroomChangeForm,
            'vipPrice',
            this.rooms[i].vipUserPrice
          )
        }
      }
    },

    roomIdSelectChangeEdit() {
      for (var i in this.rooms) {
        if (this.rooms[i].id == this.editroomChangeForm.afterRoomNumber) {
          this.$set(this.editroomChangeForm, 'roomType', this.rooms[i].type)
          this.$set(
            this.editroomChangeForm,
            'standardPrice',
            this.rooms[i].standardPrice
          )
          this.$set(
            this.editroomChangeForm,
            'discountPrice',
            this.rooms[i].discountPrice
          )
          this.$set(
            this.editroomChangeForm,
            'vipPrice',
            this.rooms[i].vipUserPrice
          )
        }
      }
    },

    idSelectChange() {
      for (var i in this.checkInInfos) {
        if (this.checkInInfos[i].id == this.addroomChangeForm.id) {
          this.$set(
            this.addroomChangeForm,
            'originalRoomNumber',
            this.checkInInfos[i].roomNumber
          )
          this.$set(
            this.addroomChangeForm,
            'deposit',
            this.checkInInfos[i].deposit
          )
          this.$set(
            this.addroomChangeForm,
            'personName',
            this.checkInInfos[i].personName
          )
          this.$set(
            this.addroomChangeForm,
            'certificateCategory',
            this.checkInInfos[i].certificateCategory
          )
          this.$set(
            this.addroomChangeForm,
            'certificateNumber',
            this.checkInInfos[i].certificateNumber
          )
          this.$set(
            this.addroomChangeForm,
            'phoneNumber',
            this.checkInInfos[i].phoneNumber
          )
          this.$set(
            this.addroomChangeForm,
            'arriveTime',
            this.checkInInfos[i].arriveTime
          )
          this.$set(
            this.addroomChangeForm,
            'leaveTime',
            this.checkInInfos[i].leaveTime
          )
          this.$set(
            this.addroomChangeForm,
            'numberOfOccupants',
            this.checkInInfos[i].numberOfOccupants
          )
          this.$set(
            this.addroomChangeForm,
            'operator',
            this.checkInInfos[i].operator
          )
          this.$set(this.addroomChangeForm, 'vipId', this.checkInInfos[i].vipId)
          this.$set(
            this.addroomChangeForm,
            'vipPrice',
            this.checkInInfos[i].vipPrice
          )
          if (this.checkInInfos[i].breakfast == true) {
            this.$set(this.addroomChangeForm, 'breakfast', '是')
          } else if (this.checkInInfos[i].breakfast == false) {
            this.$set(this.addroomChangeForm, 'breakfast', '否')
          }
          if (this.checkInInfos[i].wakeUp == true) {
            this.$set(this.addroomChangeForm, 'wakeUp', '是')
          } else if (this.checkInInfos[i].wakeUp == false) {
            this.$set(this.addroomChangeForm, 'wakeUp', '否')
          }
          this.$set(
            this.addroomChangeForm,
            'remark',
            this.checkInInfos[i].remark
          )
        }
      }
    },
  },

  data() {
    var validateNewID = (rule, value, callback) => {
      for (var i in this.tableData) {
        if (value == this.tableData[i].id) {
          callback(new Error('入住单号重复'))
        }
      }
      callback()
    }
    return {
      massDeletionDialogVisible: false,
      deletionDialogVisible: false,
      addroomChangeDialogVisible: false,
      addroomChangeForm: {
        id: '',
        originalRoomNumber: '',
        afterRoomNumber: '',
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
      editroomChangeDialogVisible: false,
      editroomChangeForm: {
        id: '',
        originalRoomNumber: '',
        afterRoomNumber: '',
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
      roomChangeRules: {
        id: [
          { required: true, message: '请输入入住单号', trigger: 'blur' },
          { validator: validateNewID, trigger: 'blur' },
        ],
        originalRoomNumber: [
          { required: true, message: '请输入原客房编号', trigger: 'blur' },
        ],
        afterRoomNumber: [
          { required: true, message: '请输入更换后客房编号', trigger: 'blur' },
        ],
        personName: [
          { required: true, message: '请输入入住人', trigger: 'blur' },
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
      rooms: [],
      checkInInfos: [],
      searchForm: {},
    }
  },
}
</script>