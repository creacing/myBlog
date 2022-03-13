---
title: prim算法
description: prim算法
date: 2021-11-11
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
 
// const graph = [
//     /**
// *   A, B, C, D, E
// *   0, 1, 2, 3, 4
//     **/
//     [0, 3, 1, 0, 0],//0 A     
//     [3, 0, 0, 4, 6],//1 B
//     [1, 0, 0, 2, 7],//2 C
//     [0, 4, 2, 0, 5],//3 D
//     [0, 6, 7, 5, 0],//4 E
// ]
 
const INF = Number.MAX_SAFE_INTEGER
function prim(graph) {
    const parent = []
    const key = []//key数组保存权值最小的边 与迪杰斯特拉不同的是这里保存的是权值最小的边 而迪杰斯特拉保存的是距离
    const visited = []
    const { length } = graph
 
    for (let i = 0; i < length; i++) {
        key[i] = INF
        visited[i] = false
    }
 
    key[0] = 0//起始点到自己的距离为0
    parent[0] = -1
 
    for (let i = 0; i < length - 1; i++) {
 
 
        const u = minKey(key, visited)
        // console.log('u', u); // 0 1 4 5 3
        visited[u] = true
        for (let v = 0; v < length; v++) {
            // console.log('graph[u][v]', graph[u][v]);
            if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) {
                parent[v] = u
                key[v] = graph[u][v]
            }
        }
    }
 
    return {
        key,
        parent
    }
}
 
function minKey(key, visited) {
    let min = INF
    let minIndex = -1
    console.log('key', key);
    for (let vertex = 0; vertex < key.length; vertex++) {
        if (visited[vertex] === false && key[vertex] <= min) {
            min = key[vertex]
            minIndex = vertex
        }
    }
    // console.log('minIndex', minIndex);
    return minIndex
}
 
console.log(prim(graph));
 
 
 
 
//key
// 0 x x x x x
// 0 2 4 x x x
// 0 2 2 4 2 x
// 0 2 2 3 2 2
// 0 2 2 2 2 2
 
 
 
// const graph = [
//     /**
// *   A, B, C, D, E
// *   0, 1, 2, 3, 4
//     **/
//     [0, 3, 1, 0, 0],//0 A     
//     [3, 0, 0, 4, 6],//1 B
//     [1, 0, 0, 2, 7],//2 C
//     [0, 4, 2, 0, 5],//3 D
//     [0, 6, 7, 5, 0],//4 E
// ]
 
 
// 1 2 3 4 5
// 0 x x x x 
// 0f 3 1 x x
 
// 0f 3 1f 2 7
// 0f 3 1f 2f 5
// 0f 3f 1f 2f 5
 
//1->2
//1->3->4->5
```