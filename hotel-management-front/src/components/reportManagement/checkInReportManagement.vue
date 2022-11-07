<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 24px; margin-bottom: 12px;">
      <el-breadcrumb-item>报表管理</el-breadcrumb-item>
      <el-breadcrumb-item>入住客人报表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="20" style="margin-bottom: 12px;">
      <!--       <el-form ref="form" :model="form" label-width="80px">
        <el-col :span="11">
          <el-form-item label="起始日期">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.startDate" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="结束日期">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.endDate" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form> -->
      <el-col :span="2">
        <el-button type="primary" @click="checkInReportDialogVisible = true">
          打印报表
        </el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="入住单号">
      </el-table-column>
      <el-table-column prop="roomNumber" label="客房编号">
      </el-table-column>
      <el-table-column prop="roomType" label="客房类型">
      </el-table-column>
      <el-table-column prop="personName" label="入住人">
      </el-table-column>
      <el-table-column prop="vipId" label="会员编号">
      </el-table-column>
      <el-table-column prop="arriveTime" label="抵店时间">
      </el-table-column>
      <el-table-column prop="leaveTime" label="离店时间">
      </el-table-column>
      <el-table-column prop="phoneNumber" label="联系电话">
      </el-table-column>
    </el-table>
    <!--     <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[20, 50, 100, 200]" :page-size="20"
      layout="total, sizes, prev, pager, next, jumper" :total="400" style="margin-top: 12px;text-align: center;">
    </el-pagination> -->
    <el-dialog title="打印入住客人报表" :visible.sync="checkInReportDialogVisible" show-close="false" fullscreen center>
      <el-table :data="tableData" border style="margin-bottom: 24px;  width: 80% text-align: -webkit-center">
        <el-table-column prop="id" label="入住单号">
        </el-table-column>
        <el-table-column prop="roomNumber" label="客房编号">
        </el-table-column>
        <el-table-column prop="roomType" label="客房类型">
        </el-table-column>
        <el-table-column prop="personName" label="入住人">
        </el-table-column>
        <el-table-column prop="vipId" label="会员编号">
        </el-table-column>
        <el-table-column prop="arriveTime" label="抵店时间">
        </el-table-column>
        <el-table-column prop="leaveTime" label="离店时间">
        </el-table-column>
        <el-table-column prop="phoneNumber" label="联系电话">
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="checkInReportDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="printpage">打 印</el-button>
      </span>
    </el-dialog>
  </div>
</template>

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
      if (this.currentUserType != '管理员' && this.currentUserType != '经理') {
        alert(this.currentUserType + '没有此权限')
        this.$router.push('/homePage')
      }
    })
    this.getAllCheckInInfos()
  },
  methods: {
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
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    printpage() {
      window.print()
    },
  },

  data() {
    return {
      currentUserName: '',
      currentUserType: '',
      checkInReportDialogVisible: false,
      form: {
        startDate: '',
        endDate: '',
      },
      tableData: [],
      showClose: true,
    }
  },
}
</script>