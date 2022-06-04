//computed 是定义在vm上的一个特殊的getter方法
//是因为在vm上定义getter方法时 get并不是用户提供的函数 而是vue.js内部的一个代理函数
//在代理函数中可以结合watcher实现缓存与收集依赖功能

//计算属性是如何知道依赖的响应式属性发生变化 是结合watcher的dirty属性来分辨的
//当dirty属性为false时 说明计算属性的值没有变 不需要重新计算

//当计算属性中的内容发生变化 计算属性的watcher 与组件的watcher都会得到通知
//计算属性的watcher会将dirty属性设置为ture
//下一次读取值 就会重新计算一次 然后组件的watcher也会得到通知 从而执行render函数重新渲染

//重新执行render函数 所以会重新读取计算属性 这个时候计算属性的watcher已经把自己的dirty属性设置为true
//所以会重新计算一次属性的值 用于本次渲染