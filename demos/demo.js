// const callbacks = []
// let pending = false //标记是否已经向任务队列中添加了一个任务
//     //每当向任务队列中插入任务时将pending 设置为true
//     //每当任务被执行时将pending 设置为false
//     //这样就可以通过pending的值来判断是否需要向任务队列中添加任务

// //被注册的那个任务 当这个函数被触发时 会将callbacks中所有的函数依次执行然后清空callbacks
// //并将pending设置为false也就是说一轮事件循环中flushCallbacks只会执行一次
// function flushCallbacks() {
//     pending = false
//     const copies = callbacks.slice(0)
//     callbacks.length = 0
//     for (const e of copies) {
//         e()
//     }
// }

// let microTimerFunc
// const p = Promise.resolve()
// microTimerFunc = () => {
//     //将flushCallbacks添加到微任务队列
//     p.then(flushCallbacks)
// }

// function nextTick(cb, ctx) {
//     callbacks.push(() => {
//         if (cb) {
//             cb.call(ctx)
//         }
//     })
//     if (!pending) {
//         pending = true
//         microTimerFunc()
//     }

// }

// const cb = () => {
//     console.log(this.name);
// }

// nextTick(cb, { name: 'xxx' })


const mount = Vue.prototype.$mount
Vue.prototype.$mount = function(el) {
    //判断el是否存在 el 支持元素类型或者字符串类型的选择器
    el = el && query(el)

    //调用mount 方法
    return mount.call(this, el)
}