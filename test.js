var spiralOrder = function (matrix) {
    const rowLen = matrix.length
    const columnLen = matrix[0].length
    let up = 0, left = 0, down = rowLen - 1, right = columnLen - 1
    const res = []

    while (true) {
        for (let i = left; i <= right; i++) res.push(matrix[up][i])
        if (++up > down) break

        for (let i = up; i <= down; i++) res.push(matrix[i][right])
        if (--right < left) break

        for (let i = right; i >= left; i--) res.push(matrix[down][i])
        if (--down < up) break

        for (let i = down; i >= up; i--) res.push(matrix[i][left])
        if (++left > right) break
    }
    return res
}




console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));