const compressValue = (v: number) => 0.5 * Math.log(v) + 1

// 动态计算柱形图的高度（定一个max）
export function lineMaxHeight(customerBatteryCityData: any) {
	const maxValue = Math.max(...customerBatteryCityData.map(item => item.value))
	const rtn = 0.9 / maxValue
	return rtn
}

// 柱状体的主干
export function lineData({ customerBatteryCityData, geoCoordMap }: any) {
	return customerBatteryCityData.map(item => {
		console.log('#11', item.name, item.value, geoCoordMap[item.name])
		return {
			coords: [
				geoCoordMap[item.name],
				[
					geoCoordMap[item.name][0],
					geoCoordMap[item.name][1] + compressValue(item.value) * lineMaxHeight(customerBatteryCityData),
				],
			],
		}
	})
}
// 柱状体的顶部
export function scatterData({ customerBatteryCityData, geoCoordMap }: any) {
	return customerBatteryCityData.map(item => {
		return [
			geoCoordMap[item.name][0],
			geoCoordMap[item.name][1] + compressValue(item.value) * lineMaxHeight(customerBatteryCityData),
		]
	})
}
// 柱状体的底部
export function scatterData2({ customerBatteryCityData, geoCoordMap }: any) {
	return customerBatteryCityData.map(item => {
		return {
			name: item.name,
			value: geoCoordMap[item.name],
		}
	})
}

export const cityDataSF = ({ customerBatteryCityData, geoCoordMap }) => {
	const lData = lineData({ customerBatteryCityData, geoCoordMap })
	const sData = scatterData({ customerBatteryCityData, geoCoordMap })
	const sData2 = scatterData2({ customerBatteryCityData, geoCoordMap })
	const zoom = 1
	const layoutCenter = ['55%', '35%']
	return {
		backgroundColor: '#131C38',
		tooltip: {
			trigger: 'item',
			show: true,
			enterable: true,
			textStyle: {
				fontSize: 20,
				color: '#fff',
			},
			backgroundColor: 'rgba(0,2,89,0.8)',
			formatter: '{b}<br />{c}',
		},
		geo: [
			{
				map: 'SF',
				aspectScale: 0.9,
				roam: false, // 是否允许缩放
				zoom, // 默认显示级别
				layoutSize: '95%',
				layoutCenter,
				itemStyle: {
					normal: {
						areaColor: {
							type: 'linear-gradient',
							x: 0,
							y: 400,
							x2: 0,
							y2: 0,
							colorStops: [
								{
									offset: 0,
									color: 'rgba(37,108,190,0.3)', // 0% 处的颜色
								},
								{
									offset: 1,
									color: 'rgba(15,169,195,0.3)', // 50% 处的颜色
								},
							],
							global: true, // 缺省为 false
						},
						borderColor: '#4ecee6',
						borderWidth: 1,
					},
					emphasis: {
						areaColor: {
							type: 'linear-gradient',
							x: 0,
							y: 300,
							x2: 0,
							y2: 0,
							colorStops: [
								{
									offset: 0,
									color: 'rgba(37,108,190,1)', // 0% 处的颜色
								},
								{
									offset: 1,
									color: 'rgba(15,169,195,1)', // 50% 处的颜色
								},
							],
							global: true, // 缺省为 false
						},
					},
				},
				emphasis: {
					itemStyle: {
						areaColor: '#0160AD',
					},
					label: {
						show: 0,
						color: '#fff',
					},
				},
				zlevel: 3,
			},
			{
				map: 'SF',
				aspectScale: 0.9,
				roam: false, // 是否允许缩放
				zoom, // 默认显示级别
				layoutSize: '95%',
				layoutCenter,
				itemStyle: {
					normal: {
						borderColor: 'rgba(192,245,249,.6)',
						borderWidth: 2,
						shadowColor: '#2C99F6',
						shadowOffsetY: 0,
						shadowBlur: 120,
						areaColor: 'rgba(29,85,139,.2)',
					},
				},
				zlevel: 2,
				silent: true,
			},
			{
				map: 'SF',
				aspectScale: 0.9,
				roam: false, // 是否允许缩放
				zoom, // 默认显示级别
				layoutSize: '95%',
				layoutCenter,
				itemStyle: {
					// areaColor: '#005DDC',
					areaColor: 'rgba(0,27,95,0.4)',
					borderColor: '#004db5',
					borderWidth: 1,
				},
				zlevel: 1,
				silent: true,
			},
		],
		series: [
			// map
			{
				geoIndex: 0,
				// coordinateSystem: 'geo',
				showLegendSymbol: true,
				type: 'map',
				roam: true,
				label: {
					normal: {
						show: false,
						textStyle: {
							color: '#fff',
						},
					},
					emphasis: {
						show: false,
						textStyle: {
							color: '#fff',
						},
					},
				},

				itemStyle: {
					normal: {
						borderColor: '#2ab8ff',
						borderWidth: 1.5,
						areaColor: '#12235c',
					},
					emphasis: {
						areaColor: '#2AB8FF',
						borderWidth: 0,
						color: 'red',
					},
				},
				map: 'SF', // 使用
				data: customerBatteryCityData,
				// data: this.difficultData //热力图数据   不同区域 不同的底色
			},
			// 柱状体的主干
			{
				type: 'lines',
				zlevel: 5,
				effect: {
					show: false,
					// period: 4, //箭头指向速度，值越小速度越快
					// trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
					// symbol: 'arrow', //箭头图标
					// symbol: imgDatUrl,
					symbolSize: 5, // 图标大小
				},
				lineStyle: {
					width: 20, // 尾迹线条宽度
					color: 'rgb(22,255,255, .6)',
					opacity: 1, // 尾迹线条透明度
					curveness: 0, // 尾迹线条曲直度
				},
				label: {
					show: 0,
					position: 'end',
					formatter: '245',
				},
				silent: true,
				data: lData,
			},
			// 柱状体的顶部
			{
				type: 'scatter',
				coordinateSystem: 'geo',
				geoIndex: 0,
				zlevel: 5,
				label: {
					show: false,
					formatter: function () {
						return `顶部label`
					},
					position: 'top',
				},
				symbol: 'circle',
				symbolSize: [20, 10],
				itemStyle: {
					color: 'rgb(22,255,255, 1)',
					opacity: 1,
				},
				silent: true,
				data: sData,
			},
			// 柱状体的底部
			{
				type: 'scatter',
				coordinateSystem: 'geo',
				geoIndex: 0,
				zlevel: 4,
				label: {
					// 这儿是处理的
					formatter: '{b}',
					position: 'bottom',
					color: '#fff',
					fontSize: 12,
					distance: 10,
					show: true,
				},
				symbol: 'circle',
				symbolSize: [20, 10],
				itemStyle: {
					// color: '#F7AF21',
					color: 'rgb(22,255,255, 1)',
					opacity: 1,
				},
				silent: true,
				data: sData2,
			},
			// 底部外框
			{
				type: 'scatter',
				coordinateSystem: 'geo',
				geoIndex: 0,
				zlevel: 4,
				label: {
					show: false,
				},
				symbol: 'circle',
				symbolSize: [40, 20],
				itemStyle: {
					color: {
						type: 'radial',
						x: 0.5,
						y: 0.5,
						r: 0.5,
						colorStops: [
							{
								offset: 0,
								color: 'rgb(22,255,255, 0)', // 0% 处的颜色
							},
							{
								offset: 0.75,
								color: 'rgb(22,255,255, 0)', // 100% 处的颜色
							},
							{
								offset: 0.751,
								color: 'rgb(22,255,255, 1)', // 100% 处的颜色
							},
							{
								offset: 1,
								color: 'rgb(22,255,255, 1)', // 100% 处的颜色
							},
						],
						global: false, // 缺省为 false
					},

					opacity: 1,
				},
				silent: true,
				data: sData2,
			},
		],
	}
}
