import $http from '../libs/http';
import MockAdapter from 'axios-mock-adapter';

export default {
    /**
     * mock start
     */
    start() { // 初始化函数
        let mock = new MockAdapter($http); // 创建 MockAdapter 实例
        // 获取todo列表
        mock.onPost('/api/login').reply(config => { //  config 指 前台传过来的值
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        'token'    : '@guid'
                    }]);
                }, 200);
            });
        });
        // 新增一条todo
        mock.onPost('/todo/addTodo').reply(config => {

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200]);
                }, 200);
            });
        });
    }
};