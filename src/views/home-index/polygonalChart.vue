<template>
  <div class="polygonalChart">
    <div id="polygonalChart"
         style="width: 90%;height:400px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'polygonalChart',
  methods: {
    polygonal () {
      var myChart = echarts.init(document.getElementById('polygonalChart'))
      var option = {
        title: {
          text: '走势图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['新用户注册', '新增订单', '新增管理员']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {},
            dataView: {
              show: true
            },
            magicType: {
              type: ['bar']
            }
          }
        },

        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: [{
          type: 'value',
          name: '用户',
          nameTextStyle: { color: '#999999' },
          min: 700,
          max: 0
        },
        {
          name: '订单',
          nameTextStyle: { color: '#999999' },
          type: 'value',
          min: 700,
          max: 0
        }
        ],
        series: [
          {
            name: '新用户注册',
            type: 'line',
            data: [120, 132, 101, 134, 600, 230, 210]
          },
          {
            name: '新增订单',
            type: 'line',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '新增管理员',
            type: 'line',
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      }
      myChart.setOption(option)
    }
  },
  mounted () {
    this.polygonal()
  }
}
</script>

<style lang="less">
.polygonalChart {
  display: flex;
  justify-content: center;
}
h4 {
  font-size: 0.16rem;
}
h4 + div {
  overflow: hidden !important;
}
textarea {
  line-height: 2 !important;
  border: none;
}
</style>
