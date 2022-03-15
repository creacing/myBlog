---
title: DFS递归求解 电话号码的字母组合
description:
date: 2021-05-17
tags:
  - javascript
---

```javascript
//找所有的解 ------ 搜索算法 ------ 深度优先/广度优先
 
//深度优先
const dic = {
    0: ' ',
    1: '',
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
 
}
 
var letterCombinations = function (digits) {
    const result = []
    let str = ''
    const len = digits.length
    if (len < 1) return []
 
    handle(digits, index = 0, result, str)
 
    return result
};
 
function handle(digits, index, result, str) {
    let self = str // 保存一个str 的备份
    if (index === digits.length) {
        result.push(str)
        return
    }  //递归终止条件
    const digit = digits[index] //遍历digits
    const letters = dic[digit] //查找字典
    for (const e of letters) {//遍历对应的字母 a b c
        str += e
        handle(digits, index + 1, result, str)
        str = self //重置str
    }
}
 
console.log(letterCombinations('23'));
```