import _ from 'lodash'

// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

// 算法的时间复杂度应该为 O(log (m+n)) 。

// 示例 1：
// 输入：nums1 = [1,3], nums2 = [2]
// 输出：2.00000
// 解释：合并数组 = [1,2,3] ，中位数 2

// 示例 2：
// 输入：nums1 = [1,2], nums2 = [3,4]
// 输出：2.50000
// 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5

export const findMedianSortedArrays = function (nums1: number[], nums2: number[]) {
    const sum = nums1.length + nums2.length
    const isOdd = sum % 2 === 1
    // 先分两堆，一堆小于标杆、一堆大于标杆
    const sortFunc = (arr: number[], lowerIndex: number, higherIndex: number) => {
        const std = arr[lowerIndex]
        let i = lowerIndex,
            j = higherIndex
        while (i < j) {
            while (i < j && std < arr[j]) {
                j--
            }
            if (i < j) {
                arr[i] = arr[j]
                i++
            }
            while (i < j && arr[i] <= std) {
                i++
            }
            if (i < j) {
                arr[j] = arr[i]
                j--
            }
        }
        arr[i] = std
        if (lowerIndex < j - 1) {
            sortFunc(arr, lowerIndex, j - 1)
        }
        if (j + 1 < higherIndex) {
            sortFunc(arr, j + 1, higherIndex)
        }
        return arr
    }
    const sorted = sortFunc([...nums1, ...nums2], 0, sum - 1)
    return isOdd ? sorted[(sum - 1) / 2] : (sorted[sum / 2] + sorted[sum / 2 - 1]) / 2
}

// 给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。
// 每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:

// 0 <= j <= nums[i]
// i + j < n
// 返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。

//

// 示例 1:
// 输入: nums = [2,3,1,1,4]
// 输出: 2

// 解释: 跳到最后一个位置的最小跳跃数是 2。
//      从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
// 示例 2:
// 输入: nums = [2,3,0,1,4]
// 输出: 2

export const jumpGame2 = (nums: number[]) => {
    const dp = new Array(nums.length)
    for (let i = 0; i < nums.length; i++) {
        dp[i] = new Set()
    }
    dp[0].add(0)
    for (let i = 0; i < nums.length; i++) {
        const nextMaxSteps = nums[i]
        const k = nextMaxSteps + i > nums.length - 1 ? nums.length - 1 - i : nextMaxSteps
        for (const key of dp[i]) {
            // 用 key 步可以跳到 i
            for (let j = k; j > 0; j--) {
                dp[i + j].add(key + 1)
            }
        }
    }
    let minStep = 0
    for (const key of dp[nums.length - 1]) {
        if (minStep === 0) {
            minStep = key
        } else if (minStep > key) {
            minStep = key
        }
    }
    return minStep
}

// 11. 青蛙过河
// 一只青蛙想要过河。 假定河流被等分为若干个单元格，并且在每一个单元格内都有可能放有一块石子（也有可能没有）。 青蛙可以跳上石子，但是不可以跳入水中。
// 给你石子的位置列表 stones（用单元格序号 升序 表示）， 请判定青蛙能否成功过河（即能否在最后一步跳至最后一块石子上）。
// 开始时， 青蛙默认已站在第一块石子上，并可以假定它第一步只能跳跃一个单位（即只能从单元格 1 跳至单元格 2 ）。
// 如果青蛙上一步跳跃了 k 个单位，那么它接下来的跳跃距离只能选择为 k - 1、k 或 k + 1 个单位。 另请注意，青蛙只能向前方（终点的方向）跳跃。

// 示例 1：
// 输入：stones = [0,1,3,5,6,8,12,17]
// 输出：true
// 解释：青蛙可以成功过河，按照如下方案跳跃：跳 1 个单位到第 2 块石子, 然后跳 2 个单位到第 3 块石子, 接着 跳 2 个单位到第 4 块石子, 然后跳 3 个单位到第 6 块石子, 跳 4 个单位到第 7 块石子, 最后，跳 5 个单位到第 8 个石子（即最后一块石子）。

// 示例 2：
// 输入：stones = [0,1,2,3,4,8,9,11]
// 输出：false
// 解释：这是因为第 5 和第 6 个石子之间的间距太大，没有可选的方案供青蛙跳跃过去。
export const frogCrossRiver = (stones: number[]) => {
    // dp[i][key] === true 代表跳到 i 要 key 步
    // 0 只有 0
    const dp = new Array(stones.length)
    for (let i = 0; i < stones.length; i++) {
        dp[i] = {}
    }
    dp[0][0] = true
    for (let i = 0; i < stones.length; i++) {
        const keys = Object.keys(dp[i]).map(a => parseInt(a))
        for (const key of keys) {
            if (isNaN(key)) {
                continue
            }
            // key: 走到 i 需要 第 x 步
            for (let j = i + 1; j < stones.length; j++) {
                const diff = stones[j] - stones[i]
                if (diff > key + 1) {
                    break
                }
                if (Math.abs(diff - key) <= 1) {
                    dp[j][diff] = true
                }
            }
        }
    }
    console.log(dp)
    return Object.keys(dp[stones.length - 1]).length > 0
}

// 10. 跳跃游戏
// 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个下标。

// 示例 1：
// 输入：nums = [2,3,1,0,4]
// 输出：true
// 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。

// 示例 2：
// 输入：nums = [3,2,1,0,4]
// 输出：false
// 解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。

export const jumpGame = (nums: number[]) => {
    if (nums.length < 2) {
        if (nums.length < 1) {
            return false
        }
        return true
    }
    const dp: number[] = []
    dp[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] - 1, nums[i])
    }
    console.log(dp)
    return dp[nums.length - 2] > 0
}

// 9. 背包问题
// 01背包问题（01 knapsack problem）：
// 一共有N件物品，第i（i从1开始）件物品的重量为w[i]，价值为v[i]。在总重量不超过背包承载上限W的情况下，能够装入背包的最大价值是多少？

// 空间优化
export const packStrategy2 = (values: number[], weights: number[], weightLimit: number) => {
    // 状态转移方程 dp[i][j]表示将前i件物品装进限重为j的背包可以获得的最大价值, 0<=i<=N, 0<=j<=W
    // dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-weight[i]] + values[i])
    // const n = values.length - 1
    const dp: number[] = new Array(weightLimit + 1).fill(0)
    for (let i = 0; i < values.length; i++) {
        for (let j = weightLimit; j >= weights[i]; j--) {
            if (i === 0) {
                dp[j] = values[i]
            } else {
                dp[j] = Math.max(dp[j], dp[j - weights[i]] + values[i])
            }
        }
    }
    // console.log('packStrategy:', dp)
    return dp[weightLimit]
}

export const packStrategy = (values: number[], weights: number[], weightLimit: number) => {
    // 状态转移方程 dp[i][j]表示将前i件物品装进限重为j的背包可以获得的最大价值, 0<=i<=N, 0<=j<=W
    // dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-weight[i]] + values[i])
    // const n = values.length - 1
    const dp: number[][] = []
    for (let i = 0; i < values.length; i++) {
        dp.push(new Array(weightLimit + 1).fill(0))
    }
    for (let i = 0; i < values.length; i++) {
        for (let j = weights[i]; j <= weightLimit; j++) {
            if (i === 0) {
                dp[i][j] = values[i]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i]] + values[i])
            }
        }
    }
    // console.log('packStrategy:', dp)
    return dp[values.length - 1][weightLimit]
}

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

// 最长回文子串
export const getLongestSubstring2 = (str: string) => {
    let longest = 1
    const dp = new Array(str.length)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(str.length).fill(false)
        dp[i][i] = true
        if (i > 0 && str[i - 1] === str[i]) {
            longest = 2
            dp[i - 1][i] = true
        }
    }
    for (let i = 1; i < str.length; i++) {
        for (let j = 1; i - j > -1 && i + j < str.length; j++) {
            const ranges = [[i - j, i + j]]
            if (j > 1) {
                ranges.push([i - j, i + j - 1])
                ranges.push([i - j + 1, i + j])
            }
            for (const range of ranges) {
                const lowerIndex = range[0]
                const upperIndex = range[1]
                if (dp[lowerIndex + 1][upperIndex - 1] && str[lowerIndex] === str[upperIndex]) {
                    if (longest < upperIndex - lowerIndex + 1) {
                        longest = upperIndex - lowerIndex + 1
                    }
                    dp[lowerIndex][upperIndex] = true
                }
            }
        }
    }
    return longest
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
