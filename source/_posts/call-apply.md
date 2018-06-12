---
title: call、apply、bind区别
date: 2018-06-11 18:21:02
tags: js
---

## call
- call()方法调用一个函数，其具有一个指定的 this 值和分别提供的各个参数
- 作用
    - 让call中的对象调用当前的function，使用call来继承
    - 使用call来调用匿名函数
    - 使用call调用函数并指定上下文的this
- fn.call(thisArg, arg1, arg2, ...)
    - thisArg: 在fn函数运行时指定的this值
        - 指定的this值不一定是该函数执行时的真正的this（在非严格模式下，指定为null和undefined的this值会指向全局变量，浏览器是window、node是Global）
        - 指定的this值为原始值（Number、String、Boolen）的时候，会指向该原始值的自动包装对象
    - arg1 ~ argn: 传的参数列表
``` JavaScript
    function fn1(a) {
        console.log(this, a);
    }
    fn1.call(this, 1111); // window 1111
    fn1.call(null, 1111); // window 1111
    fn1.call(undefined, 1111); // window 1111
    fn1.call(123, 1111); // Number(123) 1111
    fn1.call("this", 1111); // String("this") 1111
    fn1.call(true, 1111); // Boolen(true) 1111
```

## apply
- apply()方法调用一个函数，其具有一个指定的this值和参数数组
- 作用
    - 使用apply来链接构造器
    - 使用apply来调用内部函数（例 Math.Max.apply([1, 3, 2])）
- 注意事项：传入的参数数组太长，会有越界问题，该临界值由js引擎而定
- fn.apply(thisArg, [argsArray])
    - thisArg与call的类似
    - argsArray
        - 如果该参数的值为null或undefined，则表示不需要传入任何参数
        - 从es5开始可使用 类数组对象（{ 0: 11, 1: 22 }）

## bind
- bind是es5拓展的方法
- bind方法创建一个新的函数（绑定函数），当绑定函数被调用时，第一个参数为thisArg、第二个及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数

## call 与 apply 区别
- 参数不一样，call把参数按顺序传递、apply把参数放进数组里

## call/apply 与 bind 区别

## 参考
- [mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)