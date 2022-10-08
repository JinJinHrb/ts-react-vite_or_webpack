//  1-n^2 顺时针顺序排列
export const nSquareMatrx = (n: number) => {
    let lowX = 0,
        heighX = n - 1,
        lowY = 0,
        heighY = n - 1,
        direction = 0 // 0: 向右, 1: 向下, 2: 向左，3: 向上
    const matrx = []
    for (let i = 0; i < n; i++) {
        matrx[i] = new Array(n).fill(0)
    }
    let count = 1
    while (lowX <= heighX && lowY <= heighY) {
        if (direction % 2 === 0) {
            // 水平移动
            if (direction === 0) {
                for (let i = lowX; i <= heighX; i++) {
                    matrx[lowY][i] = count++
                }
                lowY++
            } else {
                for (let i = heighX; i >= lowX; i--) {
                    matrx[heighY][i] = count++
                }
                heighY--
            }
        } else {
            // 垂直移动
            if (direction === 1) {
                for (let i = lowY; i <= heighY; i++) {
                    matrx[i][heighX] = count++
                }
                heighX--
            } else {
                for (let i = heighY; i >= lowY; i--) {
                    matrx[i][lowX] = count++
                }
                lowX++
            }
        }
        direction = ++direction % 4
    }
    return matrx
}
