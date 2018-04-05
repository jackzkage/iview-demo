import util from './libs/util';
import VueRouter from 'vue-router';
import iView from 'iview';


const otherRouter = [{
    path: '/',
    meta: {
        title: ''
    },
    name: 'main',
    component: (resolve) => require(['./views/index.vue'], resolve),
    children: [
        {
            path: 'vm-login',
            name: 'vm-login',
            component: (resolve) => require(['./views/vm-login.vue'], resolve)
        }, {
            path: 'content',
            name: 'content',
            component: (resolve) => require(['./components/content.vue'], resolve)
        }]

}];


const loginRouter = [{
    path: '/login',
    name: 'login',
    meta: {
        title: '登录'
    },
    component: (resolve) => require(['@/views/login.vue'], resolve)
}, {
    path: '/logout',
    name: 'logout',
    meta: {
        title: '退出'
    },
    component: (resolve) => require(['@/views/login.vue'], resolve)
},];

const errorPageRouter = [{
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: (resolve) => require(['@/views/error-page/404.vue'], resolve)
}];

// // 所有上面定义的路由都要写在下面的routers里
const routers = [
    ...loginRouter,
    ...otherRouter,
    ...errorPageRouter
];


// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});


export default router;