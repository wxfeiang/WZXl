var myChart = echarts.init(document.getElementById("face"));
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
    bottom: "5",
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
          fontSize: 10
        },
        interval: 0,
        rotate: -40
      },
      data: ["信访", "邪教", "精神障碍", "吸毒", "危险品从业", "陌生人"],
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
      data: [50, 52, 10, 60, 20, 5]
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
