<template>
  <div class="chart">
    <el-table :data="tableData"
              style="width: 100%">
      <template v-for="(item,index) in tableHeader">
        {{item}}
        <el-table-column :key="index"
                         :label="item.label"
                         :prop="item.prop">
        </el-table-column>
      </template>
      <el-table-column label="操作"
                       prop="operation">
        <template slot-scope="scope">
          <el-button size="mini"
                     type="danger"
                     @click="handleDelete(scope.$index, scope.row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'chart',
  props: ['formSpecs'],
  data () {
    return {
      tableData: [],
      tableHeader: [{
        label: '规格',
        prop: 'specs'
      }, {
        label: '包装费',
        prop: 'packing'
      }, {
        label: '价格',
        prop: 'price'
      }]
    }
  },
  watch: {
    formSpecs: {
      handler (newValue, oldValue) {
        this.tableData.push(this.formSpecs)
      },
      deep: true
    }
  },
  methods: {
    handleDelete (index, row) {
      this.tableData.splice(index, 1)
    }
  }
}
</script>
<style lang="less">
.chart {
  & {
    border: 1px solid #ebeef5;
    margin-bottom: 0.2rem;
  }
  .el-table {
    & {
      background-color: transparent;
    }
    tr {
      th {
        background-color: #eef1f6;
        div {
          color: #1f2d3d;
        }
      }
    }
  }
}
</style>
