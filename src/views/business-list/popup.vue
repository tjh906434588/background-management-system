<template>
  <div class="popup">
    <el-form ref="form"
             :model="form"
             label-width="80px">
      <el-form-item label="店铺名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="店铺介绍">
        <el-input v-model="form.introduce"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form.telephone"></el-input>
      </el-form-item>
      <el-form-item label="店铺分类">
        <el-cascader v-model="form.values"
                     :options="options"
                     @change="handleChange"></el-cascader>
      </el-form-item>
      <el-form-item label="商铺图片">
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

      <el-form-item>
        <el-button @click="onCancel">取消</el-button>
        <el-button type="primary"
                   @click="onSubmit">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'popup',
  data () {
    return {
      form: {
        name: '',
        address: '',
        introduce: '',
        telephone: '',
        values: ''
      },
      value: 'yiguoliaoli',
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      options: [
        {
          value: 'yiguoliaoli',
          label: '异国料理',
          children: [{
            value: '日韩料理',
            label: '日韩料理'
          }, {
            value: 'xican',
            label: '西餐'
          },
          {
            value: 'kuaicanbiandang',
            label: '快餐便当',
            children: [{
              value: 'jiancan',
              label: '简餐'
            }, {
              value: 'gaijiaofan',
              label: '盖浇饭'
            }
            ]
          }
          ]
        }
      ]
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
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
    onCancel () {
      console.log(111)
    },
    onSubmit () {
      console.log(222)
    }
  }
}
</script>
<style lang="less">
.popup {
  width: 100%;
}
</style>
