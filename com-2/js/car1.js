var myChart = echarts.init(document.getElementById("car1"));
var option = {
  color: ["#3398DB"],
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "0",
    top: "40",
    containLabel: true
  },
  xAxis: [
    {
      type: "category",
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.5)" //边线的颜色
        }
      },
      axisLabel: {
        textStyle: {
          color: "#fff", //坐标值得具体的颜色.
          fontSize: 12
        }
      },
      data: ["抓拍总量", "车辆数量", "摄像头数量", "卡口数量"],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.5)" //左边线的颜色
        }
      },
      splitLine: {
        //y轴网个样式
        show: false,
        lineStyle: {
          color: ["rgba(255,255,255,.5)"],
          width: 1,
          type: "solid"
        }
      },
      axisLabel: {
        textStyle: {
          color: "#fff" //坐标值得具体的颜色
        }
      }
    }
  ],
  series: [
    {
      name: "",
      type: "bar",
      barWidth: "30%",
      data: [256, 136, 120, 60],
      itemStyle: {
        normal: {
          color: "#58cb97",
          lineStyle: {
            color: "#58cb97"
          }
        }
      }
    }
  ]
};

myChart.setOption(option);
var ofwidth = $("#ofwidth").width();

var resize = {
  width: ofwidth,
  height: 170
};

myChart.resize(resize);
