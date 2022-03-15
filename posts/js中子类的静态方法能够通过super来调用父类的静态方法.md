---
title: js中子类的静态方法能够通过super来调用父类的静态方法
description:
date: 2021-04-09
tags:
  - javascript
---

```javascript
//js中子类的静态方法能够通过super来调用父类的静态方法
class Person {
    static getName() {
        return 'lear'
    }
}
 
class Student extends Person {
    static getName2() {
        return super.getName() + ',hi'
    }
}
 
console.log(Student.getName2());
```