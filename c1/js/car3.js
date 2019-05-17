var myChart = echarts.init(document.getElementById("car3"));
option = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  // legend: {
  //   orient: "horizontal",
  //   bottom: 10,
  //   itemWidth: 10,
  //   itemHeight: 10,

  //   data: [
  //     {
  //       name: "支付宝",
  //       icon: "circle"
  //     },
  //     {
  //       name: "现金",
  //       icon: "circle"
  //     },
  //     {
  //       name: "微信",
  //       icon: "circle"
  //     },
  //     {
  //       name: "转账",
  //       icon: "circle"
  //     }
  //   ],
  //   textStyle: {
  //     color: "#fff"
  //   }
  // },
  series: [
    {
      name: "抓拍统计",
      type: "pie",
      radius: "65%",
      center: ["50%", "45%"],
      data: [
        {
          value: 605,
          name: "抓拍总量"
        },
        {
          value: 31,
          name: "日抓拍数量"
        },
        {
          value: 34,
          name: "月抓拍数量"
        },
        {
          value: 185,
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
myChart.setOption(option);
var w = $("#ofwidth").width();
var resize = {
  width: w,
  height: 170
};

myChart.resize(resize);
