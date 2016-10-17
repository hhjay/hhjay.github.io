# 工作之后的学习

## 使用npm安装react
- [ ] 首先全局安装babel、webpack、webpack-dev-server
- [ ] npm install babel/webpack/webpack-dev-server -g

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
- [x] 参考链接 https://www.zhihu.com/question/30938856