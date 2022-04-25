---
title: DNS
description: 
date: 2022-4-25
tags:
  - DNS
---
## 客户端查询DNS服务器 发送的消息内容包含
### 域名 
```
邮件@后面的部分
```

### class
```
class是用来识别网络的信息 不过现在只有互联网class的值永远是IN代表互联网
```

### 记录类型
```
表示域名对应的类型
类型 域名       对应
A    IP地址
MX   邮件服务器
```
DNS 上事先保存这三种记录，根据客户端请求作查询

### 例子
```
查询www.a.com的ip地址
域名 = www.a.com
class = IN
记录类型 = A
```
只要是作为A类型再DNS服务器上注册的都可以作为web服务器的域名
### 类型
```
根据ip查域名的PTR类型
查询域名相关别名的CNAME类型
查询DNS服务器IP地址的NS类型
查询域名属性的SOA类型
```
#### CNAME
```
CNAME 即指别名记录，也被称为规范名字。
这种记录允许将多个名字映射到同一台计算机。 
当需要将域名指向另一个域名，再由另一个域名提供 ip地址，就需要添加 CNAME 记录。
```
```
博客搭建再 xxx.github.io 
博客目录创建 CNAME文件
CNAME中写入域名 xxx.com
xxx.com 指向 xxx.github.io 再指向对应的ip地址
```