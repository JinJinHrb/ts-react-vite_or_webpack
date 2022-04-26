// interview START

// case1 START

const getRemoteToken3 = () => {
    return Promise.reject('error')
        .then(
            feed => {
                return feed
            },
            err => {
                return err
            }
        )
        .then(() => {
            return 'OK'
        })
}

const getRemoteToken2 = () => {
    return getRemoteToken().then(feed => {
        return feed
    })
}

/** 获取 token 示例 */
const getRemoteToken = () =>
    new Promise(r =>
        setTimeout(() => {
            r(Math.random())
        }, 1000)
    )

/**
 * 单例获取 token
 * IIFE 返回 函数
 * */
export const ST: () => void = (function () {
    let instance
    const CreateST = function () {
        this.token
        if (instance) {
            return instance
        }
        this.getToken()
        return (instance = this)
    }

    CreateST.prototype.getToken = async function (refresh) {
        if (this.token && refresh !== 'refresh') {
            return this.token
        }
        this.token = await getRemoteToken()
        return this.token
    }

    return CreateST
})()

// const st1 = new ST()
// const token1 = st1.getToken()

// 写法 2 Start

// 单例构造函数
class CreateSingleton {
    name: any
    // this.name = name
    // this.getName()
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }
}

// 单例对象
export const ST2 = (function () {
    let instance
    return function (name) {
        if (!instance) {
            instance = new CreateSingleton(name)
        }
        return instance
    }
})()

// 写法 2 End

// 写法 3 Start

class CreateST3 {
    static instance

    static getIsntace(name) {
        if (!CreateST3.instance) {
            CreateST3.instance = new CreateST3(name)
        }
        return CreateST3.instance
    }

    name = ''

    constructor(name) {
        this.name = name
    }

    print() {
        console.log('myName: ' + this.name)
    }
}

// 写法 3 End

// case1 END

// case2 START

const list = [
    { id: 1, name: '部门A', parentId: 0 },
    { id: 2, name: '部门B', parentId: 0 },
    { id: 3, name: '部门C', parentId: 1 },
    { id: 4, name: '部门D', parentId: 1 },
    { id: 5, name: '部门E', parentId: 2 },
    { id: 6, name: '部门F', parentId: 3 },
    { id: 7, name: '部门G', parentId: 2 },
    { id: 8, name: '部门H', parentId: 4 }
]

const listToTree = list => {
    const obj = {}
    const arr = []
    for (let i = 0; i < list.length; i += 1) {
        obj[list[i].id] = i
        list[i].children = []
    }

    for (let i = 0; i < list.length; i += 1) {
        const elem = list[i]
        if (elem.parentId !== 0) {
            list[obj[elem.parentId]].children.push(elem)
        } else {
            arr.push(elem)
        }
    }
    return arr
}

// case2 END

// case3 START

const lengthOfLongestSubstring = str => {
    const obj = {}
    let max = 0
    for (let i = 0, j = 0; i < str.length; i++) {
        if (obj[str[i]] !== undefined) {
            j = Math.max(obj[str[i]] + 1, j)
        }
        max = Math.max(max, i - j + 1)
        obj[str[i]] = i
    }
    return max
}

// case3 END

// case4 START

/**
 * 快排
 * @param {*} arr
 * @returns
 */
const fastSort = arr => {
    if (arr.length < 2) {
        return arr[0]
    }
    const middleIndex = Math.floor(arr.length / 2)
    const pivotVal = arr[middleIndex]
    let arrLeft = []
    const arrMiddle = []
    let arrRight = []
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i]
        if (val > pivotVal) {
            arrLeft.push(val)
        } else if (val < pivotVal) {
            arrRight.push(val)
        } else {
            arrMiddle.push(val)
        }
    }
    arrLeft = fastSort(arrLeft)
    arrRight = fastSort(arrRight)
    const tmp = []
    if (arrLeft instanceof Array) {
        arrLeft.forEach(el => tmp.push(el))
    } else if (arrLeft) {
        tmp.push(arrLeft)
    }
    if (arrMiddle instanceof Array) {
        arrMiddle.forEach(el => tmp.push(el))
    } else if (arrMiddle) {
        tmp.push(arrMiddle)
    }
    if (arrRight instanceof Array) {
        arrRight.forEach(el => tmp.push(el))
    } else if (arrRight) {
        tmp.push(arrRight)
    }
    return tmp
}

// case4 END

// case5 动态规划 START

// public int maximalSquare(char[][] matrix) {
//     int rows = matrix.length;
//     if (rows == 0) {
//         return 0;
//     }

//     int cols = matrix[0].length;
//     if (cols == 0) {
//         return 0;
//     }

//     int[][] dp = new int[rows + 1][cols + 1];

//     int res = 0;
//     for (int i = 0; i < rows; i++) {
//         for (int j = 0; j < cols; j++) {

//             // 注意：是字符 1
//             if (matrix[i][j] == '1') {
//                 dp[i + 1][j + 1] = Math.min(dp[i][j], Math.min(dp[i + 1][j], dp[i][j + 1])) + 1;
//                 res = Math.max(res, dp[i + 1][j + 1]);
//             }

//         }
//     }
//     return res * res;
// }

// case5 END

const uniquePaths = (m, n) => {
    const dp = []
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1
    }
    for (let i = 0; i < n; i++) {
        dp[0][i] = 1
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
}

/**
 * 左上到右下，输出最小值
 */
const uniquePaths2 = arr => {
    // [][]
    const m = arr.length
    const n = arr[0].length
    if (m <= 0 || n <= 0) {
        return 0
    }

    const dp = []
    for (let i = 0; i < m; i++) {
        dp[i] = []
    }

    // 初始化
    dp[0][0] = arr[0][0]
    // 初始化最左边的列
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + arr[i][0]
    }
    // 初始化最上边的行
    for (let i = 1; i < n; i++) {
        dp[0][i] = dp[0][i - 1] + arr[0][i]
    }
    // 推导出 dp[m-1][n-1]
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + arr[i][j]
        }
    }
    return dp[m - 1][n - 1]
}

// case6 START

function arrange(name) {
    class Product {
        name: any
        list: any
        constructor(name) {
            this.name = name
            this.list = []
        }
        execute() {
            console.log('execute' + this.name)
            return this
        }
        do() {
            console.log('do' + this.name)
            return this
        }
        wait() {
            console.log('wait' + this.name)
            return this
        }
        waitFirst() {
            console.log('waitFirst' + this.name)
            return this
        }
    }
    return new Product(name)
}

// arrange('William').execute();
// // 打印： William is notified

// arrange('William').do('commit').execute();
// // 打印： William is notified
// // 打印： Start to commit

// arrange('William').wait(5).do('commit').execute();
// // 打印： William is notified
// // 等待 5 秒
// // 打印： Start to commit

// arrange('William').waitFirst(5).do('push').execute();
// // 等待 5 秒
// // 打印： William is notified
// // 打印： Start to push

// case6 END

/*
function longestPalindrome(String s) {
    let len = s.length();
    if (len < 2) {
        return s;
    }

    let maxLen = 1;
    let begin = 0;
    // dp[i][j] 表示 s[i..j] 是否是回文串
    boolean[][] dp = new boolean[len][len];
    // 初始化：所有长度为 1 的子串都是回文串
    for (int i = 0; i < len; i++) {
        dp[i][i] = true;
    }

    char[] charArray = s.toCharArray();
    // 递推开始
    // 先枚举子串长度
    for (int L = 2; L <= len; L++) {
        // 枚举左边界，左边界的上限设置可以宽松一些
        for (int i = 0; i < len; i++) {
            // 由 L 和 i 可以确定右边界，即 j - i + 1 = L 得
            int j = L + i - 1;
            // 如果右边界越界，就可以退出当前循环
            if (j >= len) {
                break;
            }

            if (charArray[i] != charArray[j]) {
                dp[i][j] = false;
            } else {
                if (j - i < 3) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
            }

            // 只要 dp[i][L] == true 成立，就表示子串 s[i..L] 是回文，此时记录回文长度和起始位置
            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1;
                begin = i;
            }
        }
    }
    return s.substring(begin, begin + maxLen);
}
*/

// case7 START

/**
 * @param {*} arr coin面额数组（1 ~ 500）
 */
const splitCoins = arr => {
    let sum1, sum2, tmpSum1, tmpSum2, diff1, diff2, m, n
    m = n = diff1 = diff2 = tmpSum1 = tmpSum2 = sum1 = sum2 = 0

    // 去第一堆，往右走
    // 去第二堆，往下走
    // 默认往下走
    const dp = []

    // 初始化 dp START
    for (let i = 0; i < arr.length; i++) {
        dp.push([])
    }
    for (let i = 0; i < arr.length; i++) {
        dp[0][i] = arr[i]
    }
    for (let i = 0; i < arr.length; i++) {
        dp[i][0] = arr[i]
    }
    // 初始化 dp END

    for (let i = 0, val; i < arr.length; i++) {
        val = arr[i]
        // 往右走
        tmpSum1 = sum1 + val
        diff1 = Math.abs(tmpSum1 - sum2)

        tmpSum2 = sum2 + val
        diff2 = Math.abs(tmpSum2 - sum1)

        if (diff1 < diff2) {
            sum1 = tmpSum1
            n++
            dp[m][n] = diff1
            console.log(`第一堆加${val}, 差额: ${diff1}`)
        } else {
            sum2 = tmpSum2
            m++
            dp[m][n] = diff2
            console.log(`第二堆加${val}, 差额: ${diff2}`)
        }
        console.log({ sum1, sum2 })
    }
    console.log('放完了', { m, n })
    return dp[m][n]
}

// case7 END1

const iterateStaticMethods = () => {
    class Product {
        sku: any
        constructor(sku) {
            this.sku = sku
        }

        static init(product) {
            console.log('init product')
        }

        setSku(sku) {
            this.sku = sku
        }

        print() {
            console.log('商品SKU:', this.sku)
        }
    }

    const product = new Product('T0001')

    const funNames1 = Object.getOwnPropertyNames(Product).map(a => [typeof Product[a], a])

    const funNames2 = Object.getOwnPropertyNames(product).map(a => [typeof product[a], a])

    const instanceName = product.constructor.name

    console.log(
        'iterateStaticMethods #433 \nfunNames1:',
        funNames1,
        '\nfunNames2:',
        funNames2,
        '\ninstanceName:',
        instanceName
    )
}

function addString(a, b) {
    //取两个数字的最大长度
    const maxLength = Math.max(a.length, b.length)
    //用0去补齐长度
    a = a.padStart(maxLength, 0) //"0009007199254740991"
    b = b.padStart(maxLength, 0) //"1234567899999999999"
    //定义加法过程中需要用到的变量
    let t = 0
    let f = 0 //"进位"
    let sum = ''
    for (let i = maxLength - 1; i >= 0; i--) {
        t = parseInt(a[i]) + parseInt(b[i]) + f
        f = Math.floor(t / 10) //"进位"
        sum = (t % 10) + sum
    }
    if (f == 1) {
        sum = '1' + sum
    }
    return sum
}

export const testDemoFoo = () => {
    // case1 Start
    const a = '9007199254740991'
    const b = '1234567899999999999'
    const sum = addString(a, b)
    console.log(a, '+', b, '=', sum)
    iterateStaticMethods()

    const diff = splitCoins([1, 5, 10, 15, 30, 10, 2, 2])
    console.log('diff:', diff)
    // case1 End

    const sg1 = ST2('张三')
    const sg2 = ST2('李四')
    console.log('boolean:', sg1 === sg2, 'names:', sg1.getName() + ', ' + sg2.getName())

    const st1 = new ST()
    const st2 = new ST()

    console.log('st1:' + st1.getToken() + ', st2:' + st2.getToken())

    alert('OK')

    // case2 Start

    // case2 End

    // arrange('张三').wait().execute()

    // const result = uniquePaths2([
    //     [1,3,1],
    //     [1,5,1],
    //     [4,2,1]
    // ])
    // console.log('#255 uniquePaths2:', result)

    // const sum = fabn(3)
    // console.log('#220 sum:', sum)

    // const fastResult = fastSort([5,2,6,77,11,22,6,3,32,63,7,97])
    // console.log('#140 fastResult:', fastResult)

    /* const tree = listToTree(list);
    console.log('#197 tree:', JSON.stringify(tree)) */

    // const lengthOfLgs = lengthOfLongestSubstring('abcabcbb')
    // console.log('lengthOfLgs:', lengthOfLgs)

    /* getRemoteToken3().then(feed => {
        console.log('#107 getRemoteToken3:', feed)
    })

    getRemoteToken2().then(feed => {
        console.log('#96 getRemoteToken2:', feed)
    })

    token1.then(feed => {
        console.log('#89', feed)
    })

    const st2 = new ST()
    const token2 = st2.getToken()

    token2.then(feed => {
        console.log('#97', feed)
    }) */

    /* class A {
        constructor() {
          console.log(new.target.name); // new.target 指向当前正在执行的函数
        }
      }
      
    class B extends A {
        constructor(){
            super();
        }
    }
      
    new A(); // A
    new B(); // B */

    // const toCol = _L.toLower('VEHICLE_ID	PRODUCT_ID	VN	VIN	PVI	ENGINE_NUMBER	TRIM_COLOR	TRIM_LEVEL	EXTERNAL_COLOR	DELIVERY_DATE	MILEAGE	LICENSE_NUMBER	ORG_ID	NODE_DATE	NODE	LOCATION	CUSTOMER_ID	SCHEDULE_DATE	MODEL_YEAR	LIFE_CYCLE	ATTACHMENT	NODE_STATUS	HOLD_STATUS	INIT_VDC	CREATE_DATE	UPDATE_DATE	IS_VIP	VIP_COMMENT	VIP_DATE	CORP_ID	BRAND_ID	VN_CREATE	VHCL_TYPE	EQUIPMENT_NUMBER	STATION_IDENTIFIER	HOLD_TYPE	ARRIVE_TIME	TRANSFER_WAY	EXPECT_ARRIVE_TIME	IS_OPEN_ONSTAR	PREMATCH_STATUS	CALL_STATUS	STO_STATUS').split(/\s+/).join('\n')
    // console.log('toCol:', toCol)

    // const fieldValues = [
    //     '退车换车类型',
    //     '直销车订单号',
    //     '退换车的返回标志: 成功—‘S’， 失败—‘E’',
    //     'Vehicle Identification Number',
    //     'SO',
    //     '退换车失败：错误信息'
    // ]

    // const fields = [
    //     'RETYPE',
    //     'OSSPSO',
    //     'FLAG',
    //     'VIN',
    //     'SO',
    //     'ERR_MSG'
    // ].map((a, idx) => {
    //     return '"'+_L.camelCase(a) + '": "' + fieldValues[idx] + '"'
    // })
    // console.log('#94 fields:\n{\n' + fields.join(',\n') + '\n}')

    // if (!config.isDevelop && req.hostname.indexOf('d1.ivisa.vip') < 0) {
    //     loggerB.infoAll('testPage req headers:', hdlUtil.getDeepVal(req, 'headers'));
    //     return res.json({ code: 119 })
    // }

    /* const data = [{authorizeAbc: 'abc', authorizeDef: 'def', _id: '123456'}]
    const toUpdate = {}
    const authorizeKeys = Object.keys(data[0] || {}).filter(a => a.indexOf('authorize') === 0);
    authorizeKeys.forEach(k => {
        hdlUtil.setDeepVal(toUpdate, [k], _L.trim(hdlUtil.getDeepVal(data, [0, k]) ) );
    })
    console.log(toUpdate) */

    /* const now = new Date();
    let tmpStartDateStr = hdlUtil.date2string(now);
    tmpStartDateStr = tmpStartDateStr.slice(0, tmpStartDateStr.lastIndexOf('-'));
    const xLater = new Date(); xLater.setFullYear(xLater.getFullYear() + 1);
    let tmpEndDateStr = hdlUtil.date2string(xLater);
    tmpEndDateStr = tmpEndDateStr.slice(0, tmpEndDateStr.lastIndexOf('-'));
    console.log('testPage #57', {tmpStartDateStr, tmpEndDateStr}) */
    /*const backgroundTestHandler = () => {
        /!* demo - 1
        const nonEngRegex = new RegExp('[^A-Za-z]', 'g'); // 替换非英文字符
        const old = 'DE-CHANG';
        const str = hdlBizUtil.removeAbnormalChars(old, '', nonEngRegex);
        console.log('removeAbnormalChars old:', old, '-> str:', str);*!/

        // demo - 2
        let decimalSum = new Decimal(1927.35);
        const fulfilled = [{payment: '123.23'}];
        // const fulfilled = [{payment: '123.23'}, {payment: '300.00'}, {payment: '415.25'}];
        const paymentDecimal = fulfilled.map(el => {
            const payment = el.payment;
            if(payment){
                return new Decimal(payment);
            }else{
                return null;
            }
        }).filter(a => a);
        const paymentDecimalSum = paymentDecimal.length > 0 ? (
            paymentDecimal.reduce((subDecimalSum, val) => {
                if(!subDecimalSum){
                    subDecimalSum = new Decimal(0);
                }else if(!(subDecimalSum instanceof Decimal)){
                    subDecimalSum = new Decimal(subDecimalSum)
                }
                const valDec = new Decimal(val);
                return subDecimalSum.plus(valDec);
            })
        ) : new Decimal(0);
        console.log(hdlUtil.date2string(new Date(), 'ms'), 'decimalSum:', decimalSum, 'paymentDecimalSum:', paymentDecimalSum);
        decimalSum = decimalSum.plus(paymentDecimalSum);
        console.log(hdlUtil.date2string(new Date(), 'ms'), 'decimalSum + paymentDecimalSum =', decimalSum)

        // demo - 3
        for(let i=0; i<100; i++){
            const num = [5,6][Math.floor(Math.random()*2)];
            const str = cryptUtil.randomString(num);
            if(str.length !== num){
                console.log(hdlUtil.date2string(new Date(), 'ms'), 'str = ' + str, 'num = ' + num);
            }
        }
    };*/

    // 继承例子 START

    // function Soldier(id, life) {
    //     this.id = id;
    //     this.life = life;
    // }

    // Soldier.prototype = {
    //     constructor: Soldier,
    //     type: 'Private',
    //     force: 5,
    //     walk: function () { console.log(this.id + ': walk') },
    //     run: function () { console.log(this.id + ': run') },
    //     die: function () { console.log(this.id + ': die') },
    //     attack: function () { console.log(this.id + ': attck with force ' + this.force) },
    //     defend: function () { console.log(this.id + ': defend') },
    // }

    // class General extends Soldier {
    //     constructor(id, life, subordinate) {
    //         // 在这里, 它调用了父类的构造函数, 并将 lengths 提供给 Polygon 的"width"和"height"
    //         super(id, life);
    //         // 注意: 在派生类中, 必须先调用 super() 才能使用 "this"。
    //         // 忽略这个，将会导致一个引用错误。
    //         this.type = 'General';
    //         this._subordinate = subordinate;
    //     }
    //     get subordinate() {
    //         return this._subordinate || [];
    //     }
    //     set subordinate(value) {
    //         // 注意：不可使用 this.subordinate = value
    //         // 否则会导致循环call setter方法导致爆栈
    //         this._subordinate = value;
    //     }
    //     get force() {
    //         return (this.subordinate || []).reduce(function (sum, a) { //
    //             if (hdlUtil.oType(sum) !== 'number') {
    //                 sum = 0;
    //             }
    //             return sum += a.force;
    //         }, 0)
    //     }
    // }

    // const general1 = new General('G1', 10);

    // const soldier1 = new Soldier('P1', 10);
    // const soldier2 = new Soldier('P2', 10);
    // const soldier3 = new Soldier('P3', 10);

    // general1.subordinate = [soldier1, soldier2, soldier3];

    // general1.attack();
    // soldier1.attack();
    // console.log('soldier1.__proto__ === Soldier.prototype', soldier1.__proto__ === Soldier.prototype)
    // console.log('Soldier.__proto__ === Function.prototype', Soldier.__proto__ === Function.prototype)
    // console.log('soldier1.constructor === Soldier', soldier1.constructor === Soldier)
    // console.log('general1.constructor === General', general1.constructor === General)
    // console.log('soldier1.type', soldier1.type)
    // console.log('general1.type', general1.type)

    // 继承例子 END
}
