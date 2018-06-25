---
title: vue源码解读
date: 2018-06-13 10:37:18
tags: js
---

## vue生命周期
``` JavaScript
    // 例子 ~/backup_code/learn/example/js-pro/vue-code.html
    new Vue()
    beforeCreate()
    created()
    beforeMount()
    ...compile...
    mounted()
    beforeUpdate()
    updated()
    beforeDestroy()
    destroyed()
```
- new Vue()
    - 创建Vue实例
- 创建前后
    - 在实例创建之后，数据观测（data observe）和事件配置（events/watcher）之前被调用beforeCreate
        - beforeCreate阶段，vue的挂载元素el和数据对象data都是undefined，未初始化
    - 实例创建后立即调用created
        - Vue实例的数据对象data有了，但el还没有
- 载入前后（在服务端渲染都不会被调用）
    - 挂载实例之前调用beforeMount，相关的render函数首次被调用beforeMount
        - Vue实例的$el和data都初始化了，但挂载之前还是虚拟dom节点，相关的data下的数据未替换
    - $el被新创建的vm.$el替换，并挂载到实例上去之后调用mounted
        - Vue实例挂载完成，相关的数据会被替换渲染
- 更新前后
    - 数据更新时调用beforeUpdate，发生在虚拟dom打补丁之前
        - 这里适合更新之前访问的dom，比如手动移除已添加的事件监听器
    - 数据更新导致的虚拟dom重新渲染和打补丁，之后调用updated
- 销毁前后
    - 实例销毁之前调用beforeUpdate，在这一步，实例仍然完全可用
    - Vue实例销毁之后调用
        - 实例的所有东西都会被解绑，所有的事件监听器都会被移除，所有的子实例都会被销毁

## 双向数据绑定原理
- [definePrototype和proxy的区别](https://juejin.im/post/5acd0c8a6fb9a028da7cdfaf)

## 虚拟dom

## vue的template编译的原理

## event & v-model 实现原理

## slot & keep-alive 实现原理

## transition 过渡的实现原理

## vue-router 路由的实现原理

## vuex 状态管理的实现原理

## 参考
- [juejin.vue面试](https://juejin.im/post/5b19e81de51d454e907bd1c5)