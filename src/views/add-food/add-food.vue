<template>
  <div class="add-food">
    <header class="form-header">选择食品种类</header>
    <el-form ref="ruleForm"
             class="form"
             :model="ruleForm"
             label-width="100px">
      <div class="category-select">
        <el-form-item label="食品种类">
          <el-select v-model="ruleForm.kind"
                     class="select">
            <el-option label="中餐"
                       value="中餐"></el-option>
            <el-option label="西餐"
                       value="西餐"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="add-category-row"
           :class="showAddCategory? 'showEdit': ''">
        <el-form-item label="食品种类">
          <el-input v-model="ruleForm.kinds"></el-input>
        </el-form-item>
        <el-form-item label="种类描述">
          <el-input v-model="ruleForm.describe"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="onSubmit">提交</el-button>
        </el-form-item>
      </div>
      <div class="add_category_button"
           @click="addCategoryFun">
        <i class="el-icon-caret-top edit_icon"
           v-if="showAddCategory"></i>
        <i class="el-icon-caret-bottom edit_icon"
           v-else
           slot="icon"></i>
        <span>添加食品种类</span>
      </div>
    </el-form>
    <header class="form-header">添加食品</header>
    <el-form ref="foodForm"
             class="form food_form"
             :rules="rules"
             :model="foodForm"
             label-width="100px">
      <el-form-item label="食品名称"
                    prop="foodName">
        <el-input v-model="ruleForm.foodName"></el-input>
      </el-form-item>
      <el-form-item label="食品活动">
        <el-input v-model="ruleForm.activity"></el-input>
      </el-form-item>
      <el-form-item label="食品详情">
        <el-input v-model="ruleForm.details"></el-input>
      </el-form-item>

      <el-form-item label="上传食品图片">
        <el-upload action="#"
                   list-type="picture-card"
                   :auto-upload="false">
          <i slot="default"
             class="el-icon-plus"></i>
          <div slot="file"
               slot-scope="{file}">
            <img class="el-upload-list__item-thumbnail"
                 :src="file.url"
                 alt="">
            <span class="el-upload-list__item-actions">
              <span class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)">
                <i class="el-icon-zoom-in"></i>
              </span>
              <span v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)">
                <i class="el-icon-download"></i>
              </span>
              <span v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)">
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%"
               :src="dialogImageUrl"
               alt="">
        </el-dialog>
      </el-form-item>

      <el-form-item label="食品特点">
        <el-select v-model="foodForm.trait"
                   placeholder="请选择">
          <el-option label="新品"
                     value="1"></el-option>
          <el-option label="招牌"
                     value="2"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="食品规格">
        <el-radio-group v-model="foodForm.specs">
          <el-radio label="单规格"></el-radio>
          <el-radio label="多规格"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="包装费">
        <el-input-number v-model="foodForm.packing"
                         controls-position="right"
                         :min="0"
                         :max="100"></el-input-number>
      </el-form-item>

      <el-form-item label="价格">
        <el-input-number v-model="foodForm.price"
                         controls-position="right"
                         :min="0"
                         :max="10000"></el-input-number>
      </el-form-item>

      <el-form-item>
        <el-button type="primary"
                   @click="submitForm('foodForm')">确认添加食品</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  name: 'add-food',
  data () {
    return {
      ruleForm: {
        kind: '',
        kinds: '',
        describe: ''
      },
      foodForm: {
        foodName: '',
        activity: '',
        details: '',
        trait: '',
        specs: '单规格',
        packing: '0',
        price: ''
      },
      showAddCategory: false,
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      rules: {
        foodName: [
          { required: true, message: '请输入食品名称', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(666)
    },
    addCategoryFun () {
      this.showAddCategory = !this.showAddCategory
    },
    handleRemove (file) {
      console.log(file)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload (file) {
      console.log(file)
    },
    submitForm (formName) {
      console.log(this.$refs[formName])
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!')
        } else {
          this.$notify.error({
            title: '错误',
            message: '请检查输入是否正确'
          })
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.add-food {
  & {
    margin: 0.2rem auto 0;
    width: 9.33rem;
    font-size: 0.16rem;
  }
  .form-header {
    font-size: 0.16rem;
    text-align: center;
    margin-bottom: 0.1rem;
  }
  .category-select {
    border: 1px solid #eaeefb;
    padding: 0.1rem 0.3rem 0.1rem 0.1rem;
    border-top-right-radius: 0.06rem;
    border-top-left-radius: 0.06rem;
  }
  .select {
    width: 100%;
  }
  .el-form:hover {
    box-shadow: 0 0 0.08rem 0 rgba(232, 237, 250, 0.6),
      0 0.02rem 0.04rem 0 rgba(232, 237, 250, 0.5);
    border-radius: 0.06rem;
    transition: all 400ms;
  }
  .add-category-row {
    height: 0;
    overflow: hidden;
    transition: all 400ms;
    background: #f9fafc;
    padding: 0 0.3rem 0 0.1rem;
    & > .el-form-item:nth-child(3) {
      padding-bottom: 22px;
      margin-bottom: 0;
    }
    & > .el-form-item:nth-child(1) {
      padding-top: 10px;
    }
  }
  .showEdit {
    height: 195px;
  }
  .add_category_button {
    text-align: center;
    line-height: 0.4rem;
    border-bottom-right-radius: 0.06rem;
    border-bottom-left-radius: 0.06rem;
    border: 0.01rem solid #eaeefb;
    border-top: none;
    transition: all 400ms;
    &:hover {
      background: #f9fafc;
      span,
      .edit_icon {
        color: #20a0ff;
      }
    }
    span {
      font-size: 0.14rem;
      color: #999;
      transition: all 400ms;
    }
    .edit_icon {
      color: #ccc;
      transition: all 400ms;
    }
  }
  .form {
    margin-bottom: 30px;
  }
  .food_form {
    border: 1px solid #eaeefb;
    padding: 10px 10px 0;
  }
}
</style>
