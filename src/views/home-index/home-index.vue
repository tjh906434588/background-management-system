<template>
  <div class="home-index">
    <section class="data_section">
      <header class="section_title">数据统计</header>
      <el-row :gutter="20"
              style="margin-bottom: 10px;">
        <el-col :span="4">
          <div class="data_list today_head"><span class="data_num head">当日数据：</span></div>
        </el-col>
        <el-col :span="4">
          <div class="data_list"><span class="data_num">12</span> 新增用户</div>
        </el-col>
        <el-col :span="4">
          <div class="data_list"><span class="data_num">342</span> 新增订单</div>
        </el-col>
        <el-col :span="4">
          <div class="data_list"><span class="data_num">23</span> 新增管理员</div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="data_list all_head"><span class="data_num head">总数据：</span></div>
        </el-col>
        <el-col :span="4">
          <div class="data_list"><span class="data_num">1234</span> 注册用户</div>
        </el-col>
        <el-col :span="4">
          <div class="data_list"><span class="data_num">3214</span> 订单</div>
        </el-col>
        <el-col :span="4">
          <div class="data_list"><span class="data_num">3223</span> 管理员</div>
        </el-col>
      </el-row>
    </section>
    <polygonalChart></polygonalChart>
  </div>
</template>

<script>
import polygonalChart from './polygonalChart'
export default {
  name: 'home-index',
  components: {
    polygonalChart
  }
}
</script>

<style lang="less" scoped>
.data_section {
  padding: 20px;
  margin-bottom: 40px;
  .section_title {
    text-align: center;
    font-size: 30px;
    margin-bottom: 10px;
  }
  .data_list {
    text-align: center;
    font-size: 14px;
    color: #666;
    border-radius: 6px;
    background: #e5e9f2;
    .data_num {
      color: #333;
      font-size: 26px;
    }
    .head {
      border-radius: 6px;
      font-size: 22px;
      padding: 4px 0;
      color: #fff;
      display: inline-block;
    }
  }
  .today_head {
    background: #ff9800;
  }
  .all_head {
    background: #20a0ff;
  }
}
</style>
