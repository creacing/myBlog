---
title: js操作cookie辅助函数
description: js操作cookie辅助函数
date: 2021-09-27
tags:
  - cookie
---

```javascript
class CookieUtil {
    static get(name) {
        const cookieName = `${encodeURIComponent(name)}`
        const cookieStart = document.cookie.indexOf(cookieName)
 
        let cookieValue = null
 
        if (cookieStart > -1) {
            //从cookieStart位置开始找cookie结束的位置
            let cookieEnd = document.cookie.indexOf("; ", cookieStart)
 
            if (cookieEnd === -1) {
                cookieEnd = document.cookie.length
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd))
        }
 
        return cookieValue
 
    }
    //参数分别为 cookie名称 cookie值 可选的Date对象(表示何时删除cookie) 可选的URL路径 可选的域 可选的表示是否添加secure标志的布尔值
    static set(name, value, expires, path, domain, secure) {
        let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
 
        if (expires instanceof Date) {
            cookieText += `; expires=${expires.toGMTString()}`
        }
 
        if (path) {
            cookieText += `; path=${path}`
        }
 
        if (domain) {
            cookieText += `; domain=${domain}`
        }
 
        if (secure) {
            cookieText += `; secure`
        }
 
        document.cookie = cookieText
    }
 
    static unset(name, path, domain, secure) {
        //没有直接删除已有cookie的方法 这里设置cookie过期
        CookieUtil.set(name, '', new Date(0), path, domain, secure)
    }
}
```
有子cookie情况下的操作cookie的辅助函数

如果实际开发中担心碰到每个域的cookie限制，则可以考虑使用子cookie这个方案。此时要特别注意cookie的大小，不要超过对单个cookie大小的限制
```
class SubCookieUtil {
    static get(name, subName) {
        const subCookies = SubCookieUtil.getAll(name)
        return subCookies ? subCookies[subName] : null
    }
 
    static getAll(name) {
        const cookieName = encodeURIComponent(name) + '=',
        const cookieStart = document.cookie.indexOf(cookieName)
        let cookieValue = null
        let cookieEnd
        let subCookies
        let parts
        let result = {}
 
        if (cookieStart > -1) {
            cookieEnd = document.cookie.indexOf('; ', cookieStart)
 
            if (cookieEnd === -1) {
                cookieEnd = document.cookie.length
            }
 
            cookieValue = document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
 
            if (cookieValue.length > 0) {
                subCookies = cookieValue.split("&")
 
                for (let i = 0, len = subCookies.length; i < len; i++) {
                    parts = subCookies[i].split('=')
 
                    result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1])
                }
 
                return result
            }
        }
        return null
    }
 
    static set(name, subName, value, expires, path, domain, secure) {
        const subCookies = SubCookieUtil.getAll(name) || {}
 
        subCookies[subName] = value
 
        SubCookieUtil.setAll(name, subCookies, expires, path, domain, secure)
    }
 
    static setAll(name, subCookies, expires, path, domain, secure) {
        const cookieText = encodeURIComponent(name) + '='
        const subCookieParts = []
        let subName
 
        for (subName in subCookieParts) {
            if (subName.length > 0 && subCookieParts.hasOwnProperty(subName)) {
                subCookieParts.push(`${encodeURIComponent(subName)}=${encodeURIComponent(subCookies[subName])}`)
            }
        }
 
        if (subCookieParts.length > 0) {
            cookieText += subCookieParts.join('&')
 
            if (expires instanceof Date) {
                cookieText += `; expires=${expires.toGMTString()}`
            }
 
            if (path) {
                cookieText += `; path=${path}`
            }
 
            if (domain) {
                cookieText += `; domain=${domain}`
            }
 
            if (secure) {
                cookieText += `; secure`
            }
        } else {
            cookieText += `; expires=${(new Date(0)).toGMTString()}`
        }
 
 
        document.cookie = cookieText
    }
 
    static unset(name, subName, path, domain, secure) {
        let subCookies = SubCookieUtil.getAll(name)
 
        if (subCookies) {
            delete subCookies[subName] //删除
 
            SubCookieUtil.setAll(name, subCookies, null, path, path, domain, secure)
        }
    }
 
    static unsetAll(name, path, domain, secure) {
        SubCookieUtil.setAll(name, null, new Date(0), path, domain, secure)
    }
}
```
注意事项

还有一种叫作HTTP-only的cookie

HTTP-only可以在浏览器设置，也可以在服务器设置，但只能在服务器上读取

JavaScript无法取得这种cookie的值。

所有cookie都会作为请求头部发送给服务器，

在cookie中保存大量信息可能会影响特定域浏览器请求的性能

保存的cookie越大，请求完成的时间就越长

通过cookie保存必要信息，以避免性能问题

cookie并不是存储大量数据的理想方式

不要在cookie中存储重要或敏感的信息

cookie数据不是保存在安全的环境中，任何人都可能获得

应该避免把信用卡号或个人地址等信息保存在cookie中