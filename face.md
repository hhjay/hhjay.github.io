# 实习题目

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
> * 基于iframe-location.hash(document.domain)的实现/修改document.domain来跨子域
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
> * window.name
> * 使用HTML5的window.postMessage方法跨域// 例子见该文件统一目录的a.html && b.html
> * jsonp,就是把跨域的js当成一个节点使用，并返回结果(数据)。
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
> * attachEvent是ie支持的属性，addEventListen是非ie支持的属性(联系到事件冒泡和事件捕获)
> * 两种方法都是监听处理函数的叠加而不是覆盖
> * 可用它监听dom节点事件
> * node.attachEvent(eventType,fn);node.addEventListen(eventType,fn,false);

### 处理表单输入的函数
> * php的tram()//好像还有clearHtml()
> * js可以写个正则匹配

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
> * 冒泡：子级元素先触发，父级元素后触发 p->div->body
> * 捕获：父级元素先触发，子级元素后触发 body->div->p
> * 阻止事件冒泡：在ie下是使用event.cancelBubble = true,ff下是event stopPropagation()
> * IE只支持事件冒泡，不支持事件捕获

### ajax返回的类型
> * 原生的ajax返回responseText，responseXML，即text和xml
> * 然后json是由之前返回的JSON.parse(text)
> * 其他的(json、html、jsonp、script)都是字符串传输过来在客户端进行转换和处理的

### jssdk接口有哪些
> * 基础接口(判断浏览器是否支持js接口)
> * 分享接口(分享到朋友圈那些)
> * 图像接口(图片上传，拍照那些)
> * 音频接口(当然是声音的播放那些) + 智能接口(识别音频并返回)
> * 地理接口(类似html5的geolocation)
> * 微信支付(扫一扫那些)

### js的数据对象有哪些
> * 一开始我有点懵了，我以为是object对象那些
> * String(),Number(),Boolen(),Object(),Array(),function(),Math(),RegExp(),Date()
> * 事件监听，捕获/冒泡，冒泡阻止，事件委托
> * 常去的技术博客(我竟然想到的是--真阿当)
> * 一分钟自我介绍(感觉都会来这套，然而我并不知道应该说什么)
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
> * 自我理解是浅拷贝只是值(对象)拷贝，深拷贝是地址、原型链那些都拷贝，所以深拷贝要加上hasOwnProperty
> * 浅拷贝是指源对象与拷贝对象共用一份实体，仅仅是引用的变量不同(名称不同)。
> * 深拷贝是指源对象与拷贝对象互相独立，其中任何一个对象的改动都不会对另外一个对象造成影响。
```js
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

### 预防跨站攻击
> * 我也是这么说的啊。。。不过好像新浪的学长有些怀疑
> * 通过script的方式进行获取，通过script的方式先传入一个callback，那么数据就会被传入的函数执行。
> * 可以通过发起JavaScript的跨域请求来绕过同源策略,会导致不同源或域之间的数据泄露
> * 在jsonp请求中加入一个随机数
> * 在jsonp中不要加入个人数据

### css盒模型
> * http://www.osmn00.com/translation/213.html
> * https://zh.wikipedia.org/wiki/IE%E7%9B%92%E6%A8%A1%E5%9E%8B%E7%BC%BA%E9%99%B7
> * w3c标准：margin->border->padding->width/height->content (从外到内)
> * ie标准：margin->width/height->content (从外到内) ---ie的padding和border都包含在指定的宽度和高度
> * box-sizing：content-box(默认,w3c标准) || border-box(ie标准) || inherit

### git怎么返回上一个提交的版本

> * git reset --hard HEAD^ //返回上个版本
> * git reset --hard 3228164 // 返回这个版本
> * git reset HEAD readme.txt //撤销暂存区readme.txt 将其退回工作区

> * git reflog // 退回返回的上一个版本。。类似撤销返回上个版本
> * git statu // 查看缓存区的内容
> * git checkout -- readme.txt //丢弃工作区中readme.txt的修改
> * git rm --readme.txt //和linux的命令很像啊
> * git log //查看提交记录

### Tcp三次握手，四次握手
> * 为什么减少请求数就可以减少加载时间
> * 开启一个链接（tcp/ip的三次握手过程）-》发送请求-》等待（网络延迟跟服务器的处理时间）-》下载数据
> * 时间 大部分就花在建立连接和等待阶段


### fileReader返回的是二进制
> *

### 块级作用域和函数作用域
> *

### (AMD)Require和(CMD)sea.js的区别
> * https://github.com/seajs/seajs/issues/277
> * 都是模块加载
> * AMD是提前执行，CMD是延迟执行
> * CMD依赖就近，AMD依赖前置

### 数据结构
> * 链表、栈、队列

### java的继承和多态
> * 

### js缓存问题
> * html5缓存appcache <html manifest="demo.appcache">
> * 在js那加上时间戳，判断是否时间一致然后加载

### 网站优化
> * http://www.chinaz.com/web/2014/0527/353092.shtml

### 网站加载顺序
> * http://m.studyofnet.com/news/349.html
> * (从服务器请求相应的html)先加载html文件-> 从上到下加载-> head里面的link(服务器请求对应的css)-> 
    (渲染页面)加载body的dom结构 ->发现img就向服务器发送请求图片(图片影响了后面段落的布局)
                                ->发现script标签，请求相应的js并运行 ->有些会影响原先dom结构的重新渲染这段dom，执行时会阻塞页面后续的内容(包括页面的渲染和其他资源的下载)，那么如果是多个js文件被引入那么这些文件会被串行的加载并执行。
                                ->终于到了结束的</html>
> * 当前页面两个相同的id会怎么渲染: 因为页面是css先加载从上到下渲染，然而css并不知道是两个id 所以都会同样的css样式；引申到如果相同的事件都绑定了当前id呢？那么当然是第一个id得到效果，因为查找是从上到下的。
> * 所以是先加载dom树，然后再加载图片那些。

### js垃圾回收机制 & 闭包之后怎么回收
> * https://segmentfault.com/a/1190000002778015
> * 闭包： 闭包是有权访问另一作用域中变量的函数
> * function sayName(name){
        return function(){
            return name;
        }
    }
    var say = sayName("king");//该函数就可以访问另一作用域的变量
> * sayName执行完毕之后，其执行环境的作用域会被销毁，但它的活动变量会留在内存中，直到匿名函数销毁。
> * 内存泄漏解决办法：a、使用匿名函数  b、使用闭包之后将值置null  c、解除循环使用


### js对象怎么继承
> * http://www.zcfy.cc/article/513
> * http://blog.csdn.net/fuxiaohui/article/details/44910765
> * 直接全部写正常的对象var o = { x:2, y:3, f:function(){ ....  } }
> * 使用工厂函数来new：function thing(){ x:2,y:3,f:function(){ ....  }  };var 0 = new thing();(内存膨胀)
> * 原型链：
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
> * Es6方法：
    => class thing{
        Constructor(){
            this.x = 2;thi.y = 3;
        }
        f() {
            .....
        }
    }
    var o = new thing();
> * call和apply，访问上下文来继承。

### Tcp和udp区别
> * 最大的区别是tcp丢包时会重新连接，但是udp不会。udp(视频直播)

### 防止CORS
> * 利用后端语言生成随机数，因为CORS是不可以访问cookie的，所以可以保存在cookie里面
