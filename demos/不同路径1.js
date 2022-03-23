//62不同路径
//方法一  回溯法 超时
// var uniquePaths = function(m, n) {
//     //初始化
//     const dp = []
//     for (let i = 0; i < m; i++) {
//         dp[i] = []
//         for (let j = 0; j < n; j++) {
//             dp[i][j] = 0
//         }
//     }
//     dp[0][0] = 1
//     let count = 0
//     const dfs = (x, y) => {
//         //剪枝
//         if (x === m - 1 && y === n - 1) {
//             count++
//             return
//         }

//         if (x < m - 1 && !dp[x + 1][y]) {
//             dp[x + 1][y] = 1
//             dfs(x + 1, y)
//             dp[x + 1][y] = 0
//         }

//         if (y < n - 1 && !dp[x][y + 1]) {
//             dp[x][y + 1] = 1
//             dfs(x, y + 1)
//             dp[x][y + 1] = 0
//         }
//     }

//     dfs(0, 0)

//     return count
// };
// console.log(uniquePaths(23, 12));
// 193536720
//方法二 动态规划法
var uniquePaths = function(m, n) {
    const store = []
    for (let i = 0; i < m; i++) {
        store[i] = []
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                store[i][j] = 1
            } else {
                store[i][j] = store[i - 1][j] + store[i][j - 1]
            }
        }
    }
    return store[m - 1][n - 1]
};
// 193536720

console.log(uniquePaths(23, 12));

// [1] + [1] = ?
// '11'