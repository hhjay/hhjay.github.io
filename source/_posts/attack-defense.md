---
title: xss、cors、cc的攻击和防御
date: 2018-04-09 15:09:55
tags: http
---

## cors
- 定义
    - Cross-Origin Resource-Sharing（跨站资源共享）
    - 当一个资源从与该资源所在的服务器不同域请求资源时，会发起一个跨域http请求，如 a.com 的html( &lt;img src="cdn.com/a.png" /&gt; )向 cdn.com 请求图片等资源，网络上的许多站点都会加载来自不同域的css样式、图像、脚本等资源
    - 可指定一个origin，在许可范围内
- 同源策略
    - 浏览器限制从脚本发出的跨域http请求，ajax遵循同源策略
    - jsonp
- 使用cors进行跨域
    - 在请求头中携带origin的header
    - 服务端响应头添加 Access-Control-Allow-Origin || Access-Control-Allow-Methods ，来返回验证结果
- csrf
    - Cross-Site Request Forgery（跨站请求伪造）
    - 用户通过浏览器正常访问站点A，通过A的身份认证A站点，A产生所使用的cookie等验证信息
    - 此时A保持登录状态，另起一个窗口打开B站点，站点B接收到用户请求后，返回一些攻击代码请求A的资源
    - 浏览器执行恶意代码，在用户不知情情况下携带cookie等用户验证信息，向A发起请求，导致来自B的恶意代码被执行
    - 代码
        ```java
            a.com/a.php?user="hhj"&pwd="j" // 1  
            a.com/ // 2 
        ``` 
    - 防御
        - 重要数据交互采用post进行接受
        - 使用验证码
        - 验证Http Referer字段，即此次Http请求的来源地址
        - 为每个表单添加Token并验证

## xss

## ddos

## sql注入

## cc攻击

## 参考链接
- [cors.csrf](https://yq.aliyun.com/articles/69313)