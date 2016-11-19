# css从入门到放弃

-------
 css、less、sass~

## 使用css记录当前进度，eg：下载等
- [ ] 写个例子

## css的塌陷问题
- [ ] 外边距塌陷
	- [1] 块级元素的margin-top与margin-bottom有时会合并(塌陷)为单个外边距 --this is 外边距塌陷
	- [2] 浮动、绝对定位元素外边距不会合并
- [ ] 高度塌陷
	- [1] 指当容器包含浮动元素，容器不会像这些元素不浮动般的自动扩展，高度会塌陷下去
	- [2] 详情参考[由于浮动而导致父级元素高度塌陷](#由于浮动而导致父级元素高度塌陷)
- [ ] [link](./example/css-pro/marginSink.html) 


## 由于浮动而导致父级元素高度塌陷
- [x] 浮动原理
	- [1] float属性定义元素浮动到左侧或右侧，常用于文字环绕在图片周围；
	- [2] 可以使用电梯靠左靠右来判断，如一个人站在了左侧，那如果后一个人体积太大只能站后面；
- [x] 塌陷原理
	- [1] BFC(块级上下文) / 浮动元素不占普通流位置，浮动之后就产生了一个独立的块级上下文，这个独立的BFC就撑不起父级元素的高度；
- [x] 解决方案
	- [1] 父级元素 display: inline-block;
	- [2] 父级元素 div:after{ content: ".";.... }
	- [3] 父级元素也设置浮动
	- [4] 在后面加上清除浮动元素
- [x] [参考链接](https://www.zhihu.com/question/30938856)

## display: inline-block间隙问题
- [x] chrome-8px firefox/ie8+-4px
- [x] 原因：inline元素之间本身存在间隙、由inline元素之间的空白引起，解决方案：去掉空白符
	- [1] 例: <a href="">link1</a><!-- --><a href="">link2</a>
- [x] 首先在ie6下inline-block是换行的，处理方案为：先设置inline样式，再触发haslayout属性，即{*display: block;*zoom:1;}

## less、sass怎么用，区别

## less
- [ ] less是一门css预处理语言，拓展了css语言，增加了变量、函数等特征，是css更容易维护和拓展
- [ ] 运行环境，Node/浏览器端
- [ ] [link](http://lesscss.cn/)

## sass
- [ ] sass是世界上最成熟、稳定、强大且专业的css扩展语言(官网自诩)
- [ ] 兼容css：sass完全兼容所有的css，我们认真对待这些兼容性以便您可以无缝使用任何可用的css库
- [ ] 特征丰富：sass拥有比其他css扩展语言更多的功能和能力，且核心团队不断工作保持领先
- [ ] 成熟：已被核心团队支持超过9年
- [ ] 行业认证：业界选择sass作为css拓展语言的首选
- [ ] 广大社区支持：由多个科技公司和数百个开发人员的积极支持和开发
- [ ] 架构：很多框架使用sass构建，例如[Compass](http://compass-style.org/)、[Bourbon](http://bourbon.io/)
- [ ] [link](http://sass-lang.com/)
