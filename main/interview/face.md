# 面试题目

------

### 不使用sizeof来输出当前int的长度

> 
```python
int main(){
	num = 10;
	$i=1;
	while(num!=0){
	    num<<1;
	    i++;
	}
	printf("%d",i);
}
main();
// 可以根据左移右移来判断有几位
```
### js跨域的方法
- [x] 基于iframe-location.hash(document.domain)的实现/修改document.domain来跨子域
```python
A页面：
    <iframe src="b.com/b.html" id="a"></iframe>
    <script type="text/javascript">
        var a = document.getElementById("a").onload = function(){
            a.b();
        }
    </script>
B页面：
    <script type="javascript">
        document.domain = "a.com";
        function b(){}
    </script>
```
- [x] window.name
- [x] xhr2
- [x] 使用HTML5的window.postMessage方法跨域// 例子见该文件统一目录的a.html && b.html
- [x] jsonp,就是把跨域的js当成一个节点使用，并返回结果(数据)。
```python
// 服务器端：
    <?php 
    function() {
        $str = "callback({
            some json || some xml || array
        })";
        echo $str;// 目前只用过json
    }
    ?>
// 请求端：
    <script type="text/javascript">
    $.ajax({
        url:"this url",
        dataType:'jsonp',
        jsonp:"jsoncallback",
        success: function(data){
            console.log(data);
        },
        error: function(err) {
            console.log(err);
        }
    })
    </script>
```

### attachEvent和addEventListen的区别
- [x] attachEvent是ie支持的属性，addEventListen是非ie支持的属性(联系到事件冒泡和事件捕获)
- [x] 两种方法都是监听处理函数的叠加而不是覆盖
- [x] 可用它监听dom节点事件
- [x] node.attachEvent(eventType,fn);node.addEventListen(eventType,fn,false);

### 处理表单输入的函数
- [x] php的tram()//好像还有clearHtml()
- [x] js可以写个正则匹配

### 事件冒泡和事件捕获
```python
<html>
<body>
    <div>
        <p></p>
    </div>
</body>
</html>
```
- [x] 冒泡：子级元素先触发，父级元素后触发 p->div->body
- [x] 捕获：父级元素先触发，子级元素后触发 body->div->p
- [x] 阻止事件冒泡：在ie下是使用event.cancelBubble = true,ff下是event stopPropagation()
- [x] IE只支持事件冒泡，不支持事件捕获

### ajax返回的类型
- [x] 原生的ajax返回responseText，responseXML，即text和xml
- [x] 然后json是由之前返回的JSON.parse(text)
- [x] 其他的(json、html、jsonp、script)都是字符串传输过来在客户端进行转换和处理的

### jssdk接口有哪些
- [x] 基础接口(判断浏览器是否支持js接口)
- [x] 分享接口(分享到朋友圈那些)
- [x] 图像接口(图片上传，拍照那些)
- [x] 音频接口(当然是声音的播放那些) + 智能接口(识别音频并返回)
- [x] 地理接口(类似html5的geolocation)
- [x] 微信支付(扫一扫那些)

### js的数据对象有哪些
- [x] 一开始我有点懵了，我以为是object对象那些
- [x] String(),Number(),Boolen(),Object(),Array(),function(),Math(),RegExp(),Date()
- [x] 事件监听，捕获/冒泡，冒泡阻止，事件委托
- [x] 常去的技术博客(我竟然想到的是--真阿当)
- [x] 一分钟自我介绍(感觉都会来这套，然而我并不知道应该说什么)
```javascript
function test(){
    alert("aaaaaa");
}
function test(){
    alert("bbbbbb");
}
test();//会返回什么？
// 因为加载的后面的js程序会覆盖前面的函数，而不是依次执行
// 有点类似onclick的那个事情

```

### 深拷贝、浅拷贝
- [x] 自我理解是浅拷贝只是值(对象)拷贝，深拷贝是地址、原型链那些都拷贝，所以深拷贝要加上hasOwnProperty
- [x] 浅拷贝是指源对象与拷贝对象共用一份实体，仅仅是引用的变量不同(名称不同)。
- [x] 深拷贝是指源对象与拷贝对象互相独立，其中任何一个对象的改动都不会对另外一个对象造成影响。
```javascript
Object.prototype.clone = function() {
    var Constructor = this.constructor,
        obj = new Construct();

    for(var attr in this) {
        if (this.hasOwnProperty(attr)) {
            if (typeof(this[attr]) !== "function") {
                if (this[attr] === null) {
                    obj[attr] = null;
                }else {
                    obj[attr] = this[attr].clone();
                }
            }
        }
    }

    return obj;
}

```

### 预防跨站攻击 csrf
- [x] 通过script的方式进行获取，通过script的方式先传入一个callback，那么数据就会被传入的函数执行。
- [x] 可以通过发起JavaScript的跨域请求来绕过同源策略,会导致不同源或域之间的数据泄露
- [x] 在jsonp请求中加入一个随机数
- [x] 在jsonp中不要加入个人数据

### css盒模型
- [x] http://www.osmn00.com/translation/213.html
- [x] https://zh.wikipedia.org/wiki/IE%E7%9B%92%E6%A8%A1%E5%9E%8B%E7%BC%BA%E9%99%B7
- [x] w3c标准：margin->border->padding->width/height->content (从外到内)
- [x] ie标准：margin->width/height->content (从外到内) ---ie的padding和border都包含在指定的宽度和高度
- [x] box-sizing：content-box(默认,w3c标准) || border-box(ie标准) || inherit

### git怎么返回上一个提交的版本

- [x] git reset --hard HEAD^ //返回上个版本
- [x] git reset --hard 3228164 // 返回这个版本
- [x] git reset HEAD readme.txt //撤销暂存区readme.txt 将其退回工作区

- [x] git reflog // 退回返回的上一个版本。。类似撤销返回上个版本
- [x] git statu // 查看缓存区的内容
- [x] git checkout -- readme.txt //丢弃工作区中readme.txt的修改
- [x] git rm --readme.txt //和linux的命令很像啊
- [x] git log //查看提交记录

### Tcp三次握手，四次握手
- [x] 为什么减少请求数就可以减少加载时间
- [x] 开启一个链接（tcp/ip的三次握手过程）-》发送请求-》等待（网络延迟跟服务器的处理时间）-》下载数据
- [x] 时间 大部分就花在建立连接和等待阶段


### fileReader返回的是二进制
- [x]

### 块级作用域和函数作用域
- [x]

### (AMD)Require和(CMD)sea.js的区别
- [x] https://github.com/seajs/seajs/issues/277
- [x] 都是模块加载
- [x] AMD是提前执行，CMD是延迟执行
- [x] CMD依赖就近，AMD依赖前置

### 数据结构
- [x] 链表、栈、队列

### java的继承和多态
- [x] 

### js缓存问题
- [x] html5缓存appcache <html manifest="demo.appcache">
- [x] 在js那加上时间戳，判断是否时间一致然后加载

### 网站优化
- [x] http://www.chinaz.com/web/2014/0527/353092.shtml

### 网站加载顺序
- [x] http://m.studyofnet.com/news/349.html
- [x] (从服务器请求相应的html)先加载html文件-> 从上到下加载-> head里面的link(服务器请求对应的css)-> 
    (渲染页面)加载body的dom结构 ->发现img就向服务器发送请求图片(图片影响了后面段落的布局)
                                ->发现script标签，请求相应的js并运行 ->有些会影响原先dom结构的重新渲染这段dom，执行时会阻塞页面后续的内容(包括页面的渲染和其他资源的下载)，那么如果是多个js文件被引入那么这些文件会被串行的加载并执行。
                                ->终于到了结束的</html>
- [x] 当前页面两个相同的id会怎么渲染: 因为页面是css先加载从上到下渲染，然而css并不知道是两个id 所以都会同样的css样式；引申到如果相同的事件都绑定了当前id呢？那么当然是第一个id得到效果，因为查找是从上到下的。
- [x] 所以是先加载dom树，然后再加载图片那些。
- [x] 面试4399感觉被坑了，一直说http的请求顺序，当时一说按照html的dom顺序来他就说我们现在说的是http的顺序。( http://www.cnblogs.com/dkarthas/archive/2010/07/04/1770989.html  );按照dom顺序背景图片最后加载。



### js垃圾回收机制 & 闭包之后怎么回收
- [x] https://segmentfault.com/a/1190000002778015
- [x] 闭包： 闭包是有权访问另一作用域中变量的函数
- [x] function sayName(name){
        return function(){
            return name;
        }
    }
    var say = sayName("king");//该函数就可以访问另一作用域的变量
- [x] sayName执行完毕之后，其执行环境的作用域会被销毁，但它的活动变量会留在内存中，直到匿名函数销毁。
- [x] 内存泄漏解决办法：a、使用匿名函数  b、使用闭包之后将值置null  c、解除循环使用


### js对象怎么继承
- [x] http://www.zcfy.cc/article/513
- [x] http://blog.csdn.net/fuxiaohui/article/details/44910765
- [x] 直接全部写正常的对象var o = { x:2, y:3, f:function(){ ....  } }
- [x] 使用工厂函数来new：function thing(){ x:2,y:3,f:function(){ ....  }  };var 0 = new thing();(内存膨胀)
- [x] 原型链：
    =>
        var thingPrototype = {f:function(){ ....  }};
        function thing(){ var o = Object.create(thingPrototype);o.x = 2;o.y = 3; return o; };
        var o = thing();
    => 优化：
        thing.prototype.f = function(){ .....  };
        function thing(){
            var o = Object.create(thing.prototype);
            o.x = 2; o.y = 3;
            return o;
        }
        var o = thing();
    => 缺点：会导致重复
- [x] Es6方法：
    => class thing{
        Constructor(){
            this.x = 2;thi.y = 3;
        }
        f() {
            .....
        }
    }
    var o = new thing();
- [x] call和apply，访问上下文来继承。

### Tcp和udp区别
- [x] 最大的区别是tcp丢包时会重新连接，但是udp不会。udp(视频直播)

### 防止CORS
- [x] 利用后端语言生成随机数，因为CORS是不可以访问cookie的，所以可以保存在cookie里面

### promise || deferred
- [x] 降低异步编程的复杂性，不会阻塞和等待长时间的操作
- [x] 缺点：a、一旦新建就会立即执行，无法中途取消；b、若不设置回调函数，无法抛出错位到外部；

### img 白边

### css背景图全屏 ie兼容怎么解决

### ie6有哪些bug 怎么返回上一个提交的版本解决

### 清除浮动方法

### 外边距垂直重合

### 两个不一样的div 一个magrgin-top向上另一个也会向上，什么原因，怎么解决？

### @media 判断ipone

### css3的一些属性

### bootstrop栅格化布局
- [x] 以规则的网格阵列来指导和规范网页中的版面布局以及信息分布。
- [x] 在一个页面(固定、有限)中，用水平和垂直线将页面划分成有规律的一系列格子，并依托这些格子来进行有规律的布局
- [x] a、方便日后维护、拓展 b、信息展示适合阅读
- [x] 上手慢，有一定的数学基础(例如求百分比那些)

### http相关
- [x] 304：客户端发起了请求，但文件未变化 == 从缓存读
- [x] [301永久性重定向、302暂时性重定向](http://www.cnblogs.com/xl888/archive/2008/10/28/1320945.html)
- [x] [http是无状态无连接的](http://blog.csdn.net/tennysonsky/article/details/44562435)
    - [1] 无状态：指协议对事务处理无记忆功能，服务器不知道客户端的状态
    - [2] 无连接：每次连接只处理一个请求，请求时建立连接、请求完成释放连接
- [x] http基于tcp，不用考虑数据包乱序、丢失等问题；udp可以接受数据丢失
- [x] 网络传输协议分为网络层(IP、ICMP协议...)、传输层(TCP、UDP协议)、应用层(FTP、HTTP、TELNET、SMTP、DNS等协议)

### 防Sql注入
- [x] 将html、js标签首字符串转义：<script></script> => &lt;script>&/script>


## 北京微影时代深圳研发中心
### less sass优缺点
- 基本语法
- 嵌套语法
    - & 引用父级选择器
    - sass和StyLus分别用@at-root 和 / 来作为嵌套根目录
- 变量
    - sass: $var
    - less: &var
    - 注意变量的作用域
- @import
    - 模块化开发
    - 当作less文件一起引用、一起编译
    - sass中@import不会被去重、即多次引用同一个文件会导致同一个文件多次输出到编译结果中。
- 混入
- 继承
    - 例
        ```StyLus
            mes()
                padding: 10px;
                border: 1px solid red;
            .mes
                mes()
            .war
                mes()
                color: white;
        ==>output
            .mes{ padding: 1px; border: 1px solid red;}
            .war{ padding: 1px; border: 1px solid red;color: white;}
        // 但我们希望是输出 .mes, .war{ padding: 1px; border: 1px solid red;} .war{color:...}
        ```
    - 所以我们可以使用继承
        ```StyLus
            .mes
                padding: 10px;
                border: 1px solid red;
            .war
                @extend .mes
                color: white;
        ==>output
           .mes, .war{ padding: 1px; border: 1px solid red;} .war{color:...}
        ```
        ```sass
            .mes{
                padding: 10px;
                border: 1px solid red;
            }
            .war{
                &:extend(.mes)
                color: white;
            }
            /*
            .war:extend(.mes){
                color: white;
            }
             */
        ```
- 函数
- 逻辑控制

### Es6的属性
- Class
- 箭头函数
- ``多行字符串
- 默认参数 function A(a = 10, b = 20){ /* code */ }
- promise
- let、const块左右域
- 模块 module
    ```Es 5
    // modules.js
    module.exports = {
        a: 100
        // code
    }
    // main.js
    let A = require("./modules.js");
    A.a; // 100
    ```
    ``Es 6
    // modules.js
    export var a = 100;

    // main.js
    import {a} from "modules";
    console.log(a); // 100
    ```

### mvc与mvvm

### https

### flex、gird布局

### promise

### add(2)(5) 闭包

### 立即执行函数
- 函数的两种表达
    - 函数声明：function A(){ /* code */ } // 使用function关键字声明一个函数，再指定一个函数名，js在解析是会"函数声明提升"至当前作用域上的函数声明
    - 函数表达式：var A = function(){ /* code */ } //使用function关键字声明一个函数，但未给函数命名，最终将匿名函数赋予一个变量，函数表达式可以在后面加括号立即调用该函数
- 1、(function(){ /* code */ })()  2、(function (){ /* code */ }()) 可以保护该函数内部变量的作用
- for循环里要加上绑定事件，可以用闭包保存状态