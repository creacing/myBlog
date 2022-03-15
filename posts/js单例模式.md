---
title: js单例模式
description: 
date: 2021-07-5
tags:
  - javascript
---
```javascript
//单例模式的实现 缺点是不够透明需要通过Singleton.getInstance调用
function Singleton(name) {
    this.name = name
}
 
Singleton.prototype.getName = function () {
    return this.name
}
// //方式一 静态方法
Singleton.getInstance = function (name) {
    if (!this.instance) {
        this.instance = new Singleton(name)
    }
    return this.instance
}
 
const a = Singleton.getInstance('sven1')
const b = Singleton.getInstance('sven2')
console.log(a === b);
//方式二 静态方法+闭包
Singleton.getInstance = (function () {
    let instance = null
    return function (name) {
        if (!instance) {
            instance = new Singleton(name)
        }
        return instance
    }
})()
 
const a = Singleton.getInstance('sven1')
const b = Singleton.getInstance('sven2')
console.log(a === b);
 
//透明的单例模式 缺点是如果需要改变需求创建多个对象，需要对构造函数进行修改
const Singleton = (function () {
    let instance = null
    const Singleton = function (name) {
        if (instance) {
            return instance
        }
        this.name = name
 
        return instance = this//this是第一次初始化对象的引用
    }
    Singleton.prototype.getName = function () {
        console.log(this.name);
    }
    return Singleton
})()
 
const a = new Singleton('sven1')
const b = new Singleton('sven2')
console.log(a === b);
a.getName()
b.getName()
 
用代理实现单例模式
const Singleton = function (name) {
    this.name = this.name
}
 
Singleton.prototype.getName = function () {
    console.log(this.name);
}
//引入代理类 IIFE+闭包
const ProxySingleton = (function () {
    let instance = null
    return function (name) {
        if (!instance) {
            instance = new Singleton(name)
        }
        return instance
    }
})()
 
 
const a = new ProxySingleton('sven1')
const b = new ProxySingleton('sven2')
console.log(a === b);
 
// 通过引入代理类的方式，我们同样完成了一个单例模式的编写，
// 跟之前不同的是，现在我们把负责管理单例的逻辑移到了代理类proxySingletonSingleton中。
// 这样一来，Singleton就变成了一个普通的类，
// 它跟proxySingletonSingleton组合起来可以达到单例模式的效果。
 
//通用的惰性单例
 
const getSingle = function (fn) {
    let result = null
    return function () {
        return result || (result = fn.apply(this, arguments))
    }
}
 
const fn1 = function () {
}
 
const fn2 = function () {
}
let foo = getSingle(fn1)//fn
let bar = getSingle(fn2)//fn
let a = foo()
let b = foo()
console.log(a === b);
let c = bar()
let d = bar()
console.log(c === d);
 
 
//类实现法
class Singleton {
    #name = ''
    constructor(name) {
        this.#name = name
    }
 
    getName() {
        console.log('name is', this.#name);
        return 0
    }
}
 
class ProxySingleton {
    static instance = null
    constructor(name) {
        if (!ProxySingleton.instance) {
            ProxySingleton.instance = new Singleton(name)
        }
        return ProxySingleton.instance
    }
}
 
const a = new ProxySingleton('seven1')
const b = new ProxySingleton('seven2')
console.log(a === b);
console.log(a.name);//undefined
console.log(a.getName()); //name is seven1     0
```