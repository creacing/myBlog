---
title: DFS和BFS实现
description: DFS和BFS实现
date: 2021-11-09
tags:
  - BFS_DFS
---

```javascript
class Graph {
    constructor(isDirected) {
        this.vertices = []
        this.adjList = {}
        this.isDirected = isDirected
    }
 
    addVertex(vertex) {
        if (!this.vertices.includes(vertex)) {
            this.vertices.push(vertex)
            this.adjList[vertex] = []
        }
    }
 
    addEdge(v, w) {
        !this.adjList[v] ? this.addVertex(v) : null
        !this.adjList[w] ? this.addVertex(w) : null
 
        this.adjList[v].push(w)
        !this.isDirected ? this.adjList[w].push(v) : null
    }
 
    getVertices() {
        return this.vertices
    }
    getAdjList() {
        return this.adjList
    }
}
 
let graph = new Graph()
 
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
 
for (const e of myVertices) {
    graph.addVertex(e)
}
 
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')
 
const Colors = {
    WHITE: 0,
    GREY: 1,
    BLACK: 2
}
 
function initColor(vertices) {
    const color = {}
 
    for (const vertex of vertices) {
        color[vertex] = Colors.WHITE
    }
 
    return color
}
 
let statrtVertex = myVertices[0]
 
function BFS(graph, statrtVertex) {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initColor(vertices)
    const queue = []
    const distances = {}
    const preValue = {}
 
    queue.push(statrtVertex)
 
    for (const vertex of vertices) {
        distances[vertex] = 0
        preValue[vertex] = null
    }
 
    while (queue.length > 0) {
        const currentVertex = queue.shift()
        color[currentVertex] = Colors.GREY
        const neighbours = adjList[currentVertex]
 
        for (const neighbour of neighbours) {
            if (color[neighbour] === Colors.WHITE) {
                color[neighbour] = Colors.GREY
                distances[neighbour] = distances[currentVertex] + 1
                preValue[neighbour] = currentVertex
                queue.push(neighbour)
            }
        }
 
        color[currentVertex] = Colors.BLACK
    }
 
    return {
        preValue,
        distances
    }
}
 
console.log(BFS(graph, statrtVertex));
 
 
function DFS(graph) {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initColor(vertices)
 
    const discovery = {}
    const finished = {}
    const preValue = {}
    const time = { count: 0 }
 
    for (const vertex of vertices) {
        discovery[vertex] = 0
        finished[vertex] = 0
        preValue[vertex] = null
 
    }
 
    for (const vertex of vertices) {
        color[vertex] === Colors.WHITE ? DFSVisit(vertex, color, discovery, finished, preValue, time, adjList) : null
    }
 
    return {
        discovery,
        preValue,
        finished
    }
}
 
 
function DFSVisit(vertex, color, discovery, finished, preValue, time, adjList) {
    color[vertex] = Colors.GREY
    discovery[vertex] = ++time.count
 
    const neighbours = adjList[vertex]
    for (const neighbour of neighbours) {
        if (color[neighbour] === Colors.WHITE) {
            preValue[neighbour] = vertex
            DFSVisit(neighbour, color, discovery, finished, preValue, time, adjList)
        }
 
    }
 
    color[vertex] = Colors.BLACK
    finished[vertex] = ++time.count
}
 
console.log(DFS(graph));
```