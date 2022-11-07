<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 24px; margin-bottom: 12px;">
      <el-breadcrumb-item>房客管理</el-breadcrumb-item>
      <el-breadcrumb-item>结账管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="20" style="margin-bottom: 12px;">
      <el-col :span="7">
        <el-input style="line-height: 36px;" v-model.number="searchForm.id" placeholder="请输入入住单号">
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-input style="line-height: 36px;" v-model="searchForm.roomNumber" placeholder="请输入客房编号">
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-input style="line-height: 36px;" v-model="searchForm.personName" placeholder="请输入入住人">
        </el-input>
      </el-col>
      <el-col :span="1">
        <el-button icon="el-icon-search" @click="conditionQuery">
        </el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="addcheckOutDialogVisible = true">
          添加结账
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
      <el-table-column prop="roomNumber" label="客房编号" width="180">
      </el-table-column>
      <el-table-column prop="discountPrice" label="房价" width="180">
      </el-table-column>
      <el-table-column prop="deposit" label="押金">
      </el-table-column>
      <el-table-column prop="actualReceivable" label="实际应收">
      </el-table-column>
      <el-table-column fixed="right" prop="paidIn" label="实收" width="180">
      </el-table-column>
      <el-table-column fixed="right" prop="change" label="找零" width="180">
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
    <el-dialog title="添加结账" :visible.sync="addcheckOutDialogVisible" width="30%" center>
      <el-form :model="addcheckOutForm" :rules="checkOutRules" ref="addcheckOutFormRef" label-width="80px">
        <el-form-item label="入住单号" prop="id">
          <!-- <el-input v-model="addcheckOutForm.id"></el-input> -->
          <el-select v-model="addcheckOutForm.id" placeholder="请选择入住单号">
            <el-option v-for="checkInInfo in checkInInfos" :key="checkInInfo.id" :label="checkInInfo.id" :value="checkInInfo.id">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="客房编号" prop="roomNumber">
          <el-input v-model="addcheckOutForm.roomNumber"></el-input>
        </el-form-item>
        <el-form-item label="房价" prop="discountPrice">
          <el-input v-model="addcheckOutForm.discountPrice"></el-input>
        </el-form-item>
        <el-form-item label="押金" prop="deposit">
          <el-input v-model="addcheckOutForm.deposit"></el-input>
        </el-form-item>
        <el-form-item label="住宿天数" prop="days">
          <el-input v-model="addcheckOutForm.days"></el-input>
        </el-form-item>
        <el-form-item label="住宿费" prop="totalRoomPrice">
          <el-input v-model="addcheckOutForm.totalRoomPrice"></el-input>
        </el-form-item>
        <el-form-item label="店内消费" prop="goodsCost">
          <el-input v-model="addcheckOutForm.goodsCost"></el-input>
        </el-form-item> -->
        <el-form-item label="餐费" prop="foodCost">
          <el-input v-model.number="addcheckOutForm.foodCost"></el-input>
        </el-form-item>
        <el-form-item label="电话费" prop="phoneCost">
          <el-input v-model.number="addcheckOutForm.phoneCost"></el-input>
        </el-form-item>
        <el-form-item label="实际应收" prop="actualReceivable">
          <el-input v-model.number="addcheckOutForm.actualReceivable" disabled></el-input>
          <el-button type="primary" @click="calActualReceivable">计算实际应收</el-button>
        </el-form-item>
        <!-- <el-form-item label="应退押金" prop="refundableDeposit">
          <el-input v-model="addcheckOutForm.refundableDeposit"></el-input>
        </el-form-item> -->
        <el-form-item label="付款方式" prop="paymentMethod">
          <el-input v-model="addcheckOutForm.paymentMethod"></el-input>
        </el-form-item>
        <el-form-item label="实收" prop="paidIn">
          <el-input v-model.number="addcheckOutForm.paidIn" @change="calChange"></el-input>
        </el-form-item>
        <el-form-item label="找零" prop="change">
          <el-input v-model.number="addcheckOutForm.change" disabled></el-input>
        </el-form-item>
        <el-form-item label="操作员" prop="operator">
          <el-input v-model="addcheckOutForm.operator"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="addcheckOutForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addcheckOutDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addcheckOut">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="修改结账" :visible.sync="editcheckOutDialogVisible" width="30%" center>
      <el-form :model="editcheckOutForm" :rules="checkOutRules" ref="editcheckOutFormRef" label-width="80px">
        <el-form-item label="入住单号" prop="id">
          <el-input v-model.number="editcheckOutForm.id"></el-input>
        </el-form-item>
        <el-form-item label="客房编号" prop="roomNumber">
          <el-input v-model.number="editcheckOutForm.roomNumber"></el-input>
        </el-form-item>
        <el-form-item label="房价" prop="discountPrice">
          <el-input v-model.number="editcheckOutForm.discountPrice"></el-input>
        </el-form-item>
        <el-form-item label="押金" prop="deposit">
          <el-input v-model.number="editcheckOutForm.deposit"></el-input>
        </el-form-item>
        <el-form-item label="住宿天数" prop="days">
          <el-input v-model.number="editcheckOutForm.days"></el-input>
        </el-form-item>
        <el-form-item label="住宿费" prop="totalRoomPrice">
          <el-input v-model.number="editcheckOutForm.totalRoomPrice"></el-input>
        </el-form-item>
        <el-form-item label="店内消费" prop="goodsCost">
          <el-input v-model.number="editcheckOutForm.goodsCost"></el-input>
        </el-form-item>
        <el-form-item label="餐费" prop="foodCost">
          <el-input v-model.number="editcheckOutForm.foodCost"></el-input>
        </el-form-item>
        <el-form-item label="电话费" prop="phoneCost">
          <el-input v-model.number="editcheckOutForm.phoneCost"></el-input>
        </el-form-item>
        <el-form-item label="实际应收" prop="actualReceivable">
          <el-input v-model.number="editcheckOutForm.actualReceivable"></el-input>
        </el-form-item>
        <el-form-item label="应退押金" prop="refundableDeposit">
          <el-input v-model.number="editcheckOutForm.refundableDeposit"></el-input>
        </el-form-item>
        <el-form-item label="付款方式" prop="paymentMethod">
          <el-input v-model="editcheckOutForm.paymentMethod"></el-input>
        </el-form-item>
        <el-form-item label="实收" prop="paidIn">
          <el-input v-model.number="editcheckOutForm.paidIn"></el-input>
        </el-form-item>
        <el-form-item label="找零" prop="change">
          <el-input v-model.number="editcheckOutForm.change"></el-input>
        </el-form-item>
        <el-form-item label="操作员" prop="operator">
          <el-input v-model="editcheckOutForm.operator"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="editcheckOutForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editcheckOutDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editcheckOut">确 定</el-button>
      </span>
    </el-dialog>

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
    this.getAllCheckOutInfos()
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
        this.getAllCheckOutInfos()
      } else {
        var _this = this
        axios({
          method: 'post',
          url: global_.serverSrc + '/checkOutInfos/search',
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
    getAllCheckOutInfos() {
      var _this = this
      axios.get(global_.serverSrc + '/checkOutInfos').then((resopnse) => {
        if (resopnse.data.code == global_.GET_OK) {
          _this.tableData = resopnse.data.data
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
      axios.get(global_.serverSrc + '/checkOutInfos/' + id).then((resopnse) => {
        _this.editcheckOutForm = resopnse.data.data
      })
      this.editcheckOutDialogVisible = true
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
      var url = global_.serverSrc + '/checkOutInfos/'
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
      this.getAllCheckOutInfos()
      window.location.reload()
    },

    //按照id删除单个
    deleteById() {
      var url = global_.serverSrc + '/checkOutInfos/'
      url = url + this.deleteId
      axios.delete(url).then((resopnse) => {
        if (resopnse.data.code == global_.DELETE_ERR) {
          alert('删除失败')
        }
      })

      //刷新用户列表
      this.getAllCheckOutInfos()
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
    addcheckOut() {
      this.$refs.addcheckOutFormRef.validate((valid) => {
        if (valid) {
          var _this = this
          axios({
            method: 'post',
            url: global_.serverSrc + '/checkOutInfos',
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify(_this.addcheckOutForm),
          }).then((resopnse) => {
            if (resopnse.data.code == global_.SAVE_ERR) {
              alert('添加失败')
            }
          })
          //刷新列表
          _this.getAllCheckOutInfos()
          window.location.reload()
          this.addcheckOutDialogVisible = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    //打开表格点击确定后修改的请求写在这里
    editcheckOut() {
      this.$refs.editcheckOutFormRef.validate((valid) => {
        if (valid) {
          var _this = this
          if (this.editcheckOutForm.breakfast == '是') {
            this.editcheckOutForm.breakfast = true
          } else if (this.editcheckOutForm.breakfast == '否') {
            this.editcheckOutForm.breakfast = false
          }
          if (this.editcheckOutForm.wakeUp == '是') {
            this.editcheckOutForm.wakeUp = true
          } else if (this.editcheckOutForm.wakeUp == '否') {
            this.editcheckOutForm.wakeUp = false
          }
          axios({
            method: 'put',
            url: global_.serverSrc + '/roomTypes',
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify(_this.editcheckOutForm),
          }).then((resopnse) => {
            if (resopnse.data.code == global_.SAVE_ERR) {
              alert('添加失败')
            }
          })
          this.getAllCheckOutInfos()
          window.location.reload()
          this.editcheckOutDialogVisible = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    //计算实际应收
    calActualReceivable() {
      var _this = this
      var calForm = {}
      calForm.id = this.addcheckOutForm.id
      calForm.foodCost = this.addcheckOutForm.foodCost
      calForm.phoneCost = this.addcheckOutForm.phoneCost
      console.log(JSON.stringify(calForm))
      axios({
        method: 'post',
        url: global_.serverSrc + '/checkOutInfos/count',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(calForm),
      }).then((resopnse) => {
        // _this.addcheckOutForm.paidIn = resopnse.data.data;
        this.$set(_this.addcheckOutForm, 'actualReceivable', resopnse.data.data)
      })
    },
    //计算找零
    calChange() {
      var change =
        this.addcheckOutForm.paidIn - this.addcheckOutForm.actualReceivable
      this.$set(this.addcheckOutForm, 'change', change)
    },
  },

  data() {
    return {
      massDeletionDialogVisible: false,
      deletionDialogVisible: false,
      addcheckOutDialogVisible: false,
      addcheckOutForm: {
        id: '',
        roomNumber: '',
        discountPrice: '',
        deposit: '',
        days: '',
        totalRoomPrice: '',
        goodsCost: '',
        foodCost: '',
        phoneCost: '',
        actualReceivable: '',
        refundableDeposit: '',
        paymentMethod: '',
        paidIn: '',
        change: '',
        operator: '',
        remark: '',
      },
      editcheckOutDialogVisible: false,
      editcheckOutForm: {
        id: '',
        roomNumber: '',
        discountPrice: '',
        deposit: '',
        days: '',
        totalRoomPrice: '',
        goodsCost: '',
        foodCost: '',
        phoneCost: '',
        actualReceivable: '',
        refundableDeposit: '',
        paymentMethod: '',
        paidIn: '',
        change: '',
        operator: '',
        remark: '',
      },
      checkOutRules: {
        id: [{ required: true, message: '请输入入住单号', trigger: 'blur' }],
        roomNumber: [
          { required: true, message: '请输入客房编号', trigger: 'blur' },
        ],
        discountPrice: [
          { required: true, message: '请输入房价', trigger: 'blur' },
        ],
        deposit: [
          { required: true, message: '请输入住宿押金', trigger: 'blur' },
        ],
        days: [{ required: true, message: '请输入住宿天数', trigger: 'blur' }],
        totalRoomPrice: [
          { required: true, message: '请输入住宿费', trigger: 'blur' },
        ],
        actualReceivable: [
          { required: true, message: '请输入实际应收', trigger: 'blur' },
        ],
        refundableDeposit: [
          { required: true, message: '请输入应退押金', trigger: 'blur' },
        ],
        paymentMethod: [
          { required: true, message: '请输入付款方式', trigger: 'blur' },
        ],
        paidIn: [{ required: true, message: '请输入实收', trigger: 'blur' }],
        change: [{ required: true, message: '请输入找零', trigger: 'blur' }],
        operator: [
          { required: true, message: '请输入操作员', trigger: 'blur' },
        ],
      },
      tableData: [],
      checkInInfos: [],
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