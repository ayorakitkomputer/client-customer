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
    path: "/builds/",
    name: "PickParts",
    component: () => import("../views/PickParts.vue"),
    children: [
      {
        name: "buildCPU",
        path: ":id/cpu",
        component: () => import("../components/PickParts/PickPartsMain.vue"),
      },
      {
        name: "buildMotherboard",
        path: ":id/motherboard",
        component: () => import("../components/PickParts/PickPartsMain.vue"),
      },
      {
        name: "buildMemory",
        path: ":id/memory",
        component: () => import("../components/PickParts/PickPartsMain.vue"),
      },
      {
        name: "buildGpu",
        path: ":id/gpu",
        component: () => import("../components/PickParts/PickPartsMain.vue"),
      },
      {
        name: "buildStorage",
        path: ":id/storage",
        component: () => import("../components/PickParts/PickPartsMain.vue"),
      },
      {
        name: "buildPowerSupply",
        path: ":id/power_supply",
        component: () => import("../components/PickParts/PickPartsMain.vue"),
      },
      {
        name: "buildCase",
        path: ":id/case",
        component: () => import("../components/PickParts/PickPartsMain.vue"),
      },
      {
        name: "buildMonitor",
        path: ":id/monitor",
        component: () => import("../components/PickParts/PickPartsMain.vue"),
      },
      {
        name: "buildCaseFan",
        path: ":id/fans",
        component: () => import("../components/PickParts/PickPartsMain.vue"),
      },
      {
        path: ":id",
        component: () =>
          import("../components/PickParts/PickPartsCurrentBuild.vue"),
        name: "buildCurrentBuild",
      },
      {
        path: "",
        component: () => import("../components/PickParts/PickPartsLanding.vue"),
        name: "buildLanding",
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/profiles/:profileid/builds",
    name: "UserBuilds",
    component: () => import("../views/UserBuilds.vue"),
  },
  {
    path: "/profiles/:profileid/transactions",
    name: "UserTransactions",
    component: () => import("../views/UserTransactions.vue"),
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
  // console.log(to, from, "INI NAV GUARD");
  if (
    (to.fullPath.includes("/builds") || to.fullPath.includes("/profiles")) &&
    !isAuthenticated()
  ) {
    next({ name: "Login" });
    // } else if (to.fullPath.params.id && to.fullPath.name) {

    //     next();
    //     // next({ name: "buildCurrentBuild", params: { id: "5" } });
    // }
  } else {
    // console.log("ga masuk");
    next();
  }
});

export default router;
