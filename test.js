// class Commitment {
//     //定义状态
//     static PENDING = 'pending'
//     static FULFILLED = 'resolved'
//     static REJECTED = 'rejected'

//     constructor(func) {
//         //初始化状态
//         this.status = Commitment.PENDING;
//         //存储结果
//         this.result = null;
//         //回调队列
//         this.resolveCallbacks = [];
//         this.rejectCallbacks = [];
//         // 拒绝异常
//         try {
//             func(this.resolve.bind(this), this.reject.bind(this))
//         } catch (error) {
//             this.reject(error)
//         }
//     }

//     resolve(result) {
//         setTimeout(() => {
//             if (this.status === Commitment.PENDING) {
//                 this.status = Commitment.FULFILLED
//                 this.result = result
//                 this.resolveCallbacks.forEach(callback => {
//                     callback(result)
//                 })
//             }
//         })
//     }

//     reject(result) {
//         setTimeout(() => {
//             if (this.status === Commitment.PENDING) {
//                 this.status = Commitment.REJECTED
//                 this.result = result
//                 this.rejectCallbacks.forEach(callback => {
//                     callback(result)
//                 })
//             }
//         })
//     }

//     then(onFULFILLED, onREJECTED) {
//         return new Commitment((resolve, reject) => {
//             onFULFILLED = typeof onFULFILLED === 'function' ? onFULFILLED : () => {}
//             onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : () => {}
//             if (this.status === Commitment.PENDING) {
//                 this.resolveCallbacks.push(onFULFILLED)
//                 this.rejectCallbacks.push(onREJECTED)
//             }
//             if (this.status === Commitment.FULFILLED) {
//                 setTimeout(() => {
//                     onFULFILLED(this.result)
//                 })
//             }

//             if (this.status === Commitment.REJECTED) {
//                 setTimeout(() => {
//                     onREJECTED(this.result)
//                 })
//             }
//         })
//     }
// }
// console.log('1');
// const commitment = new Commitment((resolve, reject) => {
//     console.log('2');
//     setTimeout(() => {
//         resolve('resolve')
//         console.log('4');
//     })
// })
// commitment.then(result => {
//     console.log('a', result);
// })

// console.log('3');
// //resolve , reject 要在事件循环末尾执行
// //执行顺序  console.log('1'); -> new Commitment -> console.log('2'); -> setTimeout -> commitment.then -> console.log('3');
// //事件队列 [resolve('resolve') ,console.log('4')]
// //事件队列 [console.log('4'), callback(result)]
// //事件队列 [callback(result)]


// // const pro = new Promise((resolve, reject) => {
// //     resolve('22')
// // })

// // pro.then(res => {
// //     console.log(res);
// //     return pro
// // }).then(res => {
// //     console.log(res);
// // })

class foo {
    constructor() {
        // this.a = '22'
    }

    get a() {
        return '33'
    }
}

const bar = new foo()

console.log(bar.a);