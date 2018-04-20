---
title: 闭包
date: 2018-04-19 10:14:23
tags: js
---

## 闭包（词法闭包、函数闭包）
- 是引用了自由变量的函数
- 闭包是有权访问另一作用域中变量的函数
- 从实践角度来看
    - 即使创建它的上下文已经销毁，它依然存在（eg内部函数从父函数中返回）
    - 在代码中引用了自由变量
- 自由变量：指在函数中使用的，但既不是函数参数也不是函数的局部变量
```JavaScript
    var gl = "global var"; // 全局上下文
    function csA() {
        var gl = "local var"; // 函数内的上下文
        function csB() {
            return gl;
        }

        return csB;
    }

    var foo = csA(); // 函数上下文已销毁，理论上此时内部的gl变量也被销毁了
    foo(); // local var
```
- 用途
    - 读取函数内部的变量
    - 让这些变量值始终保持在内存中，记录变量
    ``` JavaScript
        function add(x) {
            var sum = x;
            var tmp = function(y) {
                return sum + y;
            }
            return tmp;
        }

        add(2)(5);
    ```
    - 私有变量，访问控制
    ```JavaScript
        var o = (function() {
            var a = 111, b = 222;
            return {
                foo: function() {
                    console.log(a + b);
                    return b;
                }
            }
        })()
        
        o.foo() = 333;
        console.log(o.foo()) // 可以读取b的值，但是不能修改，达到了私有访问的目的
    ```
   

## 参考链接
- [wiki]<https://zh.wikipedia.org/wiki/%E9%97%AD%E5%8C%85_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6)>
- [github](https://github.com/mqyqingfeng/Blog/issues/9)
- [知乎](https://www.zhihu.com/question/31840939)