<template>
  <div class="sideNavigationBar">
    <el-menu :default-active="$route.path"
             class="el-menu-vertical-demo"
             background-color="rgb(50, 64, 87)"
             text-color="#bfcbd9"
             :unique-opened=true
             active-text-color="#20A0FF"
             @select="handleSelect">
      <el-menu-item index="/home/home-index">
        <i class="el-icon-house"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>数据管理</span>
        </template>
        <el-menu-item index="/home/user-list">用户列表</el-menu-item>
        <el-menu-item index="/home/business-list">商家列表</el-menu-item>
        <el-menu-item index="2-3">食品列表</el-menu-item>
        <el-menu-item index="2-4">订单列表</el-menu-item>
        <el-menu-item index="2-5">管理员列表</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-plus"></i>
          <span>添加数据</span>
        </template>
        <el-menu-item index="3-1">添加商铺</el-menu-item>
        <el-menu-item index="3-2">添加商品</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-star-off"></i>
          <span>图表</span>
        </template>
        <el-menu-item index="4-1">用户分布</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span>编辑</span>
        </template>
        <el-menu-item index="5-1">文本编辑</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>设置</span>
        </template>
        <el-menu-item index="6-1">管理员设置</el-menu-item>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-warning-outline"></i>
          <span>说明</span>
        </template>
        <el-menu-item index="7-1">说明</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'sideNavigationBar',
  data () {
    return {
      judge: ''
    }
  },
  methods: {
    handleSelect (index, indexPath) {
      if (this.judge === index) {
        return false
      }
      if (index === '/home/home-index') {
        this.$router.push({ path: indexPath[0] })
      } else {
        this.$router.push({ path: indexPath[1] })
      }
      this.$router.beforeEach((to, from, next) => {
        if (to.path === '/home/home-index') {
          this.judge = '/home/home-index'
        }
        next()
      })
      this.judge = index
    }
  }
}
</script>

<style lang="less">
.sideNavigationBar .el-menu-item:focus,
.sideNavigationBar .el-menu-item:hover {
  background-color: #48576a !important;
}
.sideNavigationBar .el-submenu__title:focus,
.sideNavigationBar .el-submenu__title:hover {
  background-color: #48576a !important;
}
.main-menu .crumbs {
  background-color: #eff2f7;
  height: 60px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  padding-left: 20px;
}
</style>
