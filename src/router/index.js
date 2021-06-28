import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/build",
        name: "PickParts",
        component: () => import("../views/PickParts.vue"),
        children: [
            {
                name: "buildCPU",
                path: "cpu",
                component: () => import("../components/PickPartsMain.vue"),
            },
            {
                name: "buildMotherboard",
                path: "motherboard",
                component: () => import("../components/PickPartsMain.vue"),
            },
            {
                name: "buildMemory",
                path: "memory",
                component: () => import("../components/PickPartsMain.vue"),
            },
            {
                name: "buildGpu",
                path: "gpu",
                component: () => import("../components/PickPartsMain.vue"),
            },
            {
                name: "buildStorage",
                path: "storage",
                component: () => import("../components/PickPartsMain.vue"),
            },
            {
                name: "buildPowerSupply",
                path: "power_supply",
                component: () => import("../components/PickPartsMain.vue"),
            },
            {
                name: "buildCase",
                path: "case",
                component: () => import("../components/PickPartsMain.vue"),
            },
            {
                name: "buildMonitor",
                path: "monitor",
                component: () => import("../components/PickPartsMain.vue"),
            },
            {
                name: "buildCaseFans",
                path: "fans",
                component: () => import("../components/PickPartsMain.vue"),
            },
        ],
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
