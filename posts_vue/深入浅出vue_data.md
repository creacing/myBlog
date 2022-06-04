---
title: 深入浅出vue.js笔记 _data
description: 初始化props
date: 2022-6-2
tags:
  - vue
---
```javascript
function initData(vm) {
    let data = vm.$options.data
    data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {}
    if (!isPlainObject(data)) {
        data = {}
        process.env.NODE_ENV !== 'production' && warn('data functions should return an object:\n' +
            'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm)
    }
    //将data代理到vue.js实例上
    const keys = Object.keys(data)
    const props = vm.$options.props
    const methods = vm.$options.methods
    let i = keys.length
    while (i--) {
        const key = keys[i]
        if (process.env.NODE_ENV !== 'production') {
            if (methods && hasOwn(methods, key)) {
                warn(`Method "${key}" has already been defined as a data property.`, vm)
            }
        }
        if (props, hasOwn(props, key)) {
            process.env.NODE_ENV !== 'production' && warn(`The data property "${key}" is already declared as a prop.` +
                `Use prop default value instead`, vm)
        } else if (!isReserved(key)) {
            //proxy 函数的作用 是在第一个参数上设置一个属性名为带三个参数的属性
            //这个属性的修改和获取操作实际上针对的是与第二个参数相同属性名的属性
            proxy(vm, `_data`, key)
        }
    }

    observe(data, true /*asRootData*/ )

}

const sharedPropertyDefinition = {
    enumerable: true,
    configureable: true,
    get: noop,
    set: noop
}

export function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
        return this[sourceKey][key]
    }

    sharedPropertyDefinition.set = function proxySetter(val) {
        this[sourceKey][key] = val
    }
    Object.defineProperty(target, key, sharedPropertyDefinition)
}
```