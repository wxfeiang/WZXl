
var myChart = echarts.init(document.getElementById('jk1'));


var option = {
	title: {
		text: '摄像头状况',
		subtext: '',
		textStyle: {
			color: '#fff',
			fontSize: 16
		},
		x: 'center'
	},
	tooltip: {
		trigger: 'item',

		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
    xAxis: {
        data: ["启用","全部"]  ,
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: 'rgba(255,255,255,0.5)',//左边线的颜色
                width:'1'//坐标线的宽度
            }
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(255,255,255,0.5)',//坐标值得具体的颜色
                fontSize: 12
 
            }
        }
    },
    yAxis: {
        splitLine:{ show:false},  //改设置不显示坐标区域内的y轴分割线
        splitNumber:'1',
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: 'rgba(255,255,255,0.5)',//左边线的颜色
                width:'1'//坐标线的宽度
            }
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(255,255,255,0.5)',//坐标值得具体的颜色
                fontSize: 12
 
            }
        }
    },
    　//控制边距　
    grid: {
            left: '2%',
            right:'2%',
            top:'50',
            bottom:'20',
            containLabel: true,
    },
    series: [{
            name: '摄像头状况',
            type: 'bar',
            data: [1, 1],
            //设置柱子的宽度
            barWidth : 26,
            //配置样式
            itemStyle: {   
                //通常情况下：
                normal:{  
　　　　　　　　　　　　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: function (params){
                        var colorList = ['rgb(8,180,170)','rgb(246,233,2)'];
                        return colorList[params.dataIndex];
                    }
                },
                //鼠标悬停时：
                emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
        }],
　　　　
    };  

myChart.setOption(option);


// 使用刚指定的配置项和数据显示图表。
