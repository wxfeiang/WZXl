// 今日抓拍量统计

//收入增长趋势
var face1 = echarts.init(document.getElementById("face1"));

// 指定图表的配置项和数据
option = {
  title: {
    text: "",

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
    data: ["00点", "06点", "12点", "18点"]
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: "{value}"
    },
    // name: "实收金额(元)",
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
      data: [2, 20, 16, 40],
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
face1.setOption(option);

//  抓拍人员统计
var face2 = echarts.init(document.getElementById("face2"));

// 指定图表的配置项和数据
var option = {
  tooltip: {},

  xAxis: {
    data: ["涉法涉诉", "信访", "邪教", "精神障碍", "吸毒", "危险品从业"]
  },
  yAxis: {
    type: "value",

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
      type: "bar",
      data: [5, 20, 36, 10, 10, 2],
      color: " #5182e4",
      barMaxWidth: 40 //最大宽度
    }
  ]
};

// 使用刚指定的配置项和数据显示图表。
face2.setOption(option);
//  一周抓拍统计
var face3 = echarts.init(document.getElementById("face3"));
option = {
  title: {
    text: "",
    subtext: "单位(人数)",
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

      splitLine: {
        //y轴网个样式
        show: false,
        lineStyle: {
          color: ["rgba(255,255,255,.5)"],
          width: 1,
          type: "solid"
        }
      }
    }
  ],
  legend: {
    show: false,
    data: ["信访", "邪教", "精神障碍", "吸毒", "危险品从业", "陌生人"],
    textStyle: { fontSize: 8, color: "#fff" }
  },
  series: [
    {
      name: "信访",
      type: "line",
      itemStyle: {
        normal: { color: "#FE5578" }
      },
      smooth: true,
      symbolSize: 0, //折线点的大小
      label: {
        normal: {
          show: false,
          color: "#fff",
          position: "top"
        }
      },
      data: [20, 34, 23, 4, 46, 17, 21]
    },
    {
      name: "邪教",
      type: "line",
      smooth: true,
      itemStyle: {
        normal: {
          color: "#1AC499"
        }
      }, //线条样式
      symbolSize: 0, //折线点的大小
      data: [18, 22, 10, 12, 48, 23, 18]
    },
    {
      name: "精神障碍",
      type: "line",
      smooth: true,
      itemStyle: {
        normal: {
          color: "#57B4F1"
        }
      }, //线条样式
      symbolSize: 0, //折线点的大小
      data: [20, 34, 35, 24, 18, 15, 12]
    },
    {
      name: "吸毒",
      type: "line",
      smooth: true,
      itemStyle: {
        normal: {
          color: "#97B552"
        }
      }, //线条样式
      symbolSize: 0, //折线点的大小
      data: [15, 21, 35, 34, 3, 43, 5]
    },
    {
      name: "危险品从业",
      type: "line",
      smooth: true,
      itemStyle: {
        normal: {
          color: "#E5CF0D"
        }
      }, //线条样式
      symbolSize: 0, //折线点的大小
      data: [13, 24, 11, 18, 26, 37, 34]
    },

    {
      name: "陌生人",
      type: "line",
      smooth: true,
      itemStyle: {
        normal: {
          color: "#DC69AA"
        }
      }, //线条样式
      symbolSize: 0, //折线点的大小
      data: [46, 24, 5, 14, 26, 37, 24]
    }
  ]
};

face3.setOption(option);

// 抓拍人员统计
var face4 = echarts.init(document.getElementById("face4"));
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
face4.setOption(option);
