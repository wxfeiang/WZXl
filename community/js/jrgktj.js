var myChart = echarts.init(document.getElementById('jrgktj'));
option = {
	title: {
		text: '',
		subtext: '',
		textStyle: {
			color: '#fff',
			fontSize: 12
		},
		x: 'center'
	},
	tooltip: {
		trigger: 'item',

		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
//	legend: {
//		x: 'center',
//		y: 'bottom',
//		top: 30,
//		textStyle: {
//			color: '#fff',
//			fontSize: 12
//		},
//		data: []
//	},

	grid:{
        top:'10%',//距上边距

        left:'2%',//距离左边距

	     right:'2%',//距离右边距
	
	     bottom:'10%'//距离下边距
      },
	calculable: true,
	series: [
		{
			name: '2018年3月',
			type: 'pie',
			radius: [20, 65],
			center: ['50%', '50%'],
			roseType: 'area',
			itemStyle: { // 系列级个性化
				normal: {
					color: '#C6AC4F'
				},
				emphasis: {
					color: '#C6AC4F'
				}
			},
			 label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
			 lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
			data: [{
					value: 50,
					name: '街道一',
					itemStyle: {
						color: '#37a3db'
					}
				},
				{
					value: 50,
					name: '街道二',
					itemStyle: {
						color: '#9fe7b9'
					}
				}
			]
		}
	]
};
myChart.setOption(option);