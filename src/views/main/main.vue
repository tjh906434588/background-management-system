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
    margin-bottom: 0.6rem;
    padding: 0 0.2rem 0.4rem;
  }
  .copy {
    margin-top: -0.6rem;
    width: 100%;
  }
  &-logo {
    position: absolute;
    top: 0.15rem;
    left: 0.2rem;
    width: 1.86rem;
  }
  .nav-wrapper {
    position: absolute;
    left: 2.68rem;
    top: 0;
    padding-top: 0.14rem;
    height: 0.8rem;
  }
  .nav-item {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    width: 1.17rem;
    font-size: 0;
    cursor: pointer;
  }
  .nav-icon {
    margin-bottom: 0.08rem;
    width: 0.3rem;
  }
  .nav-name {
    font-size: 0.14rem;
    color: #999;
    &.active {
      color: #33cc9a;
    }
  }
  .pos-right {
    position: absolute;
    right: 0;
    top: 0.14rem;
  }
  .main-page {
    width: calc(100% - 3.2rem);
  }
}
.change-menu {
  position: absolute;
  width: 0.6rem;
  right: 0.2rem;
  bottom: -0.2rem;
  cursor: pointer;
}
</style>
