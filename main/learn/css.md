# css从入门到放弃

-------
 css、less、sass~

## 使用css记录当前进度，eg：下载等
- [ ] 写个例子

## css的margin塌陷问题
- [ ] 

## less、sass怎么用，区别

## display: inline-block间隙问题
- [x] chrome-8px firefox/ie8+-4px
- [x] 原因：inline元素之间本身存在间隙、由inline元素之间的空白引起，解决方案：去掉空白符
	- [1] 例: <a href="">link1</a><!-- --><a href="">link2</a>
- [x] 首先在ie6下inline-block是换行的，处理方案为：先设置inline样式，再触发haslayout属性，即{*display: block;*zoom:1;}