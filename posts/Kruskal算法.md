---
title: Kruskal算法
description: Kruskal算法
date: 2022-03-12
tags:
  - 数据结构与算法
---

```javascript
const graph = [
    /**
*   A, B, C, D, E, F
*   0, 1, 2, 3, 4 ,5
    **/
    [0, 2, 4, 0, 0, 0],//0 A     
    [2, 0, 2, 4, 2, 0],//1 B
    [4, 2, 0, 0, 3, 0],//2 C
    [0, 4, 0, 0, 3, 2],//3 D
    [0, 2, 3, 3, 0, 2],//4 E
    [0, 0, 0, 2, 2, 0] //5 F
]
 
 
function kruskal(graph) {
    const { length } = graph
    const parent = []
    let count = 0 //边
    let a, b
 
    const grapCopy = JSON.parse(JSON.stringify(graph))
 
    while (count < length - 1) {
 
        //找出权值最小的边
        for (let i = 0, min = Number.MAX_SAFE_INTEGER; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (grapCopy[i][j] < min) {
                    min = grapCopy[i][j]
                    a = u = i
                    b = v = j
                }
            }
        }
 
        if ((!parent.includes(a) || !parent.includes(b)) && a !== b) {
            parent[b] = a
            // !parent.includes(a) ? parent.push(a) : null
            // !parent.includes(b) ? parent.push(b) : null
            console.log('a -> b:', a, '->', b);
            count++
        }
 
 
 
 
        grapCopy[a][b] = grapCopy[b][a] = Number.MAX_SAFE_INTEGER
    }
    return parent
}
 
console.log(kruskal(graph));
```




