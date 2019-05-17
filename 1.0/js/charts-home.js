//  一标六识

var Chart1 = echarts.init(document.getElementById("Chart1"));
option = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    orient: "horizontal",
    bottom: 10,
    left: "center",
    itemWidth: 10,
    itemHeight: 10,

    data: [
      {
        name: "实有人口",
        icon: "circle"
      },
      {
        name: "实有房屋",
        icon: "circle"
      },
      {
        name: "实有单位",
        icon: "circle"
      },
      {
        name: "实有警情事件",
        icon: "circle"
      },
      {
        name: "实有安防设施",
        icon: "circle"
      },
      {
        name: "实有力量装备",
        icon: "circle"
      }
    ]
  },
  series: [
    {
      name: "一标六识",
      type: "pie",
      radius: ["50%", "70%"],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: "center"
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: "16",
            fontWeight: "bold"
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },

      data: [
        {
          value: 835,
          name: "实有人口"
        },
        {
          value: 310,
          name: "实有房屋"
        },
        {
          value: 234,
          name: "实有单位"
        },
        {
          value: 135,
          name: "实有警情事件"
        },
        {
          value: 48,
          name: "实有安防设施"
        },
        {
          value: 135,
          name: "实有力量装备"
        }
      ],
      color: [
        "#5182e4",
        "#9bcc66",
        "#3fb27e",
        "#f7cb4a",
        "#f88d48",
        "#f35352",
        "#8f5cd6",
        "#5156b8"
      ]
    }
  ]
};

Chart1.setOption(option);

//矛盾纠纷
var Chart2 = echarts.init(document.getElementById("Chart2"));
option = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: "horizontal",
    bottom: 10,

    left: "center",
    itemWidth: 10,
    itemHeight: 10,

    data: [
      {
        name: "行政复议",
        icon: "circle"
      },
      {
        name: "行政裁决",
        icon: "circle"
      },
      {
        name: "诉讼",
        icon: "circle"
      },
      {
        name: "协商和解",
        icon: "circle"
      },
      {
        name: "协商",
        icon: "circle"
      },
      {
        name: "仲裁",
        icon: "circle"
      },
      {
        name: "调解",
        icon: "circle"
      }
    ]
  },
  series: [
    {
      name: "矛盾纠纷",
      type: "pie",
      radius: "55%",
      center: ["50%", "40%"],
      data: [
        {
          value: 835,
          name: "行政复议"
        },
        {
          value: 310,
          name: "行政裁决"
        },
        {
          value: 234,
          name: "诉讼"
        },
        {
          value: 135,
          name: "协商和解"
        },
        {
          value: 48,
          name: "协商"
        },
        {
          value: 135,
          name: "仲裁"
        },
        {
          value: 135,
          name: "调解"
        }
      ],
      color: [
        "#5182e4",
        "#9bcc66",
        "#3fb27e",
        "#f7cb4a",
        "#f88d48",
        "#f35352",
        "#8f5cd6",
        "#5156b8"
      ],
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

Chart2.setOption(option);
//社区地图
var map;
var zoom = 12;
function onLoad() {
  map = new T.Map("mapDiv");
  map.centerAndZoom(new T.LngLat(105.72085, 34.58219), zoom);
}
