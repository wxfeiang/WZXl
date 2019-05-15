var myChart = echarts.init(document.getElementById('zpltj'));

option = {
	title: {
		text: "",
		subtext: '单位(人数)',
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
                color: '#fff',//坐标值得具体的颜色.
                fontSize: 10
            }
        },
		data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
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
            show: false,
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
	legend: {
		  show: false,
		data: ['抓拍总人数', '吸毒人员','刑满释放人员','精神障碍人员','危险品从业人员','社区矫正人员','陌生人员'],
		textStyle: { fontSize:8,color:'#fff'}
	},
	series: [ 
		{
			name: '抓拍总人数',
			type: 'line',
			itemStyle: {
				normal: { color: "#FE5578" },
			},
			smooth: true,
			symbolSize: 0, //折线点的大小
			label: {
				normal: {
					show: false,
					color: '#fff',
					position: 'top'
				}
			},
			data: [420, 544, 755, 444,466,177, 244]
		},
		{
			name: '吸毒人员',
			type: 'line',
			smooth: true,
			itemStyle: {
				normal: { 
					color: '#1AC499'
				}
			}, //线条样式  
			symbolSize: 0, //折线点的大小
			data: [120, 232, 101, 434,620, 230, 310]
		},
		{
			name: '刑满释放人员',
			type: 'line',
			smooth: true,
			itemStyle: {
				normal: { 
					color:'#57B4F1'
				}
			}, //线条样式  
			symbolSize: 0, //折线点的大小
			data: [320, 444, 655, 144,366,77, 344]
		},
		{
			name: '精神障碍人员',
			type: 'line',
			smooth: true,
			itemStyle: {
				normal: { 
					color:'#97B552'
				}
			}, //线条样式  
			symbolSize: 0, //折线点的大小
			data: [155, 355, 355, 34,3,443, 633]
		},
		{
			name: '危险品从业人员',
			type: 'line',
			smooth: true,
			itemStyle: {
				normal: { 
					color:'#E5CF0D'
				}
			}, //线条样式  
			symbolSize: 0, //折线点的大小
			data: [20, 244, 455, 244,266,377, 244]
		},
		{
			name: '社区矫正人员',
			type: 'line',
			smooth: true,
			itemStyle: {
				normal: { 
					color:'#FFB980'
				}
			}, //线条样式  
			symbolSize: 0, //折线点的大小
			data: [120, 144, 16, 544,166,199, 144]
		},
		{
			name: '陌生人员',
			type: 'line',
			smooth: true,
			itemStyle: {
				normal: { 
					color:'#DC69AA'
				}
			}, //线条样式  
			symbolSize: 0, //折线点的大小
			data: [250,44, 55, 44,66,77, 44]
		}
		
		
	]
};

myChart.setOption(option);
window.addEventListener("resize",function(){
    myChart.resize();
});