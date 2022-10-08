import _ from 'lodash'
import { packStrategy } from './backTrack'
import { packStrategy as packStrategyDp, packStrategy2 as packStrategyDp2 } from './dp'
import { nSquareMatrx } from './matrx'

export const testDp = () => {
    // 1. 走楼梯
    // const result = climbStairs(10)

    // 2. 买卖股票
    // [7, 1, 5, 3, 6, 4], [7, 1, 5, 3, 6, 4, 3, 8, 9, 12, 13, 8, 7]
    /* const result = [
        buyStocks1([7, 1, 5, 3, 6, 4, 3, 8, 9, 12, 13, 8, 7]),
        buyStocks2([7, 1, 5, 3, 6, 4, 3, 8, 9, 12, 13, 8, 7])
    ] */

    // 3. 最大子序和
    // const result = maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4])

    // 4. 回文子串计数
    // const result = countSubstrings('aaa')
    // const result = countSubstrings('xlslskdksoijwoi')

    // 5. 最长回文子串
    // const result = getLongestSubstring('aaa')
    // const result = getLongestSubstring('xlslskdksoijwoi')

    // 6. 最小路径和
    /* const result = getShortestPath([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
    ]) */

    // const result = getShortestPath([
    //     [1, 2, 3],
    //     [4, 5, 6]
    // ])

    // const result = getMaxProfit1([7, 1, 5, 3, 6, 4])
    // const result = getMaxProfit2([7, 1, 5, 3, 6, 4])

    // const result = permutate(['a', 'b', 'c', 'd'])

    // const result = getMinSubArrSum([7, 2, 5, 10, 8], 2)
    // const result = getMinSubArrSum([1, 2, 3, 4, 5], 2)
    // const result = getMinSubArrSum([1, 4, 4], 3)

    // const result = packStrategy([50, 80, 30, 20, 70, 40, 35], [7, 9, 13, 15, 8, 3, 5], 40)
    // const result = packStrategyDp([50, 80, 30, 20, 70, 40, 35], [7, 9, 13, 15, 8, 3, 5], 40)
    // const result = packStrategyDp2([50, 80, 30, 20, 70, 40, 35], [7, 9, 13, 15, 8, 3, 5], 40)

    const result = nSquareMatrx(4)
    console.log(result)
    alert(_.isObjectLike(result) ? JSON.stringify(result) : result)
}
