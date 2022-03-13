---
title: 计数排序算法
description: 计数排序算法
date: 2021-10-27
tags:
  - 数据结构与算法
---

```javascript
//计数
 
 
function countingSort(array) {
    if (array.length < 2) {
        return array
    }
    //找出最大值
    const maxValue = findMaxValue(array)
    //声明一个数组 
    //将需要进行排序的数组的value 映射到另一个数组的index
    const counts = new Array(maxValue + 1)
 
    array.forEach(element => {
        if (!counts[element]) {
            counts[element] = 0
        }
 
        counts[element]++
 
    });
 
    console.log('counts', counts);
    //根据映射后的数组的index和value(value为该index出现的次数)
    //由此生成排序好的array数组
    let sortIndex = 0
    counts.forEach((count, i) => {
 
        while (count > 0) {
            array[sortIndex++] = i
            count--
        }
 
    })
 
    return array
}
 
function findMaxValue(array) {
    let max = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}
 
console.log(countingSort([5, 4, 3, 2, 1]));
```