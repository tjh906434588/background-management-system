<template>
  <div class="main">
    <!-- 侧边栏 -->
    <div class="main-header">
      <side-navigation-bar>
      </side-navigation-bar>
    </div>
    <!-- 顶部 -->
    <div class="main-menu">
      <crumbs></crumbs>
    </div>

    <div class="main-page">
      <router-view />
    </div>

  </div>
</template>
<script>
import sideNavigationBar from './sideNavigationBar'
import crumbs from './crumbs'
export default {
  components: {
    sideNavigationBar,
    crumbs
  },
  methods: {
    goHome () {
      this.$router.push({
        name: 'home-index'
      })
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  position: relative;
  width: 100%;
  height: 100%;
  &-header {
    position: fixed;
    left: 0;
    right: 0;
    width: 3.2rem;
    height: 100vh;
    background-color: rgb(50, 64, 87);
    z-index: 99;
  }
  &-menu {
    position: fixed;
    right: 0;
    top: 0;
    width: calc(100% - 3.2rem);
    height: 0.6rem;
    background-color: rgb(239, 242, 247);
    z-index: 90;
  }
  &-page {
    position: absolute;
    top: 0.6rem;
    left: 3.2rem;
    .copy {
      margin-top: -60px;
    }
  }
  .main-single {
    min-height: calc(~"100% - 60px");
    margin-bottom: 60px;
    padding: 0 20px 40px;
  }
  .copy {
    margin-top: -60px;
    width: 100%;
  }
  &-logo {
    position: absolute;
    top: 15px;
    left: 20px;
    width: 186px;
  }
  .nav-wrapper {
    position: absolute;
    left: 268px;
    top: 0;
    padding-top: 14px;
    height: 80px;
  }
  .nav-item {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    width: 117px;
    font-size: 0;
    cursor: pointer;
  }
  .nav-icon {
    margin-bottom: 8px;
    width: 30px;
  }
  .nav-name {
    font-size: 14px;
    color: #999;
    &.active {
      color: #33cc9a;
    }
  }
  .pos-right {
    position: absolute;
    right: 0;
    top: 14px;
  }
}
.change-menu {
  position: absolute;
  width: 60px;
  right: 20px;
  bottom: -20px;
  cursor: pointer;
}
</style>
