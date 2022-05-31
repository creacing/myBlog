---
title: 深入浅出vue.js笔记
description: dom 更新 vm.$nextTick setTimeout
date: 2022-5-28
tags:
  - vue
---
### 下次dom更新之后执行是指

在vue.js中当状态发生变化 watcher 会得到通知 然后触发虚拟dom 的渲染流程
而watch触发渲染这个操作并不是同步的 而是异步的
vue.js 中有一个队列 每当需要渲染的时候 会将watcher推送到这个队列中
在下一次事件循环中再让watcher触发渲染的流程

### 为什么vue.js使用异步更新队列
vue.js2.0开始使用虚拟dom进行渲染
变化侦测的通知发送到组件
组件内的所有状态的变化都会通知到一个watcher
然后虚拟dom会对整个组件进行比对并更改dom

如果同一轮事件循环中有两个数据发生变化组件watcher会收到两份通知
虚拟dom会对整个组件进行渲染所以只需要等多有状态都修改完毕后
一次性将整个组件的dom渲染到最新即可

### 解决这个问题的方法
vue.js实现方式是将收到通知的watcher实例添加到队列缓存起来
并在添加到队列之前检查其中是否已经存在相同的watcher
只有在不存在的时候才将watcher实例添加到队列中
然后再下一次事件循环中
vue.js会让队列中的watcher触发渲染流程并且清空队列
这样可以保证给即使再同一个事件循环中有两个状态发生变化watcher最后也只执行一次渲染流程

### 总结

状态改变 ----> 通知watcher ----> 异步触发虚拟dom渲染
vue.js2.x 状态改变 ----> 通知组件 ----> 通知watcher ----> 队列缓存watcher(保证唯一) ----> 下一次事件循环vue触发watcher并清空队列 ----> 触发虚拟dom渲染

### 事件循环 宏任务 微任务
微任务
Promise.then
MutationObserver
Object.observe
process.nextTick

宏任务
setTimeout
setInterval
setImmediate
messageChannel
requestAnimationFrame
i/o
ui交互事件

### 下次DOM更新周期
下次dom更新周期是指其实是指下次微任务执行时更新dom
vm.$nextTick 其实时将回调添加到微任务中 只有再特殊情况下才会降级成为宏任务
默认会添加到微任务中
因此如果使用vm.$nextTick来获取更新后的dom则需要注意顺序的问题
不论是更新dom的回调还是使用vm.$nextTick注册的回调都是在向微任务队列中添加任务
所以哪个任务先添加到队列中就先执行哪个任务

事实上更新dom的回调也是使用vm.$nextTick来注册到微任务中

如果想在 [vm.$nextTick] 中获取更新后的dom  则一定要在更改数据的后面使用[vm.$nexTick] 注册回调


如果是先使用 [vm.$nextTick] 注册回调 然后修改数据 则在微任务队列中先执行使用

### 优先级 
在事件循环中 必须当前微任务队列中的事件都执行完成后
才会从宏任务队列中取出一个事件执行下一轮
所以添加到微任务队列中的任务的执行时机优先于向宏任务队列中添加的任务

修改数据会默认将更新的dom 的回调添加到微任务队列中
(更新dom的回调是微任务)

setTimeout 属于宏任务 使用setTimeout 注册的回调函数会加入到宏任务中 
宏任务的执行要比微任务晚
所以即使是先注册也是先更新dom后执行setTimeout中的回调


### 总结
vm.$nextTick 和 修改数据导致的dom更新同属于 微任务 所以vm.$nextTick 要在更改数据后面 注册回调
而setTimeout 是宏任务一定慢于微任务执行 所以无论于 更改数据前后设置都会 于dom更新之后执行


### 存储
由于vm.$nextTick 会将回调添加到任务队列中延迟执行 
在回调执行之前反复调用vm.$nextTick vue 只会向任务队列中添加一个任务
vue.js 