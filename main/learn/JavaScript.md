# js/es从入门到放弃

-------
 js、nodeJs、mvvm框架、数据可视化echarts、效率等~

## reactJs修炼
- [x] 使用npm安装react
	- [1] 首先全局安装babel、webpack、webpack-dev-server
	- [2] npm install babel/webpack/webpack-dev-server -g
- [ ] 直接引入js

## push和unshift
- [x] 由例子可知，push效率高于unshift，据说测速的push有43.225ms而unshift则是3935.152ms左右，效率远大于push，数据小的时候可能体会不出来，数据比较大的时候就会发现unshift有明显的卡顿
``` javascript

<!-- push -->
	console.time("push");
	var arr = [];
	for(var i = 0; i < 100000; i++){
		arr.push(i);
	}
	console.log(arr);//  43.225ms
	console.timeEnd("push");

<!-- unshift -->
	console.time("unshift");
	var arr = [];
	for(var i = 0; i < 100000; i++){
		arr.unshift(i);
	}
	console.log(arr);//  3935.152ms
	console.timeEnd("unshift");

<!-- push + reverse -->
	console.time("push");
	var arr = [];
	for(var i = 0; i < 100000; i++){
		arr.push(i);
	};
	arr.reverse();
	console.log(arr);//  69.286ms
	console.timeEnd("push");

```
- [x] 所以使用push，如果真要从排头进入，那么可以先push之后再reverse即可，通过时间的比较，也比unshift的效率高了56.8倍；

## 数组去重 来自echarts的热力图中区域的比较
- [x] 将x、y轴相等时z应相加
``` javascript
[[0, 0, 1], [0, 0, 2]]
=>
[[0, 0, 3]]
```
- [x] 直接上代码
	- [1] method1
	``` javascript
	// 有个问题 就是没有排好序，所以会有问题
	var len = arr.length;
	var newArr = [];
	for(var i = 0; i < len; i++){
		var temp1 = arr[i];
		var sum = temp1[2];
		for(var j = i + 1; j < len; j++){
			var temp2 = arr[j];
			if(temp1[0] == temp2[0] && temp1[1] == temp2[1]){
				sum = sum + temp2[2];
			}else{
				i = j;
			}
		}
		newArr.push([temp1[0], temp1[1], sum]);
	}
	```
	- [2] method2
	``` javascript
	
	```

## [1, 2] + [3, 4] 为什么不等于 [1, 2, 3, 4]
- [x] 因为[1, 2] + [3, 4]会转为"1,2" + "3,4" = "1,23,4";数组转为字符串

## NaN与Null的区别

## 操作Dom的效率问题：从innerHTML到jquery及vue、react的virtualDom操作html
- [ ] 

## provision headers are shown
- [x] 请求可能被屏蔽，例如chrome的插件adblock之类的；
- [x] 前端发送的内容有误；
- [x] 服务器问题；
- [x] 可能是按钮触发了表单提交，同时你再请求ajax；
- [x] 相同的请求数过多及间隔太短，导致加载失效；

## ajax请求慢的问题
- [ ] 问：ajax请求之前的请求是否会阻塞之后的请求？UI的渲染是否会阻塞之后的请求？并发数的个数？

## 从前端请求到后端java查es
- [x] 前端发请求到java，java将要查询的条件请求至es集群，从es集群(节点)中找到离散的数据并集装至java，java再将对应的数据返回；

## 快速排序、分治法
- [ ] 

## js下载
- [ ] blob
- [ ] html5 download

## promise的实现
- [x] promise对象用于异步操作的消息，它代表了某个事件处理的结果；
- [x] promise的特点
	- [1] 对象状态不受外界影响，分别是三种状态[pending(进行中)、resolve(已完成)、rejected(已失败)]
	- [2] 一旦改变状态，就不会变
- [x] promise的目的是为了让回调更优雅，例如ajax中的多级回调，它可以将异步操作以同步操作的流程表达出来，更像链式回调，(例promise.html)
- [ ] 问：promise中断是否可以使请求中断？

## jsonp连接会有断断续续
- [ ]

## php curl抓取问题、本地抓得到远端失败？
- [ ] 可以抓到数据，获取节点失败。

## 同一个页面多个相同id时 css、js情况
- [x] [例子](./example/commonId.html)

## js javascript是单线程的、然而异步是怎么回事?这两者不冲突？
- [x] 单线程/多线程：js本身是单线程的，即在同一时刻只会有一处代码正在执行，曰js执行线程；而ajax的异步机制是由浏览器的多个常驻线程共同完成，如js执行线程和事件触发线程共同完成、js的执行线程发起异步请求，这时候js的执行线程已经完成、继续往下执行，然后在后面的某一时刻请求完成才会把完成事件插入到该执行线程尾部等待处理；----理解队列、栈
- [x] 例如setTimeOut/setInterVal也是放在执行线程队列尾部 // 阻塞、非阻塞
``` javascript
/**
 * 执行队列为a c b，触发b之后把定时触发处理函数的执行请求插入到执行队列队尾
 */
	console.log("start"); // a
	setTimeOut(function(){
		console.log("time out");
	}, 0); // b
	console.log("end"); // c
```
- [x] [知乎](https://www.zhihu.com/question/20866267)
- [x] [ryf](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)
- [x] [moz](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop)

## 严格模式和显示模式。。。
- [ ]

## 拼音匹配
- [x] 先把汉字变拼音，然后匹配
- [x] [链接](http://pinyin.hotoo.me/)
- [x] [例子](./example/select.html)

## dom操作效率
- [x] [例证](./example/fe-document.html)

## 日历
- [ ] 实现日历基本功能；
- [ ] 可以实现输入，选择选项；
- [ ] [例子](./example/fe-calendar.html)

## echarts中数据名过长的解决方案
- [ ] 先解决字符串是否过长；
- [ ] 对过长字符串进行处理：
	- [1] 设置全部可见->interval: 0；
	- [2] 对于过长的进行换行操作；

## js闭包
- [x] [链接](http://www.html5cn.org/article-9958-1.html);
- [x] 执行环境与执行对象、作用域；
- [x] 定义：指有权访问另一个函数作用域变量的函数，通常是在一个函数内部创建另一个函数，固闭包的本质还是函数；
```JavaScript
<script type="text/javascript">
	function A(){
		var x = 1;
		return function(){
			console.log(x);
		}
	}
	var m = A();
	m(); // log 1
 	// 通过m函数，可以获取A函数内部变量的值
</script>
```
- [x] 例子2
```JavaScript
<script type="text/javascript">
	function A(){
		var x = 1;
		return function(){
			x++;
			console.log(x);
		}
	}
	var a1 = A();
	a1(); // 2
	a1(); // 3
	var a2 = A();
	a2(); // 2
	a1(); // 4
/**
 * a、m1在执行中并没有释放内存，固x值一直增加；
 * b、除非置m1 = null，否则不会释放内存；
 * c、m2是重新生成了一个新活动对象，新作用链；
 */
</script>
``` 
- [x] 经典例子
```JavaScript
<script type="text/javascript">
	function A(){
		var f = [];
		for(var i = 0; i < 10; i++){
			f[i] = function(){
				return i;
			}
		}
		return f;
	};
	var m = A(); // 定义函数，未执行
	// 真正产生环境变量，所以f[i]都指向对应的m的值 f[i]都是10
	// 只产生一次
	console.log(m[1]);
</script>
```

## script引入、require同步引入、AMD区别
- [x] 从webpack文档看：前端自动化构建工具、模块化工具、资源管理工具；
- [x] script引入
	- [1] 全局变量中冲突；
	- [2] 加载顺序很重要，可能会因为加载顺序不对导致依赖错误；
	- [3] 开发人员得解决模块/包之间的依赖；
	- [4] 在大项目中，script列表可能会很长难管理；
- [x] require同步引入: commonJs
	- [1] 
		```JavaScript
			require("module");
			module.exports = some
		```
	- [2] 优点
		- [2.1] 站点模块可被重复引用
		- [2.2] 有很多模版都以这种方式编写，例npm
		- [2.3] 简单、方便使用
	- [3] 缺点
		- [3.1] 在网络被阻塞的情况下不能很好的被调用，因为网络请求是异步的
		- [3.2] 不可以同时请求多个模块
- [x] AMD：requireJs
	- [1]
		```JavaScript
			require(["module", "../file"], function(module, file){
				/* something */
			});
			define("mymodule", ["dep1", "dep2"], function(d1, d2){
				return somthing;
			})
		```
	- [2] 优点
		- [2.1] 适合网络上的异步请求
		- [2.2] 可并行加载多个模块
	- [3] 缺点
		- [3.1] 编码开销比较大，更难阅读和编写代码
- [x] ES6模块引入
	- [1]
		```js
			import "jquery";
			export function doSomething(){
				/* something */
			}
		```
	- [2] 优点
		- [2.1] 静态分析简单
		- [2.1] 面向未来的es标准
	- [3] 缺点
		- [3.1] 有些浏览器还没支持
		- [3.2] 这种风格使用的比较少

## call、apply区别
- [ ] 他们的作用都是将函数绑定到另外一个对象上去运行
- [ ] 在一个对象的上下文中应用另一个对象的方法，apply参数能够以数组形式传入，call参数能够以列表形式传入

## 关于减法 数据溢出的问题
- [x] 例：0.3 - 0.2 = 0.09999999999999998 | 1.1 - 0.1 = 0.10000000000000009
- [x] 方法1：直接使用toFixed()
	``` JavaScript
	function dealFloat(n1, n2, sign){
		var s1 = (n1 +"").split("."), l1 = 0, res = 0;
		if( s1.length > 1){
			l1 = s1[1].length;
		}
		if( sign == "-"){
			res = n1 - n2;
		}
		if( sign == "+"){
			res = n1 + n2;
		}
		return res.toFixed(l1);
	}
	```
- [x] 方法2：先转换为整数，做运算，然后再转值
	- [1] 可能又会出现变成整数过程中会变化(值太大溢出)

## Uncaught SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
- [x] 语法错误: 在严格模式之外，暂不支持快作用范围的声明。
- [x] 解决方案
	- [1] 使用严格模式 "use strict"
	- [2] 将let改成var
	- [3] 升级浏览器啊，使用chrome啊

## html5输入数字兼容处理
- [x] 实现功能：上下按键可加减、点击上下可加减、可自行输入、过滤非数字、判断最大最小值、精度判断
- [x] [链接](./example/inputNumberUpOrDown.html)
- [x] [参考](http://www.helloweba.com/demo/spinner/bootstrap.html)

## echarts2.x和echarts3.x的版本兼容问题
- [x] showloading、hideloading、setoption
- [x] 好像又是因为require引入顺序问题，2.x的js竟然在3.x的js后面执行
- [x] [例子](./echart2Or3.html)