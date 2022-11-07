<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 24px; margin-bottom: 12px;">
      <el-breadcrumb-item>消费管理</el-breadcrumb-item>
      <el-breadcrumb-item>附加消费管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="20" style="margin-bottom: 12px;">
      <el-col :span="20">
        <el-input style="line-height: 36px;" v-model="input" placeholder="请输入客房编号">
          <el-button slot="append" icon="el-icon-search">
          </el-button>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="addConsumptionDialogVisible = true">
          新增消费
        </el-button>
        <el-button @click="massDeletionDialogVisible = true" type="danger">
          批量删除
        </el-button>
      </el-col>
    </el-row>

    <!-- 信息列表 -->
    <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="checkInId" label="入住单号">
      </el-table-column>
      <el-table-column prop="roomId" label="客房编号">
      </el-table-column>
      <el-table-column prop="totalPrice" label="合计" width="180">
      </el-table-column>
      <el-table-column prop="operator" label="操作员" width="180">
      </el-table-column>
      <el-table-column prop="time" label="消费时间">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="270">
        <template slot-scope="scope">
          <el-button @click="showConsumptionEditDialog(scope.row.id)" type="primary">编辑</el-button>
          <el-button @click="showPrintDialog(scope.row.id)" type="primary">打印</el-button>
          <el-button @click="showConsumptionDeleteDialog(scope.row.id)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 信息列表的删除对话框 -->
    <el-dialog title="删除" :visible.sync="consumptionDeletionDialogVisible" width="30%" center>
      <span>确定要删除该项目吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="consumptionDeletionDialogVisible = false">取 消</el-button>
        <el-button type="danger" @click="deleteByIdConsumption">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 信息列表的批量删除对话框 -->
    <el-dialog title="批量删除" :visible.sync="massDeletionDialogVisible" width="30%" center>
      <span>确定要批量删除选中的项目吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="massDeletionDialogVisible = false">取 消</el-button>
        <el-button type="danger" @click="deleteByIdsConsumption">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 新增总览 -->
    <el-dialog title="新增消费信息" :visible.sync="addConsumptionDialogVisible" fullscreen center :before-close="closeButton">
      <el-row :gutter="20" style="margin-bottom: 12px;">
        <el-button @click="addConsumptionDetailDialogVisible = true" type="primary" style="position:relative;left:85%">新增商品</el-button>
      </el-row>
      <el-form :model="addConsumptionForm" :rules="ConsumptionRules" ref="addConsumptionFormRef" label-width="80px">
        <el-table :data="dialogTableData" border style="margin-left: 60px; margin-right: 60px; margin-bottom: 24px;  width: auto">
          <el-table-column prop="goodsName" label="商品名">
          </el-table-column>
          <el-table-column prop="count" label="数量" disabled>
          </el-table-column>
          <el-table-column prop="unitPrice" label="单价" disabled>
          </el-table-column>
          <el-table-column prop="consumePrice" label="消费金额" disabled>
          </el-table-column>
          <el-table-column prop="discountRate" label="折扣率">
          </el-table-column>
          <el-table-column prop="discountPrice" label="折后金额" disabled>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="90">
            <template slot-scope="scope">
              <el-button @click="addEditDeletion(scope.row)" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-form-item label="入住单号" prop="checkInId">
          <el-input v-model="addConsumptionForm.checkInId"></el-input>
        </el-form-item>
        <el-form-item label="客房编号" prop="roomNumber">
          <el-input v-model="addConsumptionForm.roomId"></el-input>
        </el-form-item>
        <el-form-item label="合计" prop="totalPrice">
          <el-input v-model="addConsumptionForm.totalPrice" disabled></el-input>
        </el-form-item>
        <el-form-item label="操作员" prop="operator">
          <el-input v-model="addConsumptionForm.operator"></el-input>
        </el-form-item>
        <el-form-item label="时间" prop="time">
          <!-- <el-input v-model="addConsumptionForm.time"></el-input> -->
          <el-date-picker v-model="addConsumptionForm.time" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeButton">取 消</el-button>
        <el-button type="primary" @click="addConsumption">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 添加总览里添加详情 -->
    <el-dialog title="新增具体消费信息" :visible.sync="addConsumptionDetailDialogVisible" width="30%" center :before-close="closeButton">
      <el-form :model="addConsumptionDetailForm" :rules="ConsumptionRules" ref="editConsumptionDetailFormRef" label-width="80px">
        <el-form-item label="商品名" prop="goodsName">
          <el-select v-model="addConsumptionDetailForm.goodsName" placeholder="请选择类型" @change="holdAllChange(addConsumptionDetailForm)">
            <el-option v-for="item in goods" :key="item.id" :label="item.name" :value="item.name">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="数量" prop="count">
          <el-input v-model="addConsumptionDetailForm.count" @change="holdAllChange(addConsumptionDetailForm)"></el-input>
        </el-form-item>
        <el-form-item label="单价" prop="unitPrice" disabled>
          <el-input v-model="addConsumptionDetailForm.unitPrice" disabled></el-input>
        </el-form-item>
        <el-form-item label="消费金额" prop="consumePrice" disabled>
          <el-input v-model="addConsumptionDetailForm.consumePrice" disabled></el-input>
        </el-form-item>
        <el-form-item label="折扣率" prop="discountRate">
          <el-input v-model="addConsumptionDetailForm.discountRate" @change="holdAllChange(addConsumptionDetailForm)"></el-input>
        </el-form-item>
        <el-form-item label="折后金额" prop="discountPrice" disabled>
          <el-input v-model="addConsumptionDetailForm.discountPrice" disabled></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeButton">取 消</el-button>
        <el-button type="primary" @click="addNewGoodsDetail">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 修改现有总览 -->
    <el-dialog title="修改消费信息" :visible.sync="editConsumptionDialogVisible" fullscreen center :before-close="closeButton">
      <el-row :gutter="20" style="margin-bottom: 12px;">
        <el-button @click="addConsumptionDetailDialogVisible = true" type="primary" style="position:relative;left:85%">新增商品</el-button>
      </el-row>
      <el-form :model="editConsumptionForm" :rules="ConsumptionRules" ref="editConsumptionFormRef" label-width="80px">
        <el-table :data="dialogTableData" border style="margin-left: 60px; margin-right: 60px; margin-bottom: 24px;  width: auto">
          <el-table-column prop="goodsName" label="商品名">
          </el-table-column>
          <el-table-column prop="count" label="数量">
          </el-table-column>
          <el-table-column prop="unitPrice" label="单价">
          </el-table-column>
          <el-table-column prop="consumePrice" label="消费金额">
          </el-table-column>
          <el-table-column prop="discountRate" label="折扣率">
          </el-table-column>
          <el-table-column prop="discountPrice" label="折后金额">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="90">
            <template slot-scope="scope">
              <el-button @click="editDeletion(scope.row)" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-form-item label="入住单号" prop="checkInId">
          <el-input v-model="editConsumptionForm.checkInId"></el-input>
        </el-form-item>
        <el-form-item label="客房编号" prop="roomId">
          <el-input v-model="editConsumptionForm.roomId"></el-input>
        </el-form-item>
        <el-form-item label="合计" prop="totalPrice">
          <el-input v-model="editConsumptionForm.totalPrice" disabled></el-input>
        </el-form-item>
        <el-form-item label="操作员" prop="operator">
          <el-input v-model="editConsumptionForm.operator"></el-input>
        </el-form-item>
        <el-form-item label="时间" prop="time">
          <!-- <el-input v-model="editConsumptionForm.time"></el-input> -->
          <el-date-picker v-model="editConsumptionForm.time" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeButton">取 消</el-button>
        <el-button type="primary" @click="editConsumption">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 添加现有总览中的详情 -->
    <el-dialog title="修改具体消费信息" :visible.sync="editConsumptionDetailDialogVisible" width="30%" center :before-close="closeButton">
      <el-form :model="editConsumptionDetailForm" :rules="ConsumptionRules" ref="editAddConsumptionFormRef" label-width="80px">
        <el-form-item label="商品名" prop="goodsName">
          <el-select v-model="editConsumptionDetailForm.goodsName" placeholder="请选择类型" @change="holdAllChange(editConsumptionDetailForm)">
            <el-option v-for="item in goods" :key="item.id" :label="item.name" :value="item.name">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="数量" prop="count" @change="holdAllChange(editConsumptionDetailForm)">
          <el-input v-model="editConsumptionDetailForm.count"></el-input>
        </el-form-item>
        <el-form-item label="单价" prop="unitPrice">
          <el-input v-model="editConsumptionDetailForm.unitPrice" disabled></el-input>
        </el-form-item>
        <el-form-item label="消费金额" prop="consumePrice">
          <el-input v-model="editConsumptionDetailForm.consumePrice" disabled></el-input>
        </el-form-item>
        <el-form-item label="折扣率" prop="discountRate" @change="holdAllChange(editConsumptionDetailForm)">
          <el-input v-model="editConsumptionDetailForm.discountRate"></el-input>
        </el-form-item>
        <el-form-item label="折后金额" prop="discountPrice">
          <el-input v-model="editConsumptionDetailForm.discountPrice" disabled></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeButton">取 消</el-button>
        <el-button type="primary" @click="editConsumptionDetail">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="打印消费单" :visible.sync="printConsumptionDialogVisible" fullscreen center :before-close="closeButton">
      <el-form :data="printConsumptionForm" ref="printConsumptionFormRef" label-width="80px" disabled>
        <el-table :data="dialogTableData" border style="margin-left: 60px; margin-right: 60px; margin-bottom: 24px;  width: auto">
          <el-table-column prop="goodsName" label="商品名">
          </el-table-column>
          <el-table-column prop="count" label="数量">
          </el-table-column>
          <el-table-column prop="unitPrice" label="单价">
          </el-table-column>
          <el-table-column prop="consumePrice" label="消费金额">
          </el-table-column>
          <el-table-column prop="discountRate" label="折扣率">
          </el-table-column>
          <el-table-column prop="discountPrice" label="折后金额">
          </el-table-column>
        </el-table>
        <el-form-item label="入住单号" prop="checkInId">
          <el-input v-model="editConsumptionForm.checkInId"></el-input>
        </el-form-item>
        <el-form-item label="客房编号" prop="roomId">
          <el-input v-model="editConsumptionForm.roomId"></el-input>
        </el-form-item>
        <el-form-item label="合计" prop="totalPrice">
          <el-input v-model="editConsumptionForm.totalPrice"></el-input>
        </el-form-item>
        <el-form-item label="操作员" prop="operator">
          <el-input v-model="editConsumptionForm.operator"></el-input>
        </el-form-item>
        <el-form-item label="时间" prop="time">
          <!-- <el-input v-model="editConsumptionForm.time"></el-input> -->
          <el-date-picker v-model="editConsumptionForm.time" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeButton">取 消</el-button>
        <el-button type="primary" @click="printpage">打 印</el-button>
      </span>
    </el-dialog>

    <!-- 这他妈是页标，不是HEADER！ -->
    <!--     <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[20, 50, 100, 200]" :page-size="20"
      layout="total, sizes, prev, pager, next, jumper" :total="400" style="margin-top: 12px;text-align: center;">
    </el-pagination> -->

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
    this.getAllConsumptions()
    this.getAllGoods()
  },
  methods: {
    getAllGoods() {
      var _this = this
      axios.get(global_.serverSrc + '/goods').then((response) => {
        if (response.data.code == global_.GET_OK) {
          _this.goods = response.data.data
        } else {
          alert(response.data.msg)
        }
      })
    },

    //获取所有消费记录
    getAllConsumptions() {
      var _this = this
      axios.get(global_.serverSrc + '/consumptions').then((response) => {
        if (response.data.code == global_.GET_OK) {
          _this.tableData = response.data.data
        } else {
          alert(response.data.msg)
        }
      })
    },

    getConsumptionById(id) {
      var _this = this
      axios.get(global_.serverSrc + '/consumptions/' + id).then((response) => {
        if (response.data.code == global_.GET_OK) {
          _this.editConsumptionForm = response.data.data
          _this.printConsumptionForm = response.data.data
        } else {
          alert(response.data.msg)
        }
      })
    },
    getAllConsumptionDetail(id) {
      var _this = this
      this.searchForm.consumptionId = id
      axios({
        method: 'post',
        url: global_.serverSrc + '/consumptionDetail/search',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(_this.searchForm),
      }).then((response) => {
        _this.dialogTableData = response.data.data
      })
    },

    //按照id批量删除
    deleteByIdsConsumption() {
      var url = global_.serverSrc + '/consumptions/'
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

      this.consumptionDeletionDialogVisible = false
      this.massDeletionDialogVisible = false

      //刷新用户列表
      this.getAllConsumptions()
      window.location.reload()
    },

    //按照id删除单个总览
    deleteByIdConsumption() {
      var url = global_.serverSrc + '/consumptions/'
      url = url + this.deleteId
      axios.delete(url).then((resopnse) => {
        if (resopnse.data.code == global_.DELETE_ERR) {
          alert('删除失败')
        }
      })

      this.getAllConsumptions()
      window.location.reload()
    },

    //批量删除对话框确定时触发的事件
    massDeletion() {
      this.deleteByIds()
      this.massDeletionDialogVisible = false
    },

    //显示消费记录的编辑对话框
    showConsumptionEditDialog(id) {
      console.log(this.tableData)
      this.getConsumptionById(id)
      this.getAllConsumptionDetail(id)
      this.editConsumptionDialogVisible = true
      this.calculateTotalPriceEdit()
    },

    //干脆把除两个删除外一切关闭窗口都塞到这儿得了
    closeButton() {
      this.editConsumptionForm = {}
      this.addConsumptionForm = {}
      this.addConsumptionDialogVisible = false
      this.editConsumptionDialogVisible = false
      this.addConsumptionDetailForm = {}
      this.editConsumptionDetailForm = {}
      this.dialogTableData = []
      this.addConsumptionDetailDialogVisible = false
      this.editConsumptionDetailDialogVisible = false
      this.printConsumptionDialogVisible = false
    },
    //总览删除提示
    showConsumptionDeleteDialog(id) {
      this.consumptionDeletionDialogVisible = true
      this.deleteId = id
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },

    //自动填写详情

    holdAllChange(form) {
      this.holdGoodsChange(form).then(
        this.holdCountChange(form).then(this.holdDiscountRateChange(form))
      )
    },

    async holdGoodsChange(form) {
      (this.searchForm = {}), (this.searchForm.name = form.goodsName)
      var _this = this
      axios({
        method: 'post',
        url: global_.serverSrc + '/goods/search',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(_this.searchForm),
      }).then((response) => {
        this.$set(form, 'unitPrice', response.data.data[0].price)
        var consumePrice = form.count * form.unitPrice
        this.$set(form, 'consumePrice', consumePrice)
        var discountPrice = form.consumePrice * form.discountRate
        this.$set(form, 'discountPrice', discountPrice)
      })
    },

    async holdCountChange(form) {
      var consumePrice = form.count * form.unitPrice
      this.$set(form, 'consumePrice', consumePrice)
    },

    async holdDiscountRateChange(form) {
      var discountPrice = form.consumePrice * form.discountRate
      this.$set(form, 'discountPrice', discountPrice)
    },

    //自动填写详情END

    //新增总览

    //添加
    addNewGoodsDetail() {
      this.dialogTableData.push(this.addConsumptionDetailForm)
      this.addConsumptionDetailDialogVisible = false
      this.calculateTotalPrice()
      this.addConsumptionDetailForm = {}
    },

    //删除
    addEditDeletion(item) {
      this.dialogTableData = this.dialogTableData.filter((o) => o.id != item.id)
      this.calculateTotalPrice()
    },

    //计算总价
    calculateTotalPrice() {
      var totalPrice = 0
      for (var i = 0; i < this.dialogTableData.length; i++) {
        totalPrice += this.dialogTableData[i].discountPrice
      }
      console.log(totalPrice)
      this.$set(this.addConsumptionForm, 'totalPrice', totalPrice)
      this.$set(this.editConsumptionForm, 'totalPrice', totalPrice)
    },

    //现有总览

    //添加
    editConsumptionDetail() {
      this.dialogTableData.push(this.editConsumptionForm)
      this.editConsumptionDetailDialogVisible = false
      this.calculateTotalPriceEdit()
      this.editConsumptionDetailFForm = {}
    },

    //删除
    editDeletion(item) {
      this.dialogTableData = this.dialogTableData.filter((o) => o.id != item.id)
      this.calculateTotalPriceEdit()
    },

    //计算总价
    calculateTotalPriceEdit() {
      var totalPrice = 0
      for (var i = 0; i < this.dialogTableData.length; i++) {
        totalPrice += this.dialogTableData[i].discountPrice
      }
      console.log(totalPrice)
      this.$set(this.editConsumptionForm, 'totalPrice', totalPrice)
      this.$set(this.addConsumptionForm, 'totalPrice', totalPrice)
    },

    //打开表格点击确定后添加请求写在这里
    addConsumption() {
      this.$refs.addConsumptionFormRef.validate(async (valid) => {
        if (valid) {
          var _this = this
          //添加consumptions
          await axios({
            method: 'post',
            url: global_.serverSrc + '/consumptions',
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify(_this.addConsumptionForm),
          })
          // .then((response) => {
          //   if (response.data.code == global_.SAVE_ERR) {
          //     alert('添加失败')
          //   }
          // });
          //查询刚才添加的id
          this.searchForm = {}
          this.searchForm.time = this.addConsumptionForm.time
          console.log(this.searchForm)
          var res = await axios({
            method: 'post',
            url: global_.serverSrc + '/consumptions/search',
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify(_this.searchForm),
          })
          // .then((response) => {
          //   // id = response.data.data.id;
          //   _this.consumptionId = response.data.data[0].id;
          //   console.log("response data:");
          //   console.log(response.data);
          //   console.log("id:" + response.data.data[0].id)
          // });
          this.consumptionId = res.data.data[0].id

          //添加consumptionDetail
          for (var i = 0; i < this.dialogTableData.length; i++) {
            this.dialogTableData[i].consumptionId = this.consumptionId
            axios({
              method: 'post',
              url: global_.serverSrc + '/consumptionDetail',
              headers: {
                'Content-Type': 'application/json',
              },
              data: JSON.stringify(_this.dialogTableData[i]),
            }).then((response) => {
              if (response.data.code == global_.SAVE_ERR) {
                alert('添加失败')
              }
            })
          }
          this.editConsumptionForm = {}
          this.addConsumptionForm = {}
          this.dialogTableData = []
          //刷新列表
          _this.getAllConsumptions()
          // window.location.reload();
          this.addConsumptionDialogVisible = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    //修改表格点击确定后修改的请求写在这里
    //先把所有商品都删了再把表里现有的添加回去
    editConsumption() {
      var url = global_.serverSrc + '/consumptionDetail/consumptionIds/'
      //拼接删除用字符串
      url = url + this.editConsumptionForm.id
      //发送删除请求
      axios.delete(url).then((resopnse) => {
        if (resopnse.data.code == global_.DELETE_ERR) {
          alert('删除失败')
        }
      })
      this.$refs.editConsumptionFormRef.validate(async (valid) => {
        if (valid) {
          var _this = this
          //添加consumptions
          await axios({
            method: 'put',
            url: global_.serverSrc + '/consumptions',
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify(_this.editConsumptionForm),
          })
          // .then((response) => {
          //   if (response.data.code == global_.SAVE_ERR) {
          //     alert('添加失败')
          //   }
          // });
          //查询刚才添加的id
          this.searchForm = {}
          this.searchForm.time = this.editConsumptionForm.time
          console.log(this.searchForm)
          var res = await axios({
            method: 'post',
            url: global_.serverSrc + '/consumptions/search',
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify(_this.searchForm),
          })
          // .then((response) => {
          //   // id = response.data.data.id;
          //   _this.consumptionId = response.data.data[0].id;
          //   console.log("response data:");
          //   console.log(response.data);
          //   console.log("id:" + response.data.data[0].id)
          // });
          this.consumptionId = res.data.data[0].id

          //添加consumptionDetail
          for (var i = 0; i < this.dialogTableData.length; i++) {
            this.dialogTableData[i].consumptionId = this.consumptionId
            axios({
              method: 'post',
              url: global_.serverSrc + '/consumptionDetail',
              headers: {
                'Content-Type': 'application/json',
              },
              data: JSON.stringify(_this.dialogTableData[i]),
            }).then((response) => {
              if (response.data.code == global_.SAVE_ERR) {
                alert('添加失败')
              }
            })
          }
          this.editConsumptionForm = {}
          this.addConsumptionForm = {}
          this.dialogTableData = []
          //刷新列表
          _this.getAllConsumptions()
          // window.location.reload();
          this.editConsumptionDialogVisible = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    //MAKE PRINT GREAT AGIAN!!!
    showPrintDialog(id) {
      this.getAllConsumptionDetail(id)
      this.getConsumptionById(id)
      this.printConsumptionDialogVisible = true
    },

    printpage() {
      window.print()
    },

    //处理多选框
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
  },

  //DATA

  data() {
    return {
      //主界面的两个删除
      massDeletionDialogVisible: false,

      consumptionDeletionDialogVisible: false,

      //修改总览
      editConsumptionDialogVisible: false,
      editConsumptionForm: {
        id: '',
        roomNumber: '',
        totalPrice: '',
        operator: '',
        time: '',
      },
      //添加新总览时添加详情
      addConsumptionDetailDialogVisible: false,
      addConsumptionDetailForm: {
        goodsName: '',
        count: '',
        unitPrice: '',
        consumePrice: '',
        discountRate: '',
        discountPrice: '',
      },
      //添加新总览
      addConsumptionDialogVisible: false,
      addConsumptionForm: {
        id: '',
        roomNumber: '',
        totalPrice: '',
        operator: '',
        time: '',
      },
      //在现有总览中添加详情
      editConsumptionDetailDialogVisible: false,
      editConsumptionDetailForm: {
        goodsName: '',
        count: '',
        unitPrice: '',
        consumePrice: '',
        discountRate: '',
        discountPrice: '',
      },
      //打印
      printConsumptionDialogVisible: false,
      printConsumptionForm: {
        id: '',
        roomNumber: '',
        totalPrice: '',
        operator: '',
        time: '',
      },
      ConsumptionRules: {},
      tableData: [],
      dialogTableData: [],
      searchForm: {},
      input: '',
      currentPage4: 0,
      goods: [],
      consumptionId: 0,
      deleteId: 0,
      multipleSelection: [],
    }
  },
}
</script>

<style lang="less" scoped>
.el-form-item {
  margin-left: 80px;
  margin-right: 80px;
}
.el-form-item__label {
  width: 140px;
}
</style>