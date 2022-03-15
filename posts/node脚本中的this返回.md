---
title: 为什么node脚本中的this返回{}
description:
date: 2021-03-27
tags:
  - javascript
---

在Node Repl（控制台，命令行）环境中，全局的this指向global对象。
浏览器环境下指向window
var a = 3
console.log(global.a) //3
使用var声明会成为global的属性

脚本中（文件中） 打印全局this 输出{}
console.log(this) // {}
var a = 3
console.log(global.a)//undefined
Node脚本文件中定义的全局this又指向module.exports。

总结：在Node repl环境中控制台的全局this和global可以看作是同一对象，而在脚本文件中，二者并不等价。

全局作用域中，如果一个变量没有用var、let或者const之类的关键字修饰，那么它就是属于全局作用域，
定义在全局作用域上的变量可以通过global对象访问到。
a = 3
console.log(global.a)//3
在代码文件顶层（不在任何方法，对象中）使用var、let或者const修饰的变量都位于模块作用域中，
不同模块作用域之间的作用域是隔离的。模块作用域中的this指向module.exports
this.a = 3
console.log(module.exports.a)//3

Node Repl和脚本文件执行会有不同的结果，这是因为Node会将所有的脚本文件进行包装
(function(......){undefined
    ......
})
