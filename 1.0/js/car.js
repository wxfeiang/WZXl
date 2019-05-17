// 总体概况
var car1 = echarts.init(document.getElementById("car1"));

// 指定图表的配置项和数据
var option = {
  tooltip: {},

  xAxis: {
    data: ["车辆数量", "摄像头数量", "卡口数量"]
  },
  yAxis: {
    type: "value",

    name: "退租原因",
    nameLocation: "center",
    nameGap: 70, //与轴线间距
    nameTextStyle: {
      fontWeight: "normal",

      fontSize: 14
    },
    left: "center"
  },

  series: [
    {
      name: "企业数",
      type: "bar",
      data: [100, 60, 20],
      color: " #5182e4",
      barMaxWidth: 40, //最大宽度
      itemStyle: {
        normal: {
          label: {
            show: true, //开启显示
            position: "top", //在上方显示
            textStyle: {
              //数值样式
              color: "black",
              fontSize: 16
            }
          }
        }
      }
    }
  ]
};

// 使用刚指定的配置项和数据显示图表。
car1.setOption(option);

//  抓拍总量统计
var car2 = echarts.init(document.getElementById("car2"));
option = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },

  series: [
    {
      name: "抓拍统计",
      type: "pie",
      radius: "65%",
      center: ["50%", "45%"],
      data: [
        {
          value: 4210,
          name: "日抓拍数量"
        },
        {
          value: 20356,
          name: "月抓拍数量"
        },
        {
          value: 33560,
          name: "年抓拍数量"
        }
      ],
      color: ["#5182e4", "#9bcc66", "#37b27e", "#f7cb4a", "#f89351"],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
};
car2.setOption(option);

// 一周内抓拍总量
var car3 = echarts.init(document.getElementById("car3"));

// 指定图表的配置项和数据
option = {
  title: {
    text: "总计",

    textStyle: {
      fontSize: 14,
      color: "  #262626 ",
      fontWeight: "normal"
    },
    padding: [20, 0, 0, 25]
  },
  tooltip: {},
  xAxis: {
    type: "category",
    data: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"]
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: "{value}"
    },

    nameLocation: "center",
    nameGap: 50, //与轴线间距
    nameTextStyle: {
      fontWeight: "normal",

      fontSize: 14
    },
    left: "center"
  },
  series: [
    {
      data: [80, 300, 80, 200, 100, 60, 90],
      type: "line",
      smooth: true,
      symbolSize: 8,
      itemStyle: {
        normal: {
          color: "#3fb27e",

          lineStyle: {
            color: "#3fb27e"
          }
        }
      }
    }
  ]
};

// 使用刚指定的配置项和数据显示图表。
car3.setOption(option);

// 自动时间获取
var date = new Date();
var y = date.getFullYear();
var m = date.getMonth() + 1;
var da = date.getDate();
var day = date.getDay();
var h = date.getHours();
var min = date.getMinutes();
var s = date.getSeconds();
var arr = [
  "星期天",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六"
];
function toTwo(date) {
  return date < 10 ? "0" + date : date;
}
var timer = document.getElementsByClassName("timer");

for (var i = 0; i < timer.length; i++) {
  //2019-05-14- 17: 25: 33
  var rand = Math.floor(Math.random() * 10);
  timer[i].innerHTML =
    y +
    "-" +
    toTwo(m) +
    "-" +
    toTwo(da) +
    "--" +
    (h - 1) +
    ":" +
    toTwo(min - i) +
    ":" +
    toTwo(s - rand);
}
