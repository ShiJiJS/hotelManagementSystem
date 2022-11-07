<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 24px; margin-bottom: 12px;">
      <el-breadcrumb-item>系统管理</el-breadcrumb-item>
      <el-breadcrumb-item>日志管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="20" style="margin-bottom: 12px;">
      <el-col :span="10">
        <el-input style="line-height: 36px;" v-model="input" placeholder="请输入用户名">
        </el-input>
      </el-col>
      <el-col :span="11">
        <el-input style="line-height: 36px;" v-model="input" placeholder="请输入日期">
        </el-input>
      </el-col>
      <el-col :span="1">
        <el-button icon="el-icon-search">
        </el-button>
      </el-col>
      <el-col :span="2">
        <el-button @click="massDeletionDialogVisible=true" type="danger">
          批量删除
        </el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="userName" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="operation" label="内容">
      </el-table-column>
      <el-table-column fixed="right" prop="date" label="时间" width="180">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="primary">查看</el-button>
          <el-button @click="deletionDialogVisible=true" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="删除" :visible.sync="deletionDialogVisible" width="30%" center>
      <span>确定要删除该项目吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deletionDialogVisible = false">取 消</el-button>
        <el-button type="danger" @click="deletionDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="批量删除" :visible.sync="massDeletionDialogVisible" width="30%" center>
      <span>确定要批量删除选中的项目吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="massDeletionDialogVisible = false">取 消</el-button>
        <el-button type="danger" @click="massDeletionDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[20, 50, 100, 200]" :page-size="20"
      layout="total, sizes, prev, pager, next, jumper" :total="400" style="margin-top: 12px;text-align: center;">
    </el-pagination>
  </div>
</template>

<!--别找了，很多按钮的点击事件并没有预留methods，自己写吧-->
<script>
export default {
  mounted() {
    /*     axios({
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
    }) */
    alert('这个页面还没做完喵')
    this.$router.push('/homePage')
  },
  methods: {
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
      tableData: [
        {
          userName: '野獣先輩',
          operation: '見ろよ見ろよ',
          date: '1919年08月10日11时45分14秒',
        },
      ],
    }
  },
}
</script>