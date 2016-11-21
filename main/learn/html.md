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