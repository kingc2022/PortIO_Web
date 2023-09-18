import {createRouter, createWebHistory} from "vue-router";
import config from '@/config/config'
import user from "@/plugins/stores/user";

const routes = [
    {
        path: "/",
        name: "index",
        component: () => import("../views/Index.vue"),
        meta: {
            title: "欢迎",
        },
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/User/Login.vue"),
        meta: {
            title: "登录",
        },
    },
    {
        path: "/logout",
        name: "logout",
        component: () => import("../views/User/Logout.vue"),
        meta: {
            title: "退出登录",
        },
    },
    {
        path: "/tunnels",
        name: "tunnels",
        component: () => import("../views/Tunnels/Index.vue"),
        meta: {
            title: "隧道",
        },
    },
    {
        path: "/tunnels/create",
        name: "tunnels.create",
        component: () => import("../views/Tunnels/Create.vue"),
        meta: {
            title: "创建隧道",
        },
    },
    {
        path: "/tunnels/:id",
        name: "tunnels.show",
        component: () => import("../views/Tunnels/Show.vue"),
        meta: {
            title: "隧道",
        },
    },
    {
        path: "/status",
        name: "status",
        component: () => import("../views/Status.vue"),
        meta: {
            title: "节点状态",
        },
    },
    {
        path: "/downloads",
        name: "downloads",
        component: () => import("../views/Downloads.vue"),
        meta: {
            title: "客户端下载",
        },
    },
    {
        path: "/sign",
        name: "sign",
        component: () => import("../views/Sign.vue"),
        meta: {
            title: "签到",
        },
    },
    {
        path: "/charge",
        name: "charge",
        component: () => import("../views/Charge.vue"),
        meta: {
            title: "流量充值",
        },
    },
    {
        path: "/ticket",
        name: "ticket",
        component: () => import("../views/Ticket.vue"),
        meta: {
            title: "发布工单",
        },
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title + " - " + config.title
    if (to.name !== 'login' && user.state.token === null) {
        next({name: 'login'})
    } else if (to.name === 'login' && user.state.token !== null) {
        next({name: 'index'})
    } else {
        next()
    }
})

export default router;
