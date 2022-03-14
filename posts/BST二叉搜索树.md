---
title: BST二叉搜索树
description: 
date: 2021-11-16
tags:
  - BFS
---

```javascript
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
 
class BT {
    constructor() {
        this.root = null
    }
 
    insert(key) {
        this.root === null ? this.root = new Node(key) : this.insertNode(this.root, key)
    }
 
    insertNode(node, key) {
        if (key < node.value) {
            node.left === null ? node.left = new Node(key) : this.insertNode(node.left, key)
        } else {
            node.right === null ? node.right = new Node(key) : this.insertNode(node.right, key)
        }
    }
 
    front() {
        this.handleFront(this.root, (val) => { console.log(val) })
 
    }
    handleFront(node, callBack) {
        if (node !== null) {
            callBack(node.value)
            this.handleFront(node.left, callBack)
            this.handleFront(node.right, callBack)
        }
    }
    mid() {
        this.handleMid(this.root, (val) => { console.log(val) })
    }
    handleMid(node, callBack) {
        if (node !== null) {
            this.handleMid(node.left, callBack)
            callBack(node.value)
            this.handleMid(node.right, callBack)
        }
    }
    after() {
        this.handleAfter(this.root, (val) => { console.log(val) })
    }
    handleAfter(node, callBack) {
        if (node !== null) {
            this.handleAfter(node.left, callBack)
            this.handleAfter(node.right, callBack)
            callBack(node.value)
        }
    }
 
    min(node) {
        let current = node || this.root
        while (current !== null && current.left !== null) {
            current = current.left
 
        }
        return current
    }
    max(node) {
        let current = node || this.root
        while (current !== null && current.right !== null) {
            current = current.right
        }
 
        return current
    }
    search(val) {
        return this.handleSearch(this.root, val)
    }
    handleSearch(node, val) {
        if (node === null) {
            return false
        }
 
        if (val < node.value) {
            return this.handleSearch(node.left, val)
        } else if (val > node.value) {
            return this.handleSearch(node.right, val)
        } else {
 
            return true
        }
    }
    remove(key) {
        return this.root = this.handleRemove(this.root, key)
    }
    handleRemove(node, key) {
        if (node === null) return null
 
        if (key < node.value) {
            node.left = this.handleRemove(node.left, key)
            return node
        } else if (key > node.value) {
            node.right = this.handleRemove(node.right, key)
            return node
        } else {
            if (node.left === null && node.right === null) {
 
                return null
            }
 
            if (node.left === null) {
                return node.right
            } else if (node.right === null) {
                return node.left
            }
            const minInNodeRight = this.min(node.right)
 
            node.value = minInNodeRight.value
            node.right = this.handleRemove(node.right, minInNodeRight.value)
            return node
        }
    }
}
 
const t1 = new BT()
 
t1.insert(11)
t1.insert(7)
t1.insert(15)
t1.insert(5)
t1.insert(3)
t1.insert(9)
t1.insert(8)
t1.insert(10)
t1.insert(13)
t1.insert(12)
t1.insert(14)
t1.insert(20)
t1.insert(18)
t1.insert(25)
t1.insert(6)
 
// t1.mid()
// t1.front()
// t1.after()
 
// console.log(t1.min());
// console.log(t1.max());
 
console.log(t1.remove(11));
 
// console.log(t1.search(1));
// console.log(t1.search(8));
```




