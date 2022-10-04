// 9. 给定一个非负整数数组 nums 和一个整数 m ，你需要将这个数组分成 m 个非空的连续子数组。
// 设计一个算法使得这 m 个子数组各自和的最大值最小。
// 输入：nums = [7,2,5,10,8], m = 2
// 输出：18

import _ from 'lodash'

export const getMinSubArrSum = (nums: number[], m: number) => {
    const record: [number, number[][]] = [Infinity, []] // 和, 二维数组
    const numsArr: number[][] = []
    numsArr.push(nums)
    for (let i = 0; i < m - 1; i++) {
        numsArr.push([])
    }
    const noDup: { [k: string]: boolean } = {}
    getMinDf(numsArr, m, record, noDup)
    console.log('getMinSubArrSum sum:', record[0], 'arrange:', record[1])
    return record[0]
}

export const getMinDf = (numsArr: number[][], m: number, record: [number, number[][]], noDup) => {
    const nums = numsArr[0]
    let subMax = 0
    const noDupArr = []
    for (let i = 0; i < numsArr.length; i++) {
        const numsI = numsArr[i]
        const sum = numsI.reduce((s, a) => s + a, 0)
        if (subMax < sum) {
            subMax = sum
        }
        noDupArr.push(sum)
    }
    const noDupKey = noDupArr.sort().join(',')
    if (noDup[noDupKey]) {
        return
    } else {
        noDup[noDupKey] = true
    }
    if (subMax < record[0]) {
        record[0] = subMax
        record[1] = numsArr
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < m; j++) {
            const numsArr2 = _.cloneDeep(numsArr)
            const nums2 = numsArr2[0]
            const leftNums = nums2.splice(i, 1)
            numsArr2[j].push(...leftNums)
            getMinDf(numsArr2, m, record, noDup)
        }
    }
}

// 2. 生成括号
export const generateParenthesis = n => {
    const res = []
    dfs(n, '', 0, 0, res)
    return res
}

const dfs = (n: number, path, left, right, result) => {
    // 肯定不合法，提前结束
    if (left > n || left < right) return
    // 到达结束条件
    if (left + right === 2 * n) {
        result.push(path)
        return
    }
    // 选择
    dfs(n, path + '(', left + 1, right, result)
    dfs(n, path + ')', left, right + 1, result)
}

// 1. 全排列
export const permutate = (arr: unknown[]) => {
    const cache: { [k: string]: boolean } = {}
    const result = []
    perDfs(arr, 0, cache, result)
    console.log(`permutate counts: ${result.length}`)
    return result
}

const perDfs = (arr: unknown[], depth: number, cache: { [k: string]: boolean }, result: unknown[]) => {
    for (let i = depth; i < arr.length; i++) {
        const subArr = []
        arr.forEach(k => {
            subArr.push(k)
        })
        const tmp = subArr[i]
        subArr[i] = subArr[depth]
        subArr[depth] = tmp
        const key = subArr.slice(0, depth + 1).join(',')
        if (!cache[key]) {
            cache[key] = true
            if (depth > arr.length - 2) {
                result.push(subArr)
            } else {
                perDfs(subArr, depth + 1, cache, result)
            }
        }
    }
}
