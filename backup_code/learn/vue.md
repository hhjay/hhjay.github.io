# vue学习

------

## event bus
- [1] 使用公用的bus
- [2] 在$on之后，要 $off 掉，否则后面的函数和数据会和之前的冲突
- [3] $off的时候，会有多个冲突，这时候最好off指定具体的回调函数

## 