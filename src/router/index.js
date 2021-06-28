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
        path: "/build/:id",
        name: "PickParts",
        component: () => import("../views/PickParts.vue"),
        children: [
            {
                name: "buildCPU",
                path: "cpu",
                component: () =>
                    import("../components/PickParts/PickPartsMain.vue"),
            },
            {
                name: "buildMotherboard",
                path: "motherboard",
                component: () =>
                    import("../components/PickParts/PickPartsMain.vue"),
            },
            {
                name: "buildMemory",
                path: "memory",
                component: () =>
                    import("../components/PickParts/PickPartsMain.vue"),
            },
            {
                name: "buildGpu",
                path: "gpu",
                component: () =>
                    import("../components/PickParts/PickPartsMain.vue"),
            },
            {
                name: "buildStorage",
                path: "storage",
                component: () =>
                    import("../components/PickParts/PickPartsMain.vue"),
            },
            {
                name: "buildPowerSupply",
                path: "power_supply",
                component: () =>
                    import("../components/PickParts/PickPartsMain.vue"),
            },
            {
                name: "buildCase",
                path: "case",
                component: () =>
                    import("../components/PickParts/PickPartsMain.vue"),
            },
            {
                name: "buildMonitor",
                path: "monitor",
                component: () =>
                    import("../components/PickParts/PickPartsMain.vue"),
            },
            {
                name: "buildCaseFan",
                path: "fans",
                component: () =>
                    import("../components/PickParts/PickPartsMain.vue"),
            },
            {
                path: "",
                component: () =>
                    import("../components/PickParts/PickPartsHome.vue"),
                name: "buildHome",
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

function isAuthenticated() {
    if (localStorage.access_token) return true;
    return false;
}

router.beforeEach((to, from, next) => {
    if (to.fullPath.includes("/build") && !isAuthenticated()) {
        next({ name: "Login" });
    } else {
        console.log("ga masuk");
        next();
    }
});

export default router;
