var myChart = echarts.init(document.getElementById("car2"));

option = {
  title: {
    text: "",
    subtext: "单位(辆)",
    textStyle: {
      color: "#fff",
      fontSize: 12
    }
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985"
      }
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
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.5)" //边线的颜色
        }
      },
      axisLabel: {
        textStyle: {
          color: "#fff", //坐标值得具体的颜色.
          fontSize: 10
        }
      },
      data: [
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
        "星期日"
      ]
    }
  ],
  yAxis: [
    {
      type: "value",
      nameLocation: "center",
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
      data: [153, 690, 452, 236, 251, 298, 321],
      type: "line",
      smooth: true,
      symbolSize: 8,
      itemStyle: {
        normal: {
          color: "#ffbb93",

          lineStyle: {
            color: "#ffbb93"
          }
        }
      }
    }
  ]
};

myChart.setOption(option);
var w = $("#ofwidth").width();
var resize = {
  width: w,
  height: 170
};

myChart.resize(resize);
