<template>
  <div class="userList">
    <el-table :data="tableData"
              highlight-current-row
              style="width: 100%">
      <el-table-column prop="index"
                       label="序号"
                       align='center'
                       width="180">
      </el-table-column>
      <el-table-column prop="date"
                       label="注册日期"
                       align='center'
                       width="180">
      </el-table-column>
      <el-table-column prop="name"
                       label="用户姓名"
                       align='center'
                       width="180">
      </el-table-column>
      <el-table-column prop="address"
                       align='center'
                       label="注册地址">
      </el-table-column>
    </el-table>

    <el-pagination background
                   @current-change="handleCurrentChange"
                   :current-page.sync="currentPage1"
                   :page-size="100"
                   layout="total, prev, pager, next"
                   :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'userList',
  data () {
    return {
      currentPage1: 1,
      tableData: [{
        index: '1',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        index: '2',
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        index: '3',
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        index: '4',
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="less" scoped>
.el-pagination {
  margin-top: 0.2rem;
  padding-left: 0.2rem;
}
</style>
