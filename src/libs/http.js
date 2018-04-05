import axios from 'axios';
import store from '../store';
import iView from 'iview';
import router from '../router';

import env from '../config/env';
import * as types from '../store/types';


const ajaxUrl = env === 'development' ?
    'http://127.0.0.1:18888/api' :
    env === 'production' ?
        'https://www.url.com' :
        'https://debug.url.com';

var instance = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

// axios 配置
instance.defaults.timeout = 10000;
instance.defaults.responseType = 'json';
instance.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
instance.defaults.headers.post['Accept'] = 'application/json; charset=utf-8';
/*axios.defaults.headers.post['responseType'] = 'json';*/
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';



instance.interceptors.request.use(function (config) {
    let authToken = window.localStorage.getItem('token');
    if (authToken != null) {
        config.headers.Authorization = authToken;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    if(response.data && !response.data.success){
        iView.Message.error(response.data.message);


        router.replace({
            path: 'login',
            // query: {redirect: router.currentRoute.fullPath}
        });
    }
    return response;
}, function (error) {

    iView.Message.error(error);
    if (error.response) {
        switch (error.response.status) {
            case 401:
                // 401 清除token信息并跳转到登录页面
                store.commit(types.LOGOUT);
                router.replace({
                    path: 'login',
                    query: {redirect: router.currentRoute.fullPath}
                });
        }
    }


    return Promise.reject(error);
});


export default instance;
