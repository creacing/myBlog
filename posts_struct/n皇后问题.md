---
title: leetcode 51 n皇后问题 I 和 II
description: 
date: 2022-3-18
tags:
  - 回溯法
---
```javascript
var solveNQueens = function (n) {
    //Quee 在每一行的位置
    const position = []
    //输出结果
    const result = []
    //回溯法
    function dfs(x) {
        //剪枝条件
        if (x === n) {
            //resItem 每种结果中的每一行
            let resItem = []
            for (let i = 0; i < n; i++) {
                resItem.push('.')
            }
            //res 为每种结果
            let res = []
            for (const e of position) {
                resItem[e] = 'Q'
                res.push(resItem.join(''))
                resItem[e] = '.'
            }
            result.push(res)
            return
        }
        //判断每一行每一个节点是否符合
        for (let y = 0; y < n; y++) {
            if (check(x, y)) {
                position[x] = y
                dfs(x + 1)
                position[x] = 0
            }
        }
    }

    //判断第row 行queue能否放在第i列上
    function check(x, y) {
        //默认每行只有一个
        for (let row = 0; row < x; row++) {
            //row < x 判断到x（当前行）行为止
            const column = position[row]//获取之前每一行的列值
            //判断是否在一列
            if (column === y) return false
            //判断是否在一右上对角线 右上对角线 横纵坐标和相同
            if (row + column === x + y) return false
            //判断是否在一右下对角线 右下对角线 横纵坐标差相同
            if (row - column === x - y) return false

        }
        return true
    }

    dfs(0)


    return result

};

console.log(solveNQueens(4));

// [
//     ['.Q..', '...Q', 'Q...', '..Q.'],
//     ['..Q.', 'Q...', '...Q', '.Q..']
// ]

```