---
title: http状态码
description: 
date: 2022-5-28
tags:
  - http
---
### 1xx

1xx 表示请求还在进行中

### 2xx
```
200 请求成功
```
```
201 created 已创建 创建用户
```
```
204 not content 无内容
```

### 3xx
```
301 move permanently 永久移动 资源永久更新了url
```
```
302 found 临时移动 给你临时url 下次还得用旧地址
```
```
304 not modified 未修改 没有过期直接使用缓存
```

### 4xx
```
400 bad request 语法错误无法理解 传参错误
```
```
401 unauthorized 身份识别失败 身份认证
```
```
403 forbidden 拒绝 没权限
```
```
404 notfound 找不到 资源路径url 错误
```
```
409 conflict 冲突 编辑冲突了 新老版本
```

### 5xx
```
500 internal server error 内部错误 (不知道什么错误先应付一下)
```
```
502 bad gateway 网关错误 网关从服务器拿不到东西无法返回给客户端
```
```
503 service unavailable 服务器超载或者维护(宕机)
```
