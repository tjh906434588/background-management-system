<template>
  <div class="crumbs">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home/home-index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta"
                          :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown @command="handleCommand"
                 menu-align='start'>
      <i class="avator el-icon-user"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="home">首页</el-dropdown-item>
        <el-dropdown-item command="loginRouter">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'crumbs',
  methods: {
    async handleCommand (command) {
      if (command === 'home') {
        this.$router.push('/home/home-index')
      } else if (command === 'loginRouter') {
        this.$router.push('/login')
        this.$notify({
          title: '退出成功',
          message: '退出成功',
          type: 'success'
        })
        // if (res.status === 1) {
        //   this.$message({
        //     type: 'success',
        //     message: '退出成功'
        //   })
        //   this.$router.push('/')
        // } else {
        //   this.$message({
        //     type: 'error',
        //     message: res.message
        //   })
        // }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.crumbs {
  padding-right: 20px;
  .el-dropdown {
    font-size: 30px;
  }
}
</style>
