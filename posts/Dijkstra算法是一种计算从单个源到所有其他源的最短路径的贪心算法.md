---
title: Dijkstra算法是一种计算从单个源到所有其他源的最短路径的贪心算法
description: Dijkstra算法是一种计算从单个源到所有其他源的最短路径的贪心算法
date:  2021-11-09
tags:
  - 数据结构与算法
---

```javascript
const graph = [
    //A,B, C, D, E, F
    [0, 2, 4, 0, 0, 0],//A
    [0, 0, 2, 4, 2, 0],//B
    [0, 0, 0, 0, 3, 0],//C
    [0, 0, 0, 0, 0, 2],//D
    [0, 0, 0, 3, 0, 2],//E
    [0, 0, 0, 0, 0, 0]//F
]
const INF = Number.MAX_SAFE_INTEGER
function dijkstra(graph, src) {
    const dist = []
    const visited = []
    const { length } = graph
 
    for (let i = 0; i < length; i++) {
        dist[i] = INF
        visited[i] = false
    }
    dist[src] = 0
    for (let i = 0; i < length - 1; i++) {
 
        const u = minDistance(dist, visited)
        visited[u] = true
 
        for (let v = 0; v < length; v++) {
            if (!visited[v] && graph[u][v] !== 0 && dist[u] !== INF && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v]
            }
        }
    }
 
    return dist
}
function minDistance(dist, visited) {
    let min = INF
    let minIndex = -1
    const len = dist.length
    for (let i = 0; i < len; i++) {
        if (!visited[i] && dist[i] <= min) {
            min = dist[i]
            minIndex = i
        }
    }
 
    return minIndex
}
 
console.log(dijkstra(graph, 0));
 
// a,b,c,d,e,f 
// 0,2,4,x,x,x visit a
// 0,2,4,6,4,x visit a,b
// 0,2,4,6,4,6 visit a,b,e
// 0,2,4,6,4,6 visit a,b,e,c
// 0,2,4,6,4,6 visit a,b,e,c,f
```