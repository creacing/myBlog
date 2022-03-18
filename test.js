var solveNQueens = function (n) {
    const position = []
    const result = []
    function dfs(x) {
        if (x === n) {
            const res = []
            const resItem = []
            for (let i = 0; i < n; i++) {
                resItem[i] = '.'
            }
            for (const e of position) {
                resItem[e] = 'Q'
                res.push(resItem.join(''))
                resItem[e] = '.'
            }
            result.push(res)

            return
        }


        for (let y = 0; y < n; y++) {
            if (check(x, y)) {
                position[x] = y
                dfs(x + 1)
                position[x] = 0
            }

        }

    }
    function check(x, y) {
        for (let row = 0; row < x; row++) {
            const column = position[row]
            if (column === y) return false
            if (row + column === x + y) return false
            if (row - column === x - y) return false
        }
        return true
    }
    dfs(0)
    return result.length
};

console.log(solveNQueens(4));

// [
//     ['.Q..', '...Q', 'Q...', '..Q.'],
//     ['..Q.', 'Q...', '...Q', '.Q..']
// ]