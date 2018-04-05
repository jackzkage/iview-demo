import Cookies from 'js-cookie';
import $http from '../../libs/http';
import * as types from '../types';

const state = {
    isLogin: false,
    currentUser: {
        userId:'',
        userName:'',
        mobileNo:'',
        avatar:''
    },
    token: ''
};

const mutations = {
    resetLogin(state) {
        state.token = '';
        state.isLogin = false;
        state.currentUser.userId = '';
        state.currentUser.userName = '';
        state.currentUser.mobileNo = '';
        state.currentUser.avatar = '';

    },
    [types.LOGIN](state, data) {
        state.token = data.token;
        state.isLogin = data.isLogin;
    },
    [types.LOGOUT](state, data) {
        state.token = data.token;
        state.isLogin = data.isLogin;
    },
    userInfo(state, user) {
        state.currentUser.userId = user.userId;
        state.currentUser.userName = user.userName;
        state.currentUser.mobileNo = user.mobileNo;
        state.currentUser.avatar = user.avatar;
    }
};

var qs = require('qs');
const actions = {
    login({commit}, user) {
        return new Promise((resolve, reject) => {
            $http.post('/login', qs.stringify(user)).then(function (response) {
                if(response.data.success){
                    response.data.isLogin = true;
                    commit(types.LOGIN, response.data.data);

                    window.localStorage.setItem('token',response.data.data.currentUser.userId+'_'+response.data.data.token)

                    resolve(response);
                }else{
                    commit('resetLogin');
                    reject(response.data);
                }

            }).catch(error => {
                reject(error);
            });
        });
    },
    logout({commit}) {
        return new Promise((resolve, reject) => {
            $http.post('/logout').then(function (response) {
                commit('resetLogin');
                window.localStorage.removeItem('token')
                resolve(response);

            }).catch(error => {
                reject(error);
            });
        });
    },
    userInfo({commit}) {
        return new Promise((resolve, reject) => {
            $http.get('/user/get').then(function (response) {

                if(response.data.success){
                    commit('userInfo', response.data.data.user);
                    resolve(response);
                }else{
                    reject(response.data);
                }
            }).catch(error => {
                reject(error);
            });
        });
    }

};


export default {
    namespaced: true,
    state: state,
    actions: actions,
    mutations: mutations
};
