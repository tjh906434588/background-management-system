<template>
  <div class="home-index">
    <el-table :data="tableData"
              style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left"
                   inline
                   class="demo-table-expand">
            <template v-for="(item,index) in tableColumns">
              <el-form-item :key="index"
                            :label="item.label">
                <span>{{ props.row[item.prop] }}</span>
              </el-form-item>
            </template>
          </el-form>
        </template>
      </el-table-column>
      <template v-for="(item,index) in tableColumns.slice(0,3)">
        <el-table-column :key="index"
                         :label="item.label"
                         :prop="item.prop">
        </el-table-column>
      </template>
      <el-table-column label="操作"
                       prop="operation">
        <template slot-scope="scope">
          <el-button size="mini"
                     @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini"
                     @click="handleAdd(scope.$index, scope.row)">添加食品</el-button>
          <el-button size="mini"
                     type="danger"
                     @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="修改店铺信息"
               :visible.sync="dialogFormVisible">
      <popup></popup>
    </el-dialog>
  </div>
</template>

<script>
import popup from './popup.vue'
export default {
  components: {
    popup
  },
  data () {
    return {
      tableColumns: [{
        label: '店铺名称',
        prop: 'name'
      }, {
        label: '店铺地址',
        prop: 'address'
      }, {
        label: '店铺介绍',
        prop: 'introduce'
      }, {
        label: '店铺ID',
        prop: 'id'
      }, {
        label: '联系电话',
        prop: 'telephone'
      }, {
        label: '评分',
        prop: 'score'
      }, {
        label: '销售量',
        prop: 'number'
      }, {
        label: '分类',
        prop: 'classification'
      }],
      tableData: [
        {
          name: '效果演示',
          address: '广东省广州市越秀区中山五路219号华联购物中心F1',
          introduce: 'sad',
          id: '1',
          telephone: '13437850035',
          score: '评分',
          number: '106',
          classification: '快餐便当/简餐'
        },
        {
          name: '效果演示1',
          address: '广东省广州市越秀区中山五路219号华联购物中心F1',
          introduce: 'sad',
          id: '1',
          telephone: '13437850035',
          score: '评分',
          number: '106',
          classification: '快餐便当/简餐'
        }
      ],
      dialogFormVisible: false
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
      this.dialogFormVisible = true
    },
    handleAdd (index, row) {
      console.log(index, row)
      this.$router.push('add-food')
    },
    handleDelete (index, row) {
      console.log(index, row)
      this.tableData.splice(index, 1)
    }
  }
}
</script>

<style lang="less">
.home-index {
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .el-dialog__title {
    display: inherit;
    font-weight: 700;
  }
}
</style>
