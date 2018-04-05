import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import router from './router';

import store from './store';
import util from './libs/util';
import axios from './libs/http';
import Mock from './mock/index'; // 引入mock模块
// Mock.start(); //并且执行初始化函数


import App from './app.vue';
import '!style-loader!css-loader!less-loader!./theme/index.less';


Vue.use(VueRouter);
Vue.use(iView);


Vue.prototype.$http = util.ajax;


new Vue({
    el: '#app',
    store: store,
    axios:axios,
    router: router,
    render: h => h(App)
});