class myPromise {
  static pending = 'PENDING'
  static fulfilled = 'FULFILLED'
  static rejected = 'rejected'

  constructor(executor) {
    this.status = myPromise.pending
    this.value = undefined
    this.reason = undefined
    this.callbacks = []
    executor(this.resolve.bind(this),this.reject.bind(this))
  }

  resolve(value){
    if(value instanceof myPromise){
      value.then(this.resolve.bind(this),this.reject.bind(this))
      return 
    }
    this.value = value
    this.status = myPromise.fulfilled
    this.callbacks.forEach(cb=> this.hanler(cb))
  }

  reject(reason){
    if(reason instanceof myPromise){
      reason.then(this.resolve.bind(this),this.reject.bind(this))
      return
    }
    this.reason = reason
    this.status = myPromise.rejected
    this.callbacks.forEach(cb => this.hanler(cb))
  }

  then(onFulfilled,onRejected){
    return new myPromise((nextResolve,nextReject)=>{
      this.handler({
        nextResolve,
        nextReject,
        onFulfilled,
        onRejected
      })
    })
  }

  
  
  handler(callback){
    const {onFulfilled,onRejected,nextResolve,nextReject} = callback
  
    if(this.status === myPromise.pending){
      this.callbacks.push(callback)
      return
    }
    if(this.status === myPromise.fulfilled){
      const nextValue = onFulfilled?onFulfilled(this.value):this.value
      nextResolve(nextValue)
      return
    }
    if(this.status === myPromise.rejected){
      const nextReason = onRejected?onRejected(this.reason):this.reason
      nextReject(nextReason)
    }
  }
}

const foo = new myPromise((resolve,reject)=>{
  console.log('first');
  resolve('second')
  console.log('third');
})

foo.then(()=>console.log('forth'))

