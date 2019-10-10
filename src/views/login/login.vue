<template>
  <div class="login">
    <div class="login-registration">
      <span class="title">后台管理系统</span>
      <el-form :model="ruleForm"
               status-icon
               :rules="rules"
               ref="ruleForm"
               label-width="100px"
               class="demo-ruleForm">
        <el-form-item prop='account'
                      class="adjustment"
                      label="账号：">
          <el-input type="text"
                    class="bt2"
                    v-model="ruleForm.account"
                    placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop='pass'
                      @keyup.13.native="submitForm('ruleForm')"
                      label="密码：">
          <el-input type="password"
                    v-model="ruleForm.pass"
                    placeholder="密码"></el-input>
        </el-form-item>
        <el-button type="primary"
                   class="btn"
                   @click="submitForm('ruleForm')">登录</el-button>
        <section class="reminder">
          <span>温馨提示：</span>
          <span>未登录过的新用户，自动注册</span>
          <span>注册过的用户可凭账号密码登录</span>
        </section>
      </el-form>
    </div>
  </div>
</template>

<script>
// import login from '@/api/request'
export default {
  name: 'login',
  data () {
    return {
      ruleForm: {
        account: '',
        pass: ''
      },
      rules: {
        account: {
          required: true,
          message: '请输入用户名'
        },
        pass: {
          required: true,
          message: '请输入密码'
        }
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.ruleForm.account === 'admin' && this.ruleForm.pass === 'admin') {
            this.$router.push({ name: 'home-index' })
            this.$notify({
              title: '登录成功',
              message: '',
              type: 'success'
            })
          } else {
            this.$notify.error({
              title: '登录错误',
              message: '账号密码错误'
            })
          }

          // login({
          //   phone: this.ruleForm.account,
          //   password: this.ruleForm.pass
          // }).then(data => {
          //   if (data !== 'isError') {
          //     // 将获取到的token存入本地储存
          //     window.sessionStorage.setItem('token', data)

          //     this.$router.push({ name: 'home-index' })
          //   } else {
          //   }
          // })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  & {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: rgb(50, 64, 87);
    position: relative;
  }
  .login-registration {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    text-align: center;
    .title {
      display: block;
      color: white;
      margin-bottom: 0.5rem;
      font-size: 0.34rem;
    }
    .demo-ruleForm {
      width: 3.7rem;
      height: 2.6rem;
      background-color: white;
      border-radius: 0.1rem;
      padding: 0.03rem;
      .adjustment {
        margin-top: 0.2rem;
      }
      .el-input {
        width: 2.4rem;
        display: block;
      }
      .btn {
        width: 3.2rem;
        display: block;
        margin: 0 auto 0.15rem;
      }
      .reminder span {
        display: block;
        font-size: 0.12rem;
        color: red;
      }
    }
  }
}
</style>
