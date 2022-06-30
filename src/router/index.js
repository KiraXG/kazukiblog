import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        redirect: "/home",
        component: () => import("../views/home/home"),
    },
    {
        path: "/home",
        name: "home",
        component: () => import("../views/home/home"),
        meta: {
            title: "首页",
            keepAlive: true,
        },
    },
    {
        path: "/classification",
        name: "classification",
        component: () => import("../views/classification/classification"),
        meta: {
            title: "分类",
            keepAlive: true,
        },
    },
    {
        path: "/comic",
        name: "comic",
        component: () => import("../views/comic/comic"),
        meta: {
            title: "番剧",
            keepAlive: true,
        },
    },
    {
        path: "/comicNews",
        name: "comicNews",
        component: () => import("../views/comicNews/comicNews"),
        meta: {
            title: "新番咨询",
            keepAlive: true,
        },
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../views/about/about"),
        meta: {
            title: "关于",
            keepAlive: true,
        },
    },
    {
        path: "/help",
        name: "help",
        component: () => import("../views/help/help"),
        meta: {
            title: "帮助",
            keepAlive: true,
        },
    },
];

const router = new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes,
});

export default router;
