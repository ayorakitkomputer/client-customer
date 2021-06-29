import Vue from "vue";
import Vuex from "vuex";
import axios from "../config/axios";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        componentData: {},
        componentDataLoading: false,
        componentsCategory: {
            cpu: ["Name", "Socket", "iGPU", "TDP", "Price", "Stock"],
            motherboard: [
                "Name",
                "Socket",
                "Form Factor",
                "Memory Type",
                "Price",
                "Stock",
            ],
            gpu: ["Name", "TDP", "Price", "Stock"],
            memory: ["Name", "Memory Type", "Speed", "Price", "Stock"],
            powerSupply: [
                "Name",
                "Efficiency Rating",
                "Wattage",
                "Price",
                "Stock",
            ],
            storage: ["Name", "Type", "Capacity", "Price", "Stock"],
            monitor: ["Name", "Size", "Price", "Stock"],
            case: ["Name", "Form Factor", "Price", "Stock"],
            caseFan: ["Name", "Size", "Price", "Stock"],
        },
        currentBuild: {},
        userBuilds: [],
    },
    mutations: {
        SET_COMPONENT_DATA(state, payload) {
            state.componentData = payload;
        },
        SET_COMPONENT_LOADING(state, payload) {
            state.componentDataLoading = payload;
        },
        SET_CURRENT_BUILD(state, payload) {
            state.currentBuild = payload;
        },
        SET_USER_BUILDS(state, payload) {
            state.userBuilds = payload;
        },
    },
    actions: {
        getCpu(context, page = 1) {
            axios({
                url: `/cpu?page=${page}`,
                headers: {
                    access_token: localStorage.access_token,
                },
            })
                .then(({ data }) => {
                    let cpuData = {
                        category: context.state.componentsCategory.cpu,
                        data: data.data,
                        pagination: {
                            page,
                            totalPage: data.howManyPages,
                        },
                        type: "cpu",
                    };
                    context.commit("SET_COMPONENT_DATA", cpuData);
                    context.commit("SET_COMPONENT_LOADING", false);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getMotherboard(context, page = 1) {
            // console.log(context.state.currentBuild, "ini di mobo");
            axios({
                url: `/builds/${context.state.currentBuild._id}/motherboard?page=${page}`,
                headers: {
                    access_token: localStorage.access_token,
                },
            })
                .then(({ data }) => {
                    // console.log(data[0].pages, "INI MOBO");
                    let motherboardData = {
                        category: context.state.componentsCategory.motherboard,
                        data: data[0].data,
                        pagination: {
                            page,
                            totalPage: data[0].pages[0].total,
                        },
                        type: "motherboard",
                    };
                    context.commit("SET_COMPONENT_DATA", motherboardData);
                    context.commit("SET_COMPONENT_LOADING", false);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getStorage(context, page = 1) {
            axios({
                url: `/storages?page=${page}`,
                headers: {
                    access_token: localStorage.access_token,
                },
            })
                .then(({ data }) => {
                    let storageData = {
                        category: context.state.componentsCategory.storage,
                        data: data.data,
                        pagination: {
                            page,
                            totalPage: data.howManyPages,
                        },
                        type: "storage",
                    };
                    context.commit("SET_COMPONENT_DATA", storageData);
                    context.commit("SET_COMPONENT_LOADING", false);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getPowerSupply(context, page = 1) {
            axios({
                url: `/builds/${context.state.currentBuild._id}/power_supply?page=${page}`,
                headers: {
                    access_token: localStorage.access_token,
                },
            })
                .then(({ data }) => {
                    let powerSupplyData = {
                        category: context.state.componentsCategory.powerSupply,
                        data: data[0].data,
                        pagination: {
                            page,
                            totalPage: data[0].pages[0].total,
                        },
                        type: "powerSupply",
                    };
                    context.commit("SET_COMPONENT_DATA", powerSupplyData);
                    context.commit("SET_COMPONENT_LOADING", false);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getMonitor(context, page = 1) {
            axios({
                url: `/monitors?page=${page}`,
                headers: {
                    access_token: localStorage.access_token,
                },
            })
                .then(({ data }) => {
                    let monitorData = {
                        category: context.state.componentsCategory.monitor,
                        data: data.data,
                        pagination: {
                            page,
                            totalPage: data.howManyPages,
                        },
                        type: "monitor",
                    };
                    context.commit("SET_COMPONENT_DATA", monitorData);
                    context.commit("SET_COMPONENT_LOADING", false);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getGpu(context, page = 1) {
            axios({
                url: `/gpu?page=${page}`,
                headers: {
                    access_token: localStorage.access_token,
                },
            })
                .then(({ data }) => {
                    let gpuData = {
                        category: context.state.componentsCategory.gpu,
                        data: data.data,
                        pagination: {
                            page,
                            totalPage: data.howManyPages,
                        },
                        type: "gpu",
                    };
                    context.commit("SET_COMPONENT_DATA", gpuData);
                    context.commit("SET_COMPONENT_LOADING", false);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getCase(context, page = 1) {
            axios({
                url: `/builds/${context.state.currentBuild._id}/case?page=${page}`,
                headers: {
                    access_token: localStorage.access_token,
                },
            })
                .then(({ data }) => {
                    console.log(data, "INI CASE");
                    let caseData = {
                        category: context.state.componentsCategory.case,
                        data: data[0].data,
                        pagination: {
                            page,
                            totalPage: data[0].pages[0].total,
                        },
                        type: "case",
                    };
                    context.commit("SET_COMPONENT_DATA", caseData);
                    context.commit("SET_COMPONENT_LOADING", false);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getMemory(context, page = 1) {
            axios({
                url: `/builds/${context.state.currentBuild._id}/memory?page=${page}`,
                headers: {
                    access_token: localStorage.access_token,
                },
            })
                .then(({ data }) => {
                    let memoryData = {
                        category: context.state.componentsCategory.memory,
                        data: data[0].data,
                        pagination: {
                            page,
                            totalPage: data[0].pages[0].total,
                        },
                        type: "memory",
                    };
                    context.commit("SET_COMPONENT_DATA", memoryData);
                    context.commit("SET_COMPONENT_LOADING", false);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getCaseFan(context, page = 1) {
            axios({
                url: `/caseFan?page=${page}`,
                headers: {
                    access_token: localStorage.access_token,
                },
            })
                .then(({ data }) => {
                    let caseFanData = {
                        category: context.state.componentsCategory.caseFan,
                        data: data.data,
                        pagination: {
                            page,
                            totalPage: data.howManyPages,
                        },
                        type: "caseFan",
                    };
                    context.commit("SET_COMPONENT_DATA", caseFanData);
                    context.commit("SET_COMPONENT_LOADING", false);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getData(context, payload) {
            switch (payload.route) {
                case "buildCPU":
                    context.commit("SET_COMPONENT_LOADING", true);
                    context.dispatch("getCpu", payload.page);
                    break;
                case "buildMotherboard":
                    context.commit("SET_COMPONENT_LOADING", true);
                    context.dispatch("getMotherboard", payload.page);
                    break;
                case "buildMemory":
                    context.commit("SET_COMPONENT_LOADING", true);
                    context.dispatch("getMemory", payload.page);
                    break;
                case "buildGpu":
                    context.commit("SET_COMPONENT_LOADING", true);
                    context.dispatch("getGpu", payload.page);
                    break;
                case "buildStorage":
                    context.commit("SET_COMPONENT_LOADING", true);
                    context.dispatch("getStorage", payload.page);
                    break;
                case "buildPowerSupply":
                    context.commit("SET_COMPONENT_LOADING", true);
                    context.dispatch("getPowerSupply", payload.page);
                    break;
                case "buildCase":
                    context.commit("SET_COMPONENT_LOADING", true);
                    context.dispatch("getCase", payload.page);
                    break;
                case "buildMonitor":
                    context.commit("SET_COMPONENT_LOADING", true);
                    context.dispatch("getMonitor", payload.page);
                    break;
                case "buildCaseFan":
                    context.commit("SET_COMPONENT_LOADING", true);
                    context.dispatch("getCaseFan", payload.page);
                    break;
                default:
                    break;
            }
        },
        userLogin(context, payload) {
            axios({
                url: "/login",
                method: "POST",
                data: {
                    email: payload.email,
                    password: payload.password,
                },
            })
                .then(({ data }) => {
                    localStorage.setItem("access_token", data.access_token);
                    localStorage.setItem("user_id", data.id);
                    router.push("/builds");
                })
                .catch((err) => {
                    console.log(err.message);
                });
        },
        createNewBuild() {
            axios({
                url: "/builds",
                method: "POST",
                headers: {
                    access_token: localStorage.access_token,
                },
            })
                .then(({ data }) => {
                    router.push(`/builds/${data.id}/cpu`);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        addBuild(context, payload) {
            // console.log(payload, "INI ADDBUILD");
            let dataKey = {
                key: `${payload.type}Id`,
                url: `/builds/${payload.buildId}/${payload.type}`,
            };
            if (Array.isArray(payload.partId)) {
                dataKey.key = `${payload.type}Ids`;
            }
            if (payload.type === "powerSupply")
                dataKey.url = `/builds/${payload.buildId}/power_supply`;
            if (payload.type === "caseFan")
                dataKey.url = `/builds/${payload.buildId}/case_fan`;
            axios({
                url: dataKey.url,
                method: "PATCH",
                headers: {
                    access_token: localStorage.access_token,
                },
                data: {
                    [dataKey.key]: payload.partId,
                },
            })
                .then(() => {
                    router.push(`/builds/${payload.buildId}`);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getBuildById(context, payload) {
            axios({
                url: `/builds/${payload.buildId}`,
                headers: {
                    access_token: localStorage.access_token,
                },
            })
                .then(({ data }) => {
                    context.commit("SET_CURRENT_BUILD", data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getUserBuilds(context) {
            axios({
                url: "/builds",
                headers: {
                    access_token: localStorage.access_token,
                },
            })
                .then(({ data }) => {
                    context.commit("SET_USER_BUILDS", data);
                    console.log(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    modules: {},
});
