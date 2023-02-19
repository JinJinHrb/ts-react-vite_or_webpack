export default {
    type: 'object',
    properties: {
        hudxz1dtorr: {
            'x-component': 'ModuleCard',
            type: 'void',
            title: '附件',
            'x-index': 3,
            properties: {
                '2afogl82dch': {
                    'x-component': 'FormLayout',
                    'x-component-props': {
                        layout: 'two-columns'
                    },
                    type: 'void',
                    'x-index': 0,
                    properties: {
                        attachmentVOS: {
                            'x-decorator': 'FormItem',
                            'x-component': 'Upload',
                            'x-decorator-props': {
                                colon: false
                            },
                            'x-component-props': {
                                maxSize: 51200,
                                serviceErrorMessage: '上传失败',
                                buttonProps: {
                                    block: true
                                },
                                data: {
                                    attachmentType: 'TDCustomerAttachment',
                                    usage: 'TDCustomerAttachment'
                                },
                                name: 'files',
                                multiple: true,
                                style: {
                                    display: 'block'
                                },
                                textContent: '点击上传',
                                placeholder: '上传文件大小50M以内（限制10个附件)',
                                maxCount: 10
                            },
                            'x-validator': [],
                            type: 'Array<object>',
                            title: '上传附件',
                            'x-index': 0,
                            maxLength: 10
                        }
                    }
                }
            }
        },
        jg1ging5grt: {
            'x-component': 'ModuleCard',
            module: true,
            type: 'void',
            title: '基本信息',
            'x-index': 0,
            properties: {
                '2afogl82dcf': {
                    'x-component': 'FormLayout',
                    'x-component-props': {
                        layout: 'two-columns'
                    },
                    type: 'void',
                    'x-index': 0,
                    properties: {
                        customerPhone: {
                            'x-component-type': '单行文本框',
                            'x-decorator': 'FormItem',
                            'x-component': 'Input',
                            'x-decorator-props': {
                                colon: false
                            },
                            name: 'customerPhone',
                            'x-component-props': {
                                size: 'large',
                                id: 'customerPhone',
                                areaCodeOptions: [
                                    {
                                        countryZhName: '阿富汗',
                                        countryCode: 'Afghanistan',
                                        geoCode: 'AFG',
                                        areaCode: '93'
                                    },
                                    {
                                        countryZhName: '阿尔巴尼亚',
                                        countryCode: 'Albania',
                                        geoCode: 'ALB',
                                        areaCode: '355'
                                    },
                                    {
                                        countryZhName: '阿尔及利亚',
                                        countryCode: 'Algeria',
                                        geoCode: 'DZA',
                                        areaCode: '213'
                                    },
                                    {
                                        countryZhName: '美属萨摩亚',
                                        countryCode: 'American Samoa',
                                        geoCode: 'ASM',
                                        areaCode: '1684'
                                    },
                                    {
                                        countryZhName: '安道尔',
                                        countryCode: 'Andorra',
                                        geoCode: 'AND',
                                        areaCode: '376'
                                    },
                                    {
                                        countryZhName: '安哥拉',
                                        countryCode: 'Angola',
                                        geoCode: 'AGO',
                                        areaCode: '244'
                                    },
                                    {
                                        countryZhName: '安圭拉',
                                        countryCode: 'Anguilla',
                                        geoCode: 'AI',
                                        areaCode: '1264'
                                    },
                                    {
                                        countryZhName: '南极洲',
                                        countryCode: 'Antarctica',
                                        geoCode: 'AQ',
                                        areaCode: '672'
                                    },
                                    {
                                        countryZhName: '安提瓜和巴布达',
                                        countryCode: 'Antigua and Barbuda',
                                        geoCode: 'ATG',
                                        areaCode: '1268'
                                    },
                                    {
                                        countryZhName: '阿根廷',
                                        countryCode: 'Argentina',
                                        geoCode: 'ARG',
                                        areaCode: '54'
                                    },
                                    {
                                        countryZhName: '亚美尼亚',
                                        countryCode: 'Armenia',
                                        geoCode: 'ARM',
                                        areaCode: '374'
                                    },
                                    {
                                        countryZhName: '阿鲁巴',
                                        countryCode: 'Aruba',
                                        geoCode: 'AW',
                                        areaCode: '297'
                                    },
                                    {
                                        countryZhName: '澳大利亚',
                                        countryCode: 'Australia',
                                        geoCode: 'AUS',
                                        areaCode: '61'
                                    },
                                    {
                                        countryZhName: '奥地利',
                                        countryCode: 'Austria',
                                        geoCode: 'AUT',
                                        areaCode: '43'
                                    },
                                    {
                                        countryZhName: '阿塞拜疆',
                                        countryCode: 'Azerbaijan',
                                        geoCode: 'AZE',
                                        areaCode: '994'
                                    },
                                    {
                                        countryZhName: '巴哈马',
                                        countryCode: 'Bahamas',
                                        geoCode: 'BHS',
                                        areaCode: '1242'
                                    },
                                    {
                                        countryZhName: '巴林',
                                        countryCode: 'Bahrain',
                                        geoCode: 'BHR',
                                        areaCode: '973'
                                    },
                                    {
                                        countryZhName: '孟加拉国',
                                        countryCode: 'Bangladesh',
                                        geoCode: 'BGD',
                                        areaCode: '880'
                                    },
                                    {
                                        countryZhName: '巴巴多斯',
                                        countryCode: 'Barbados',
                                        geoCode: 'BRB',
                                        areaCode: '1246'
                                    },
                                    {
                                        countryZhName: '白俄罗斯',
                                        countryCode: 'Belarus',
                                        geoCode: 'BLR',
                                        areaCode: '375'
                                    },
                                    {
                                        countryZhName: '比利时',
                                        countryCode: 'Belgium',
                                        geoCode: 'BEL',
                                        areaCode: '32'
                                    },
                                    {
                                        countryZhName: '伯利兹',
                                        countryCode: 'Belize',
                                        geoCode: 'BLZ',
                                        areaCode: '501'
                                    },
                                    {
                                        countryZhName: '贝宁',
                                        countryCode: 'Benin',
                                        geoCode: 'BEN',
                                        areaCode: '229'
                                    },
                                    {
                                        countryZhName: '百慕大',
                                        countryCode: 'Bermuda',
                                        geoCode: 'BMU',
                                        areaCode: '1441'
                                    },
                                    {
                                        countryZhName: '不丹',
                                        countryCode: 'Bhutan',
                                        geoCode: 'BTN',
                                        areaCode: '975'
                                    },
                                    {
                                        countryZhName: '玻利维亚',
                                        countryCode: 'Bolivia',
                                        geoCode: 'BOL',
                                        areaCode: '591'
                                    },
                                    {
                                        countryZhName: '波黑',
                                        countryCode: 'Bosnia and Herzegovina',
                                        geoCode: 'BIH',
                                        areaCode: '387'
                                    },
                                    {
                                        countryZhName: '博茨瓦纳',
                                        countryCode: 'Botswana',
                                        geoCode: 'BWA',
                                        areaCode: '267'
                                    },
                                    {
                                        countryZhName: '布韦岛',
                                        countryCode: 'Bouvet Island',
                                        geoCode: 'BV',
                                        areaCode: '47'
                                    },
                                    {
                                        countryZhName: '巴西',
                                        countryCode: 'Brazil',
                                        geoCode: 'BRA',
                                        areaCode: '55'
                                    },
                                    {
                                        countryZhName: '英属印度洋领地',
                                        countryCode: 'British Indian Ocean Territory',
                                        geoCode: 'IO',
                                        areaCode: '44'
                                    },
                                    {
                                        countryZhName: '英属维尔京群岛',
                                        countryCode: 'British Virgin Islands',
                                        geoCode: 'VGB',
                                        areaCode: '1284'
                                    },
                                    {
                                        countryZhName: '文莱',
                                        countryCode: 'Brunei Darussalam',
                                        geoCode: 'BRN',
                                        areaCode: '673'
                                    },
                                    {
                                        countryZhName: '保加利亚',
                                        countryCode: 'Bulgaria',
                                        geoCode: 'BGR',
                                        areaCode: '359'
                                    },
                                    {
                                        countryZhName: '布基纳法索',
                                        countryCode: 'Burkina Faso',
                                        geoCode: 'BFA',
                                        areaCode: '226'
                                    },
                                    {
                                        countryZhName: '布隆迪',
                                        countryCode: 'Burundi',
                                        geoCode: 'BDI',
                                        areaCode: '257'
                                    },
                                    {
                                        countryZhName: '佛得角',
                                        countryCode: 'Cabo Verde',
                                        geoCode: 'CPV',
                                        areaCode: '238'
                                    },
                                    {
                                        countryZhName: '柬埔寨',
                                        countryCode: 'Cambodia',
                                        geoCode: 'KHM',
                                        areaCode: '855'
                                    },
                                    {
                                        countryZhName: '喀麦隆',
                                        countryCode: 'Cameroon',
                                        geoCode: 'CMR',
                                        areaCode: '237'
                                    },
                                    {
                                        countryZhName: '加拿大',
                                        countryCode: 'Canada',
                                        geoCode: 'CAN',
                                        areaCode: '1'
                                    },
                                    {
                                        countryZhName: '开曼群岛',
                                        countryCode: 'Cayman Islands',
                                        geoCode: 'CYM',
                                        areaCode: '1345'
                                    },
                                    {
                                        countryZhName: '中非',
                                        countryCode: 'Central African Republic',
                                        geoCode: 'CAF',
                                        areaCode: '236'
                                    },
                                    {
                                        countryZhName: '乍得',
                                        countryCode: 'Chad',
                                        geoCode: 'TCD',
                                        areaCode: '235'
                                    },
                                    {
                                        countryZhName: '智利',
                                        countryCode: 'Chile',
                                        geoCode: 'CHL',
                                        areaCode: '56'
                                    },
                                    {
                                        countryZhName: '中国大陆',
                                        countryCode: 'China',
                                        geoCode: 'CN',
                                        areaCode: '86'
                                    },
                                    {
                                        countryZhName: '圣诞岛',
                                        countryCode: 'Christmas Island',
                                        geoCode: 'CX',
                                        areaCode: '61'
                                    },
                                    {
                                        countryZhName: '科科斯（基林）群岛',
                                        countryCode: 'Cocos (Keeling) Islands',
                                        geoCode: 'CC',
                                        areaCode: '61'
                                    },
                                    {
                                        countryZhName: '哥伦比亚',
                                        countryCode: 'Colombia',
                                        geoCode: 'COL',
                                        areaCode: '57'
                                    },
                                    {
                                        countryZhName: '科摩罗',
                                        countryCode: 'Comoros',
                                        geoCode: 'COM',
                                        areaCode: '269'
                                    },
                                    {
                                        countryZhName: '刚果共和国',
                                        countryCode: 'Congo',
                                        geoCode: 'COG',
                                        areaCode: '242'
                                    },
                                    {
                                        countryZhName: '库克群岛',
                                        countryCode: 'Cook Islands',
                                        geoCode: 'CK',
                                        areaCode: '682'
                                    },
                                    {
                                        countryZhName: '哥斯达黎加',
                                        countryCode: 'Costa Rica',
                                        geoCode: 'CRI',
                                        areaCode: '506'
                                    },
                                    {
                                        countryZhName: '克罗地亚',
                                        countryCode: 'Croatia',
                                        geoCode: 'HRV',
                                        areaCode: '385'
                                    },
                                    {
                                        countryZhName: '古巴',
                                        countryCode: 'Cuba',
                                        geoCode: 'CUB',
                                        areaCode: '53'
                                    },
                                    {
                                        countryZhName: '库拉索',
                                        countryCode: 'Curaçao',
                                        geoCode: 'CW',
                                        areaCode: '599'
                                    },
                                    {
                                        countryZhName: '塞浦路斯',
                                        countryCode: 'Cyprus',
                                        geoCode: 'CYP',
                                        areaCode: '357'
                                    },
                                    {
                                        countryZhName: '捷克',
                                        countryCode: 'Czechia',
                                        geoCode: 'CZE',
                                        areaCode: '420'
                                    },
                                    {
                                        countryZhName: '科特迪瓦',
                                        countryCode: "Côte d'Ivoire",
                                        geoCode: 'CIV',
                                        areaCode: '225'
                                    },
                                    {
                                        countryZhName: '丹麦',
                                        countryCode: 'Denmark',
                                        geoCode: 'DNK',
                                        areaCode: '45'
                                    },
                                    {
                                        countryZhName: '吉布提',
                                        countryCode: 'Djibouti',
                                        geoCode: 'DJI',
                                        areaCode: '253'
                                    },
                                    {
                                        countryZhName: '多米尼克',
                                        countryCode: 'Dominica',
                                        geoCode: 'DMA',
                                        areaCode: '1767'
                                    },
                                    {
                                        countryZhName: '多米尼加',
                                        countryCode: 'Dominican Republic',
                                        geoCode: 'DOM',
                                        areaCode: '1809'
                                    },
                                    {
                                        countryZhName: '东帝汶',
                                        countryCode: 'East Timor',
                                        geoCode: 'TLS',
                                        areaCode: '670'
                                    },
                                    {
                                        countryZhName: '厄瓜多尔',
                                        countryCode: 'Ecuador',
                                        geoCode: 'ECU',
                                        areaCode: '593'
                                    },
                                    {
                                        countryZhName: '埃及',
                                        countryCode: 'Egypt',
                                        geoCode: 'EGY',
                                        areaCode: '20'
                                    },
                                    {
                                        countryZhName: '萨尔瓦多',
                                        countryCode: 'El Salvador',
                                        geoCode: 'SLV',
                                        areaCode: '503'
                                    },
                                    {
                                        countryZhName: '赤道几内亚',
                                        countryCode: 'Equatorial Guinea',
                                        geoCode: 'GNQ',
                                        areaCode: '240'
                                    },
                                    {
                                        countryZhName: '厄立特里亚',
                                        countryCode: 'Eritrea',
                                        geoCode: 'ERI',
                                        areaCode: '291'
                                    },
                                    {
                                        countryZhName: '爱沙尼亚',
                                        countryCode: 'Estonia',
                                        geoCode: 'EST',
                                        areaCode: '372'
                                    },
                                    {
                                        countryZhName: '斯威士兰',
                                        countryCode: 'Eswatini',
                                        geoCode: 'SWZ',
                                        areaCode: '268'
                                    },
                                    {
                                        countryZhName: '埃塞俄比亚',
                                        countryCode: 'Ethiopia',
                                        geoCode: 'ETH',
                                        areaCode: '251'
                                    },
                                    {
                                        countryZhName: '福克兰群岛',
                                        countryCode: 'Falkland Islands',
                                        geoCode: 'FK',
                                        areaCode: '500'
                                    },
                                    {
                                        countryZhName: '法罗群岛',
                                        countryCode: 'Faroe Islands',
                                        geoCode: 'FRO',
                                        areaCode: '298'
                                    },
                                    {
                                        countryZhName: '斐济',
                                        countryCode: 'Fiji',
                                        geoCode: 'FJI',
                                        areaCode: '679'
                                    },
                                    {
                                        countryZhName: '芬兰',
                                        countryCode: 'Finland',
                                        geoCode: 'FIN',
                                        areaCode: '358'
                                    },
                                    {
                                        countryZhName: '法国',
                                        countryCode: 'France',
                                        geoCode: 'FRA',
                                        areaCode: '33'
                                    },
                                    {
                                        countryZhName: '法属圭亚那',
                                        countryCode: 'French Guiana',
                                        geoCode: 'GUF',
                                        areaCode: '594'
                                    },
                                    {
                                        countryZhName: '法属波利尼西亚',
                                        countryCode: 'French Polynesia',
                                        geoCode: 'PYF',
                                        areaCode: '689'
                                    },
                                    {
                                        countryZhName: '加蓬',
                                        countryCode: 'Gabon',
                                        geoCode: 'GAB',
                                        areaCode: '241'
                                    },
                                    {
                                        countryZhName: '冈比亚',
                                        countryCode: 'Gambia',
                                        geoCode: 'GMB',
                                        areaCode: '220'
                                    },
                                    {
                                        countryZhName: '格鲁吉亚',
                                        countryCode: 'Georgia',
                                        geoCode: 'GEO',
                                        areaCode: '995'
                                    },
                                    {
                                        countryZhName: '德国',
                                        countryCode: 'Germany',
                                        geoCode: 'DEU',
                                        areaCode: '49'
                                    },
                                    {
                                        countryZhName: '加纳',
                                        countryCode: 'Ghana',
                                        geoCode: 'GHA',
                                        areaCode: '233'
                                    },
                                    {
                                        countryZhName: '直布罗陀',
                                        countryCode: 'Gibraltar',
                                        geoCode: 'GI',
                                        areaCode: '350'
                                    },
                                    {
                                        countryZhName: '希腊',
                                        countryCode: 'Greece',
                                        geoCode: 'GRC',
                                        areaCode: '30'
                                    },
                                    {
                                        countryZhName: '格陵兰',
                                        countryCode: 'Greenland',
                                        geoCode: 'GRL',
                                        areaCode: '299'
                                    },
                                    {
                                        countryZhName: '格林纳达',
                                        countryCode: 'Grenada',
                                        geoCode: 'GRD',
                                        areaCode: '1473'
                                    },
                                    {
                                        countryZhName: '瓜德罗普',
                                        countryCode: 'Guadeloupe',
                                        geoCode: 'GLP',
                                        areaCode: '590'
                                    },
                                    {
                                        countryZhName: '关岛',
                                        countryCode: 'Guam',
                                        geoCode: 'GUM',
                                        areaCode: '1671'
                                    },
                                    {
                                        countryZhName: '危地马拉',
                                        countryCode: 'Guatemala',
                                        geoCode: 'GTM',
                                        areaCode: '502'
                                    },
                                    {
                                        countryZhName: '根西',
                                        countryCode: 'Guernsey',
                                        geoCode: 'GGY',
                                        areaCode: '1481'
                                    },
                                    {
                                        countryZhName: '几内亚',
                                        countryCode: 'Guinea',
                                        geoCode: 'GIN',
                                        areaCode: '224'
                                    },
                                    {
                                        countryZhName: '几内亚比绍',
                                        countryCode: 'Guinea-Bissau',
                                        geoCode: 'GNB',
                                        areaCode: '245'
                                    },
                                    {
                                        countryZhName: '圭亚那',
                                        countryCode: 'Guyana',
                                        geoCode: 'GUY',
                                        areaCode: '592'
                                    },
                                    {
                                        countryZhName: '海地',
                                        countryCode: 'Haiti',
                                        geoCode: 'HTI',
                                        areaCode: '509'
                                    },
                                    {
                                        countryZhName: '洪都拉斯',
                                        countryCode: 'Honduras',
                                        geoCode: 'HND',
                                        areaCode: '504'
                                    },
                                    {
                                        countryZhName: '香港（中国）',
                                        countryCode: 'Hong Kong (China)',
                                        geoCode: 'HK',
                                        areaCode: '852'
                                    },
                                    {
                                        countryZhName: '匈牙利',
                                        countryCode: 'Hungary',
                                        geoCode: 'HUN',
                                        areaCode: '36'
                                    },
                                    {
                                        countryZhName: '冰岛',
                                        countryCode: 'Iceland',
                                        geoCode: 'ISL',
                                        areaCode: '354'
                                    },
                                    {
                                        countryZhName: '印度',
                                        countryCode: 'India',
                                        geoCode: 'IND',
                                        areaCode: '91'
                                    },
                                    {
                                        countryZhName: '印尼',
                                        countryCode: 'Indonesia',
                                        geoCode: 'IDN',
                                        areaCode: '62'
                                    },
                                    {
                                        countryZhName: '伊朗',
                                        countryCode: 'Iran',
                                        geoCode: 'IRN',
                                        areaCode: '98'
                                    },
                                    {
                                        countryZhName: '伊拉克',
                                        countryCode: 'Iraq',
                                        geoCode: 'IRQ',
                                        areaCode: '964'
                                    },
                                    {
                                        countryZhName: '爱尔兰',
                                        countryCode: 'Ireland',
                                        geoCode: 'IRL',
                                        areaCode: '353'
                                    },
                                    {
                                        countryZhName: '马恩岛',
                                        countryCode: 'Isle of Man',
                                        geoCode: 'IMN',
                                        areaCode: '44'
                                    },
                                    {
                                        countryZhName: '以色列',
                                        countryCode: 'Israel',
                                        geoCode: 'ISR',
                                        areaCode: '972'
                                    },
                                    {
                                        countryZhName: '意大利',
                                        countryCode: 'Italy',
                                        geoCode: 'ITA',
                                        areaCode: '39'
                                    },
                                    {
                                        countryZhName: '牙买加',
                                        countryCode: 'Jamaica',
                                        geoCode: 'JAM',
                                        areaCode: '1876'
                                    },
                                    {
                                        countryZhName: '日本',
                                        countryCode: 'Japan',
                                        geoCode: 'JPN',
                                        areaCode: '81'
                                    },
                                    {
                                        countryZhName: '泽西',
                                        countryCode: 'Jersey',
                                        geoCode: 'JEY',
                                        areaCode: '44'
                                    },
                                    {
                                        countryZhName: '约旦',
                                        countryCode: 'Jordan',
                                        geoCode: 'JOR',
                                        areaCode: '962'
                                    },
                                    {
                                        countryZhName: '哈萨克斯坦',
                                        countryCode: 'Kazakhstan',
                                        geoCode: 'KAZ',
                                        areaCode: '73'
                                    },
                                    {
                                        countryZhName: '肯尼亚',
                                        countryCode: 'Kenya',
                                        geoCode: 'KEN',
                                        areaCode: '254'
                                    },
                                    {
                                        countryZhName: '基里巴斯',
                                        countryCode: 'Kiribati',
                                        geoCode: 'KI',
                                        areaCode: '686'
                                    },
                                    {
                                        countryZhName: '科威特',
                                        countryCode: 'Kuwait',
                                        geoCode: 'KWT',
                                        areaCode: '965'
                                    },
                                    {
                                        countryZhName: '吉尔吉斯斯坦',
                                        countryCode: 'Kyrgyzstan',
                                        geoCode: 'KGZ',
                                        areaCode: '996'
                                    },
                                    {
                                        countryZhName: '老挝',
                                        countryCode: 'Laos',
                                        geoCode: 'LAO',
                                        areaCode: '856'
                                    },
                                    {
                                        countryZhName: '拉脱维亚',
                                        countryCode: 'Latvia',
                                        geoCode: 'LVA',
                                        areaCode: '371'
                                    },
                                    {
                                        countryZhName: '黎巴嫩',
                                        countryCode: 'Lebanon',
                                        geoCode: 'LBN',
                                        areaCode: '961'
                                    },
                                    {
                                        countryZhName: '莱索托',
                                        countryCode: 'Lesotho',
                                        geoCode: 'LSO',
                                        areaCode: '266'
                                    },
                                    {
                                        countryZhName: '利比里亚',
                                        countryCode: 'Liberia',
                                        geoCode: 'LBR',
                                        areaCode: '231'
                                    },
                                    {
                                        countryZhName: '利比亚',
                                        countryCode: 'Libya',
                                        geoCode: 'LBY',
                                        areaCode: '218'
                                    },
                                    {
                                        countryZhName: '列支敦士登',
                                        countryCode: 'Liechtenstein',
                                        geoCode: 'LIE',
                                        areaCode: '423'
                                    },
                                    {
                                        countryZhName: '立陶宛',
                                        countryCode: 'Lithuania',
                                        geoCode: 'LTU',
                                        areaCode: '370'
                                    },
                                    {
                                        countryZhName: '卢森堡',
                                        countryCode: 'Luxembourg',
                                        geoCode: 'LUX',
                                        areaCode: '352'
                                    },
                                    {
                                        countryZhName: '澳门（中国）',
                                        countryCode: 'Macao (China)',
                                        geoCode: 'MA',
                                        areaCode: '853'
                                    },
                                    {
                                        countryZhName: '马达加斯加',
                                        countryCode: 'Madagascar',
                                        geoCode: 'MDG',
                                        areaCode: '261'
                                    },
                                    {
                                        countryZhName: '马拉维',
                                        countryCode: 'Malawi',
                                        geoCode: 'MWI',
                                        areaCode: '265'
                                    },
                                    {
                                        countryZhName: '马来西亚',
                                        countryCode: 'Malaysia',
                                        geoCode: 'MYS',
                                        areaCode: '60'
                                    },
                                    {
                                        countryZhName: '马尔代夫',
                                        countryCode: 'Maldives',
                                        geoCode: 'MV',
                                        areaCode: '960'
                                    },
                                    {
                                        countryZhName: '马里',
                                        countryCode: 'Mali',
                                        geoCode: 'MLI',
                                        areaCode: '223'
                                    },
                                    {
                                        countryZhName: '马耳他',
                                        countryCode: 'Malta',
                                        geoCode: 'MLT',
                                        areaCode: '356'
                                    },
                                    {
                                        countryZhName: '马绍尔群岛',
                                        countryCode: 'Marshall Islands',
                                        geoCode: 'MH',
                                        areaCode: '692'
                                    },
                                    {
                                        countryZhName: '马提尼克',
                                        countryCode: 'Martinique',
                                        geoCode: 'MTQ',
                                        areaCode: '596'
                                    },
                                    {
                                        countryZhName: '毛里塔尼亚',
                                        countryCode: 'Mauritania',
                                        geoCode: 'MRT',
                                        areaCode: '222'
                                    },
                                    {
                                        countryZhName: '毛里求斯',
                                        countryCode: 'Mauritius',
                                        geoCode: 'MUS',
                                        areaCode: '230'
                                    },
                                    {
                                        countryZhName: '马约特',
                                        countryCode: 'Mayotte',
                                        geoCode: 'MYT',
                                        areaCode: '269'
                                    },
                                    {
                                        countryZhName: '墨西哥',
                                        countryCode: 'Mexico',
                                        geoCode: 'MEX',
                                        areaCode: '52'
                                    },
                                    {
                                        countryZhName: '摩纳哥',
                                        countryCode: 'Monaco',
                                        geoCode: 'MC',
                                        areaCode: '377'
                                    },
                                    {
                                        countryZhName: '蒙古',
                                        countryCode: 'Mongolia',
                                        geoCode: 'MNG',
                                        areaCode: '976'
                                    },
                                    {
                                        countryZhName: '黑山',
                                        countryCode: 'Montenegro',
                                        geoCode: 'MNE',
                                        areaCode: '382'
                                    },
                                    {
                                        countryZhName: '蒙特塞拉特',
                                        countryCode: 'Montserrat',
                                        geoCode: 'MSR',
                                        areaCode: '1664'
                                    },
                                    {
                                        countryZhName: '摩洛哥',
                                        countryCode: 'Morocco',
                                        geoCode: 'MAR',
                                        areaCode: '212'
                                    },
                                    {
                                        countryZhName: '莫桑比克',
                                        countryCode: 'Mozambique',
                                        geoCode: 'MOZ',
                                        areaCode: '258'
                                    },
                                    {
                                        countryZhName: '缅甸',
                                        countryCode: 'Myanmar',
                                        geoCode: 'MMR',
                                        areaCode: '95'
                                    },
                                    {
                                        countryZhName: '纳米比亚',
                                        countryCode: 'Namibia',
                                        geoCode: 'NAM',
                                        areaCode: '264'
                                    },
                                    {
                                        countryZhName: '瑙鲁',
                                        countryCode: 'Nauru',
                                        geoCode: 'NRU',
                                        areaCode: '674'
                                    },
                                    {
                                        countryZhName: '尼泊尔',
                                        countryCode: 'Nepal',
                                        geoCode: 'NPL',
                                        areaCode: '977'
                                    },
                                    {
                                        countryZhName: '荷兰',
                                        countryCode: 'Netherlands',
                                        geoCode: 'NLD',
                                        areaCode: '31'
                                    },
                                    {
                                        countryZhName: '新喀里多尼亚',
                                        countryCode: 'New Caledonia',
                                        geoCode: 'NCL',
                                        areaCode: '687'
                                    },
                                    {
                                        countryZhName: '新西兰',
                                        countryCode: 'New Zealand',
                                        geoCode: 'NZL',
                                        areaCode: '64'
                                    },
                                    {
                                        countryZhName: '尼加拉瓜',
                                        countryCode: 'Nicaragua',
                                        geoCode: 'NIC',
                                        areaCode: '505'
                                    },
                                    {
                                        countryZhName: '尼日尔',
                                        countryCode: 'Niger',
                                        geoCode: 'NER',
                                        areaCode: '227'
                                    },
                                    {
                                        countryZhName: '尼日利亚',
                                        countryCode: 'Nigeria',
                                        geoCode: 'NGA',
                                        areaCode: '234'
                                    },
                                    {
                                        countryZhName: '纽埃',
                                        countryCode: 'Niue',
                                        geoCode: 'NU',
                                        areaCode: '683'
                                    },
                                    {
                                        countryZhName: '诺福克岛',
                                        countryCode: 'Norfolk Island',
                                        geoCode: 'NF',
                                        areaCode: '6723'
                                    },
                                    {
                                        countryZhName: '朝鲜',
                                        countryCode: 'North Korea',
                                        geoCode: 'PRK',
                                        areaCode: '850'
                                    },
                                    {
                                        countryZhName: '北马其顿',
                                        countryCode: 'North Macedonia',
                                        geoCode: 'MKD',
                                        areaCode: '389'
                                    },
                                    {
                                        countryZhName: '北马里亚纳群岛',
                                        countryCode: 'Northern Mariana Islands',
                                        geoCode: 'MNP',
                                        areaCode: '1670'
                                    },
                                    {
                                        countryZhName: '挪威',
                                        countryCode: 'Norway',
                                        geoCode: 'NOR',
                                        areaCode: '47'
                                    },
                                    {
                                        countryZhName: '阿曼',
                                        countryCode: 'Oman',
                                        geoCode: 'OMN',
                                        areaCode: '968'
                                    },
                                    {
                                        countryZhName: '巴基斯坦',
                                        countryCode: 'Pakistan',
                                        geoCode: 'PAK',
                                        areaCode: '92'
                                    },
                                    {
                                        countryZhName: '帕劳',
                                        countryCode: 'Palau',
                                        geoCode: 'PLW',
                                        areaCode: '680'
                                    },
                                    {
                                        countryZhName: '巴拿马',
                                        countryCode: 'Panama',
                                        geoCode: 'PAN',
                                        areaCode: '507'
                                    },
                                    {
                                        countryZhName: '巴布亚新几内亚',
                                        countryCode: 'Papua New Guinea',
                                        geoCode: 'PNG',
                                        areaCode: '675'
                                    },
                                    {
                                        countryZhName: '巴拉圭',
                                        countryCode: 'Paraguay',
                                        geoCode: 'PRY',
                                        areaCode: '595'
                                    },
                                    {
                                        countryZhName: '秘鲁',
                                        countryCode: 'Peru',
                                        geoCode: 'PER',
                                        areaCode: '51'
                                    },
                                    {
                                        countryZhName: '菲律宾',
                                        countryCode: 'Philippines',
                                        geoCode: 'PHL',
                                        areaCode: '63'
                                    },
                                    {
                                        countryZhName: '波兰',
                                        countryCode: 'Poland',
                                        geoCode: 'POL',
                                        areaCode: '48'
                                    },
                                    {
                                        countryZhName: '葡萄牙',
                                        countryCode: 'Portugal',
                                        geoCode: 'PRT',
                                        areaCode: '351'
                                    },
                                    {
                                        countryZhName: '波多黎各',
                                        countryCode: 'Puerto Rico',
                                        geoCode: 'PRI',
                                        areaCode: '1787'
                                    },
                                    {
                                        countryZhName: '卡塔尔',
                                        countryCode: 'Qatar',
                                        geoCode: 'QAT',
                                        areaCode: '974'
                                    },
                                    {
                                        countryZhName: '摩尔多瓦',
                                        countryCode: 'Republic of Moldova',
                                        geoCode: 'MDA',
                                        areaCode: '373'
                                    },
                                    {
                                        countryZhName: '罗马尼亚',
                                        countryCode: 'Romania',
                                        geoCode: 'ROU',
                                        areaCode: '40'
                                    },
                                    {
                                        countryZhName: '俄罗斯',
                                        countryCode: 'Russia',
                                        geoCode: 'RUS',
                                        areaCode: '7'
                                    },
                                    {
                                        countryZhName: '卢旺达',
                                        countryCode: 'Rwanda',
                                        geoCode: 'RWA',
                                        areaCode: '250'
                                    },
                                    {
                                        countryZhName: '留尼汪',
                                        countryCode: 'Réunion',
                                        geoCode: 'REU',
                                        areaCode: '262'
                                    },
                                    {
                                        countryZhName: '圣赫勒拿、阿森松和特里斯坦-达库尼亚',
                                        countryCode: 'Saint Helena, Ascension and Tristan da Cunha',
                                        geoCode: 'SHN',
                                        areaCode: '290'
                                    },
                                    {
                                        countryZhName: '圣基茨和尼维斯',
                                        countryCode: 'Saint Kitts and Nevis',
                                        geoCode: 'KNA',
                                        areaCode: '1869'
                                    },
                                    {
                                        countryZhName: '圣卢西亚',
                                        countryCode: 'Saint Lucia',
                                        geoCode: 'LCA',
                                        areaCode: '1758'
                                    },
                                    {
                                        countryZhName: '圣皮埃尔和密克隆',
                                        countryCode: 'Saint Pierre and Miquelon',
                                        geoCode: 'SPM',
                                        areaCode: '508'
                                    },
                                    {
                                        countryZhName: '圣文森特和格林纳丁斯',
                                        countryCode: 'Saint Vincent and the Grenadines',
                                        geoCode: 'VCT',
                                        areaCode: '1784'
                                    },
                                    {
                                        countryZhName: '萨摩亚',
                                        countryCode: 'Samoa',
                                        geoCode: 'WSM',
                                        areaCode: '685'
                                    },
                                    {
                                        countryZhName: '圣马力诺',
                                        countryCode: 'San Marino',
                                        geoCode: 'SMR',
                                        areaCode: '378'
                                    },
                                    {
                                        countryZhName: '沙特阿拉伯',
                                        countryCode: 'Saudi Arabia',
                                        geoCode: 'SAU',
                                        areaCode: '966'
                                    },
                                    {
                                        countryZhName: '塞内加尔',
                                        countryCode: 'Senegal',
                                        geoCode: 'SEN',
                                        areaCode: '221'
                                    },
                                    {
                                        countryZhName: '塞尔维亚',
                                        countryCode: 'Serbia',
                                        geoCode: 'SRB',
                                        areaCode: '381'
                                    },
                                    {
                                        countryZhName: '塞舌尔',
                                        countryCode: 'Seychelles',
                                        geoCode: 'SYC',
                                        areaCode: '248'
                                    },
                                    {
                                        countryZhName: '塞拉利昂',
                                        countryCode: 'Sierra Leone',
                                        geoCode: 'SLE',
                                        areaCode: '232'
                                    },
                                    {
                                        countryZhName: '新加坡',
                                        countryCode: 'Singapore',
                                        geoCode: 'SGP',
                                        areaCode: '65'
                                    },
                                    {
                                        countryZhName: '斯洛伐克',
                                        countryCode: 'Slovakia',
                                        geoCode: 'SVK',
                                        areaCode: '421'
                                    },
                                    {
                                        countryZhName: '斯洛文尼亚',
                                        countryCode: 'Slovenia',
                                        geoCode: 'SVN',
                                        areaCode: '386'
                                    },
                                    {
                                        countryZhName: '所罗门群岛',
                                        countryCode: 'Solomon Islands',
                                        geoCode: 'SLB',
                                        areaCode: '677'
                                    },
                                    {
                                        countryZhName: '索马里',
                                        countryCode: 'Somalia',
                                        geoCode: 'SOM',
                                        areaCode: '252'
                                    },
                                    {
                                        countryZhName: '南非',
                                        countryCode: 'South Africa',
                                        geoCode: 'ZAF',
                                        areaCode: '27'
                                    },
                                    {
                                        countryZhName: '韩国',
                                        countryCode: 'South Korea',
                                        geoCode: 'KOR',
                                        areaCode: '82'
                                    },
                                    {
                                        countryZhName: '南苏丹',
                                        countryCode: 'South Sudan',
                                        geoCode: 'SSD',
                                        areaCode: '211'
                                    },
                                    {
                                        countryZhName: '西班牙',
                                        countryCode: 'Spain',
                                        geoCode: 'ESP',
                                        areaCode: '34'
                                    },
                                    {
                                        countryZhName: '斯里兰卡',
                                        countryCode: 'Sri Lanka',
                                        geoCode: 'LKA',
                                        areaCode: '94'
                                    },
                                    {
                                        countryZhName: '巴勒斯坦',
                                        countryCode: 'State of Palestine',
                                        geoCode: 'PSE',
                                        areaCode: '970'
                                    },
                                    {
                                        countryZhName: '苏丹',
                                        countryCode: 'Sudan',
                                        geoCode: 'SDN',
                                        areaCode: '249'
                                    },
                                    {
                                        countryZhName: '苏里南',
                                        countryCode: 'Suriname',
                                        geoCode: 'SUR',
                                        areaCode: '597'
                                    },
                                    {
                                        countryZhName: '斯瓦尔巴和扬马延',
                                        countryCode: 'Svalbard and Jan Mayen',
                                        geoCode: 'SJM',
                                        areaCode: '47'
                                    },
                                    {
                                        countryZhName: '瑞典',
                                        countryCode: 'Sweden',
                                        geoCode: 'SWE',
                                        areaCode: '46'
                                    },
                                    {
                                        countryZhName: '瑞士',
                                        countryCode: 'Switzerland',
                                        geoCode: 'CHE',
                                        areaCode: '41'
                                    },
                                    {
                                        countryZhName: '叙利亚',
                                        countryCode: 'Syria',
                                        geoCode: 'SYR',
                                        areaCode: '963'
                                    },
                                    {
                                        countryZhName: '圣多美和普林西比',
                                        countryCode: 'São Tomé and Príncipe',
                                        geoCode: 'STP',
                                        areaCode: '239'
                                    },
                                    {
                                        countryZhName: '台湾（中国）',
                                        countryCode: 'Taiwan (China)',
                                        geoCode: 'TW',
                                        areaCode: '886'
                                    },
                                    {
                                        countryZhName: '塔吉克斯坦',
                                        countryCode: 'Tajikistan',
                                        geoCode: 'TJK',
                                        areaCode: '992'
                                    },
                                    {
                                        countryZhName: '坦桑尼亚',
                                        countryCode: 'Tanzania',
                                        geoCode: 'TZA',
                                        areaCode: '255'
                                    },
                                    {
                                        countryZhName: '泰国',
                                        countryCode: 'Thailand',
                                        geoCode: 'THA',
                                        areaCode: '66'
                                    },
                                    {
                                        countryZhName: '刚果民主共和国',
                                        countryCode: 'The Democratic Republic of the Congo',
                                        geoCode: 'COD',
                                        areaCode: '243'
                                    },
                                    {
                                        countryZhName: '密克罗尼西亚联邦',
                                        countryCode: 'The Federated States of Micronesia',
                                        geoCode: 'FSM',
                                        areaCode: '691'
                                    },
                                    {
                                        countryZhName: '多哥',
                                        countryCode: 'Togo',
                                        geoCode: 'TGO',
                                        areaCode: '228'
                                    },
                                    {
                                        countryZhName: '托克劳',
                                        countryCode: 'Tokelau',
                                        geoCode: 'TKL',
                                        areaCode: '690'
                                    },
                                    {
                                        countryZhName: '汤加',
                                        countryCode: 'Tonga',
                                        geoCode: 'TON',
                                        areaCode: '676'
                                    },
                                    {
                                        countryZhName: '特立尼达和多巴哥',
                                        countryCode: 'Trinidad and Tobago',
                                        geoCode: 'TTO',
                                        areaCode: '1868'
                                    },
                                    {
                                        countryZhName: '突尼斯',
                                        countryCode: 'Tunisia',
                                        geoCode: 'TUN',
                                        areaCode: '216'
                                    },
                                    {
                                        countryZhName: '土耳其',
                                        countryCode: 'Turkey',
                                        geoCode: 'TUR',
                                        areaCode: '90'
                                    },
                                    {
                                        countryZhName: '土库曼斯坦',
                                        countryCode: 'Turkmenistan',
                                        geoCode: 'TKM',
                                        areaCode: '993'
                                    },
                                    {
                                        countryZhName: '特克斯和凯科斯群岛',
                                        countryCode: 'Turks and Caicos Islands',
                                        geoCode: 'TCA',
                                        areaCode: '1649'
                                    },
                                    {
                                        countryZhName: '图瓦卢',
                                        countryCode: 'Tuvalu',
                                        geoCode: 'TUV',
                                        areaCode: '688'
                                    },
                                    {
                                        countryZhName: '乌干达',
                                        countryCode: 'Uganda',
                                        geoCode: 'UGA',
                                        areaCode: '256'
                                    },
                                    {
                                        countryZhName: '乌克兰',
                                        countryCode: 'Ukraine',
                                        geoCode: 'UKR',
                                        areaCode: '380'
                                    },
                                    {
                                        countryZhName: '阿联酋',
                                        countryCode: 'United Arab Emirates',
                                        geoCode: 'ARE',
                                        areaCode: '971'
                                    },
                                    {
                                        countryZhName: '英国',
                                        countryCode: 'United Kingdom',
                                        geoCode: 'GBR',
                                        areaCode: '44'
                                    },
                                    {
                                        countryZhName: '美国本土外小岛屿',
                                        countryCode: 'United States Minor Outlying Islands',
                                        geoCode: 'UMI',
                                        areaCode: '1'
                                    },
                                    {
                                        countryZhName: '美国',
                                        countryCode: 'United States of America',
                                        geoCode: 'USA',
                                        areaCode: '1'
                                    },
                                    {
                                        countryZhName: '美属维尔京群岛',
                                        countryCode: 'United States Virgin Islands',
                                        geoCode: 'VIR',
                                        areaCode: '1340'
                                    },
                                    {
                                        countryZhName: '乌拉圭',
                                        countryCode: 'Uruguay',
                                        geoCode: 'URY',
                                        areaCode: '598'
                                    },
                                    {
                                        countryZhName: '乌兹别克斯坦',
                                        countryCode: 'Uzbekistan',
                                        geoCode: 'UZB',
                                        areaCode: '998'
                                    },
                                    {
                                        countryZhName: '瓦努阿图',
                                        countryCode: 'Vanuatu',
                                        geoCode: 'VUT',
                                        areaCode: '678'
                                    },
                                    {
                                        countryZhName: '梵蒂冈',
                                        countryCode: 'Vatican City State',
                                        geoCode: 'VA',
                                        areaCode: '379'
                                    },
                                    {
                                        countryZhName: '委内瑞拉',
                                        countryCode: 'Venezuela',
                                        geoCode: 'VEN',
                                        areaCode: '58'
                                    },
                                    {
                                        countryZhName: '越南',
                                        countryCode: 'Viet Nam',
                                        geoCode: 'VNM',
                                        areaCode: '84'
                                    },
                                    {
                                        countryZhName: '瓦利斯和富图纳',
                                        countryCode: 'Wallis and Futuna',
                                        geoCode: 'WLF',
                                        areaCode: '681'
                                    },
                                    {
                                        countryZhName: '也门',
                                        countryCode: 'Yemen',
                                        geoCode: 'YEM',
                                        areaCode: '967'
                                    },
                                    {
                                        countryZhName: '赞比亚',
                                        countryCode: 'Zambia',
                                        geoCode: 'ZMB',
                                        areaCode: '260'
                                    },
                                    {
                                        countryZhName: '津巴布韦',
                                        countryCode: 'Zimbabwe',
                                        geoCode: 'ZWE',
                                        areaCode: '263'
                                    }
                                ]
                            },
                            'x-validator': [
                                {
                                    disallowEmoticon: true
                                },
                                {
                                    validator: '{{phoneNumberValidator}}',
                                    triggerType: 'onBlur'
                                }
                            ],
                            type: 'string',
                            title: '固定电话',
                            'x-index': 5,
                            'x-reactions': '{{registerGeoCodeRecommendation}}'
                        },
                        customerAbbreviation: {
                            'x-component-type': '单行文本框',
                            'x-decorator': 'FormItem',
                            'x-component': 'Input',
                            'x-decorator-props': {
                                colon: false
                            },
                            name: 'customerAbbreviation',
                            'x-component-props': {
                                size: 'large',
                                id: 'customerAbbreviation'
                            },
                            'x-validator': [
                                {
                                    disallowEmoticon: true
                                }
                            ],
                            type: 'string',
                            title: '客户简称',
                            'x-index': 3,
                            maxLength: 80
                        },
                        customerGeoCode: {
                            'x-component-type': '单选列表',
                            'x-component': 'GeoSelect',
                            'x-filter': true,
                            'x-decorator-props': {
                                colon: false
                            },
                            'x-component-props': {
                                optionFilterProp: 'label',
                                showSearch: true,
                                id: 'customerGeoCode'
                            },
                            'x-validator': [],
                            type: 'string',
                            title: '国家/地区',
                            'x-index': 2,
                            required: true,
                            disableHide: true,
                            'x-decorator': 'FormItem',
                            name: 'customerGeoCode',
                            enum: [
                                {
                                    label: '阿富汗',
                                    value: 'AF'
                                },
                                {
                                    label: '阿尔巴尼亚',
                                    value: 'AL'
                                },
                                {
                                    label: '阿尔及利亚',
                                    value: 'DZ'
                                },
                                {
                                    label: '美属萨摩亚',
                                    value: 'AS'
                                },
                                {
                                    label: '安道尔',
                                    value: 'AD'
                                },
                                {
                                    label: '安哥拉',
                                    value: 'AO'
                                },
                                {
                                    label: '安圭拉',
                                    value: 'AI'
                                },
                                {
                                    label: '南极洲',
                                    value: 'AQ'
                                },
                                {
                                    label: '安提瓜和巴布达',
                                    value: 'AG'
                                },
                                {
                                    label: '阿根廷',
                                    value: 'AR'
                                },
                                {
                                    label: '亚美尼亚',
                                    value: 'AM'
                                },
                                {
                                    label: '阿鲁巴',
                                    value: 'AW'
                                },
                                {
                                    label: '澳大利亚',
                                    value: 'AU'
                                },
                                {
                                    label: '奥地利',
                                    value: 'AT'
                                },
                                {
                                    label: '阿塞拜疆',
                                    value: 'AZ'
                                },
                                {
                                    label: '巴哈马',
                                    value: 'BS'
                                },
                                {
                                    label: '巴林',
                                    value: 'BH'
                                },
                                {
                                    label: '孟加拉国',
                                    value: 'BD'
                                },
                                {
                                    label: '巴巴多斯',
                                    value: 'BB'
                                },
                                {
                                    label: '白俄罗斯',
                                    value: 'BY'
                                },
                                {
                                    label: '比利时',
                                    value: 'BE'
                                },
                                {
                                    label: '伯利兹',
                                    value: 'BZ'
                                },
                                {
                                    label: '贝宁',
                                    value: 'BJ'
                                },
                                {
                                    label: '百慕大',
                                    value: 'BM'
                                },
                                {
                                    label: '不丹',
                                    value: 'BT'
                                },
                                {
                                    label: '玻利维亚',
                                    value: 'BO'
                                },
                                {
                                    label: '波黑',
                                    value: 'BA'
                                },
                                {
                                    label: '博茨瓦纳',
                                    value: 'BW'
                                },
                                {
                                    label: '布韦岛',
                                    value: 'BV'
                                },
                                {
                                    label: '巴西',
                                    value: 'BR'
                                },
                                {
                                    label: '英属印度洋领地',
                                    value: 'IO'
                                },
                                {
                                    label: '英属维尔京群岛',
                                    value: 'VG'
                                },
                                {
                                    label: '文莱',
                                    value: 'BN'
                                },
                                {
                                    label: '保加利亚',
                                    value: 'BG'
                                },
                                {
                                    label: '布基纳法索',
                                    value: 'BF'
                                },
                                {
                                    label: '布隆迪',
                                    value: 'BI'
                                },
                                {
                                    label: '佛得角',
                                    value: 'CV'
                                },
                                {
                                    label: '柬埔寨',
                                    value: 'KH'
                                },
                                {
                                    label: '喀麦隆',
                                    value: 'CM'
                                },
                                {
                                    label: '加拿大',
                                    value: 'CA'
                                },
                                {
                                    label: '荷兰加勒比区',
                                    value: 'BQ'
                                },
                                {
                                    label: '开曼群岛',
                                    value: 'KY'
                                },
                                {
                                    label: '中非',
                                    value: 'CF'
                                },
                                {
                                    label: '乍得',
                                    value: 'TD'
                                },
                                {
                                    label: '智利',
                                    value: 'CL'
                                },
                                {
                                    label: '中国大陆',
                                    value: 'CN'
                                },
                                {
                                    label: '圣诞岛',
                                    value: 'CX'
                                },
                                {
                                    label: '科科斯（基林）群岛',
                                    value: 'CC'
                                },
                                {
                                    label: '法属圣马丁',
                                    value: 'MF'
                                },
                                {
                                    label: '哥伦比亚',
                                    value: 'CO'
                                },
                                {
                                    label: '科摩罗',
                                    value: 'KM'
                                },
                                {
                                    label: '刚果共和国',
                                    value: 'CG'
                                },
                                {
                                    label: '库克群岛',
                                    value: 'CK'
                                },
                                {
                                    label: '哥斯达黎加',
                                    value: 'CR'
                                },
                                {
                                    label: '克里米亚',
                                    value: null
                                },
                                {
                                    label: '克罗地亚',
                                    value: 'HR'
                                },
                                {
                                    label: '古巴',
                                    value: 'CU'
                                },
                                {
                                    label: '库拉索',
                                    value: 'CW'
                                },
                                {
                                    label: '塞浦路斯',
                                    value: 'CY'
                                },
                                {
                                    label: '捷克',
                                    value: 'CZ'
                                },
                                {
                                    label: '科特迪瓦',
                                    value: 'CI'
                                },
                                {
                                    label: '丹麦',
                                    value: 'DK'
                                },
                                {
                                    label: '吉布提',
                                    value: 'DJ'
                                },
                                {
                                    label: '多米尼克',
                                    value: 'DM'
                                },
                                {
                                    label: '多米尼加',
                                    value: 'DO'
                                },
                                {
                                    label: '顿涅茨克',
                                    value: 'XD'
                                },
                                {
                                    label: '东帝汶',
                                    value: 'TL'
                                },
                                {
                                    label: '厄瓜多尔',
                                    value: 'EC'
                                },
                                {
                                    label: '埃及',
                                    value: 'EG'
                                },
                                {
                                    label: '萨尔瓦多',
                                    value: 'SV'
                                },
                                {
                                    label: '赤道几内亚',
                                    value: 'GQ'
                                },
                                {
                                    label: '厄立特里亚',
                                    value: 'ER'
                                },
                                {
                                    label: '爱沙尼亚',
                                    value: 'EE'
                                },
                                {
                                    label: '斯威士兰',
                                    value: 'SZ'
                                },
                                {
                                    label: '埃塞俄比亚',
                                    value: 'ET'
                                },
                                {
                                    label: '福克兰群岛',
                                    value: 'FK'
                                },
                                {
                                    label: '法罗群岛',
                                    value: 'FO'
                                },
                                {
                                    label: '斐济',
                                    value: 'FJ'
                                },
                                {
                                    label: '芬兰',
                                    value: 'FI'
                                },
                                {
                                    label: '法国',
                                    value: 'FR'
                                },
                                {
                                    label: '法属圭亚那',
                                    value: 'GF'
                                },
                                {
                                    label: '法属波利尼西亚',
                                    value: 'PF'
                                },
                                {
                                    label: '法属南部和南极领地',
                                    value: 'TF'
                                },
                                {
                                    label: '加蓬',
                                    value: 'GA'
                                },
                                {
                                    label: '冈比亚',
                                    value: 'GM'
                                },
                                {
                                    label: '格鲁吉亚',
                                    value: 'GE'
                                },
                                {
                                    label: '德国',
                                    value: 'DE'
                                },
                                {
                                    label: '加纳',
                                    value: 'GH'
                                },
                                {
                                    label: '直布罗陀',
                                    value: 'GI'
                                },
                                {
                                    label: '希腊',
                                    value: 'GR'
                                },
                                {
                                    label: '格陵兰',
                                    value: 'GL'
                                },
                                {
                                    label: '格林纳达',
                                    value: 'GD'
                                },
                                {
                                    label: '瓜德罗普',
                                    value: 'GP'
                                },
                                {
                                    label: '关岛',
                                    value: 'GU'
                                },
                                {
                                    label: '危地马拉',
                                    value: 'GT'
                                },
                                {
                                    label: '根西',
                                    value: 'GG'
                                },
                                {
                                    label: '几内亚',
                                    value: 'GN'
                                },
                                {
                                    label: '几内亚比绍',
                                    value: 'GW'
                                },
                                {
                                    label: '圭亚那',
                                    value: 'GY'
                                },
                                {
                                    label: '海地',
                                    value: 'HT'
                                },
                                {
                                    label: '赫德岛和麦克唐纳群岛',
                                    value: 'HM'
                                },
                                {
                                    label: '洪都拉斯',
                                    value: 'HN'
                                },
                                {
                                    label: '香港（中国）',
                                    value: 'HK'
                                },
                                {
                                    label: '匈牙利',
                                    value: 'HU'
                                },
                                {
                                    label: '冰岛',
                                    value: 'IS'
                                },
                                {
                                    label: '印度',
                                    value: 'IN'
                                },
                                {
                                    label: '印尼',
                                    value: 'ID'
                                },
                                {
                                    label: '伊朗',
                                    value: 'IR'
                                },
                                {
                                    label: '伊拉克',
                                    value: 'IQ'
                                },
                                {
                                    label: '爱尔兰',
                                    value: 'IE'
                                },
                                {
                                    label: '马恩岛',
                                    value: 'IM'
                                },
                                {
                                    label: '以色列',
                                    value: 'IL'
                                },
                                {
                                    label: '意大利',
                                    value: 'IT'
                                },
                                {
                                    label: '牙买加',
                                    value: 'JM'
                                },
                                {
                                    label: '日本',
                                    value: 'JP'
                                },
                                {
                                    label: '泽西',
                                    value: 'JE'
                                },
                                {
                                    label: '约旦',
                                    value: 'JO'
                                },
                                {
                                    label: '哈萨克斯坦',
                                    value: 'KZ'
                                },
                                {
                                    label: '肯尼亚',
                                    value: 'KE'
                                },
                                {
                                    label: '基里巴斯',
                                    value: 'KI'
                                },
                                {
                                    label: '科威特',
                                    value: 'KW'
                                },
                                {
                                    label: '吉尔吉斯斯坦',
                                    value: 'KG'
                                },
                                {
                                    label: '老挝',
                                    value: 'LA'
                                },
                                {
                                    label: '拉脱维亚',
                                    value: 'LV'
                                },
                                {
                                    label: '黎巴嫩',
                                    value: 'LB'
                                },
                                {
                                    label: '莱索托',
                                    value: 'LS'
                                },
                                {
                                    label: '利比里亚',
                                    value: 'LR'
                                },
                                {
                                    label: '利比亚',
                                    value: 'LY'
                                },
                                {
                                    label: '列支敦士登',
                                    value: 'LI'
                                },
                                {
                                    label: '立陶宛',
                                    value: 'LT'
                                },
                                {
                                    label: '卢甘斯克',
                                    value: 'XL'
                                },
                                {
                                    label: '卢森堡',
                                    value: 'LU'
                                },
                                {
                                    label: '澳门（中国）',
                                    value: 'MO'
                                },
                                {
                                    label: '马达加斯加',
                                    value: 'MG'
                                },
                                {
                                    label: '马拉维',
                                    value: 'MW'
                                },
                                {
                                    label: '马来西亚',
                                    value: 'MY'
                                },
                                {
                                    label: '马尔代夫',
                                    value: 'MV'
                                },
                                {
                                    label: '马里',
                                    value: 'ML'
                                },
                                {
                                    label: '马耳他',
                                    value: 'MT'
                                },
                                {
                                    label: '马绍尔群岛',
                                    value: 'MH'
                                },
                                {
                                    label: '马提尼克',
                                    value: 'MQ'
                                },
                                {
                                    label: '毛里塔尼亚',
                                    value: 'MR'
                                },
                                {
                                    label: '毛里求斯',
                                    value: 'MU'
                                },
                                {
                                    label: '马约特',
                                    value: 'YT'
                                },
                                {
                                    label: '墨西哥',
                                    value: 'MX'
                                },
                                {
                                    label: '摩纳哥',
                                    value: 'MC'
                                },
                                {
                                    label: '蒙古',
                                    value: 'MN'
                                },
                                {
                                    label: '黑山',
                                    value: 'ME'
                                },
                                {
                                    label: '蒙特塞拉特',
                                    value: 'MS'
                                },
                                {
                                    label: '摩洛哥',
                                    value: 'MA'
                                },
                                {
                                    label: '莫桑比克',
                                    value: 'MZ'
                                },
                                {
                                    label: '缅甸',
                                    value: 'MM'
                                },
                                {
                                    label: '纳米比亚',
                                    value: 'NA'
                                },
                                {
                                    label: '瑙鲁',
                                    value: 'NR'
                                },
                                {
                                    label: '尼泊尔',
                                    value: 'NP'
                                },
                                {
                                    label: '荷兰',
                                    value: 'NL'
                                },
                                {
                                    label: '新喀里多尼亚',
                                    value: 'NC'
                                },
                                {
                                    label: '新西兰',
                                    value: 'NZ'
                                },
                                {
                                    label: '尼加拉瓜',
                                    value: 'NI'
                                },
                                {
                                    label: '尼日尔',
                                    value: 'NE'
                                },
                                {
                                    label: '尼日利亚',
                                    value: 'NG'
                                },
                                {
                                    label: '纽埃',
                                    value: 'NU'
                                },
                                {
                                    label: '诺福克岛',
                                    value: 'NF'
                                },
                                {
                                    label: '朝鲜',
                                    value: 'KP'
                                },
                                {
                                    label: '北马其顿',
                                    value: 'MK'
                                },
                                {
                                    label: '北马里亚纳群岛',
                                    value: 'MP'
                                },
                                {
                                    label: '挪威',
                                    value: 'NO'
                                },
                                {
                                    label: '阿曼',
                                    value: 'OM'
                                },
                                {
                                    label: '巴基斯坦',
                                    value: 'PK'
                                },
                                {
                                    label: '帕劳',
                                    value: 'PW'
                                },
                                {
                                    label: '巴拿马',
                                    value: 'PA'
                                },
                                {
                                    label: '巴布亚新几内亚',
                                    value: 'PG'
                                },
                                {
                                    label: '巴拉圭',
                                    value: 'PY'
                                },
                                {
                                    label: '秘鲁',
                                    value: 'PE'
                                },
                                {
                                    label: '菲律宾',
                                    value: 'PH'
                                },
                                {
                                    label: '皮特凯恩群岛',
                                    value: 'PN'
                                },
                                {
                                    label: '波兰',
                                    value: 'PL'
                                },
                                {
                                    label: '葡萄牙',
                                    value: 'PT'
                                },
                                {
                                    label: '波多黎各',
                                    value: 'PR'
                                },
                                {
                                    label: '卡塔尔',
                                    value: 'QA'
                                },
                                {
                                    label: '摩尔多瓦',
                                    value: 'MD'
                                },
                                {
                                    label: '罗马尼亚',
                                    value: 'RO'
                                },
                                {
                                    label: '俄罗斯',
                                    value: 'RU'
                                },
                                {
                                    label: '卢旺达',
                                    value: 'RW'
                                },
                                {
                                    label: '留尼汪',
                                    value: 'RE'
                                },
                                {
                                    label: '圣巴泰勒米',
                                    value: 'BL'
                                },
                                {
                                    label: '圣赫勒拿、阿森松和特里斯坦-达库尼亚',
                                    value: 'SH'
                                },
                                {
                                    label: '圣基茨和尼维斯',
                                    value: 'KN'
                                },
                                {
                                    label: '圣卢西亚',
                                    value: 'LC'
                                },
                                {
                                    label: '圣皮埃尔和密克隆',
                                    value: 'PM'
                                },
                                {
                                    label: '圣文森特和格林纳丁斯',
                                    value: 'VC'
                                },
                                {
                                    label: '萨摩亚',
                                    value: 'WS'
                                },
                                {
                                    label: '圣马力诺',
                                    value: 'SM'
                                },
                                {
                                    label: '沙特阿拉伯',
                                    value: 'SA'
                                },
                                {
                                    label: '塞内加尔',
                                    value: 'SN'
                                },
                                {
                                    label: '塞尔维亚',
                                    value: 'RS'
                                },
                                {
                                    label: '塞舌尔',
                                    value: 'SC'
                                },
                                {
                                    label: '塞拉利昂',
                                    value: 'SL'
                                },
                                {
                                    label: '新加坡',
                                    value: 'SG'
                                },
                                {
                                    label: '荷属圣马丁',
                                    value: 'SX'
                                },
                                {
                                    label: '斯洛伐克',
                                    value: 'SK'
                                },
                                {
                                    label: '斯洛文尼亚',
                                    value: 'SI'
                                },
                                {
                                    label: '所罗门群岛',
                                    value: 'SB'
                                },
                                {
                                    label: '索马里',
                                    value: 'SO'
                                },
                                {
                                    label: '南非',
                                    value: 'ZA'
                                },
                                {
                                    label: '南乔治亚和南桑威奇群岛',
                                    value: 'GS'
                                },
                                {
                                    label: '韩国',
                                    value: 'KR'
                                },
                                {
                                    label: '南苏丹',
                                    value: 'SS'
                                },
                                {
                                    label: '西班牙',
                                    value: 'ES'
                                },
                                {
                                    label: '斯里兰卡',
                                    value: 'LK'
                                },
                                {
                                    label: '巴勒斯坦',
                                    value: 'PS'
                                },
                                {
                                    label: '苏丹',
                                    value: 'SD'
                                },
                                {
                                    label: '苏里南',
                                    value: 'SR'
                                },
                                {
                                    label: '斯瓦尔巴和扬马延',
                                    value: 'SJ'
                                },
                                {
                                    label: '瑞典',
                                    value: 'SE'
                                },
                                {
                                    label: '瑞士',
                                    value: 'CH'
                                },
                                {
                                    label: '叙利亚',
                                    value: 'SY'
                                },
                                {
                                    label: '圣多美和普林西比',
                                    value: 'ST'
                                },
                                {
                                    label: '台湾（中国）',
                                    value: 'TW'
                                },
                                {
                                    label: '塔吉克斯坦',
                                    value: 'TJ'
                                },
                                {
                                    label: '坦桑尼亚',
                                    value: 'TZ'
                                },
                                {
                                    label: '泰国',
                                    value: 'TH'
                                },
                                {
                                    label: '刚果民主共和国',
                                    value: 'CD'
                                },
                                {
                                    label: '密克罗尼西亚联邦',
                                    value: 'FM'
                                },
                                {
                                    label: '多哥',
                                    value: 'TG'
                                },
                                {
                                    label: '托克劳',
                                    value: 'TK'
                                },
                                {
                                    label: '汤加',
                                    value: 'TO'
                                },
                                {
                                    label: '特立尼达和多巴哥',
                                    value: 'TT'
                                },
                                {
                                    label: '突尼斯',
                                    value: 'TN'
                                },
                                {
                                    label: '土耳其',
                                    value: 'TR'
                                },
                                {
                                    label: '土库曼斯坦',
                                    value: 'TM'
                                },
                                {
                                    label: '特克斯和凯科斯群岛',
                                    value: 'TC'
                                },
                                {
                                    label: '图瓦卢',
                                    value: 'TV'
                                },
                                {
                                    label: '乌干达',
                                    value: 'UG'
                                },
                                {
                                    label: '乌克兰',
                                    value: 'UA'
                                },
                                {
                                    label: '阿联酋',
                                    value: 'AE'
                                },
                                {
                                    label: '英国',
                                    value: 'GB'
                                },
                                {
                                    label: '美国本土外小岛屿',
                                    value: 'UM'
                                },
                                {
                                    label: '美属维尔京群岛',
                                    value: 'VI'
                                },
                                {
                                    label: '美国',
                                    value: 'US'
                                },
                                {
                                    label: '乌拉圭',
                                    value: 'UY'
                                },
                                {
                                    label: '乌兹别克斯坦',
                                    value: 'UZ'
                                },
                                {
                                    label: '瓦努阿图',
                                    value: 'VU'
                                },
                                {
                                    label: '梵蒂冈',
                                    value: 'VA'
                                },
                                {
                                    label: '委内瑞拉',
                                    value: 'VE'
                                },
                                {
                                    label: '越南',
                                    value: 'VN'
                                },
                                {
                                    label: '瓦利斯和富图纳',
                                    value: 'WF'
                                },
                                {
                                    label: '西撒哈拉',
                                    value: 'EH'
                                },
                                {
                                    label: '也门',
                                    value: 'YE'
                                },
                                {
                                    label: '赞比亚',
                                    value: 'ZM'
                                },
                                {
                                    label: '津巴布韦',
                                    value: 'ZW'
                                },
                                {
                                    label: '奥兰群岛',
                                    value: 'AX'
                                }
                            ],
                            'x-reactions': '{{recommendCountryCode}}'
                        },
                        webAddress: {
                            'x-component-type': '单行文本框',
                            'x-decorator': 'FormItem',
                            'x-component': 'Input',
                            'x-decorator-props': {
                                colon: false
                            },
                            name: 'webAddress',
                            'x-component-props': {
                                size: 'large',
                                id: 'webAddress'
                            },
                            'x-validator': [
                                {
                                    format: 'url',
                                    triggerType: 'onBlur'
                                },
                                {
                                    disallowEmoticon: true
                                }
                            ],
                            type: 'string',
                            title: '客户网址',
                            'x-index': 4,
                            maxLength: 128
                        },
                        memo: {
                            'x-component-type': '多行文本框',
                            'x-decorator': 'FormItem',
                            'x-component': 'Input.TextArea',
                            'x-decorator-props': {
                                colon: false
                            },
                            name: 'memo',
                            'x-component-props': {
                                id: 'memo'
                            },
                            'x-validator': [
                                {
                                    disallowEmoticon: true
                                }
                            ],
                            type: 'string',
                            title: '备注',
                            'x-index': 8,
                            maxLength: 512
                        },
                        customizeAddress: {
                            'x-component-type': '多行文本框',
                            'x-decorator': 'FormItem',
                            'x-component': 'Input.TextArea',
                            'x-decorator-props': {
                                colon: false
                            },
                            name: 'customizeAddress',
                            'x-component-props': {
                                id: 'customizeAddress'
                            },
                            'x-validator': [
                                {
                                    disallowEmoticon: true
                                }
                            ],
                            type: 'string',
                            title: '联系地址',
                            'x-index': 7,
                            maxLength: 512
                        },
                        customerNo: {
                            'x-component-type': '单行文本框',
                            'x-list': true,
                            'x-component': 'CustomerNoInput',
                            'x-decorator-props': {
                                colon: false
                            },
                            'x-component-props': {
                                id: 'customerNo'
                            },
                            'x-validator': [
                                {
                                    checkCustomerNoDuplicate: true,
                                    triggerType: 'onBlur'
                                }
                            ],
                            type: 'string',
                            title: '客户编号',
                            'x-index': 0,
                            disableHide: true,
                            disableEdit: true,
                            'x-decorator': 'FormItem',
                            name: 'customerNo',
                            maxLength: 32
                        },
                        customerName: {
                            'x-component-type': '单行文本框',
                            'x-list': true,
                            'x-component': 'Input',
                            'x-list-fixed': true,
                            'x-decorator-props': {
                                colon: false
                            },
                            'x-component-props': {
                                size: 'large',
                                id: 'customerName'
                            },
                            'x-validator': [
                                {
                                    disallowEmoticon: true
                                }
                            ],
                            type: 'string',
                            title: '客户名称',
                            'x-index': 1,
                            required: true,
                            disableHide: true,
                            'x-decorator': 'FormItem',
                            name: 'customerName',
                            maxLength: 80
                        },
                        customerFax: {
                            'x-component-type': '单行文本框',
                            'x-decorator': 'FormItem',
                            'x-component': 'Input',
                            'x-decorator-props': {
                                colon: false
                            },
                            name: 'customerFax',
                            'x-component-props': {
                                size: 'large',
                                id: 'customerFax'
                            },
                            'x-validator': [
                                {
                                    disallowEmoticon: true
                                }
                            ],
                            type: 'string',
                            title: '传真',
                            'x-index': 6
                        }
                    }
                }
            }
        },
        '0chqj6titjf': {
            'x-component': 'ModuleCard',
            module: true,
            type: 'void',
            title: '特征信息',
            'x-index': 2,
            properties: {
                '2afogl82dcg': {
                    'x-component': 'FormLayout',
                    'x-component-props': {
                        layout: 'two-columns'
                    },
                    type: 'void',
                    'x-index': 0,
                    properties: {
                        customerType: {
                            'x-component-type': '单选列表',
                            'x-decorator': 'FormItem',
                            'x-component': 'Select',
                            'x-filter': true,
                            'x-decorator-props': {
                                colon: false
                            },
                            name: 'customerType',
                            'x-component-props': {
                                optionFilterProp: 'label',
                                showSearch: true,
                                id: 'customerType',
                                allowClear: true
                            },
                            'x-validator': [],
                            type: 'string',
                            title: '客户类型',
                            'x-index': 2,
                            enum: [
                                {
                                    label: '采购商',
                                    value: 'BUYERS'
                                },
                                {
                                    label: '出口商',
                                    value: 'EXPORTER'
                                },
                                {
                                    label: '进口商',
                                    value: 'IMPORTER'
                                },
                                {
                                    label: '个人消费者',
                                    value: 'INDIVIDUAL_CONSUMER'
                                },
                                {
                                    label: '供应商',
                                    value: 'SUPPLIER'
                                },
                                {
                                    label: '贸易公司',
                                    value: 'TRADING_COMPANY'
                                }
                            ]
                        },
                        customerSource: {
                            'x-component-type': '单选列表',
                            'x-list': true,
                            'x-component': 'Select',
                            'x-filter': true,
                            'x-decorator-props': {
                                colon: false
                            },
                            'x-component-props': {
                                optionFilterProp: 'label',
                                showSearch: true,
                                id: 'customerSource',
                                allowClear: true
                            },
                            'x-validator': [],
                            type: 'string',
                            title: '客户来源',
                            'x-index': 0,
                            enum: [
                                {
                                    label: '商业数据',
                                    value: 'BUSINESS_DATA'
                                },
                                {
                                    label: '客户推荐',
                                    value: 'CUSTOMER_RECOMMENDATION'
                                },
                                {
                                    label: '电商平台',
                                    value: 'ECOMMERCE_PLATFORM'
                                },
                                {
                                    label: '展会',
                                    value: 'EXHIBITION'
                                },
                                {
                                    label: '社交平台',
                                    value: 'SOCIAL_PLATFORM'
                                }
                            ],
                            'x-decorator': 'FormItem',
                            name: 'customerSource'
                        },
                        status: {
                            'x-component-type': '单选列表',
                            'x-list': true,
                            'x-component': 'Select',
                            'x-filter': true,
                            'x-decorator-props': {
                                colon: false
                            },
                            'x-component-props': {
                                optionFilterProp: 'label',
                                showSearch: true,
                                id: 'status',
                                allowClear: true
                            },
                            'x-validator': [],
                            type: 'string',
                            title: '客户状态',
                            'x-index': 1,
                            enum: [
                                {
                                    label: '持续跟进',
                                    value: 'FOLLOW_UP'
                                },
                                {
                                    label: '无效客户',
                                    value: 'INACTIVE'
                                },
                                {
                                    label: '初步接触',
                                    value: 'INITIAL_CONTACT'
                                },
                                {
                                    label: '忠诚客户',
                                    value: 'LOYAL_CUSTOMERS'
                                },
                                {
                                    label: '潜在客户',
                                    value: 'POTENTIAL_CUSTOMERS'
                                },
                                {
                                    label: '成交客户',
                                    value: 'TRANSACTION_CUSTOMERS'
                                }
                            ],
                            'x-decorator': 'FormItem',
                            name: 'status'
                        },
                        tags: {
                            'x-component-type': '多选列表',
                            'x-list': true,
                            'x-decorator': 'FormItem',
                            'x-component': 'XtCustomSelect',
                            'x-filter': true,
                            'x-decorator-props': {
                                colon: false
                            },
                            name: 'tags',
                            'x-validator': [],
                            'x-component-props': {
                                mode: 'CRM',
                                optionFilterProp: 'label',
                                size: 'large',
                                id: 'tags',
                                allowClear: true,
                                noConfirm: true
                            },
                            type: 'array',
                            title: '标签',
                            'x-index': 3
                        }
                    }
                }
            }
        },
        '7pktwpbt1oe': {
            'x-component': 'ModuleCard',
            module: true,
            type: 'void',
            title: '联系人',
            'x-index': 1,
            properties: {
                contactModels: {
                    default: [{}],
                    'x-component': 'ArrayItems',
                    name: 'contactModels',
                    'x-component-props': {
                        id: 'contactModels'
                    },
                    'x-validator': [],
                    type: 'array',
                    'x-index': 0,
                    items: {
                        'x-validator': [],
                        type: 'object',
                        properties: {
                            tgfnpbqvlgv: {
                                'x-component': 'FormLayout',
                                'x-component-props': {
                                    layout: 'two-columns'
                                },
                                type: 'void',
                                'x-index': 1,
                                properties: {
                                    birthday: {
                                        'x-component-type': '日期',
                                        'x-decorator': 'FormItem',
                                        'x-component': 'DatePicker',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        name: 'birthday',
                                        'x-validator': [],
                                        'x-component-props': {
                                            id: 'birthday'
                                        },
                                        type: 'string',
                                        title: '生日',
                                        'x-index': 6
                                    },
                                    gender: {
                                        'x-component-type': '单选列表',
                                        disableEditEnum: true,
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Select',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        name: 'gender',
                                        'x-validator': [],
                                        'x-component-props': {
                                            id: 'gender',
                                            allowClear: true
                                        },
                                        type: 'boolean',
                                        title: '性别',
                                        'x-index': 5,
                                        enum: [
                                            {
                                                label: '男',
                                                value: true
                                            },
                                            {
                                                label: '女',
                                                value: false
                                            }
                                        ]
                                    },
                                    contactEmail: {
                                        'x-component-type': '单行文本框',
                                        'x-list': true,
                                        'x-component': 'Input',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        'x-validator': [
                                            {
                                                triggerType: 'onBlur',
                                                required: true
                                            },
                                            {
                                                disallowEmoticon: true,
                                                triggerType: 'onBlur'
                                            },
                                            {
                                                checkDuplicate: true,
                                                triggerType: 'onBlur'
                                            }
                                        ],
                                        'x-component-props': {
                                            size: 'large',
                                            id: 'contactEmail'
                                        },
                                        type: 'string',
                                        title: '邮箱',
                                        'x-index': 4,
                                        required: true,
                                        'x-decorator': 'FormItem',
                                        name: 'contactEmail',
                                        maxLength: 100
                                    },
                                    contactName: {
                                        'x-component-type': '单行文本框',
                                        'x-list': true,
                                        'x-component': 'Input',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        'x-component-props': {
                                            size: 'large',
                                            id: 'contactName'
                                        },
                                        'x-validator': [
                                            {
                                                disallowEmoticon: true
                                            }
                                        ],
                                        type: 'string',
                                        title: '姓名',
                                        'x-index': 3,
                                        required: true,
                                        disableHide: true,
                                        'x-decorator': 'FormItem',
                                        name: 'contactName',
                                        maxLength: 100
                                    },
                                    contactFax: {
                                        'x-component-type': '单行文本框',
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Input',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        name: 'contactFax',
                                        'x-validator': [
                                            {
                                                disallowEmoticon: true
                                            }
                                        ],
                                        'x-component-props': {
                                            size: 'large',
                                            id: 'contactFax'
                                        },
                                        type: 'string',
                                        title: '传真',
                                        'x-index': 8,
                                        maxLength: 100
                                    },
                                    remark: {
                                        'x-component-type': '多行文本框',
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Input.TextArea',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        name: 'remark',
                                        'x-component-props': {
                                            id: 'remark'
                                        },
                                        'x-validator': [
                                            {
                                                disallowEmoticon: true
                                            }
                                        ],
                                        type: 'string',
                                        title: '备注',
                                        'x-index': 11,
                                        maxLength: 512
                                    },
                                    position: {
                                        'x-component-type': '单行文本框',
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Input',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        name: 'position',
                                        'x-validator': [
                                            {
                                                disallowEmoticon: true
                                            }
                                        ],
                                        'x-component-props': {
                                            size: 'large',
                                            id: 'position'
                                        },
                                        type: 'string',
                                        title: '职位',
                                        'x-index': 7,
                                        maxLength: 100
                                    },
                                    contactPhone: {
                                        'x-component-type': '叠加文本框',
                                        'x-component': 'ArrayItems',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        'x-component-props': {
                                            id: 'contactPhone'
                                        },
                                        type: 'array',
                                        title: '电话',
                                        'x-index': 9,
                                        default: [''],
                                        'x-decorator': 'FormItem',
                                        name: 'contactPhone',
                                        items: {
                                            type: 'void',
                                            'x-decorator': 'ArrayItems.Item',
                                            properties: {
                                                contactPhone: {
                                                    type: 'string',
                                                    'x-decorator': 'FormItem',
                                                    'x-decorator-props': {
                                                        style: {
                                                            border: 0,
                                                            width: '100%'
                                                        }
                                                    },
                                                    'x-component': 'Input',
                                                    'x-component-props': {
                                                        size: 'large',
                                                        areaCodeOptions: [
                                                            {
                                                                countryZhName: '阿富汗',
                                                                countryCode: 'Afghanistan',
                                                                geoCode: 'AFG',
                                                                areaCode: '93'
                                                            },
                                                            {
                                                                countryZhName: '阿尔巴尼亚',
                                                                countryCode: 'Albania',
                                                                geoCode: 'ALB',
                                                                areaCode: '355'
                                                            },
                                                            {
                                                                countryZhName: '阿尔及利亚',
                                                                countryCode: 'Algeria',
                                                                geoCode: 'DZA',
                                                                areaCode: '213'
                                                            },
                                                            {
                                                                countryZhName: '美属萨摩亚',
                                                                countryCode: 'American Samoa',
                                                                geoCode: 'ASM',
                                                                areaCode: '1684'
                                                            },
                                                            {
                                                                countryZhName: '安道尔',
                                                                countryCode: 'Andorra',
                                                                geoCode: 'AND',
                                                                areaCode: '376'
                                                            },
                                                            {
                                                                countryZhName: '安哥拉',
                                                                countryCode: 'Angola',
                                                                geoCode: 'AGO',
                                                                areaCode: '244'
                                                            },
                                                            {
                                                                countryZhName: '安圭拉',
                                                                countryCode: 'Anguilla',
                                                                geoCode: 'AI',
                                                                areaCode: '1264'
                                                            },
                                                            {
                                                                countryZhName: '南极洲',
                                                                countryCode: 'Antarctica',
                                                                geoCode: 'AQ',
                                                                areaCode: '672'
                                                            },
                                                            {
                                                                countryZhName: '安提瓜和巴布达',
                                                                countryCode: 'Antigua and Barbuda',
                                                                geoCode: 'ATG',
                                                                areaCode: '1268'
                                                            },
                                                            {
                                                                countryZhName: '阿根廷',
                                                                countryCode: 'Argentina',
                                                                geoCode: 'ARG',
                                                                areaCode: '54'
                                                            },
                                                            {
                                                                countryZhName: '亚美尼亚',
                                                                countryCode: 'Armenia',
                                                                geoCode: 'ARM',
                                                                areaCode: '374'
                                                            },
                                                            {
                                                                countryZhName: '阿鲁巴',
                                                                countryCode: 'Aruba',
                                                                geoCode: 'AW',
                                                                areaCode: '297'
                                                            },
                                                            {
                                                                countryZhName: '澳大利亚',
                                                                countryCode: 'Australia',
                                                                geoCode: 'AUS',
                                                                areaCode: '61'
                                                            },
                                                            {
                                                                countryZhName: '奥地利',
                                                                countryCode: 'Austria',
                                                                geoCode: 'AUT',
                                                                areaCode: '43'
                                                            },
                                                            {
                                                                countryZhName: '阿塞拜疆',
                                                                countryCode: 'Azerbaijan',
                                                                geoCode: 'AZE',
                                                                areaCode: '994'
                                                            },
                                                            {
                                                                countryZhName: '巴哈马',
                                                                countryCode: 'Bahamas',
                                                                geoCode: 'BHS',
                                                                areaCode: '1242'
                                                            },
                                                            {
                                                                countryZhName: '巴林',
                                                                countryCode: 'Bahrain',
                                                                geoCode: 'BHR',
                                                                areaCode: '973'
                                                            },
                                                            {
                                                                countryZhName: '孟加拉国',
                                                                countryCode: 'Bangladesh',
                                                                geoCode: 'BGD',
                                                                areaCode: '880'
                                                            },
                                                            {
                                                                countryZhName: '巴巴多斯',
                                                                countryCode: 'Barbados',
                                                                geoCode: 'BRB',
                                                                areaCode: '1246'
                                                            },
                                                            {
                                                                countryZhName: '白俄罗斯',
                                                                countryCode: 'Belarus',
                                                                geoCode: 'BLR',
                                                                areaCode: '375'
                                                            },
                                                            {
                                                                countryZhName: '比利时',
                                                                countryCode: 'Belgium',
                                                                geoCode: 'BEL',
                                                                areaCode: '32'
                                                            },
                                                            {
                                                                countryZhName: '伯利兹',
                                                                countryCode: 'Belize',
                                                                geoCode: 'BLZ',
                                                                areaCode: '501'
                                                            },
                                                            {
                                                                countryZhName: '贝宁',
                                                                countryCode: 'Benin',
                                                                geoCode: 'BEN',
                                                                areaCode: '229'
                                                            },
                                                            {
                                                                countryZhName: '百慕大',
                                                                countryCode: 'Bermuda',
                                                                geoCode: 'BMU',
                                                                areaCode: '1441'
                                                            },
                                                            {
                                                                countryZhName: '不丹',
                                                                countryCode: 'Bhutan',
                                                                geoCode: 'BTN',
                                                                areaCode: '975'
                                                            },
                                                            {
                                                                countryZhName: '玻利维亚',
                                                                countryCode: 'Bolivia',
                                                                geoCode: 'BOL',
                                                                areaCode: '591'
                                                            },
                                                            {
                                                                countryZhName: '波黑',
                                                                countryCode: 'Bosnia and Herzegovina',
                                                                geoCode: 'BIH',
                                                                areaCode: '387'
                                                            },
                                                            {
                                                                countryZhName: '博茨瓦纳',
                                                                countryCode: 'Botswana',
                                                                geoCode: 'BWA',
                                                                areaCode: '267'
                                                            },
                                                            {
                                                                countryZhName: '布韦岛',
                                                                countryCode: 'Bouvet Island',
                                                                geoCode: 'BV',
                                                                areaCode: '47'
                                                            },
                                                            {
                                                                countryZhName: '巴西',
                                                                countryCode: 'Brazil',
                                                                geoCode: 'BRA',
                                                                areaCode: '55'
                                                            },
                                                            {
                                                                countryZhName: '英属印度洋领地',
                                                                countryCode: 'British Indian Ocean Territory',
                                                                geoCode: 'IO',
                                                                areaCode: '44'
                                                            },
                                                            {
                                                                countryZhName: '英属维尔京群岛',
                                                                countryCode: 'British Virgin Islands',
                                                                geoCode: 'VGB',
                                                                areaCode: '1284'
                                                            },
                                                            {
                                                                countryZhName: '文莱',
                                                                countryCode: 'Brunei Darussalam',
                                                                geoCode: 'BRN',
                                                                areaCode: '673'
                                                            },
                                                            {
                                                                countryZhName: '保加利亚',
                                                                countryCode: 'Bulgaria',
                                                                geoCode: 'BGR',
                                                                areaCode: '359'
                                                            },
                                                            {
                                                                countryZhName: '布基纳法索',
                                                                countryCode: 'Burkina Faso',
                                                                geoCode: 'BFA',
                                                                areaCode: '226'
                                                            },
                                                            {
                                                                countryZhName: '布隆迪',
                                                                countryCode: 'Burundi',
                                                                geoCode: 'BDI',
                                                                areaCode: '257'
                                                            },
                                                            {
                                                                countryZhName: '佛得角',
                                                                countryCode: 'Cabo Verde',
                                                                geoCode: 'CPV',
                                                                areaCode: '238'
                                                            },
                                                            {
                                                                countryZhName: '柬埔寨',
                                                                countryCode: 'Cambodia',
                                                                geoCode: 'KHM',
                                                                areaCode: '855'
                                                            },
                                                            {
                                                                countryZhName: '喀麦隆',
                                                                countryCode: 'Cameroon',
                                                                geoCode: 'CMR',
                                                                areaCode: '237'
                                                            },
                                                            {
                                                                countryZhName: '加拿大',
                                                                countryCode: 'Canada',
                                                                geoCode: 'CAN',
                                                                areaCode: '1'
                                                            },
                                                            {
                                                                countryZhName: '开曼群岛',
                                                                countryCode: 'Cayman Islands',
                                                                geoCode: 'CYM',
                                                                areaCode: '1345'
                                                            },
                                                            {
                                                                countryZhName: '中非',
                                                                countryCode: 'Central African Republic',
                                                                geoCode: 'CAF',
                                                                areaCode: '236'
                                                            },
                                                            {
                                                                countryZhName: '乍得',
                                                                countryCode: 'Chad',
                                                                geoCode: 'TCD',
                                                                areaCode: '235'
                                                            },
                                                            {
                                                                countryZhName: '智利',
                                                                countryCode: 'Chile',
                                                                geoCode: 'CHL',
                                                                areaCode: '56'
                                                            },
                                                            {
                                                                countryZhName: '中国大陆',
                                                                countryCode: 'China',
                                                                geoCode: 'CN',
                                                                areaCode: '86'
                                                            },
                                                            {
                                                                countryZhName: '圣诞岛',
                                                                countryCode: 'Christmas Island',
                                                                geoCode: 'CX',
                                                                areaCode: '61'
                                                            },
                                                            {
                                                                countryZhName: '科科斯（基林）群岛',
                                                                countryCode: 'Cocos (Keeling) Islands',
                                                                geoCode: 'CC',
                                                                areaCode: '61'
                                                            },
                                                            {
                                                                countryZhName: '哥伦比亚',
                                                                countryCode: 'Colombia',
                                                                geoCode: 'COL',
                                                                areaCode: '57'
                                                            },
                                                            {
                                                                countryZhName: '科摩罗',
                                                                countryCode: 'Comoros',
                                                                geoCode: 'COM',
                                                                areaCode: '269'
                                                            },
                                                            {
                                                                countryZhName: '刚果共和国',
                                                                countryCode: 'Congo',
                                                                geoCode: 'COG',
                                                                areaCode: '242'
                                                            },
                                                            {
                                                                countryZhName: '库克群岛',
                                                                countryCode: 'Cook Islands',
                                                                geoCode: 'CK',
                                                                areaCode: '682'
                                                            },
                                                            {
                                                                countryZhName: '哥斯达黎加',
                                                                countryCode: 'Costa Rica',
                                                                geoCode: 'CRI',
                                                                areaCode: '506'
                                                            },
                                                            {
                                                                countryZhName: '克罗地亚',
                                                                countryCode: 'Croatia',
                                                                geoCode: 'HRV',
                                                                areaCode: '385'
                                                            },
                                                            {
                                                                countryZhName: '古巴',
                                                                countryCode: 'Cuba',
                                                                geoCode: 'CUB',
                                                                areaCode: '53'
                                                            },
                                                            {
                                                                countryZhName: '库拉索',
                                                                countryCode: 'Curaçao',
                                                                geoCode: 'CW',
                                                                areaCode: '599'
                                                            },
                                                            {
                                                                countryZhName: '塞浦路斯',
                                                                countryCode: 'Cyprus',
                                                                geoCode: 'CYP',
                                                                areaCode: '357'
                                                            },
                                                            {
                                                                countryZhName: '捷克',
                                                                countryCode: 'Czechia',
                                                                geoCode: 'CZE',
                                                                areaCode: '420'
                                                            },
                                                            {
                                                                countryZhName: '科特迪瓦',
                                                                countryCode: "Côte d'Ivoire",
                                                                geoCode: 'CIV',
                                                                areaCode: '225'
                                                            },
                                                            {
                                                                countryZhName: '丹麦',
                                                                countryCode: 'Denmark',
                                                                geoCode: 'DNK',
                                                                areaCode: '45'
                                                            },
                                                            {
                                                                countryZhName: '吉布提',
                                                                countryCode: 'Djibouti',
                                                                geoCode: 'DJI',
                                                                areaCode: '253'
                                                            },
                                                            {
                                                                countryZhName: '多米尼克',
                                                                countryCode: 'Dominica',
                                                                geoCode: 'DMA',
                                                                areaCode: '1767'
                                                            },
                                                            {
                                                                countryZhName: '多米尼加',
                                                                countryCode: 'Dominican Republic',
                                                                geoCode: 'DOM',
                                                                areaCode: '1809'
                                                            },
                                                            {
                                                                countryZhName: '东帝汶',
                                                                countryCode: 'East Timor',
                                                                geoCode: 'TLS',
                                                                areaCode: '670'
                                                            },
                                                            {
                                                                countryZhName: '厄瓜多尔',
                                                                countryCode: 'Ecuador',
                                                                geoCode: 'ECU',
                                                                areaCode: '593'
                                                            },
                                                            {
                                                                countryZhName: '埃及',
                                                                countryCode: 'Egypt',
                                                                geoCode: 'EGY',
                                                                areaCode: '20'
                                                            },
                                                            {
                                                                countryZhName: '萨尔瓦多',
                                                                countryCode: 'El Salvador',
                                                                geoCode: 'SLV',
                                                                areaCode: '503'
                                                            },
                                                            {
                                                                countryZhName: '赤道几内亚',
                                                                countryCode: 'Equatorial Guinea',
                                                                geoCode: 'GNQ',
                                                                areaCode: '240'
                                                            },
                                                            {
                                                                countryZhName: '厄立特里亚',
                                                                countryCode: 'Eritrea',
                                                                geoCode: 'ERI',
                                                                areaCode: '291'
                                                            },
                                                            {
                                                                countryZhName: '爱沙尼亚',
                                                                countryCode: 'Estonia',
                                                                geoCode: 'EST',
                                                                areaCode: '372'
                                                            },
                                                            {
                                                                countryZhName: '斯威士兰',
                                                                countryCode: 'Eswatini',
                                                                geoCode: 'SWZ',
                                                                areaCode: '268'
                                                            },
                                                            {
                                                                countryZhName: '埃塞俄比亚',
                                                                countryCode: 'Ethiopia',
                                                                geoCode: 'ETH',
                                                                areaCode: '251'
                                                            },
                                                            {
                                                                countryZhName: '福克兰群岛',
                                                                countryCode: 'Falkland Islands',
                                                                geoCode: 'FK',
                                                                areaCode: '500'
                                                            },
                                                            {
                                                                countryZhName: '法罗群岛',
                                                                countryCode: 'Faroe Islands',
                                                                geoCode: 'FRO',
                                                                areaCode: '298'
                                                            },
                                                            {
                                                                countryZhName: '斐济',
                                                                countryCode: 'Fiji',
                                                                geoCode: 'FJI',
                                                                areaCode: '679'
                                                            },
                                                            {
                                                                countryZhName: '芬兰',
                                                                countryCode: 'Finland',
                                                                geoCode: 'FIN',
                                                                areaCode: '358'
                                                            },
                                                            {
                                                                countryZhName: '法国',
                                                                countryCode: 'France',
                                                                geoCode: 'FRA',
                                                                areaCode: '33'
                                                            },
                                                            {
                                                                countryZhName: '法属圭亚那',
                                                                countryCode: 'French Guiana',
                                                                geoCode: 'GUF',
                                                                areaCode: '594'
                                                            },
                                                            {
                                                                countryZhName: '法属波利尼西亚',
                                                                countryCode: 'French Polynesia',
                                                                geoCode: 'PYF',
                                                                areaCode: '689'
                                                            },
                                                            {
                                                                countryZhName: '加蓬',
                                                                countryCode: 'Gabon',
                                                                geoCode: 'GAB',
                                                                areaCode: '241'
                                                            },
                                                            {
                                                                countryZhName: '冈比亚',
                                                                countryCode: 'Gambia',
                                                                geoCode: 'GMB',
                                                                areaCode: '220'
                                                            },
                                                            {
                                                                countryZhName: '格鲁吉亚',
                                                                countryCode: 'Georgia',
                                                                geoCode: 'GEO',
                                                                areaCode: '995'
                                                            },
                                                            {
                                                                countryZhName: '德国',
                                                                countryCode: 'Germany',
                                                                geoCode: 'DEU',
                                                                areaCode: '49'
                                                            },
                                                            {
                                                                countryZhName: '加纳',
                                                                countryCode: 'Ghana',
                                                                geoCode: 'GHA',
                                                                areaCode: '233'
                                                            },
                                                            {
                                                                countryZhName: '直布罗陀',
                                                                countryCode: 'Gibraltar',
                                                                geoCode: 'GI',
                                                                areaCode: '350'
                                                            },
                                                            {
                                                                countryZhName: '希腊',
                                                                countryCode: 'Greece',
                                                                geoCode: 'GRC',
                                                                areaCode: '30'
                                                            },
                                                            {
                                                                countryZhName: '格陵兰',
                                                                countryCode: 'Greenland',
                                                                geoCode: 'GRL',
                                                                areaCode: '299'
                                                            },
                                                            {
                                                                countryZhName: '格林纳达',
                                                                countryCode: 'Grenada',
                                                                geoCode: 'GRD',
                                                                areaCode: '1473'
                                                            },
                                                            {
                                                                countryZhName: '瓜德罗普',
                                                                countryCode: 'Guadeloupe',
                                                                geoCode: 'GLP',
                                                                areaCode: '590'
                                                            },
                                                            {
                                                                countryZhName: '关岛',
                                                                countryCode: 'Guam',
                                                                geoCode: 'GUM',
                                                                areaCode: '1671'
                                                            },
                                                            {
                                                                countryZhName: '危地马拉',
                                                                countryCode: 'Guatemala',
                                                                geoCode: 'GTM',
                                                                areaCode: '502'
                                                            },
                                                            {
                                                                countryZhName: '根西',
                                                                countryCode: 'Guernsey',
                                                                geoCode: 'GGY',
                                                                areaCode: '1481'
                                                            },
                                                            {
                                                                countryZhName: '几内亚',
                                                                countryCode: 'Guinea',
                                                                geoCode: 'GIN',
                                                                areaCode: '224'
                                                            },
                                                            {
                                                                countryZhName: '几内亚比绍',
                                                                countryCode: 'Guinea-Bissau',
                                                                geoCode: 'GNB',
                                                                areaCode: '245'
                                                            },
                                                            {
                                                                countryZhName: '圭亚那',
                                                                countryCode: 'Guyana',
                                                                geoCode: 'GUY',
                                                                areaCode: '592'
                                                            },
                                                            {
                                                                countryZhName: '海地',
                                                                countryCode: 'Haiti',
                                                                geoCode: 'HTI',
                                                                areaCode: '509'
                                                            },
                                                            {
                                                                countryZhName: '洪都拉斯',
                                                                countryCode: 'Honduras',
                                                                geoCode: 'HND',
                                                                areaCode: '504'
                                                            },
                                                            {
                                                                countryZhName: '香港（中国）',
                                                                countryCode: 'Hong Kong (China)',
                                                                geoCode: 'HK',
                                                                areaCode: '852'
                                                            },
                                                            {
                                                                countryZhName: '匈牙利',
                                                                countryCode: 'Hungary',
                                                                geoCode: 'HUN',
                                                                areaCode: '36'
                                                            },
                                                            {
                                                                countryZhName: '冰岛',
                                                                countryCode: 'Iceland',
                                                                geoCode: 'ISL',
                                                                areaCode: '354'
                                                            },
                                                            {
                                                                countryZhName: '印度',
                                                                countryCode: 'India',
                                                                geoCode: 'IND',
                                                                areaCode: '91'
                                                            },
                                                            {
                                                                countryZhName: '印尼',
                                                                countryCode: 'Indonesia',
                                                                geoCode: 'IDN',
                                                                areaCode: '62'
                                                            },
                                                            {
                                                                countryZhName: '伊朗',
                                                                countryCode: 'Iran',
                                                                geoCode: 'IRN',
                                                                areaCode: '98'
                                                            },
                                                            {
                                                                countryZhName: '伊拉克',
                                                                countryCode: 'Iraq',
                                                                geoCode: 'IRQ',
                                                                areaCode: '964'
                                                            },
                                                            {
                                                                countryZhName: '爱尔兰',
                                                                countryCode: 'Ireland',
                                                                geoCode: 'IRL',
                                                                areaCode: '353'
                                                            },
                                                            {
                                                                countryZhName: '马恩岛',
                                                                countryCode: 'Isle of Man',
                                                                geoCode: 'IMN',
                                                                areaCode: '44'
                                                            },
                                                            {
                                                                countryZhName: '以色列',
                                                                countryCode: 'Israel',
                                                                geoCode: 'ISR',
                                                                areaCode: '972'
                                                            },
                                                            {
                                                                countryZhName: '意大利',
                                                                countryCode: 'Italy',
                                                                geoCode: 'ITA',
                                                                areaCode: '39'
                                                            },
                                                            {
                                                                countryZhName: '牙买加',
                                                                countryCode: 'Jamaica',
                                                                geoCode: 'JAM',
                                                                areaCode: '1876'
                                                            },
                                                            {
                                                                countryZhName: '日本',
                                                                countryCode: 'Japan',
                                                                geoCode: 'JPN',
                                                                areaCode: '81'
                                                            },
                                                            {
                                                                countryZhName: '泽西',
                                                                countryCode: 'Jersey',
                                                                geoCode: 'JEY',
                                                                areaCode: '44'
                                                            },
                                                            {
                                                                countryZhName: '约旦',
                                                                countryCode: 'Jordan',
                                                                geoCode: 'JOR',
                                                                areaCode: '962'
                                                            },
                                                            {
                                                                countryZhName: '哈萨克斯坦',
                                                                countryCode: 'Kazakhstan',
                                                                geoCode: 'KAZ',
                                                                areaCode: '73'
                                                            },
                                                            {
                                                                countryZhName: '肯尼亚',
                                                                countryCode: 'Kenya',
                                                                geoCode: 'KEN',
                                                                areaCode: '254'
                                                            },
                                                            {
                                                                countryZhName: '基里巴斯',
                                                                countryCode: 'Kiribati',
                                                                geoCode: 'KI',
                                                                areaCode: '686'
                                                            },
                                                            {
                                                                countryZhName: '科威特',
                                                                countryCode: 'Kuwait',
                                                                geoCode: 'KWT',
                                                                areaCode: '965'
                                                            },
                                                            {
                                                                countryZhName: '吉尔吉斯斯坦',
                                                                countryCode: 'Kyrgyzstan',
                                                                geoCode: 'KGZ',
                                                                areaCode: '996'
                                                            },
                                                            {
                                                                countryZhName: '老挝',
                                                                countryCode: 'Laos',
                                                                geoCode: 'LAO',
                                                                areaCode: '856'
                                                            },
                                                            {
                                                                countryZhName: '拉脱维亚',
                                                                countryCode: 'Latvia',
                                                                geoCode: 'LVA',
                                                                areaCode: '371'
                                                            },
                                                            {
                                                                countryZhName: '黎巴嫩',
                                                                countryCode: 'Lebanon',
                                                                geoCode: 'LBN',
                                                                areaCode: '961'
                                                            },
                                                            {
                                                                countryZhName: '莱索托',
                                                                countryCode: 'Lesotho',
                                                                geoCode: 'LSO',
                                                                areaCode: '266'
                                                            },
                                                            {
                                                                countryZhName: '利比里亚',
                                                                countryCode: 'Liberia',
                                                                geoCode: 'LBR',
                                                                areaCode: '231'
                                                            },
                                                            {
                                                                countryZhName: '利比亚',
                                                                countryCode: 'Libya',
                                                                geoCode: 'LBY',
                                                                areaCode: '218'
                                                            },
                                                            {
                                                                countryZhName: '列支敦士登',
                                                                countryCode: 'Liechtenstein',
                                                                geoCode: 'LIE',
                                                                areaCode: '423'
                                                            },
                                                            {
                                                                countryZhName: '立陶宛',
                                                                countryCode: 'Lithuania',
                                                                geoCode: 'LTU',
                                                                areaCode: '370'
                                                            },
                                                            {
                                                                countryZhName: '卢森堡',
                                                                countryCode: 'Luxembourg',
                                                                geoCode: 'LUX',
                                                                areaCode: '352'
                                                            },
                                                            {
                                                                countryZhName: '澳门（中国）',
                                                                countryCode: 'Macao (China)',
                                                                geoCode: 'MA',
                                                                areaCode: '853'
                                                            },
                                                            {
                                                                countryZhName: '马达加斯加',
                                                                countryCode: 'Madagascar',
                                                                geoCode: 'MDG',
                                                                areaCode: '261'
                                                            },
                                                            {
                                                                countryZhName: '马拉维',
                                                                countryCode: 'Malawi',
                                                                geoCode: 'MWI',
                                                                areaCode: '265'
                                                            },
                                                            {
                                                                countryZhName: '马来西亚',
                                                                countryCode: 'Malaysia',
                                                                geoCode: 'MYS',
                                                                areaCode: '60'
                                                            },
                                                            {
                                                                countryZhName: '马尔代夫',
                                                                countryCode: 'Maldives',
                                                                geoCode: 'MV',
                                                                areaCode: '960'
                                                            },
                                                            {
                                                                countryZhName: '马里',
                                                                countryCode: 'Mali',
                                                                geoCode: 'MLI',
                                                                areaCode: '223'
                                                            },
                                                            {
                                                                countryZhName: '马耳他',
                                                                countryCode: 'Malta',
                                                                geoCode: 'MLT',
                                                                areaCode: '356'
                                                            },
                                                            {
                                                                countryZhName: '马绍尔群岛',
                                                                countryCode: 'Marshall Islands',
                                                                geoCode: 'MH',
                                                                areaCode: '692'
                                                            },
                                                            {
                                                                countryZhName: '马提尼克',
                                                                countryCode: 'Martinique',
                                                                geoCode: 'MTQ',
                                                                areaCode: '596'
                                                            },
                                                            {
                                                                countryZhName: '毛里塔尼亚',
                                                                countryCode: 'Mauritania',
                                                                geoCode: 'MRT',
                                                                areaCode: '222'
                                                            },
                                                            {
                                                                countryZhName: '毛里求斯',
                                                                countryCode: 'Mauritius',
                                                                geoCode: 'MUS',
                                                                areaCode: '230'
                                                            },
                                                            {
                                                                countryZhName: '马约特',
                                                                countryCode: 'Mayotte',
                                                                geoCode: 'MYT',
                                                                areaCode: '269'
                                                            },
                                                            {
                                                                countryZhName: '墨西哥',
                                                                countryCode: 'Mexico',
                                                                geoCode: 'MEX',
                                                                areaCode: '52'
                                                            },
                                                            {
                                                                countryZhName: '摩纳哥',
                                                                countryCode: 'Monaco',
                                                                geoCode: 'MC',
                                                                areaCode: '377'
                                                            },
                                                            {
                                                                countryZhName: '蒙古',
                                                                countryCode: 'Mongolia',
                                                                geoCode: 'MNG',
                                                                areaCode: '976'
                                                            },
                                                            {
                                                                countryZhName: '黑山',
                                                                countryCode: 'Montenegro',
                                                                geoCode: 'MNE',
                                                                areaCode: '382'
                                                            },
                                                            {
                                                                countryZhName: '蒙特塞拉特',
                                                                countryCode: 'Montserrat',
                                                                geoCode: 'MSR',
                                                                areaCode: '1664'
                                                            },
                                                            {
                                                                countryZhName: '摩洛哥',
                                                                countryCode: 'Morocco',
                                                                geoCode: 'MAR',
                                                                areaCode: '212'
                                                            },
                                                            {
                                                                countryZhName: '莫桑比克',
                                                                countryCode: 'Mozambique',
                                                                geoCode: 'MOZ',
                                                                areaCode: '258'
                                                            },
                                                            {
                                                                countryZhName: '缅甸',
                                                                countryCode: 'Myanmar',
                                                                geoCode: 'MMR',
                                                                areaCode: '95'
                                                            },
                                                            {
                                                                countryZhName: '纳米比亚',
                                                                countryCode: 'Namibia',
                                                                geoCode: 'NAM',
                                                                areaCode: '264'
                                                            },
                                                            {
                                                                countryZhName: '瑙鲁',
                                                                countryCode: 'Nauru',
                                                                geoCode: 'NRU',
                                                                areaCode: '674'
                                                            },
                                                            {
                                                                countryZhName: '尼泊尔',
                                                                countryCode: 'Nepal',
                                                                geoCode: 'NPL',
                                                                areaCode: '977'
                                                            },
                                                            {
                                                                countryZhName: '荷兰',
                                                                countryCode: 'Netherlands',
                                                                geoCode: 'NLD',
                                                                areaCode: '31'
                                                            },
                                                            {
                                                                countryZhName: '新喀里多尼亚',
                                                                countryCode: 'New Caledonia',
                                                                geoCode: 'NCL',
                                                                areaCode: '687'
                                                            },
                                                            {
                                                                countryZhName: '新西兰',
                                                                countryCode: 'New Zealand',
                                                                geoCode: 'NZL',
                                                                areaCode: '64'
                                                            },
                                                            {
                                                                countryZhName: '尼加拉瓜',
                                                                countryCode: 'Nicaragua',
                                                                geoCode: 'NIC',
                                                                areaCode: '505'
                                                            },
                                                            {
                                                                countryZhName: '尼日尔',
                                                                countryCode: 'Niger',
                                                                geoCode: 'NER',
                                                                areaCode: '227'
                                                            },
                                                            {
                                                                countryZhName: '尼日利亚',
                                                                countryCode: 'Nigeria',
                                                                geoCode: 'NGA',
                                                                areaCode: '234'
                                                            },
                                                            {
                                                                countryZhName: '纽埃',
                                                                countryCode: 'Niue',
                                                                geoCode: 'NU',
                                                                areaCode: '683'
                                                            },
                                                            {
                                                                countryZhName: '诺福克岛',
                                                                countryCode: 'Norfolk Island',
                                                                geoCode: 'NF',
                                                                areaCode: '6723'
                                                            },
                                                            {
                                                                countryZhName: '朝鲜',
                                                                countryCode: 'North Korea',
                                                                geoCode: 'PRK',
                                                                areaCode: '850'
                                                            },
                                                            {
                                                                countryZhName: '北马其顿',
                                                                countryCode: 'North Macedonia',
                                                                geoCode: 'MKD',
                                                                areaCode: '389'
                                                            },
                                                            {
                                                                countryZhName: '北马里亚纳群岛',
                                                                countryCode: 'Northern Mariana Islands',
                                                                geoCode: 'MNP',
                                                                areaCode: '1670'
                                                            },
                                                            {
                                                                countryZhName: '挪威',
                                                                countryCode: 'Norway',
                                                                geoCode: 'NOR',
                                                                areaCode: '47'
                                                            },
                                                            {
                                                                countryZhName: '阿曼',
                                                                countryCode: 'Oman',
                                                                geoCode: 'OMN',
                                                                areaCode: '968'
                                                            },
                                                            {
                                                                countryZhName: '巴基斯坦',
                                                                countryCode: 'Pakistan',
                                                                geoCode: 'PAK',
                                                                areaCode: '92'
                                                            },
                                                            {
                                                                countryZhName: '帕劳',
                                                                countryCode: 'Palau',
                                                                geoCode: 'PLW',
                                                                areaCode: '680'
                                                            },
                                                            {
                                                                countryZhName: '巴拿马',
                                                                countryCode: 'Panama',
                                                                geoCode: 'PAN',
                                                                areaCode: '507'
                                                            },
                                                            {
                                                                countryZhName: '巴布亚新几内亚',
                                                                countryCode: 'Papua New Guinea',
                                                                geoCode: 'PNG',
                                                                areaCode: '675'
                                                            },
                                                            {
                                                                countryZhName: '巴拉圭',
                                                                countryCode: 'Paraguay',
                                                                geoCode: 'PRY',
                                                                areaCode: '595'
                                                            },
                                                            {
                                                                countryZhName: '秘鲁',
                                                                countryCode: 'Peru',
                                                                geoCode: 'PER',
                                                                areaCode: '51'
                                                            },
                                                            {
                                                                countryZhName: '菲律宾',
                                                                countryCode: 'Philippines',
                                                                geoCode: 'PHL',
                                                                areaCode: '63'
                                                            },
                                                            {
                                                                countryZhName: '波兰',
                                                                countryCode: 'Poland',
                                                                geoCode: 'POL',
                                                                areaCode: '48'
                                                            },
                                                            {
                                                                countryZhName: '葡萄牙',
                                                                countryCode: 'Portugal',
                                                                geoCode: 'PRT',
                                                                areaCode: '351'
                                                            },
                                                            {
                                                                countryZhName: '波多黎各',
                                                                countryCode: 'Puerto Rico',
                                                                geoCode: 'PRI',
                                                                areaCode: '1787'
                                                            },
                                                            {
                                                                countryZhName: '卡塔尔',
                                                                countryCode: 'Qatar',
                                                                geoCode: 'QAT',
                                                                areaCode: '974'
                                                            },
                                                            {
                                                                countryZhName: '摩尔多瓦',
                                                                countryCode: 'Republic of Moldova',
                                                                geoCode: 'MDA',
                                                                areaCode: '373'
                                                            },
                                                            {
                                                                countryZhName: '罗马尼亚',
                                                                countryCode: 'Romania',
                                                                geoCode: 'ROU',
                                                                areaCode: '40'
                                                            },
                                                            {
                                                                countryZhName: '俄罗斯',
                                                                countryCode: 'Russia',
                                                                geoCode: 'RUS',
                                                                areaCode: '7'
                                                            },
                                                            {
                                                                countryZhName: '卢旺达',
                                                                countryCode: 'Rwanda',
                                                                geoCode: 'RWA',
                                                                areaCode: '250'
                                                            },
                                                            {
                                                                countryZhName: '留尼汪',
                                                                countryCode: 'Réunion',
                                                                geoCode: 'REU',
                                                                areaCode: '262'
                                                            },
                                                            {
                                                                countryZhName: '圣赫勒拿、阿森松和特里斯坦-达库尼亚',
                                                                countryCode:
                                                                    'Saint Helena, Ascension and Tristan da Cunha',
                                                                geoCode: 'SHN',
                                                                areaCode: '290'
                                                            },
                                                            {
                                                                countryZhName: '圣基茨和尼维斯',
                                                                countryCode: 'Saint Kitts and Nevis',
                                                                geoCode: 'KNA',
                                                                areaCode: '1869'
                                                            },
                                                            {
                                                                countryZhName: '圣卢西亚',
                                                                countryCode: 'Saint Lucia',
                                                                geoCode: 'LCA',
                                                                areaCode: '1758'
                                                            },
                                                            {
                                                                countryZhName: '圣皮埃尔和密克隆',
                                                                countryCode: 'Saint Pierre and Miquelon',
                                                                geoCode: 'SPM',
                                                                areaCode: '508'
                                                            },
                                                            {
                                                                countryZhName: '圣文森特和格林纳丁斯',
                                                                countryCode: 'Saint Vincent and the Grenadines',
                                                                geoCode: 'VCT',
                                                                areaCode: '1784'
                                                            },
                                                            {
                                                                countryZhName: '萨摩亚',
                                                                countryCode: 'Samoa',
                                                                geoCode: 'WSM',
                                                                areaCode: '685'
                                                            },
                                                            {
                                                                countryZhName: '圣马力诺',
                                                                countryCode: 'San Marino',
                                                                geoCode: 'SMR',
                                                                areaCode: '378'
                                                            },
                                                            {
                                                                countryZhName: '沙特阿拉伯',
                                                                countryCode: 'Saudi Arabia',
                                                                geoCode: 'SAU',
                                                                areaCode: '966'
                                                            },
                                                            {
                                                                countryZhName: '塞内加尔',
                                                                countryCode: 'Senegal',
                                                                geoCode: 'SEN',
                                                                areaCode: '221'
                                                            },
                                                            {
                                                                countryZhName: '塞尔维亚',
                                                                countryCode: 'Serbia',
                                                                geoCode: 'SRB',
                                                                areaCode: '381'
                                                            },
                                                            {
                                                                countryZhName: '塞舌尔',
                                                                countryCode: 'Seychelles',
                                                                geoCode: 'SYC',
                                                                areaCode: '248'
                                                            },
                                                            {
                                                                countryZhName: '塞拉利昂',
                                                                countryCode: 'Sierra Leone',
                                                                geoCode: 'SLE',
                                                                areaCode: '232'
                                                            },
                                                            {
                                                                countryZhName: '新加坡',
                                                                countryCode: 'Singapore',
                                                                geoCode: 'SGP',
                                                                areaCode: '65'
                                                            },
                                                            {
                                                                countryZhName: '斯洛伐克',
                                                                countryCode: 'Slovakia',
                                                                geoCode: 'SVK',
                                                                areaCode: '421'
                                                            },
                                                            {
                                                                countryZhName: '斯洛文尼亚',
                                                                countryCode: 'Slovenia',
                                                                geoCode: 'SVN',
                                                                areaCode: '386'
                                                            },
                                                            {
                                                                countryZhName: '所罗门群岛',
                                                                countryCode: 'Solomon Islands',
                                                                geoCode: 'SLB',
                                                                areaCode: '677'
                                                            },
                                                            {
                                                                countryZhName: '索马里',
                                                                countryCode: 'Somalia',
                                                                geoCode: 'SOM',
                                                                areaCode: '252'
                                                            },
                                                            {
                                                                countryZhName: '南非',
                                                                countryCode: 'South Africa',
                                                                geoCode: 'ZAF',
                                                                areaCode: '27'
                                                            },
                                                            {
                                                                countryZhName: '韩国',
                                                                countryCode: 'South Korea',
                                                                geoCode: 'KOR',
                                                                areaCode: '82'
                                                            },
                                                            {
                                                                countryZhName: '南苏丹',
                                                                countryCode: 'South Sudan',
                                                                geoCode: 'SSD',
                                                                areaCode: '211'
                                                            },
                                                            {
                                                                countryZhName: '西班牙',
                                                                countryCode: 'Spain',
                                                                geoCode: 'ESP',
                                                                areaCode: '34'
                                                            },
                                                            {
                                                                countryZhName: '斯里兰卡',
                                                                countryCode: 'Sri Lanka',
                                                                geoCode: 'LKA',
                                                                areaCode: '94'
                                                            },
                                                            {
                                                                countryZhName: '巴勒斯坦',
                                                                countryCode: 'State of Palestine',
                                                                geoCode: 'PSE',
                                                                areaCode: '970'
                                                            },
                                                            {
                                                                countryZhName: '苏丹',
                                                                countryCode: 'Sudan',
                                                                geoCode: 'SDN',
                                                                areaCode: '249'
                                                            },
                                                            {
                                                                countryZhName: '苏里南',
                                                                countryCode: 'Suriname',
                                                                geoCode: 'SUR',
                                                                areaCode: '597'
                                                            },
                                                            {
                                                                countryZhName: '斯瓦尔巴和扬马延',
                                                                countryCode: 'Svalbard and Jan Mayen',
                                                                geoCode: 'SJM',
                                                                areaCode: '47'
                                                            },
                                                            {
                                                                countryZhName: '瑞典',
                                                                countryCode: 'Sweden',
                                                                geoCode: 'SWE',
                                                                areaCode: '46'
                                                            },
                                                            {
                                                                countryZhName: '瑞士',
                                                                countryCode: 'Switzerland',
                                                                geoCode: 'CHE',
                                                                areaCode: '41'
                                                            },
                                                            {
                                                                countryZhName: '叙利亚',
                                                                countryCode: 'Syria',
                                                                geoCode: 'SYR',
                                                                areaCode: '963'
                                                            },
                                                            {
                                                                countryZhName: '圣多美和普林西比',
                                                                countryCode: 'São Tomé and Príncipe',
                                                                geoCode: 'STP',
                                                                areaCode: '239'
                                                            },
                                                            {
                                                                countryZhName: '台湾（中国）',
                                                                countryCode: 'Taiwan (China)',
                                                                geoCode: 'TW',
                                                                areaCode: '886'
                                                            },
                                                            {
                                                                countryZhName: '塔吉克斯坦',
                                                                countryCode: 'Tajikistan',
                                                                geoCode: 'TJK',
                                                                areaCode: '992'
                                                            },
                                                            {
                                                                countryZhName: '坦桑尼亚',
                                                                countryCode: 'Tanzania',
                                                                geoCode: 'TZA',
                                                                areaCode: '255'
                                                            },
                                                            {
                                                                countryZhName: '泰国',
                                                                countryCode: 'Thailand',
                                                                geoCode: 'THA',
                                                                areaCode: '66'
                                                            },
                                                            {
                                                                countryZhName: '刚果民主共和国',
                                                                countryCode: 'The Democratic Republic of the Congo',
                                                                geoCode: 'COD',
                                                                areaCode: '243'
                                                            },
                                                            {
                                                                countryZhName: '密克罗尼西亚联邦',
                                                                countryCode: 'The Federated States of Micronesia',
                                                                geoCode: 'FSM',
                                                                areaCode: '691'
                                                            },
                                                            {
                                                                countryZhName: '多哥',
                                                                countryCode: 'Togo',
                                                                geoCode: 'TGO',
                                                                areaCode: '228'
                                                            },
                                                            {
                                                                countryZhName: '托克劳',
                                                                countryCode: 'Tokelau',
                                                                geoCode: 'TKL',
                                                                areaCode: '690'
                                                            },
                                                            {
                                                                countryZhName: '汤加',
                                                                countryCode: 'Tonga',
                                                                geoCode: 'TON',
                                                                areaCode: '676'
                                                            },
                                                            {
                                                                countryZhName: '特立尼达和多巴哥',
                                                                countryCode: 'Trinidad and Tobago',
                                                                geoCode: 'TTO',
                                                                areaCode: '1868'
                                                            },
                                                            {
                                                                countryZhName: '突尼斯',
                                                                countryCode: 'Tunisia',
                                                                geoCode: 'TUN',
                                                                areaCode: '216'
                                                            },
                                                            {
                                                                countryZhName: '土耳其',
                                                                countryCode: 'Turkey',
                                                                geoCode: 'TUR',
                                                                areaCode: '90'
                                                            },
                                                            {
                                                                countryZhName: '土库曼斯坦',
                                                                countryCode: 'Turkmenistan',
                                                                geoCode: 'TKM',
                                                                areaCode: '993'
                                                            },
                                                            {
                                                                countryZhName: '特克斯和凯科斯群岛',
                                                                countryCode: 'Turks and Caicos Islands',
                                                                geoCode: 'TCA',
                                                                areaCode: '1649'
                                                            },
                                                            {
                                                                countryZhName: '图瓦卢',
                                                                countryCode: 'Tuvalu',
                                                                geoCode: 'TUV',
                                                                areaCode: '688'
                                                            },
                                                            {
                                                                countryZhName: '乌干达',
                                                                countryCode: 'Uganda',
                                                                geoCode: 'UGA',
                                                                areaCode: '256'
                                                            },
                                                            {
                                                                countryZhName: '乌克兰',
                                                                countryCode: 'Ukraine',
                                                                geoCode: 'UKR',
                                                                areaCode: '380'
                                                            },
                                                            {
                                                                countryZhName: '阿联酋',
                                                                countryCode: 'United Arab Emirates',
                                                                geoCode: 'ARE',
                                                                areaCode: '971'
                                                            },
                                                            {
                                                                countryZhName: '英国',
                                                                countryCode: 'United Kingdom',
                                                                geoCode: 'GBR',
                                                                areaCode: '44'
                                                            },
                                                            {
                                                                countryZhName: '美国本土外小岛屿',
                                                                countryCode: 'United States Minor Outlying Islands',
                                                                geoCode: 'UMI',
                                                                areaCode: '1'
                                                            },
                                                            {
                                                                countryZhName: '美国',
                                                                countryCode: 'United States of America',
                                                                geoCode: 'USA',
                                                                areaCode: '1'
                                                            },
                                                            {
                                                                countryZhName: '美属维尔京群岛',
                                                                countryCode: 'United States Virgin Islands',
                                                                geoCode: 'VIR',
                                                                areaCode: '1340'
                                                            },
                                                            {
                                                                countryZhName: '乌拉圭',
                                                                countryCode: 'Uruguay',
                                                                geoCode: 'URY',
                                                                areaCode: '598'
                                                            },
                                                            {
                                                                countryZhName: '乌兹别克斯坦',
                                                                countryCode: 'Uzbekistan',
                                                                geoCode: 'UZB',
                                                                areaCode: '998'
                                                            },
                                                            {
                                                                countryZhName: '瓦努阿图',
                                                                countryCode: 'Vanuatu',
                                                                geoCode: 'VUT',
                                                                areaCode: '678'
                                                            },
                                                            {
                                                                countryZhName: '梵蒂冈',
                                                                countryCode: 'Vatican City State',
                                                                geoCode: 'VA',
                                                                areaCode: '379'
                                                            },
                                                            {
                                                                countryZhName: '委内瑞拉',
                                                                countryCode: 'Venezuela',
                                                                geoCode: 'VEN',
                                                                areaCode: '58'
                                                            },
                                                            {
                                                                countryZhName: '越南',
                                                                countryCode: 'Viet Nam',
                                                                geoCode: 'VNM',
                                                                areaCode: '84'
                                                            },
                                                            {
                                                                countryZhName: '瓦利斯和富图纳',
                                                                countryCode: 'Wallis and Futuna',
                                                                geoCode: 'WLF',
                                                                areaCode: '681'
                                                            },
                                                            {
                                                                countryZhName: '也门',
                                                                countryCode: 'Yemen',
                                                                geoCode: 'YEM',
                                                                areaCode: '967'
                                                            },
                                                            {
                                                                countryZhName: '赞比亚',
                                                                countryCode: 'Zambia',
                                                                geoCode: 'ZMB',
                                                                areaCode: '260'
                                                            },
                                                            {
                                                                countryZhName: '津巴布韦',
                                                                countryCode: 'Zimbabwe',
                                                                geoCode: 'ZWE',
                                                                areaCode: '263'
                                                            }
                                                        ]
                                                    },
                                                    'x-validator': [
                                                        {
                                                            validator: '{{phoneNumberValidator}}',
                                                            triggerType: 'onBlur'
                                                        }
                                                    ],
                                                    'x-index': 1,
                                                    'x-reactions': '{{registerGeoCodeRecommendation}}'
                                                },
                                                remove: {
                                                    type: 'void',
                                                    'x-decorator': 'FormItem',
                                                    'x-component': 'ArrayItems.Remove',
                                                    'x-component-props': {
                                                        style: {
                                                            marginLeft: 10
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        maxLength: 15,
                                        properties: {
                                            add: {
                                                'x-component': 'ArrayItems.Addition',
                                                'x-component-props': {
                                                    noIcon: true,
                                                    block: false,
                                                    style: {
                                                        padding: 0
                                                    },
                                                    type: 'link'
                                                },
                                                type: 'void',
                                                title: '添加电话'
                                            }
                                        },
                                        'x-validator': [
                                            {
                                                minItems: 1
                                            }
                                        ]
                                    },
                                    socialMediaModels: {
                                        'x-component-type': '组合文本框',
                                        'x-component': 'ArrayItems',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        'x-component-props': {
                                            id: 'socialMediaModels',
                                            disableSingleItemKey: 'bindStatus',
                                            disableSingleItemValue: 'BIND'
                                        },
                                        type: 'array',
                                        title: '社交账号',
                                        'x-index': 10,
                                        default: [{}],
                                        'x-decorator': 'FormItem',
                                        name: 'socialMediaModels',
                                        items: {
                                            type: 'void',
                                            'x-decorator': 'ArrayItems.Item',
                                            properties: {
                                                socialMediaModels: {
                                                    'x-decorator': 'FormItem',
                                                    'x-decorator-props': {
                                                        style: {
                                                            marginBottom: 10,
                                                            flexGrow: 1
                                                        }
                                                    },
                                                    'x-component': 'XtSelectInput',
                                                    'x-component-props': {
                                                        selectStyle: {
                                                            width: 150
                                                        },
                                                        inputStyle: {
                                                            width: '100%'
                                                        },
                                                        selectKey: 'socialMediaType',
                                                        inputKey: 'accountNumber',
                                                        defaultSelect: 'FACEBOOK',
                                                        areaCodeOptions: [
                                                            {
                                                                countryZhName: '阿富汗',
                                                                countryCode: 'Afghanistan',
                                                                geoCode: 'AFG',
                                                                areaCode: '93'
                                                            },
                                                            {
                                                                countryZhName: '阿尔巴尼亚',
                                                                countryCode: 'Albania',
                                                                geoCode: 'ALB',
                                                                areaCode: '355'
                                                            },
                                                            {
                                                                countryZhName: '阿尔及利亚',
                                                                countryCode: 'Algeria',
                                                                geoCode: 'DZA',
                                                                areaCode: '213'
                                                            },
                                                            {
                                                                countryZhName: '美属萨摩亚',
                                                                countryCode: 'American Samoa',
                                                                geoCode: 'ASM',
                                                                areaCode: '1684'
                                                            },
                                                            {
                                                                countryZhName: '安道尔',
                                                                countryCode: 'Andorra',
                                                                geoCode: 'AND',
                                                                areaCode: '376'
                                                            },
                                                            {
                                                                countryZhName: '安哥拉',
                                                                countryCode: 'Angola',
                                                                geoCode: 'AGO',
                                                                areaCode: '244'
                                                            },
                                                            {
                                                                countryZhName: '安圭拉',
                                                                countryCode: 'Anguilla',
                                                                geoCode: 'AI',
                                                                areaCode: '1264'
                                                            },
                                                            {
                                                                countryZhName: '南极洲',
                                                                countryCode: 'Antarctica',
                                                                geoCode: 'AQ',
                                                                areaCode: '672'
                                                            },
                                                            {
                                                                countryZhName: '安提瓜和巴布达',
                                                                countryCode: 'Antigua and Barbuda',
                                                                geoCode: 'ATG',
                                                                areaCode: '1268'
                                                            },
                                                            {
                                                                countryZhName: '阿根廷',
                                                                countryCode: 'Argentina',
                                                                geoCode: 'ARG',
                                                                areaCode: '54'
                                                            },
                                                            {
                                                                countryZhName: '亚美尼亚',
                                                                countryCode: 'Armenia',
                                                                geoCode: 'ARM',
                                                                areaCode: '374'
                                                            },
                                                            {
                                                                countryZhName: '阿鲁巴',
                                                                countryCode: 'Aruba',
                                                                geoCode: 'AW',
                                                                areaCode: '297'
                                                            },
                                                            {
                                                                countryZhName: '澳大利亚',
                                                                countryCode: 'Australia',
                                                                geoCode: 'AUS',
                                                                areaCode: '61'
                                                            },
                                                            {
                                                                countryZhName: '奥地利',
                                                                countryCode: 'Austria',
                                                                geoCode: 'AUT',
                                                                areaCode: '43'
                                                            },
                                                            {
                                                                countryZhName: '阿塞拜疆',
                                                                countryCode: 'Azerbaijan',
                                                                geoCode: 'AZE',
                                                                areaCode: '994'
                                                            },
                                                            {
                                                                countryZhName: '巴哈马',
                                                                countryCode: 'Bahamas',
                                                                geoCode: 'BHS',
                                                                areaCode: '1242'
                                                            },
                                                            {
                                                                countryZhName: '巴林',
                                                                countryCode: 'Bahrain',
                                                                geoCode: 'BHR',
                                                                areaCode: '973'
                                                            },
                                                            {
                                                                countryZhName: '孟加拉国',
                                                                countryCode: 'Bangladesh',
                                                                geoCode: 'BGD',
                                                                areaCode: '880'
                                                            },
                                                            {
                                                                countryZhName: '巴巴多斯',
                                                                countryCode: 'Barbados',
                                                                geoCode: 'BRB',
                                                                areaCode: '1246'
                                                            },
                                                            {
                                                                countryZhName: '白俄罗斯',
                                                                countryCode: 'Belarus',
                                                                geoCode: 'BLR',
                                                                areaCode: '375'
                                                            },
                                                            {
                                                                countryZhName: '比利时',
                                                                countryCode: 'Belgium',
                                                                geoCode: 'BEL',
                                                                areaCode: '32'
                                                            },
                                                            {
                                                                countryZhName: '伯利兹',
                                                                countryCode: 'Belize',
                                                                geoCode: 'BLZ',
                                                                areaCode: '501'
                                                            },
                                                            {
                                                                countryZhName: '贝宁',
                                                                countryCode: 'Benin',
                                                                geoCode: 'BEN',
                                                                areaCode: '229'
                                                            },
                                                            {
                                                                countryZhName: '百慕大',
                                                                countryCode: 'Bermuda',
                                                                geoCode: 'BMU',
                                                                areaCode: '1441'
                                                            },
                                                            {
                                                                countryZhName: '不丹',
                                                                countryCode: 'Bhutan',
                                                                geoCode: 'BTN',
                                                                areaCode: '975'
                                                            },
                                                            {
                                                                countryZhName: '玻利维亚',
                                                                countryCode: 'Bolivia',
                                                                geoCode: 'BOL',
                                                                areaCode: '591'
                                                            },
                                                            {
                                                                countryZhName: '波黑',
                                                                countryCode: 'Bosnia and Herzegovina',
                                                                geoCode: 'BIH',
                                                                areaCode: '387'
                                                            },
                                                            {
                                                                countryZhName: '博茨瓦纳',
                                                                countryCode: 'Botswana',
                                                                geoCode: 'BWA',
                                                                areaCode: '267'
                                                            },
                                                            {
                                                                countryZhName: '布韦岛',
                                                                countryCode: 'Bouvet Island',
                                                                geoCode: 'BV',
                                                                areaCode: '47'
                                                            },
                                                            {
                                                                countryZhName: '巴西',
                                                                countryCode: 'Brazil',
                                                                geoCode: 'BRA',
                                                                areaCode: '55'
                                                            },
                                                            {
                                                                countryZhName: '英属印度洋领地',
                                                                countryCode: 'British Indian Ocean Territory',
                                                                geoCode: 'IO',
                                                                areaCode: '44'
                                                            },
                                                            {
                                                                countryZhName: '英属维尔京群岛',
                                                                countryCode: 'British Virgin Islands',
                                                                geoCode: 'VGB',
                                                                areaCode: '1284'
                                                            },
                                                            {
                                                                countryZhName: '文莱',
                                                                countryCode: 'Brunei Darussalam',
                                                                geoCode: 'BRN',
                                                                areaCode: '673'
                                                            },
                                                            {
                                                                countryZhName: '保加利亚',
                                                                countryCode: 'Bulgaria',
                                                                geoCode: 'BGR',
                                                                areaCode: '359'
                                                            },
                                                            {
                                                                countryZhName: '布基纳法索',
                                                                countryCode: 'Burkina Faso',
                                                                geoCode: 'BFA',
                                                                areaCode: '226'
                                                            },
                                                            {
                                                                countryZhName: '布隆迪',
                                                                countryCode: 'Burundi',
                                                                geoCode: 'BDI',
                                                                areaCode: '257'
                                                            },
                                                            {
                                                                countryZhName: '佛得角',
                                                                countryCode: 'Cabo Verde',
                                                                geoCode: 'CPV',
                                                                areaCode: '238'
                                                            },
                                                            {
                                                                countryZhName: '柬埔寨',
                                                                countryCode: 'Cambodia',
                                                                geoCode: 'KHM',
                                                                areaCode: '855'
                                                            },
                                                            {
                                                                countryZhName: '喀麦隆',
                                                                countryCode: 'Cameroon',
                                                                geoCode: 'CMR',
                                                                areaCode: '237'
                                                            },
                                                            {
                                                                countryZhName: '加拿大',
                                                                countryCode: 'Canada',
                                                                geoCode: 'CAN',
                                                                areaCode: '1'
                                                            },
                                                            {
                                                                countryZhName: '开曼群岛',
                                                                countryCode: 'Cayman Islands',
                                                                geoCode: 'CYM',
                                                                areaCode: '1345'
                                                            },
                                                            {
                                                                countryZhName: '中非',
                                                                countryCode: 'Central African Republic',
                                                                geoCode: 'CAF',
                                                                areaCode: '236'
                                                            },
                                                            {
                                                                countryZhName: '乍得',
                                                                countryCode: 'Chad',
                                                                geoCode: 'TCD',
                                                                areaCode: '235'
                                                            },
                                                            {
                                                                countryZhName: '智利',
                                                                countryCode: 'Chile',
                                                                geoCode: 'CHL',
                                                                areaCode: '56'
                                                            },
                                                            {
                                                                countryZhName: '中国大陆',
                                                                countryCode: 'China',
                                                                geoCode: 'CN',
                                                                areaCode: '86'
                                                            },
                                                            {
                                                                countryZhName: '圣诞岛',
                                                                countryCode: 'Christmas Island',
                                                                geoCode: 'CX',
                                                                areaCode: '61'
                                                            },
                                                            {
                                                                countryZhName: '科科斯（基林）群岛',
                                                                countryCode: 'Cocos (Keeling) Islands',
                                                                geoCode: 'CC',
                                                                areaCode: '61'
                                                            },
                                                            {
                                                                countryZhName: '哥伦比亚',
                                                                countryCode: 'Colombia',
                                                                geoCode: 'COL',
                                                                areaCode: '57'
                                                            },
                                                            {
                                                                countryZhName: '科摩罗',
                                                                countryCode: 'Comoros',
                                                                geoCode: 'COM',
                                                                areaCode: '269'
                                                            },
                                                            {
                                                                countryZhName: '刚果共和国',
                                                                countryCode: 'Congo',
                                                                geoCode: 'COG',
                                                                areaCode: '242'
                                                            },
                                                            {
                                                                countryZhName: '库克群岛',
                                                                countryCode: 'Cook Islands',
                                                                geoCode: 'CK',
                                                                areaCode: '682'
                                                            },
                                                            {
                                                                countryZhName: '哥斯达黎加',
                                                                countryCode: 'Costa Rica',
                                                                geoCode: 'CRI',
                                                                areaCode: '506'
                                                            },
                                                            {
                                                                countryZhName: '克罗地亚',
                                                                countryCode: 'Croatia',
                                                                geoCode: 'HRV',
                                                                areaCode: '385'
                                                            },
                                                            {
                                                                countryZhName: '古巴',
                                                                countryCode: 'Cuba',
                                                                geoCode: 'CUB',
                                                                areaCode: '53'
                                                            },
                                                            {
                                                                countryZhName: '库拉索',
                                                                countryCode: 'Curaçao',
                                                                geoCode: 'CW',
                                                                areaCode: '599'
                                                            },
                                                            {
                                                                countryZhName: '塞浦路斯',
                                                                countryCode: 'Cyprus',
                                                                geoCode: 'CYP',
                                                                areaCode: '357'
                                                            },
                                                            {
                                                                countryZhName: '捷克',
                                                                countryCode: 'Czechia',
                                                                geoCode: 'CZE',
                                                                areaCode: '420'
                                                            },
                                                            {
                                                                countryZhName: '科特迪瓦',
                                                                countryCode: "Côte d'Ivoire",
                                                                geoCode: 'CIV',
                                                                areaCode: '225'
                                                            },
                                                            {
                                                                countryZhName: '丹麦',
                                                                countryCode: 'Denmark',
                                                                geoCode: 'DNK',
                                                                areaCode: '45'
                                                            },
                                                            {
                                                                countryZhName: '吉布提',
                                                                countryCode: 'Djibouti',
                                                                geoCode: 'DJI',
                                                                areaCode: '253'
                                                            },
                                                            {
                                                                countryZhName: '多米尼克',
                                                                countryCode: 'Dominica',
                                                                geoCode: 'DMA',
                                                                areaCode: '1767'
                                                            },
                                                            {
                                                                countryZhName: '多米尼加',
                                                                countryCode: 'Dominican Republic',
                                                                geoCode: 'DOM',
                                                                areaCode: '1809'
                                                            },
                                                            {
                                                                countryZhName: '东帝汶',
                                                                countryCode: 'East Timor',
                                                                geoCode: 'TLS',
                                                                areaCode: '670'
                                                            },
                                                            {
                                                                countryZhName: '厄瓜多尔',
                                                                countryCode: 'Ecuador',
                                                                geoCode: 'ECU',
                                                                areaCode: '593'
                                                            },
                                                            {
                                                                countryZhName: '埃及',
                                                                countryCode: 'Egypt',
                                                                geoCode: 'EGY',
                                                                areaCode: '20'
                                                            },
                                                            {
                                                                countryZhName: '萨尔瓦多',
                                                                countryCode: 'El Salvador',
                                                                geoCode: 'SLV',
                                                                areaCode: '503'
                                                            },
                                                            {
                                                                countryZhName: '赤道几内亚',
                                                                countryCode: 'Equatorial Guinea',
                                                                geoCode: 'GNQ',
                                                                areaCode: '240'
                                                            },
                                                            {
                                                                countryZhName: '厄立特里亚',
                                                                countryCode: 'Eritrea',
                                                                geoCode: 'ERI',
                                                                areaCode: '291'
                                                            },
                                                            {
                                                                countryZhName: '爱沙尼亚',
                                                                countryCode: 'Estonia',
                                                                geoCode: 'EST',
                                                                areaCode: '372'
                                                            },
                                                            {
                                                                countryZhName: '斯威士兰',
                                                                countryCode: 'Eswatini',
                                                                geoCode: 'SWZ',
                                                                areaCode: '268'
                                                            },
                                                            {
                                                                countryZhName: '埃塞俄比亚',
                                                                countryCode: 'Ethiopia',
                                                                geoCode: 'ETH',
                                                                areaCode: '251'
                                                            },
                                                            {
                                                                countryZhName: '福克兰群岛',
                                                                countryCode: 'Falkland Islands',
                                                                geoCode: 'FK',
                                                                areaCode: '500'
                                                            },
                                                            {
                                                                countryZhName: '法罗群岛',
                                                                countryCode: 'Faroe Islands',
                                                                geoCode: 'FRO',
                                                                areaCode: '298'
                                                            },
                                                            {
                                                                countryZhName: '斐济',
                                                                countryCode: 'Fiji',
                                                                geoCode: 'FJI',
                                                                areaCode: '679'
                                                            },
                                                            {
                                                                countryZhName: '芬兰',
                                                                countryCode: 'Finland',
                                                                geoCode: 'FIN',
                                                                areaCode: '358'
                                                            },
                                                            {
                                                                countryZhName: '法国',
                                                                countryCode: 'France',
                                                                geoCode: 'FRA',
                                                                areaCode: '33'
                                                            },
                                                            {
                                                                countryZhName: '法属圭亚那',
                                                                countryCode: 'French Guiana',
                                                                geoCode: 'GUF',
                                                                areaCode: '594'
                                                            },
                                                            {
                                                                countryZhName: '法属波利尼西亚',
                                                                countryCode: 'French Polynesia',
                                                                geoCode: 'PYF',
                                                                areaCode: '689'
                                                            },
                                                            {
                                                                countryZhName: '加蓬',
                                                                countryCode: 'Gabon',
                                                                geoCode: 'GAB',
                                                                areaCode: '241'
                                                            },
                                                            {
                                                                countryZhName: '冈比亚',
                                                                countryCode: 'Gambia',
                                                                geoCode: 'GMB',
                                                                areaCode: '220'
                                                            },
                                                            {
                                                                countryZhName: '格鲁吉亚',
                                                                countryCode: 'Georgia',
                                                                geoCode: 'GEO',
                                                                areaCode: '995'
                                                            },
                                                            {
                                                                countryZhName: '德国',
                                                                countryCode: 'Germany',
                                                                geoCode: 'DEU',
                                                                areaCode: '49'
                                                            },
                                                            {
                                                                countryZhName: '加纳',
                                                                countryCode: 'Ghana',
                                                                geoCode: 'GHA',
                                                                areaCode: '233'
                                                            },
                                                            {
                                                                countryZhName: '直布罗陀',
                                                                countryCode: 'Gibraltar',
                                                                geoCode: 'GI',
                                                                areaCode: '350'
                                                            },
                                                            {
                                                                countryZhName: '希腊',
                                                                countryCode: 'Greece',
                                                                geoCode: 'GRC',
                                                                areaCode: '30'
                                                            },
                                                            {
                                                                countryZhName: '格陵兰',
                                                                countryCode: 'Greenland',
                                                                geoCode: 'GRL',
                                                                areaCode: '299'
                                                            },
                                                            {
                                                                countryZhName: '格林纳达',
                                                                countryCode: 'Grenada',
                                                                geoCode: 'GRD',
                                                                areaCode: '1473'
                                                            },
                                                            {
                                                                countryZhName: '瓜德罗普',
                                                                countryCode: 'Guadeloupe',
                                                                geoCode: 'GLP',
                                                                areaCode: '590'
                                                            },
                                                            {
                                                                countryZhName: '关岛',
                                                                countryCode: 'Guam',
                                                                geoCode: 'GUM',
                                                                areaCode: '1671'
                                                            },
                                                            {
                                                                countryZhName: '危地马拉',
                                                                countryCode: 'Guatemala',
                                                                geoCode: 'GTM',
                                                                areaCode: '502'
                                                            },
                                                            {
                                                                countryZhName: '根西',
                                                                countryCode: 'Guernsey',
                                                                geoCode: 'GGY',
                                                                areaCode: '1481'
                                                            },
                                                            {
                                                                countryZhName: '几内亚',
                                                                countryCode: 'Guinea',
                                                                geoCode: 'GIN',
                                                                areaCode: '224'
                                                            },
                                                            {
                                                                countryZhName: '几内亚比绍',
                                                                countryCode: 'Guinea-Bissau',
                                                                geoCode: 'GNB',
                                                                areaCode: '245'
                                                            },
                                                            {
                                                                countryZhName: '圭亚那',
                                                                countryCode: 'Guyana',
                                                                geoCode: 'GUY',
                                                                areaCode: '592'
                                                            },
                                                            {
                                                                countryZhName: '海地',
                                                                countryCode: 'Haiti',
                                                                geoCode: 'HTI',
                                                                areaCode: '509'
                                                            },
                                                            {
                                                                countryZhName: '洪都拉斯',
                                                                countryCode: 'Honduras',
                                                                geoCode: 'HND',
                                                                areaCode: '504'
                                                            },
                                                            {
                                                                countryZhName: '香港（中国）',
                                                                countryCode: 'Hong Kong (China)',
                                                                geoCode: 'HK',
                                                                areaCode: '852'
                                                            },
                                                            {
                                                                countryZhName: '匈牙利',
                                                                countryCode: 'Hungary',
                                                                geoCode: 'HUN',
                                                                areaCode: '36'
                                                            },
                                                            {
                                                                countryZhName: '冰岛',
                                                                countryCode: 'Iceland',
                                                                geoCode: 'ISL',
                                                                areaCode: '354'
                                                            },
                                                            {
                                                                countryZhName: '印度',
                                                                countryCode: 'India',
                                                                geoCode: 'IND',
                                                                areaCode: '91'
                                                            },
                                                            {
                                                                countryZhName: '印尼',
                                                                countryCode: 'Indonesia',
                                                                geoCode: 'IDN',
                                                                areaCode: '62'
                                                            },
                                                            {
                                                                countryZhName: '伊朗',
                                                                countryCode: 'Iran',
                                                                geoCode: 'IRN',
                                                                areaCode: '98'
                                                            },
                                                            {
                                                                countryZhName: '伊拉克',
                                                                countryCode: 'Iraq',
                                                                geoCode: 'IRQ',
                                                                areaCode: '964'
                                                            },
                                                            {
                                                                countryZhName: '爱尔兰',
                                                                countryCode: 'Ireland',
                                                                geoCode: 'IRL',
                                                                areaCode: '353'
                                                            },
                                                            {
                                                                countryZhName: '马恩岛',
                                                                countryCode: 'Isle of Man',
                                                                geoCode: 'IMN',
                                                                areaCode: '44'
                                                            },
                                                            {
                                                                countryZhName: '以色列',
                                                                countryCode: 'Israel',
                                                                geoCode: 'ISR',
                                                                areaCode: '972'
                                                            },
                                                            {
                                                                countryZhName: '意大利',
                                                                countryCode: 'Italy',
                                                                geoCode: 'ITA',
                                                                areaCode: '39'
                                                            },
                                                            {
                                                                countryZhName: '牙买加',
                                                                countryCode: 'Jamaica',
                                                                geoCode: 'JAM',
                                                                areaCode: '1876'
                                                            },
                                                            {
                                                                countryZhName: '日本',
                                                                countryCode: 'Japan',
                                                                geoCode: 'JPN',
                                                                areaCode: '81'
                                                            },
                                                            {
                                                                countryZhName: '泽西',
                                                                countryCode: 'Jersey',
                                                                geoCode: 'JEY',
                                                                areaCode: '44'
                                                            },
                                                            {
                                                                countryZhName: '约旦',
                                                                countryCode: 'Jordan',
                                                                geoCode: 'JOR',
                                                                areaCode: '962'
                                                            },
                                                            {
                                                                countryZhName: '哈萨克斯坦',
                                                                countryCode: 'Kazakhstan',
                                                                geoCode: 'KAZ',
                                                                areaCode: '73'
                                                            },
                                                            {
                                                                countryZhName: '肯尼亚',
                                                                countryCode: 'Kenya',
                                                                geoCode: 'KEN',
                                                                areaCode: '254'
                                                            },
                                                            {
                                                                countryZhName: '基里巴斯',
                                                                countryCode: 'Kiribati',
                                                                geoCode: 'KI',
                                                                areaCode: '686'
                                                            },
                                                            {
                                                                countryZhName: '科威特',
                                                                countryCode: 'Kuwait',
                                                                geoCode: 'KWT',
                                                                areaCode: '965'
                                                            },
                                                            {
                                                                countryZhName: '吉尔吉斯斯坦',
                                                                countryCode: 'Kyrgyzstan',
                                                                geoCode: 'KGZ',
                                                                areaCode: '996'
                                                            },
                                                            {
                                                                countryZhName: '老挝',
                                                                countryCode: 'Laos',
                                                                geoCode: 'LAO',
                                                                areaCode: '856'
                                                            },
                                                            {
                                                                countryZhName: '拉脱维亚',
                                                                countryCode: 'Latvia',
                                                                geoCode: 'LVA',
                                                                areaCode: '371'
                                                            },
                                                            {
                                                                countryZhName: '黎巴嫩',
                                                                countryCode: 'Lebanon',
                                                                geoCode: 'LBN',
                                                                areaCode: '961'
                                                            },
                                                            {
                                                                countryZhName: '莱索托',
                                                                countryCode: 'Lesotho',
                                                                geoCode: 'LSO',
                                                                areaCode: '266'
                                                            },
                                                            {
                                                                countryZhName: '利比里亚',
                                                                countryCode: 'Liberia',
                                                                geoCode: 'LBR',
                                                                areaCode: '231'
                                                            },
                                                            {
                                                                countryZhName: '利比亚',
                                                                countryCode: 'Libya',
                                                                geoCode: 'LBY',
                                                                areaCode: '218'
                                                            },
                                                            {
                                                                countryZhName: '列支敦士登',
                                                                countryCode: 'Liechtenstein',
                                                                geoCode: 'LIE',
                                                                areaCode: '423'
                                                            },
                                                            {
                                                                countryZhName: '立陶宛',
                                                                countryCode: 'Lithuania',
                                                                geoCode: 'LTU',
                                                                areaCode: '370'
                                                            },
                                                            {
                                                                countryZhName: '卢森堡',
                                                                countryCode: 'Luxembourg',
                                                                geoCode: 'LUX',
                                                                areaCode: '352'
                                                            },
                                                            {
                                                                countryZhName: '澳门（中国）',
                                                                countryCode: 'Macao (China)',
                                                                geoCode: 'MA',
                                                                areaCode: '853'
                                                            },
                                                            {
                                                                countryZhName: '马达加斯加',
                                                                countryCode: 'Madagascar',
                                                                geoCode: 'MDG',
                                                                areaCode: '261'
                                                            },
                                                            {
                                                                countryZhName: '马拉维',
                                                                countryCode: 'Malawi',
                                                                geoCode: 'MWI',
                                                                areaCode: '265'
                                                            },
                                                            {
                                                                countryZhName: '马来西亚',
                                                                countryCode: 'Malaysia',
                                                                geoCode: 'MYS',
                                                                areaCode: '60'
                                                            },
                                                            {
                                                                countryZhName: '马尔代夫',
                                                                countryCode: 'Maldives',
                                                                geoCode: 'MV',
                                                                areaCode: '960'
                                                            },
                                                            {
                                                                countryZhName: '马里',
                                                                countryCode: 'Mali',
                                                                geoCode: 'MLI',
                                                                areaCode: '223'
                                                            },
                                                            {
                                                                countryZhName: '马耳他',
                                                                countryCode: 'Malta',
                                                                geoCode: 'MLT',
                                                                areaCode: '356'
                                                            },
                                                            {
                                                                countryZhName: '马绍尔群岛',
                                                                countryCode: 'Marshall Islands',
                                                                geoCode: 'MH',
                                                                areaCode: '692'
                                                            },
                                                            {
                                                                countryZhName: '马提尼克',
                                                                countryCode: 'Martinique',
                                                                geoCode: 'MTQ',
                                                                areaCode: '596'
                                                            },
                                                            {
                                                                countryZhName: '毛里塔尼亚',
                                                                countryCode: 'Mauritania',
                                                                geoCode: 'MRT',
                                                                areaCode: '222'
                                                            },
                                                            {
                                                                countryZhName: '毛里求斯',
                                                                countryCode: 'Mauritius',
                                                                geoCode: 'MUS',
                                                                areaCode: '230'
                                                            },
                                                            {
                                                                countryZhName: '马约特',
                                                                countryCode: 'Mayotte',
                                                                geoCode: 'MYT',
                                                                areaCode: '269'
                                                            },
                                                            {
                                                                countryZhName: '墨西哥',
                                                                countryCode: 'Mexico',
                                                                geoCode: 'MEX',
                                                                areaCode: '52'
                                                            },
                                                            {
                                                                countryZhName: '摩纳哥',
                                                                countryCode: 'Monaco',
                                                                geoCode: 'MC',
                                                                areaCode: '377'
                                                            },
                                                            {
                                                                countryZhName: '蒙古',
                                                                countryCode: 'Mongolia',
                                                                geoCode: 'MNG',
                                                                areaCode: '976'
                                                            },
                                                            {
                                                                countryZhName: '黑山',
                                                                countryCode: 'Montenegro',
                                                                geoCode: 'MNE',
                                                                areaCode: '382'
                                                            },
                                                            {
                                                                countryZhName: '蒙特塞拉特',
                                                                countryCode: 'Montserrat',
                                                                geoCode: 'MSR',
                                                                areaCode: '1664'
                                                            },
                                                            {
                                                                countryZhName: '摩洛哥',
                                                                countryCode: 'Morocco',
                                                                geoCode: 'MAR',
                                                                areaCode: '212'
                                                            },
                                                            {
                                                                countryZhName: '莫桑比克',
                                                                countryCode: 'Mozambique',
                                                                geoCode: 'MOZ',
                                                                areaCode: '258'
                                                            },
                                                            {
                                                                countryZhName: '缅甸',
                                                                countryCode: 'Myanmar',
                                                                geoCode: 'MMR',
                                                                areaCode: '95'
                                                            },
                                                            {
                                                                countryZhName: '纳米比亚',
                                                                countryCode: 'Namibia',
                                                                geoCode: 'NAM',
                                                                areaCode: '264'
                                                            },
                                                            {
                                                                countryZhName: '瑙鲁',
                                                                countryCode: 'Nauru',
                                                                geoCode: 'NRU',
                                                                areaCode: '674'
                                                            },
                                                            {
                                                                countryZhName: '尼泊尔',
                                                                countryCode: 'Nepal',
                                                                geoCode: 'NPL',
                                                                areaCode: '977'
                                                            },
                                                            {
                                                                countryZhName: '荷兰',
                                                                countryCode: 'Netherlands',
                                                                geoCode: 'NLD',
                                                                areaCode: '31'
                                                            },
                                                            {
                                                                countryZhName: '新喀里多尼亚',
                                                                countryCode: 'New Caledonia',
                                                                geoCode: 'NCL',
                                                                areaCode: '687'
                                                            },
                                                            {
                                                                countryZhName: '新西兰',
                                                                countryCode: 'New Zealand',
                                                                geoCode: 'NZL',
                                                                areaCode: '64'
                                                            },
                                                            {
                                                                countryZhName: '尼加拉瓜',
                                                                countryCode: 'Nicaragua',
                                                                geoCode: 'NIC',
                                                                areaCode: '505'
                                                            },
                                                            {
                                                                countryZhName: '尼日尔',
                                                                countryCode: 'Niger',
                                                                geoCode: 'NER',
                                                                areaCode: '227'
                                                            },
                                                            {
                                                                countryZhName: '尼日利亚',
                                                                countryCode: 'Nigeria',
                                                                geoCode: 'NGA',
                                                                areaCode: '234'
                                                            },
                                                            {
                                                                countryZhName: '纽埃',
                                                                countryCode: 'Niue',
                                                                geoCode: 'NU',
                                                                areaCode: '683'
                                                            },
                                                            {
                                                                countryZhName: '诺福克岛',
                                                                countryCode: 'Norfolk Island',
                                                                geoCode: 'NF',
                                                                areaCode: '6723'
                                                            },
                                                            {
                                                                countryZhName: '朝鲜',
                                                                countryCode: 'North Korea',
                                                                geoCode: 'PRK',
                                                                areaCode: '850'
                                                            },
                                                            {
                                                                countryZhName: '北马其顿',
                                                                countryCode: 'North Macedonia',
                                                                geoCode: 'MKD',
                                                                areaCode: '389'
                                                            },
                                                            {
                                                                countryZhName: '北马里亚纳群岛',
                                                                countryCode: 'Northern Mariana Islands',
                                                                geoCode: 'MNP',
                                                                areaCode: '1670'
                                                            },
                                                            {
                                                                countryZhName: '挪威',
                                                                countryCode: 'Norway',
                                                                geoCode: 'NOR',
                                                                areaCode: '47'
                                                            },
                                                            {
                                                                countryZhName: '阿曼',
                                                                countryCode: 'Oman',
                                                                geoCode: 'OMN',
                                                                areaCode: '968'
                                                            },
                                                            {
                                                                countryZhName: '巴基斯坦',
                                                                countryCode: 'Pakistan',
                                                                geoCode: 'PAK',
                                                                areaCode: '92'
                                                            },
                                                            {
                                                                countryZhName: '帕劳',
                                                                countryCode: 'Palau',
                                                                geoCode: 'PLW',
                                                                areaCode: '680'
                                                            },
                                                            {
                                                                countryZhName: '巴拿马',
                                                                countryCode: 'Panama',
                                                                geoCode: 'PAN',
                                                                areaCode: '507'
                                                            },
                                                            {
                                                                countryZhName: '巴布亚新几内亚',
                                                                countryCode: 'Papua New Guinea',
                                                                geoCode: 'PNG',
                                                                areaCode: '675'
                                                            },
                                                            {
                                                                countryZhName: '巴拉圭',
                                                                countryCode: 'Paraguay',
                                                                geoCode: 'PRY',
                                                                areaCode: '595'
                                                            },
                                                            {
                                                                countryZhName: '秘鲁',
                                                                countryCode: 'Peru',
                                                                geoCode: 'PER',
                                                                areaCode: '51'
                                                            },
                                                            {
                                                                countryZhName: '菲律宾',
                                                                countryCode: 'Philippines',
                                                                geoCode: 'PHL',
                                                                areaCode: '63'
                                                            },
                                                            {
                                                                countryZhName: '波兰',
                                                                countryCode: 'Poland',
                                                                geoCode: 'POL',
                                                                areaCode: '48'
                                                            },
                                                            {
                                                                countryZhName: '葡萄牙',
                                                                countryCode: 'Portugal',
                                                                geoCode: 'PRT',
                                                                areaCode: '351'
                                                            },
                                                            {
                                                                countryZhName: '波多黎各',
                                                                countryCode: 'Puerto Rico',
                                                                geoCode: 'PRI',
                                                                areaCode: '1787'
                                                            },
                                                            {
                                                                countryZhName: '卡塔尔',
                                                                countryCode: 'Qatar',
                                                                geoCode: 'QAT',
                                                                areaCode: '974'
                                                            },
                                                            {
                                                                countryZhName: '摩尔多瓦',
                                                                countryCode: 'Republic of Moldova',
                                                                geoCode: 'MDA',
                                                                areaCode: '373'
                                                            },
                                                            {
                                                                countryZhName: '罗马尼亚',
                                                                countryCode: 'Romania',
                                                                geoCode: 'ROU',
                                                                areaCode: '40'
                                                            },
                                                            {
                                                                countryZhName: '俄罗斯',
                                                                countryCode: 'Russia',
                                                                geoCode: 'RUS',
                                                                areaCode: '7'
                                                            },
                                                            {
                                                                countryZhName: '卢旺达',
                                                                countryCode: 'Rwanda',
                                                                geoCode: 'RWA',
                                                                areaCode: '250'
                                                            },
                                                            {
                                                                countryZhName: '留尼汪',
                                                                countryCode: 'Réunion',
                                                                geoCode: 'REU',
                                                                areaCode: '262'
                                                            },
                                                            {
                                                                countryZhName: '圣赫勒拿、阿森松和特里斯坦-达库尼亚',
                                                                countryCode:
                                                                    'Saint Helena, Ascension and Tristan da Cunha',
                                                                geoCode: 'SHN',
                                                                areaCode: '290'
                                                            },
                                                            {
                                                                countryZhName: '圣基茨和尼维斯',
                                                                countryCode: 'Saint Kitts and Nevis',
                                                                geoCode: 'KNA',
                                                                areaCode: '1869'
                                                            },
                                                            {
                                                                countryZhName: '圣卢西亚',
                                                                countryCode: 'Saint Lucia',
                                                                geoCode: 'LCA',
                                                                areaCode: '1758'
                                                            },
                                                            {
                                                                countryZhName: '圣皮埃尔和密克隆',
                                                                countryCode: 'Saint Pierre and Miquelon',
                                                                geoCode: 'SPM',
                                                                areaCode: '508'
                                                            },
                                                            {
                                                                countryZhName: '圣文森特和格林纳丁斯',
                                                                countryCode: 'Saint Vincent and the Grenadines',
                                                                geoCode: 'VCT',
                                                                areaCode: '1784'
                                                            },
                                                            {
                                                                countryZhName: '萨摩亚',
                                                                countryCode: 'Samoa',
                                                                geoCode: 'WSM',
                                                                areaCode: '685'
                                                            },
                                                            {
                                                                countryZhName: '圣马力诺',
                                                                countryCode: 'San Marino',
                                                                geoCode: 'SMR',
                                                                areaCode: '378'
                                                            },
                                                            {
                                                                countryZhName: '沙特阿拉伯',
                                                                countryCode: 'Saudi Arabia',
                                                                geoCode: 'SAU',
                                                                areaCode: '966'
                                                            },
                                                            {
                                                                countryZhName: '塞内加尔',
                                                                countryCode: 'Senegal',
                                                                geoCode: 'SEN',
                                                                areaCode: '221'
                                                            },
                                                            {
                                                                countryZhName: '塞尔维亚',
                                                                countryCode: 'Serbia',
                                                                geoCode: 'SRB',
                                                                areaCode: '381'
                                                            },
                                                            {
                                                                countryZhName: '塞舌尔',
                                                                countryCode: 'Seychelles',
                                                                geoCode: 'SYC',
                                                                areaCode: '248'
                                                            },
                                                            {
                                                                countryZhName: '塞拉利昂',
                                                                countryCode: 'Sierra Leone',
                                                                geoCode: 'SLE',
                                                                areaCode: '232'
                                                            },
                                                            {
                                                                countryZhName: '新加坡',
                                                                countryCode: 'Singapore',
                                                                geoCode: 'SGP',
                                                                areaCode: '65'
                                                            },
                                                            {
                                                                countryZhName: '斯洛伐克',
                                                                countryCode: 'Slovakia',
                                                                geoCode: 'SVK',
                                                                areaCode: '421'
                                                            },
                                                            {
                                                                countryZhName: '斯洛文尼亚',
                                                                countryCode: 'Slovenia',
                                                                geoCode: 'SVN',
                                                                areaCode: '386'
                                                            },
                                                            {
                                                                countryZhName: '所罗门群岛',
                                                                countryCode: 'Solomon Islands',
                                                                geoCode: 'SLB',
                                                                areaCode: '677'
                                                            },
                                                            {
                                                                countryZhName: '索马里',
                                                                countryCode: 'Somalia',
                                                                geoCode: 'SOM',
                                                                areaCode: '252'
                                                            },
                                                            {
                                                                countryZhName: '南非',
                                                                countryCode: 'South Africa',
                                                                geoCode: 'ZAF',
                                                                areaCode: '27'
                                                            },
                                                            {
                                                                countryZhName: '韩国',
                                                                countryCode: 'South Korea',
                                                                geoCode: 'KOR',
                                                                areaCode: '82'
                                                            },
                                                            {
                                                                countryZhName: '南苏丹',
                                                                countryCode: 'South Sudan',
                                                                geoCode: 'SSD',
                                                                areaCode: '211'
                                                            },
                                                            {
                                                                countryZhName: '西班牙',
                                                                countryCode: 'Spain',
                                                                geoCode: 'ESP',
                                                                areaCode: '34'
                                                            },
                                                            {
                                                                countryZhName: '斯里兰卡',
                                                                countryCode: 'Sri Lanka',
                                                                geoCode: 'LKA',
                                                                areaCode: '94'
                                                            },
                                                            {
                                                                countryZhName: '巴勒斯坦',
                                                                countryCode: 'State of Palestine',
                                                                geoCode: 'PSE',
                                                                areaCode: '970'
                                                            },
                                                            {
                                                                countryZhName: '苏丹',
                                                                countryCode: 'Sudan',
                                                                geoCode: 'SDN',
                                                                areaCode: '249'
                                                            },
                                                            {
                                                                countryZhName: '苏里南',
                                                                countryCode: 'Suriname',
                                                                geoCode: 'SUR',
                                                                areaCode: '597'
                                                            },
                                                            {
                                                                countryZhName: '斯瓦尔巴和扬马延',
                                                                countryCode: 'Svalbard and Jan Mayen',
                                                                geoCode: 'SJM',
                                                                areaCode: '47'
                                                            },
                                                            {
                                                                countryZhName: '瑞典',
                                                                countryCode: 'Sweden',
                                                                geoCode: 'SWE',
                                                                areaCode: '46'
                                                            },
                                                            {
                                                                countryZhName: '瑞士',
                                                                countryCode: 'Switzerland',
                                                                geoCode: 'CHE',
                                                                areaCode: '41'
                                                            },
                                                            {
                                                                countryZhName: '叙利亚',
                                                                countryCode: 'Syria',
                                                                geoCode: 'SYR',
                                                                areaCode: '963'
                                                            },
                                                            {
                                                                countryZhName: '圣多美和普林西比',
                                                                countryCode: 'São Tomé and Príncipe',
                                                                geoCode: 'STP',
                                                                areaCode: '239'
                                                            },
                                                            {
                                                                countryZhName: '台湾（中国）',
                                                                countryCode: 'Taiwan (China)',
                                                                geoCode: 'TW',
                                                                areaCode: '886'
                                                            },
                                                            {
                                                                countryZhName: '塔吉克斯坦',
                                                                countryCode: 'Tajikistan',
                                                                geoCode: 'TJK',
                                                                areaCode: '992'
                                                            },
                                                            {
                                                                countryZhName: '坦桑尼亚',
                                                                countryCode: 'Tanzania',
                                                                geoCode: 'TZA',
                                                                areaCode: '255'
                                                            },
                                                            {
                                                                countryZhName: '泰国',
                                                                countryCode: 'Thailand',
                                                                geoCode: 'THA',
                                                                areaCode: '66'
                                                            },
                                                            {
                                                                countryZhName: '刚果民主共和国',
                                                                countryCode: 'The Democratic Republic of the Congo',
                                                                geoCode: 'COD',
                                                                areaCode: '243'
                                                            },
                                                            {
                                                                countryZhName: '密克罗尼西亚联邦',
                                                                countryCode: 'The Federated States of Micronesia',
                                                                geoCode: 'FSM',
                                                                areaCode: '691'
                                                            },
                                                            {
                                                                countryZhName: '多哥',
                                                                countryCode: 'Togo',
                                                                geoCode: 'TGO',
                                                                areaCode: '228'
                                                            },
                                                            {
                                                                countryZhName: '托克劳',
                                                                countryCode: 'Tokelau',
                                                                geoCode: 'TKL',
                                                                areaCode: '690'
                                                            },
                                                            {
                                                                countryZhName: '汤加',
                                                                countryCode: 'Tonga',
                                                                geoCode: 'TON',
                                                                areaCode: '676'
                                                            },
                                                            {
                                                                countryZhName: '特立尼达和多巴哥',
                                                                countryCode: 'Trinidad and Tobago',
                                                                geoCode: 'TTO',
                                                                areaCode: '1868'
                                                            },
                                                            {
                                                                countryZhName: '突尼斯',
                                                                countryCode: 'Tunisia',
                                                                geoCode: 'TUN',
                                                                areaCode: '216'
                                                            },
                                                            {
                                                                countryZhName: '土耳其',
                                                                countryCode: 'Turkey',
                                                                geoCode: 'TUR',
                                                                areaCode: '90'
                                                            },
                                                            {
                                                                countryZhName: '土库曼斯坦',
                                                                countryCode: 'Turkmenistan',
                                                                geoCode: 'TKM',
                                                                areaCode: '993'
                                                            },
                                                            {
                                                                countryZhName: '特克斯和凯科斯群岛',
                                                                countryCode: 'Turks and Caicos Islands',
                                                                geoCode: 'TCA',
                                                                areaCode: '1649'
                                                            },
                                                            {
                                                                countryZhName: '图瓦卢',
                                                                countryCode: 'Tuvalu',
                                                                geoCode: 'TUV',
                                                                areaCode: '688'
                                                            },
                                                            {
                                                                countryZhName: '乌干达',
                                                                countryCode: 'Uganda',
                                                                geoCode: 'UGA',
                                                                areaCode: '256'
                                                            },
                                                            {
                                                                countryZhName: '乌克兰',
                                                                countryCode: 'Ukraine',
                                                                geoCode: 'UKR',
                                                                areaCode: '380'
                                                            },
                                                            {
                                                                countryZhName: '阿联酋',
                                                                countryCode: 'United Arab Emirates',
                                                                geoCode: 'ARE',
                                                                areaCode: '971'
                                                            },
                                                            {
                                                                countryZhName: '英国',
                                                                countryCode: 'United Kingdom',
                                                                geoCode: 'GBR',
                                                                areaCode: '44'
                                                            },
                                                            {
                                                                countryZhName: '美国本土外小岛屿',
                                                                countryCode: 'United States Minor Outlying Islands',
                                                                geoCode: 'UMI',
                                                                areaCode: '1'
                                                            },
                                                            {
                                                                countryZhName: '美国',
                                                                countryCode: 'United States of America',
                                                                geoCode: 'USA',
                                                                areaCode: '1'
                                                            },
                                                            {
                                                                countryZhName: '美属维尔京群岛',
                                                                countryCode: 'United States Virgin Islands',
                                                                geoCode: 'VIR',
                                                                areaCode: '1340'
                                                            },
                                                            {
                                                                countryZhName: '乌拉圭',
                                                                countryCode: 'Uruguay',
                                                                geoCode: 'URY',
                                                                areaCode: '598'
                                                            },
                                                            {
                                                                countryZhName: '乌兹别克斯坦',
                                                                countryCode: 'Uzbekistan',
                                                                geoCode: 'UZB',
                                                                areaCode: '998'
                                                            },
                                                            {
                                                                countryZhName: '瓦努阿图',
                                                                countryCode: 'Vanuatu',
                                                                geoCode: 'VUT',
                                                                areaCode: '678'
                                                            },
                                                            {
                                                                countryZhName: '梵蒂冈',
                                                                countryCode: 'Vatican City State',
                                                                geoCode: 'VA',
                                                                areaCode: '379'
                                                            },
                                                            {
                                                                countryZhName: '委内瑞拉',
                                                                countryCode: 'Venezuela',
                                                                geoCode: 'VEN',
                                                                areaCode: '58'
                                                            },
                                                            {
                                                                countryZhName: '越南',
                                                                countryCode: 'Viet Nam',
                                                                geoCode: 'VNM',
                                                                areaCode: '84'
                                                            },
                                                            {
                                                                countryZhName: '瓦利斯和富图纳',
                                                                countryCode: 'Wallis and Futuna',
                                                                geoCode: 'WLF',
                                                                areaCode: '681'
                                                            },
                                                            {
                                                                countryZhName: '也门',
                                                                countryCode: 'Yemen',
                                                                geoCode: 'YEM',
                                                                areaCode: '967'
                                                            },
                                                            {
                                                                countryZhName: '赞比亚',
                                                                countryCode: 'Zambia',
                                                                geoCode: 'ZMB',
                                                                areaCode: '260'
                                                            },
                                                            {
                                                                countryZhName: '津巴布韦',
                                                                countryCode: 'Zimbabwe',
                                                                geoCode: 'ZWE',
                                                                areaCode: '263'
                                                            }
                                                        ],
                                                        selectedValues4AreaCode: 'WHATSAPP'
                                                    },
                                                    enum: [
                                                        {
                                                            label: 'FaceBook',
                                                            value: 'FACEBOOK'
                                                        },
                                                        {
                                                            label: 'Twitter',
                                                            value: 'TWITTER'
                                                        },
                                                        {
                                                            label: 'QQ',
                                                            value: 'QQ'
                                                        },
                                                        {
                                                            label: 'Wechat',
                                                            value: 'WECHAT'
                                                        },
                                                        {
                                                            label: 'Linkedin',
                                                            value: 'LINKEDIN'
                                                        },
                                                        {
                                                            label: 'Skype',
                                                            value: 'SKYPE'
                                                        },
                                                        {
                                                            label: 'WhatsApp',
                                                            value: 'WHATSAPP'
                                                        }
                                                    ],
                                                    'x-validator': [
                                                        {
                                                            validator: '{{subKeyPhoneNumberValidator("WHATSAPP")}}',
                                                            triggerType: 'onBlur'
                                                        }
                                                    ],
                                                    'x-index': 1,
                                                    'x-reactions': '{{registerGeoCodeRecommendation}}'
                                                },
                                                remove: {
                                                    type: 'void',
                                                    'x-decorator': 'FormItem',
                                                    'x-component': 'ArrayItems.Remove',
                                                    'x-component-props': {
                                                        style: {
                                                            marginLeft: 10
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        maxLength: 15,
                                        properties: {
                                            add: {
                                                'x-component': 'ArrayItems.Addition',
                                                'x-component-props': {
                                                    noIcon: true,
                                                    block: false,
                                                    style: {
                                                        padding: 0
                                                    },
                                                    type: 'link'
                                                },
                                                type: 'void',
                                                title: '添加社交账号'
                                            }
                                        },
                                        'x-validator': [
                                            {
                                                minItems: 1
                                            }
                                        ]
                                    }
                                }
                            },
                            tgfnpbqvlgu: {
                                'x-component': 'Space',
                                'x-reactions': {
                                    fulfill: {
                                        schema: {
                                            'x-hidden':
                                                '{{$deps.contactModels && $deps.contactModels.length <= 1 ? true : false }}'
                                        }
                                    },
                                    dependencies: [
                                        {
                                            property: 'value',
                                            name: 'contactModels',
                                            source: '7pktwpbt1oe.contactModels',
                                            type: 'any'
                                        }
                                    ]
                                },
                                'x-component-props': {
                                    style: {
                                        padding: '4px',
                                        background: '#00000005',
                                        display: 'flex',
                                        marginBottom: '20px',
                                        justifyContent: 'space-between'
                                    }
                                },
                                type: 'void',
                                'x-index': 0,
                                properties: {
                                    tgfnpbqvlgm: {
                                        'x-component': 'ArrayItems.Index',
                                        'x-component-props': {
                                            title: '联系人'
                                        },
                                        type: 'void',
                                        'x-index': 0
                                    },
                                    tgfnpbqvlgl: {
                                        'x-component': 'ArrayItems.Remove',
                                        type: 'void',
                                        'x-index': 1
                                    }
                                }
                            }
                        }
                    },
                    maxLength: 15,
                    properties: {
                        cpscgs1n1yf: {
                            'x-component': 'ArrayItems.Addition',
                            'x-component-props': {},
                            type: 'void',
                            title: '添加联系人',
                            'x-index': 0
                        }
                    }
                }
            }
        }
    }
}
