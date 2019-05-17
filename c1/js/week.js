var myChart = echarts.init(document.getElementById('week'));

option = {
	title: {
		text: "",
		subtext: '单位(辆)',
		textStyle: {
			color: "#fff",
			fontSize: 12
		}
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'cross',
			label: {
				backgroundColor: '#6a7985'
			},
		}
	},
	legend: {
//			data: ['A类老人', 'B类老人','C类老人'],
		data:[
	        {
	            name:'接收图片',
	            textStyle:{ color:'#FE5578' }
	        },
	        {
	            name:'有效图片',
	            textStyle:{ color:'#1AC499' }
	        },
	        {
	            name:'捕获图片',
	            textStyle:{ color:'#57B4F1' }
	        }
	    ],
		textStyle: { fontSize:12}
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '0',
		top:'40',
		containLabel: true
	},
	xAxis: [{
		type: 'category',
		boundaryGap: false,
		axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.5)',//边线的颜色
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',//坐标值得具体的颜色
            }
        },
		data: ['19-1', '19-2', '19-3', '19-4', '19-5', '19-6', '19-7']
	}],
	yAxis: [{
		type: 'value',
		 nameLocation: "center",
		axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.5)',//左边线的颜色
            }
        },
		splitLine: {//y轴网个样式
            show: true,
	        lineStyle:{
	             color: ['rgba(255,255,255,.5)'],
	             width: 1,
	            type: 'solid'
	        }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',//坐标值得具体的颜色
            }
        }
	}],
	series: [ 
		{
			name: '接收图片',
			type: 'line',
			smooth: true,
			itemStyle: {
				normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
					color: new echarts.graphic.LinearGradient(0, 0, 0, 0.6, [{
						offset: 0,
						color: '#FE5578' // 0% 处的颜色
					},
					{
						offset: 1,
						color: '#fff' // 100% 处的颜色
					}
					]), //背景渐变色
					lineStyle: { // 系列级个性化折线样式  
						width: 2,
						type: 'solid',
						color: "#FE5578" //折线的颜色
					}
				},
				emphasis: {
					color: '#0180ff',
					lineStyle: { // 系列级个性化折线样式  
						width: 2,
						type: 'dotted',
						color: "#FE5578"
					}
				}
			}, //线条样式
			 areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(88,160,253,1)'
                        }, {
                            offset: 0.5, color: 'rgba(88,160,253,0.7)'
                        }, {
                            offset: 1, color: 'rgba(88,160,253,0)'
                        }]
                    }
                }
            },
			symbolSize: 0, //折线点的大小
			label: {
				normal: {
					show: false,
					color: '#fff',
					position: 'top'
				}
			},
			areaStyle: {
				normal: {}
			},
			data: [820, 932, 901, 934, 1290, 1330, 1320]
		},
		{
			name: '有效图片',
			type: 'line',
			smooth: true,
			itemStyle: {
				normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#1AC499' // 0% 处的颜色
					}, {
						offset: 1,
						color: '#fff' // 100% 处的颜色
					}]), //背景渐变色 
					lineStyle: { // 系列级个性化折线样式  
						width: 2,
						type: 'solid',
						color: "#1AC499"
					}
				},
				emphasis: {
					color: '#1AC499',
					lineStyle: { // 系列级个性化折线样式  
						width: 2,
						type: 'dotted',
						color: "#1AC499" //折线的颜色
					}
				}
			}, //线条样式  
			symbolSize: 0, //折线点的大小
			areaStyle: {
				normal: {}
			},
			data: [120, 232, 101, 434,620, 230, 310]
		},
		{
			name: '捕获图片',
			type: 'line',
			smooth: true,
			itemStyle: {
				normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#57B4F1' // 0% 处的颜色
					}, {
						offset: 1,
						color: '#fff' // 100% 处的颜色
					}]), //背景渐变色 
					lineStyle: { // 系列级个性化折线样式  
						width: 2,
						type: 'solid',
						color: "#57B4F1"
					}
				},
				emphasis: {
					color: '#57B4F1',
					lineStyle: { // 系列级个性化折线样式  
						width: 2,
						type: 'dotted',
						color: "#57B4F1" //折线的颜色
					}
				}
			}, //线条样式  
			symbolSize: 0, //折线点的大小
			areaStyle: {
				normal: {}
			},
			data: [620, 532, 801, 734,820,630, 910]
		}
		
		
	]
};

myChart.setOption(option);
window.addEventListener("resize",function(){
    myChart.resize();
});