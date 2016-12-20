# html从入门到放弃

-------
 html标签、html5新属性、html meta系列、html布局系列~

## localStorage、sessionStorage、cookie的区别
- [x] 相同点
	- [1] 都是保存在本地浏览器，且同源；
- [x] 不同点
	- [1] localStorage与sessionStorage都不会主动把数据发给服务器，仅在本地保存；
	- [2] sessionStorage只可以同源下的同窗口，刷新或进入同源的不同页面，数据继续存在，关闭页面即自动销毁；
	- [3] localStorage用于本地持久的本地存储，除非主动删除数据，否则是不会过期的；
	- [4] 与cookie相比，web storage存储空间更大，一般认为每个独立的存储空间是10M，cookie才4k；
	- [5] cookie每次在同源的http请求携带，所以经常使用cookie来验证一些服务器和客户端之间的数据；
	- [6] cookie服务器端也可以保存及使用；

## html5上传文件、可以学习到html5的文件读写功能那些
- [ ] 写个例子


## client离线缓存
- [ ] 建立.manifest或者appcache
- [ ] 建index.html将文件引入html中
- [ ]
```html
	<!DOCTYPE html>
	<html manifest="test.manifest">
	<head>
		<title>chahe test</title>
	</head>
	<body>
	</body>
	</html>
```

## 在页面添加评注
- [ ] [link](http://www.html-js.com/article/The-front-end-of-the-official-about-the-new-function-column-mass-just-online-commentary)

## 图片预加载、减少图片加载
- [x] css背景：将所有图片放在背景图、之后调用路径不变就不会再次请求图片
	- [1] 
		```css
			background: url(xxx.png) no-repeat -9999px -9999px;
		```
- [x] js预加载：获取将要加载的图片url，将对应的图片加载
	- [1] 
		```JavaScript
			var img = [];
			for(var i = 0, len = url.length; i < len; i++){
				img[i] = new Image();
				img[i].src = url[i];
			}
		```

## web语义化
- [x] 让机器可以读懂内容
	- [1] 各种索引内容处理和挖掘如搜索引擎
	- [2] 让机器的理解能力越来越接近人
	- [3] 发布内容时用机器可以理解、被广泛认可的语义信息来描述内容，来降低机器处理Web内容的难度
- [x] 人可以读懂内容，有层次
	- [1] W3c / html5 / ...
	- [2] BOM
	- [3] DOM
