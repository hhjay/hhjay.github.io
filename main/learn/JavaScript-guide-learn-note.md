# JavaScript权威指南-6

------
读书札记

## 1、JavaScript概述
- [x] 1.1、
	- [1] 面向Web的编程语言，是一门动态、弱类型的编程语言；语法起源于Java，一等函数来自Scheme，基于原型的继承来自Self。
	- [2] 由Netscape公司创建，sun Microsystem(现在的Oracle)注册商标，且Netscape将JavaScript作为标准提交给ECMA，固也叫ECMAScript(ES)。
	- [3] JavaScript解释器(也叫引擎)，Google将它的JavaScript解释器叫做V8。
- [x] 1.2、client JavaScript
	- [1] 绑定回调与注册事件处理。

## 2、词法结构
- [x] 2.1、字符集
	- [1] Unicode，js区分大小写、html不区分大小写(但xhtml区分大小写)。
	- [2] 保留字；return、break、continue和随后的表达式不能有换行；++和--将作为下一行代码的前缀操作符并与之一起解析(x \n ++ \n y => x; y++; Not x++; y)。

## 3、类型、值和变量
- [x] 3.1、js数据类型：原始类型(数字、字符串、布尔值、null、undefined)和对象类型(属性的集合、函数(1)、数组(Array)、日期(Date)、正则(RegExp)、错误(Error))。
	- [1] 函数(是与之相关联的可执行代码的对象，通过调用函数来运行可执行代码，并返回运算结果)；如果函数是用来初始化(new )一个新建的对象，称之为构造函数(constructor)。
- [x] 3.2、js数据类型又可分为：可变类型(数字、布尔值、null、undefined)和不可变类型；js变量是无类型的，变量可以被赋予任何类型的值。
- [x] ES3中字符串直接量必须写在一行中；ES5中可以拆分成多行，每行以(\)结束。
- [x] "1a2b3c".split(/\D+/) =>[1, 2, 3, ""]
- [x] null、undefined、0、-0、NaN、"" =>false

## 

