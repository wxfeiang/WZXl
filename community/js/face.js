var myChart = echarts.init(document.getElementById('face'));
var option = {
	title: {
		text: "",
		//						 subtext: '过去一段时间数据对接情况',
		textStyle: {
			color: "#fff",
			fontSize: 12
		}
	},
	//鼠标触发提示数量	  
	tooltip: {
		trigger: "axis"
	},

	calculable: true,
	legend: {
		data: []
	},
	grid:{
			left:'2%',
			right:'2%',//距离右边距
			top:'2%',
			bottom:'3%'
	},
	//x轴显示	   
	xAxis: {
		data: ["吸毒人员", "刑满释放人员", "精神障碍人员", "危险品从业人员", "社区矫正人员", "陌生人员"],
		splitLine: {　　　　
			show: false　　
		},
		axisLine: {
            lineStyle: {
                type: 'solid',
                color: 'rgba(255,255,255,0)',//左边线的颜色
                width:'1'//坐标线的宽度
            }
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(255,255,255,0)',//坐标值得具体的颜色
                fontSize: 12
 
            }
        }
	},
	//y轴显示	   
	yAxis: {
		splitLine: {　　　　
			show: false　　
		},
		 axisLine: {
            lineStyle: {
                type: 'solid',
                color: 'rgba(255,255,255,0)',//左边线的颜色
                width:'1'//坐标线的宽度
            }
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(255,255,255,0)',//坐标值得具体的颜色
                fontSize: 12
 
            }
        }
	},
	series: [{
			name: "政策法规",
			type: "bar",
			//折叠显示		       
			data: [7, 8, 6, 4, 9, 3, 3], //（此处的<%=zcfgData%>为后台传过来的数据，格式为[1,2,3,4,2,3,3],根据实际情况修改）		      
			barWidth: 20,
			shading:"realistic",//着色效果
			itemStyle: {
                normal: {
                     color: '#04B4CB'
                    }
           },
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            }
			
		}
	]
};
myChart.setOption(option);