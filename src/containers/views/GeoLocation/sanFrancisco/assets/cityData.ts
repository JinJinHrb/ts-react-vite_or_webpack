import sfGeojson from './san-francisco-ca_.geojson'

export const geoCoordMap4GuangDong = {
	广州市: [113.507649675, 23.3200491021],
	东莞市: [113.863433991, 22.9430238154],
	中山市: [113.422060021, 22.5451775145],
	云浮市: [111.750945959, 22.9379756855],
	佛山市: [113.034025635, 23.0350948405],
	惠州市: [114.41065808, 23.1135398524],
	揭阳市: [116.079500855, 23.3479994669],
	梅州市: [116.126403098, 24.304570606],
	汕头市: [116.588650288, 23.2839084533],
	汕尾市: [115.572924289, 22.9787305002],
	江门市: [112.678125341, 22.2751167835],
	河源市: [114.913721476, 23.9572508505],
	深圳市: [114.025973657, 22.5960535462],
	清远市: [113.040773349, 23.9984685504],
	湛江市: [110.165067263, 21.2574631038],
	潮州市: [116.830075991, 23.7618116765],
	珠海市: [113.262447026, 22.1369146461],
	肇庆市: [112.37965337, 23.5786632829],
	茂名市: [110.931245331, 21.9682257188],
	阳江市: [111.777009756, 21.9715173045],
	韶关市: [113.594461107, 24.8029603119],
	东沙群岛: [0, 0],
}

export const customerBatteryCityData4GuangDong = [
	{ name: '阳江市', value: 70 },
	{ name: '茂名市', value: 20 },
	{ name: '广州市', value: 70 },
	{ name: '河源市', value: 70 },
	{ name: '湛江市', value: 120 },
	{ name: '潮州市', value: 70 },
	{ name: '东莞市', value: 70 },
	{ name: '深圳市', value: 0 },
	{ name: '清远市', value: 70 },
	{ name: '韶关市', value: 10 },
	{ name: '云浮市', value: 70 },
	{ name: '惠州市', value: 150 },
	{ name: '汕头市', value: 60 },
	{ name: '揭阳市', value: 80 },
	{ name: '中山市', value: 70 },
	{ name: '肇庆市', value: 70 },
	{ name: '珠海市', value: 120 },
	{ name: '汕尾市', value: 0 },
	{ name: '江门市', value: 70 },
	{ name: '梅州市', value: 70 },
	{ name: '佛山市', value: 10 },
	{ name: '东沙群岛', value: 0 },
]

export const getPolygonCenter = (name: string) => {
	const geojson = sfGeojson.features.filter(a => a.properties.name === name)[0]
	let totalX = 0
	let totalY = 0
	let count = 0

	geojson.geometry.coordinates[0].forEach(ring => {
		ring.forEach(point => {
			totalX += point[0]
			totalY += point[1]
			count++
		})
	})

	// 计算平均坐标
	const centerX = totalX / count
	const centerY = totalY / count

	return [centerX, centerY]
}

export const getPolygonCenter2 = (name: string) => {
	const geojson = sfGeojson.features.filter(a => a.properties.name === name)[0]
	let totalX = 0
	let totalY = 0
	let count = 0

	// 遍历多边形的每个环（对于简单的多边形，通常只有一个环）
	geojson.geometry.coordinates.forEach(rings => {
		// 遍历环中的每个点
		rings.forEach(ring => {
			ring.forEach(point => {
				totalX += point[0]
				totalY += point[1]
				count++
			})
		})
	})

	// 计算平均坐标
	const centerX = totalX / count
	const centerY = totalY / count

	return [centerX, centerY]
}

export const geoCoordMap = {
	Seacliff: getPolygonCenter('Seacliff'), // [-122.504089, 37.784909999999996], // -0.01
	Marina: [0, 0], // [-122.456806, 37.802401],
	'Pacific Heights': [0, 0], // [-122.45682500000001, 37.784251],
	'Nob Hill': [0, 0], // [-122.42860900000001, 37.78591],
	'Presidio Heights': [-122.4726, 37.796041], // 0, +0.01
	'Downtown/Civic Center': [0, 0], // [-122.418912, 37.787132],
	Excelsior: [0, 0], // [-122.45082400000001, 37.713455],
	'Bernal Heights': [0, 0], // [-122.438255, 37.728785],
	'Western Addition': [0, 0], // [-122.432213, 37.769905],
	Chinatown: [0, 0], // [-122.418767, 37.787163],
	'North Beach': [0, 0], // [-122.420635, 37.806724],
	'Haight Ashbury': getPolygonCenter('Haight Ashbury'), // [-122.445964, 37.766038],
	'Outer Mission': [0, 0], // [-122.464284, 37.705222],
	'Crocker Amazon': getPolygonCenter('Crocker Amazon'), // [-122.43085, 37.705335]
	'West of Twin Peaks': [-122.462524, 37.735167], // 0, +0.015
	'South of Market': [-122.397425, 37.7775],
	'Potrero Hill': [0, 0], // [-122.38996300000001, 37.749061],
	'Inner Richmond': [-122.466457, 37.778805], // -0.01, +0.006
	Bayview: [-122.393108, 37.739803], // +0.005, -0.005
	'Noe Valley': [0, 0], //  [-122.435578, 37.753617],
	'Inner Sunset': [0, 0], // [-122.461436, 37.755735],
	'Diamond Heights': [0, 0], // [-122.445527, 37.738459999999996],
	Lakeshore: [0, 0], // [-122.48105100000001, 37.705198],
	'Russian Hill': [0, 0], //  [-122.430952, 37.805967],
	'Treasure Island/YBI': [-122.378133, 37.824253], // +0.005, -0.005
	'Twin Peaks': [0, 0], //[-122.47142000000001, 37.748562],
	'Outer Richmond': [-122.488735, 37.777898], // 0, -0.006
	'Visitacion Valley': [-122.404984, 37.71541], // 0, +0.01
	'Golden Gate Park': getPolygonCenter('Golden Gate Park'), // [-122.494691, 37.768696], // -0.03, -0.001
	Parkside: [0, 0], // [-122.479641, 37.735545],
	'Financial District': [-122.401252, 37.792074], // +0.003, -0.005
	'Ocean View': [0, 0], // [-122.46912300000001, 37.705218],
	Mission: [0, 0], // [-122.43475600000001, 37.744849],
	Presidio: [0, 0], // [-122.457983, 37.803972],
	'Castro/Upper Market': [0, 0], //[-122.456438, 37.758036],
	'Outer Sunset': [-122.493014, 37.752679], //-0.007, +0.005
	'Glen Park': [0, 0], // [-122.434183, 37.739262],
}

export const customerBatteryCityData = [
	{ name: 'Seacliff', value: 177 },
	{ name: 'Marina', value: 97 },
	{ name: 'Pacific Heights', value: 94 },
	{ name: 'Nob Hill', value: 7 },
	{ name: 'Presidio Heights', value: 19 },
	{ name: 'Downtown/Civic Center', value: 39 },
	{ name: 'Excelsior', value: 20 },
	{ name: 'Bernal Heights', value: 23 },
	{ name: 'Western Addition', value: 26 },
	{ name: 'Chinatown', value: 1 },
	{ name: 'North Beach', value: 1 },
	{ name: 'Haight Ashbury', value: 1 },
	{ name: 'Outer Mission', value: 1 },
	{ name: 'Crocker Amazon', value: 51 },
	{ name: 'West of Twin Peaks', value: 1 },
	{ name: 'South of Market', value: 1 },
	{ name: 'Potrero Hill', value: 1 },
	{ name: 'Inner Richmond', value: 1 },
	{ name: 'Bayview', value: 1 },
	{ name: 'Noe Valley', value: 31 },
	{ name: 'Inner Sunset', value: 1 },
	{ name: 'Diamond Heights', value: 1 },
	{ name: 'Lakeshore', value: 1 },
	{ name: 'Russian Hill', value: 1 },
	{ name: 'Treasure Island/YBI', value: 1 },
	{ name: 'Twin Peaks', value: 1 },
	{ name: 'Outer Richmond', value: 1 },
	{ name: 'Visitacion Valley', value: 1 },
	{ name: 'Golden Gate Park', value: 21 },
	{ name: 'Parkside', value: 1 },
	{ name: 'Financial District', value: 1 },
	{ name: 'Ocean View', value: 1 },
	{ name: 'Mission', value: 1 },
	{ name: 'Presidio', value: 1 },
	{ name: 'Castro/Upper Market', value: 1 },
	{ name: 'Outer Sunset', value: 1 },
	{ name: 'Glen Park', value: 1 },
]

// export const geoCoordMap = customerBatteryCityData.reduce((map, item) => {
// 	const { name } = item
// 	const centerCoord = getPolygonCenter(name)
// 	map[name] = centerCoord
// 	return map
// }, {})
