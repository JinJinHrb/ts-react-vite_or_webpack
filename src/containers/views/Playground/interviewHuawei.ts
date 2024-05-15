// 面试题 START

export const testInterview = () => {
	console.log('走台阶：', steps(50))
	alert('OK')
}

export const isPrime = (n: number) => {
	if (n <= 1) {
		return false
	}
	if (n <= 3) {
		return true
	}
	if (n % 2 === 0 || n % 3 === 0) {
		return false
	}
	for (let i = 5; (i ^ 2) <= n; i += 6) {
		if (n % i === 0 || n % (i + 2) === 0) {
			return false
		}
	}
	return true
}

// 2, 3, 4
/* export const steps = (n: number) => {
    const dp = new Array(n + 1).fill(0)
    dp[2] = 1
    dp[3] = 1
    dp[4] = 1
    for (let i = 2; i <= n; i++) {
        if (i > 2) {
            dp[i] += dp[i - 2]
        }
        if (i > 3) {
            dp[i] += dp[i - 3]
        }
        if (i > 4) {
            dp[i] += dp[i - 5]
        }
    }
    return dp[n]
} */

export const steps = (n: number) => {
	const dp = new Array(n).fill(0)
	dp[0] = 1
	dp[2] = 1
	for (let i = 1; i < n; i++) {
		dp[i] += dp[i - 1]
		if (i > 2) {
			dp[i] += dp[i - 3]
		}
	}
	return dp[n - 1]
}

// https://leetcode.cn/problems/min-cost-climbing-stairs/description/
/**
 * @param {number[]} cost
 * @return {number}
 */
export const minCostClimbingStairs = function (cost) {
	const n = cost.length
	const dp = new Array(n).fill(0)
	dp[0] = cost[0]
	dp[1] = cost[1]
	for (let i = 2; i < n; i++) {
		dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i])
	}
	return Math.min(dp[n - 1], dp[n - 2])
}

export const digitSum = maxSize => {
	// digitSums数组的索引是原始数，值是原始数对应的数位和
	const res = new Array(maxSize).fill(0)

	for (let i = 0; i < maxSize; i++) {
		let num = i
		while (num > 0) {
			res[i] += num % 10
			num = Math.floor(num / 10)
		}
	}

	return res
}
