<template>
  <div class="sheet">
    <el-form ref="form"
             :model="form"
             label-width="80px">
      <el-form-item label="食品名称"
                    prop="nameFood">
        <el-input v-model="form.nameFood"></el-input>
      </el-form-item>
      <el-form-item label="食品介绍"
                    prop="introduce">
        <el-input v-model="form.introduce"></el-input>
      </el-form-item>
      <el-form-item label="食品分类"
                    prop="classification">
        <el-select v-model="form.classification"
                   placeholder="请选择">
          <el-option label="中餐"
                     value="中餐"></el-option>
          <el-option label="西餐"
                     value="西餐"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="食品图片">
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

    </el-form>
  </div>
</template>
<script>
export default {
  name: 'sheet',
  props: {
    state: {
      type: Boolean
    }
  },
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      form: {
        nameFood: '',
        introduce: '',
        classification: ''
      }
    }
  },
  methods: {
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
    resetting (forName = 'form') {
      this.$refs[forName].resetFields()
    }
  },
  watch: {
    state: function (on, v) {
      if (on) {
        console.log(0)
        this.resetting()
      }
    }
  }
}
</script>
<style lang="less" scoped>
.sheet {
}
</style>
