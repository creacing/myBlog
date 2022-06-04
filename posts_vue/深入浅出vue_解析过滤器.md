---
title: 深入浅出vue.js笔记 _解析过滤器
description: 初始化props
date: 2022-6-4
tags:
  - vue
---
```javascript
export function parseFilters(exp) { //xxx | xxx
    let filters = exp.split('|')
    let expression = filters.shift().trim()

    let i
    if (filters) {
        for (i = 0; i < filters.length; i++) {
            expression = wrapFilter(expression, filters[i].trim())
        }
    }
    return expression
}

function wrapFilter(exp, filter) { //如果包含说明过滤器携带参数
    const i = filter.indexof('(')

    if (i < 0) {
        //_f:resolveFilter
        return `_f("${filter}")(${exp})`
    } else {
        const name = filter.slice(0, i)
        const args = filter.slice(i + 1)
        return `_f("${name}")(${exp},${args})`
    }
}

//测试
parseFilters(`message | capitalize`)
    //_f("capitalize")(message)

parseFilters(`message | filterA | filterB`)
    //_f("filterB")(_f("filterA")(message))

parseFilters(`message | filterA('arg1',arg2))`)
    //_f("filterA")(message,'arg1',arg2)
```