<template>
  <div class="food-list">
    <el-table :data="tableData"
              style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left"
                   inline
                   class="demo-table-expand">
            <el-form-item v-for="(item,index) in startDetails"
                          :key="index"
                          :label="item.label">
              <span>{{ props.row[item.prop] }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column v-for="(item,index) in tableHeader"
                       :key="index"
                       align="center"
                       :label="item.label"
                       :prop="item.prop">
      </el-table-column>
      <el-table-column label="操作"
                       align="center">
        <template slot-scope="scope">
          <el-button @click="outerVisible = true">编辑</el-button>
          <el-button type="danger"
                     @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 编辑 -->
    <el-dialog title="修改食品信息"
               :visible.sync="outerVisible">
      <!-- 表单 -->
      <foodList :state='state'/>
      <!-- 表格 -->
      <chart :formSpecs='formData' />
      <div class="btn">
        <el-button type="primary"
                   @click="innerVisible = true">添加规格</el-button>
      </div>
      <el-dialog title="添加规格"
                 :visible.sync="innerVisible"
                 append-to-body>

        <el-form ref="formSpecs"
                 :model="formSpecs"
                 :rules='rules'
                 label-width="80px">
          <el-form-item label="规格"
                        prop="specs">
            <el-input v-model="formSpecs.specs">
            </el-input>
          </el-form-item>
          <el-form-item label="包装费"
                        prop="packing">
            <el-input-number v-model="formSpecs.packing"
                             :min="0"
                             :max="100"></el-input-number>
          </el-form-item>
          <el-form-item label="价格"
                        prop='price'>
            <el-input-number v-model="formSpecs.price"
                             :min="0"
                             :max="10000"></el-input-number>
          </el-form-item>
          <el-form-item>
            <el-button @click="onCancel('formSpecs')">取消</el-button>
            <el-button type="primary"
                       @click="onSubmit('formSpecs')">确定</el-button>
          </el-form-item>
        </el-form>

      </el-dialog>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="onRemove">取 消</el-button>
        <el-button type="primary"
                   @click="onModify">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import foodList from './sheet.vue'
import chart from './chart.vue'
export default {
  name: 'food-list',
  components: {
    foodList,
    chart
  },
  data () {
    return {
      outerVisible: false,
      innerVisible: false,

      tableHeader: [{
        label: '食品名称',
        prop: 'nameFood'
      }, {
        label: '食品介绍',
        prop: 'introduce'
      }, {
        label: '评分',
        prop: 'score'
      }],
      startDetails: [{
        label: '食品名称',
        prop: 'nameFood'
      }, {
        label: '餐馆名称',
        prop: 'nameRestaurant'
      }, {
        label: '食品 ID',
        prop: 'idFood'
      }, {
        label: '餐馆 ID',
        prop: 'idRestaurant'
      }, {
        label: '食品介绍',
        prop: 'introduce'
      }, {
        label: '餐馆地址',
        prop: 'address'
      }, {
        label: '评分',
        prop: 'score'
      }, {
        label: '食品分类',
        prop: 'classification'
      }, {
        label: '月销量',
        prop: 'volume'
      }],
      tableData: [{
        nameFood: '汉堡',
        nameRestaurant: '吃个汉堡',
        idFood: '315',
        idRestaurant: '769',
        introduce: '肉夹馍',
        address: '牛逼一路',
        score: '9.8',
        classification: '垃圾食品',
        volume: '998'
      }, {
        nameFood: '土豆炒洋芋',
        nameRestaurant: '大碗吃饭',
        idFood: '51',
        idRestaurant: '751',
        introduce: '素的不行',
        address: '出门左转',
        score: '9.0',
        classification: '健康',
        volume: '5474'
      }, {
        nameFood: '尖椒炒鸡肉',
        nameRestaurant: '中餐馆',
        idFood: '5574',
        idRestaurant: '1714',
        introduce: '有肉哦',
        address: '桃花源一号',
        score: '8.1',
        classification: '中餐',
        volume: '1024'
      }],
      formSpecs: {
        specs: '',
        packing: '0',
        price: '20'
      },
      formData: {},
      state: false,
      rules: {
        specs: [
          { required: true, message: '规格不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleDelete (index, row) {
      this.tableData.splice(index, 1)
      console.log(index, row)
    },
    // 取消添加规格
    onCancel (formName) {
      this.innerVisible = false
      this.$refs[formName].resetFields()
    },
    // 确定添加规格
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.formData = JSON.parse(JSON.stringify((this.formSpecs)))
          this.innerVisible = false
          this.$refs[formName].resetFields()
        } else {
          return false
        }
      })
    },
    onRemove () {
      this.state = true
      this.outerVisible = false
    },
    onModify () {
      console.log(666)
      this.outerVisible = false
    }
  }
}
</script>

<style lang='less'>
.food-list {
  & {
    font-size: 0.16rem;
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 0.9rem;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .el-button {
    padding: 0.07rem 0.09rem;
  }
  .el-dialog .el-dialog__header {
    padding: 0.2rem 0.2rem 0;
    span {
      font-weight: 700;
    }
  }
  .el-dialog {
    .el-button {
      padding: 0.1rem 0.15rem;
    }
  }
  .btn {
    text-align: center;
    .el-button {
      padding: 0.1rem 0.15rem;
      margin-bottom: 0.1rem;
    }
  }
}
.el-dialog__wrapper {
  .el-dialog__header {
    padding: 0.2rem 0.2rem 0;
    span {
      display: block;
      font-weight: 700;
    }
  }
}
</style>
