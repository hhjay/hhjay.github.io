import Vue from 'vue'
import App from './App.vue';
import router from './router'; // vue-router
import store from './store'; // vuex
import './components/index'; // 全局组件 + plug(mixin、filter、function)
import './assets/sass/index.scss';// 样式

Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')