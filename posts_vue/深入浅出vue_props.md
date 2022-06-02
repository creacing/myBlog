---
title: 深入浅出vue.js笔记 _props
description: 初始化props
date: 2022-6-2
tags:
  - vue
---

```javascript
function normalizeProps(options, vm) {
    //获取props
    const props = options.props
    if (!props) {
        return
    }
    const res = {}
    let i, val, name

    //判断props是否是数组
    if (Array.isArray(props)) {
        i = props.length
        while (i--) {
            val = props[i]
                //props 数组中值属性为 string
            if (typeof val === 'string') {
                name = camelize(val)
                res[name] = { type: null }
            } else if (process.env.NODE_ENV !== 'production') {
                warn('props must be strings when using array syntax')
            }
        }
        //check props is typeof object
    } else if (isPlainObject(props)) {
        for (const key in props) {
            val = props[key]

            //驼峰化
            name = camelize(key)
            res[name] = isPlainObject(val) ? val : { type: val }
        }
    } else if (process.env.NODE_ENV !== 'production') {
        warn(`
Invalid value
for option "props": expected an Array or an Object, ` + `
but got $ { toRawType(props) }.
`, vm)
    }

    options.props = res
}
//初始化
function initProps(vm, propsOptions) {
    //vm, propsOptions vue 实例和规格化之后的props

    //propsData中保存的是通过父组件传入或用户通过propsData传入的真实的props数据
    const propsData = vm.$options.propsData || {}

    //变量props是指向vm._props的指针 所有设置到props变量中的属性最终都会保存到vm._props中
    const props = vm._props = {}

    // 缓存 props的key 变量keys是指向vm.$options._propKeys的指针 其作用是缓存props对象中的key
    //将来更新props时只需要遍历vm.$options._propKeys数组即可得到所有props的key
    const keys = vm.$options._propKeys = []

    //变量isRoot 的作用是判断当前组件是否是根组件
    const isRoot = !vm.$parent

    //root 实例的props属性应该被转换成响应数据
    if (!isRoot) {
        //如果不是根组件就不需要将props数据转换成响应式数据
        //toggleObserving 函数的作用是确定并控制defineReactive函数调用时所传入的value参数是否需要转换成响应式
        //toggleObserving是一个闭包函数
        //所以通过调用他并传入一个参数来控制 observer/index.js文件的作用域中的变量 shouldObserve 
        //这样当数据将要被转换成响应式十，可以通过变量shouldObserve来判断是否需要将数据转换成响应式
        toggleObserving(false)
    }
    //通过 调用validateProp 函数将props数据通过defineReactive 函数设置到vm._props中
    for (const key in propsOptions) {
        keys.push(key)
        const value = validateProp(key, propsOptions, propsData, vm)
        defineReactive(props, key, value)

        //判断key是否在vm上存在 不存在 则调用proxy 在vm上设置一个以key为属性的代理 当使用vm[key]访问数据时其实访问的是vm._props[key]
        if (!(key in vm)) {
            proxy(vm, `
props `, key)
        }
    }
    toggleObserving(true)

}
//validateProp获取props内容
//validateProp 函数接收4个参数 
//key propOptions中的属性名 
//propOptions子组件用户设置的props选项 
//propsData父组件或或用户提供的props数据 
//vm vue.js实例上下文 this的别名
export function validateProp(key, propOptions, propsData, vm) {
    //prop保存的内容是当前这个key的prop选项
    const prop = propOptions[key]

    //absent 表示当前的key在 用户提供的 props 选项是否存在
    const absent = !hasOwn(propsData, key)

    //表示使用当前这个key在用户提供的props选项中获取的数据
    let value = propsData[key]

    //处理boolen 类型的props(特殊情况)
    //布尔值的情况下有两种额外的场景要处理
    //一种情况下是key不存在的时候 也就是说父组件或者用户并没有提供这个数据
    //并且props中也没设置默认值 那么这时候将value设置成false 
    //另一种情况是key存在但value是空字符串或者value与key相等
    //这里的key = value 包含a = 'a' 和 userName='user-name'
    //包含以下形式
    //<child name></child>
    //<child name='name'></child>
    //<child userName='user-name'></child> 
    //<child user-name='user-name'></child> 
    //hyphenate会将key进行驼峰转换 userName 转换为 user-name
    //除了布尔值需要特殊处理之外其他类型只有一种情况
    if (isType(Boolean, prop.type)) {
        if (absent && !hasOwn(prop, 'default')) {
            value = false
        } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
            value = true
        }
    }

    //检查默认值  如果子组件设置的props 在props中并不存在这个时候就会用到默认值
    if (value === undefined) {
        //getPropDefaultValue获取prop的默认值 observe函数将其转换成响应式
        value = getPropDefaultValue(vm, prop, key)

        //因为默认值是新数据 所以需要转换成响应式
        const prevShouldConvert = observerState.shouldConvert
        observerState.shouldConvert = true //决定了是否将其转换成响应式
        observe(value)
        observerState.shouldConvert = prevShouldConvert //将状态恢复成最初的状态
    }

    // if (value === undefined) {
    //     value = getPropDefaultValue(vm, prop, key)
    //     const prevShouldConvert = shouldObserve
    //     toggleObserving(true) //决定了是否将其转换成响应式
    //     observe(value)
    //     toggleObserving(preShouldConvert) //将状态恢复成最初的状态
    // }
    if (process.env.NODE_ENV !== 'production') {
        assertProp(prop, key, value, vm, absent) //断言prop是否有效 作用当prop验证失败的时候会在控制台产生警告
    }
    return value
}
//assertProp的作用当prop验证失败的时候在非生产环境下 vue.js会产生一个警告
function assertProp(prop, name, value, vm, absent) {
    //prop prop选项 ，name props中prop选项的key ，value prop数据(propData) ，vm上下文(this) ，absent prop数据中不存在key属性

    //设置必填且该数据不存在
    if (prop.required && absent) {
        warn(
            'Missing required prop:"' + name + '"',
            vm
        )
        return
    }
    //没有设置必填且数据不存在
    if (value == null && !prop.required) {
        return
    }
    //prop的type
    let type = prop.type

    //valid 表示是否校验成功
    let valid = !type || type === true

    //通常情况下type是一个原生构造函数 或一个数组 或者没有提供

    //如果用户没有设置type type = ture

    //expectedTypes保存type 列表
    const expectedTypes = []
    if (type) {
        if (!Array.isArray(type)) {
            type = [type]
        }
        //type列表中只要有一个校验成功循环就结束认为是成功
        for (let i = 0; i < type.length && !valid; i++) {
            //assertType 返回 {} -----> {valid:true, expectedType:'Boolen'} 前者表示校验成功 后者表示类型

            //将类型添加到expectedTypes 并将valid 变量置为 assertedType.valid
            const assertedType = assertType(value, type[i])
            expectedTypes.push(assertedType.expectedType || '')

            //循环结束 valid 为ture说明校验成功
            valid = assertedType.valid
        }
    }
    if (!valid) {
        //capitalize作用是将字符串的一个字母改成大写
        warn(
            `
Invalid prop: type check faild
for prop "${name}"
` +
            `
Expected $ { expectedTypes.map(capitalize).join(', ') }
` +
            `, got $ { toRawType(value) }
`
        )
        return
    }
    //如果用户设置validator就执行
    const validator = prop.validator
    if (validator) {
        if (!validator(value)) {
            warn(
                'Invalid prop: custom validator check faild for prop "' + name + '".', vm
            )
        }
    }
}
```
