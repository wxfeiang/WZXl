var myChart = echarts.init(document.getElementById("car3"));
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
          value: 1256,
          name: "抓拍总量"
        },
        {
          value: 213,
          name: "日抓拍数量"
        },
        {
          value: 1256,
          name: "月抓拍数量"
        },
        {
          value: 1256,
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
