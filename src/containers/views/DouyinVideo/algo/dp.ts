import _ from 'lodash'

// 8. 分发饼干
export const findContentChildren = (g: number[], s: number[]) => {
    if (!g.length || !s.length) return 0

    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)

    let gi = 0,
        si = 0
    while (gi < g.length && si < s.length) {
        if (g[gi] <= s[si++]) gi++
    }
    return gi
}

// 7. 获取最大利润

// 贪心算法
export const getMaxProfit2 = (prices: number[]) => {
    let isBought = false,
        buyInPrice = -1,
        profit = 0
    for (let i = 0; i < prices.length; i++) {
        if (isBought && prices[i + 1] < prices[i]) {
            profit += prices[i] - buyInPrice
            isBought = false
        } else if (!isBought && i < prices.length - 1 && prices[i + 1] > prices[i]) {
            buyInPrice = prices[i]
            isBought = true
        }
    }
    return profit
}

export const getMaxProfit1 = (prices: number[]) => {
    const dp: number[][] = new Array(prices.length)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(prices.length).fill(0)
    }
    let profit = 0,
        buyIn = -1,
        sellOut = -1
    for (let j = 1; j < prices.length; j++) {
        for (let i = 0; i < j; i++) {
            const diff = prices[j] - prices[i]
            dp[i][j] = Math.max(diff, dp[i][j - 1])
            if (dp[i][j] > profit) {
                profit = dp[i][j]
                buyIn = i
                sellOut = j
            }
        }
    }
    return profit
}

// 6. 最小路径和

export const getShortestPath = (matrix: number[][]) => {
    const m = matrix.length
    const n = matrix[0].length
    const dp = new Array(m)
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(0)
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i > 0 && j > 0) {
                if (dp[i][j - 1] < dp[i - 1][j]) {
                    console.log(`from: [${i},${j - 1}] to: [${i},${j}]`)
                } else {
                    console.log(`from: [${i - 1},${j}] to: [${i},${j}]`)
                }
                dp[i][j] = matrix[i][j] + Math.min(dp[i][j - 1], dp[i - 1][j])
            } else if (i > 0) {
                console.log(`from: [${i - 1},${j}] to: [${i},${j}]`)
                dp[i][j] = matrix[i][j] + dp[i - 1][j]
            } else if (j > 0) {
                console.log(`from: [${i},${j - 1}] to: [${i},${j}]`)
                dp[i][j] = matrix[i][j] + dp[i][j - 1]
            } else {
                console.log(`start from: [${i},${j}]`)
                dp[i][j] = matrix[i][j]
            }
        }
    }
    return dp[m - 1][n - 1]
}

// 5. 最长回文子串
export const getLongestSubstring = (str: string) => {
    let maxDiff = -1,
        low = 0,
        high = 0,
        count = 0
    const dp = new Array(str.length)
    for (let i = 0; i < str.length; i++) {
        dp[i] = new Array(str.length).fill(false)
    }
    for (let j = 0; j < str.length; j++) {
        for (let i = 0; i <= j; i++) {
            if (str[i] === str[j] && (j - i <= 1 || dp[i + 1][j - 1])) {
                dp[i][j] = true
                count++
                if (j - i > maxDiff) {
                    maxDiff = j - i
                    low = i
                    high = j
                }
            }
        }
    }
    const result = str.slice(low, high + 1)
    console.log({ low, high, maxLength: maxDiff + 1, result, count })
    return result
}

// 4. 回文子串计数

export const countSubstrings = function (s: string) {
    const len = s.length
    let count = 0
    const dp = new Array(len)

    for (let i = 0; i < len; i++) {
        dp[i] = new Array(len).fill(false)
    }
    for (let j = 0; j < len; j++) {
        for (let i = 0; i <= j; i++) {
            if (s[i] == s[j] && (j - i <= 1 || dp[i + 1][j - 1])) {
                dp[i][j] = true
                console.log(`countSubstrings i: ${i}, j: ${j}`)
                count++
            } else {
                dp[i][j] = false
            }
        }
    }
    console.log(`countSubstrings: ${count}\n`)
    return count
}

// 3. 最大子序和
export const maxSubArray2 = function (nums: number[]) {
    let max = nums[0],
        pre = 0
    for (const num of nums) {
        if (pre > 0) {
            pre += num
        } else {
            pre = num
        }
        max = Math.max(max, pre)
    }
    return max
}

export const maxSubArray1 = (arr: number[]) => {
    let maxSum = 0
    for (let j = 0; j < arr.length; j++) {
        let subMax = arr[j]
        let k = 0
        while (k <= j) {
            let sum = 0
            for (let i = k; i <= j; i++) {
                sum += arr[i]
            }
            subMax = Math.max(subMax, sum)
            maxSum = Math.max(maxSum, subMax)
            k++
        }
    }
    return maxSum
}

// 2. 买卖股票

// 最多只允许完成一笔交易（动态规划）
export const buyStocks1 = function (prices) {
    let max = 0,
        minprice = prices[0]
    for (let i = 1; i < prices.length; i++) {
        minprice = Math.min(prices[i], minprice)
        max = Math.max(max, prices[i] - minprice)
    }
    return max
}

// 允许完成多笔交易
export const buyStocks2 = (prices: number[]) => {
    const cache: number[][] = new Array(prices.length)
    const cache2: number[][] = []
    for (let i = 0; i < prices.length - 2; i++) {
        for (let j = i + 1; j < prices.length - 1; j++) {
            const profit = prices[j] - prices[i]
            if (profit > 0) {
                if (_.isNil(cache[i])) {
                    cache[i] = new Array(prices.length)
                }
                cache[i][j] = profit
                cache2.push([i, j])
            }
        }
    }

    let maxProfit = 0
    let maxStrategy = []
    for (let i = 0; i < cache2.length; i++) {
        // console.log(`${i}: ${cache2[i]}`)
        const strategy = []
        let i1 = cache2[i][0]
        let j1 = cache2[i][1]
        let profit = cache[i1][j1]
        strategy.push(i1, j1)
        for (let j = i + 1; j < cache2.length; j++) {
            const i2 = cache2[j][0]
            const j2 = cache2[j][1]
            if (i2 > j1) {
                profit += cache[i2][j2]
                i1 = i2
                j1 = j2
                strategy.push(i2, j2)
            }
        }
        if (profit > maxProfit) {
            maxStrategy = strategy
            maxProfit = profit
        }
        if (profit === 12) {
            // 测试用
            const strategyPrices = strategy.map(k => prices[k])
            console.log('strategy:', strategy, 'strategyPrices:', strategyPrices, 'profit:', profit)
        }
    }
    const strategyPrices = maxStrategy.map(k => prices[k])
    console.log('max strategy:', maxStrategy, 'max strategy prices:', strategyPrices, 'max profit:', maxProfit)
    return maxProfit
}

// 1. 走楼梯

export const minCostClimbingStairs1 = function (cost) {
    cost.push(0)
    const dp = [],
        n = cost.length
    dp[0] = cost[0]
    dp[1] = cost[1]
    for (let i = 2; i < n; i++) {
        dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i]
    }
    return dp[n - 1]
}

export const minCostClimbingStairs2 = (costs: number[]) => {
    let sum = 0
    for (let i = -1; i < costs.length - 1; ) {
        const next1stCost = costs[i + 1]
        const next2ndCost = costs[i + 2]
        if (next1stCost < next2ndCost) {
            sum += next1stCost
            i++
        } else {
            sum += next2ndCost
            i += 2
        }
    }
    return sum
}

export const climbStairs2 = (n: number) => {
    const cache = {}
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }
    cache[1] = 1
    cache[2] = 2
    for (let i = 3; i < n; i++) {
        cache[i] = cache[i - 1] + cache[i - 2]
    }
    return cache[n - 1] + cache[n - 2]
}

export const climbStairs1 = function (n: number) {
    let res = 1,
        n1 = 1,
        n2 = 1
    for (let i = 2; i <= n; i++) {
        res = n1 + n2
        n1 = n2
        n2 = res
    }
    return res
}
