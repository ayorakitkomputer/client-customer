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
        userTransactions: [],
        userLoggedIn: {},
        updateUserData: false,
        incompatibleWarning: false,
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
        SET_USER_TRANSACTIONS(state, payload) {
            state.userTransactions = payload;
        },
        SET_USER_LOGGED_IN(state, payload) {
            state.userLoggedIn = payload;
        },
        SET_UPDATE_USER_DETAILS(state, payload) {
            state.updateUserData = payload;
        },
        SET_INCOMPATIBLE_PART(state, payload) {
            state.incompatibleWarning = payload;
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
            axios({
                url: `/builds/${context.state.currentBuild._id}/motherboard?page=${page}`,
                headers: {
                    access_token: localStorage.access_token,
                },
            })
                .then(({ data }) => {
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
                url: `/case_fan?page=${page}`,
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
                    localStorage.setItem("email", data.email);
                    const payload = {
                        user_id: data.id,
                        access_token: data.access_token,
                        email: data.email,
                    };
                    context.commit("SET_USER_LOGGED_IN", payload);
                    router.push("/builds");
                })
                .catch((err) => {
                    console.log(err.message);
                });
        },
        userRegister(context, payload) {
            axios({
                method: "POST",
                url: "/register",
                data: {
                    firstname: payload.firstname,
                    lastname: payload.lastname,
                    address: payload.address,
                    email: payload.email,
                    password: payload.password,
                },
            })
                .then(() => {
                    router.push("login");
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
                    if (payload.type === "cpu") {
                        this._vm.$toast("CPU Added!", {
                            toastClassName: "my-custom-toast-class",
                        });
                    } else if (payload.type === "motherboard") {
                        this._vm.$toast("Motherboard Added!", {
                            toastClassName: "my-custom-toast-class",
                        });
                    } else if (payload.type === "memory") {
                        this._vm.$toast("Memory Added!", {
                            toastClassName: "my-custom-toast-class",
                        });
                    } else if (payload.type === "storage") {
                        this._vm.$toast("Storage Added!", {
                            toastClassName: "my-custom-toast-class",
                        });
                    } else if (payload.type === "gpu") {
                        this._vm.$toast("GPU Added!", {
                            toastClassName: "my-custom-toast-class",
                        });
                    } else if (payload.type === "case") {
                        this._vm.$toast("Case Added!", {
                            toastClassName: "my-custom-toast-class",
                        });
                    } else if (payload.type === "powerSupply") {
                        this._vm.$toast("Power Supply Added!", {
                            toastClassName: "my-custom-toast-class",
                        });
                    } else if (payload.type === "monitor") {
                        this._vm.$toast("Monitor Added!", {
                            toastClassName: "my-custom-toast-class",
                        });
                    } else if (payload.type === "caseFan") {
                        this._vm.$toast("Case Fan Added!", {
                            toastClassName: "my-custom-toast-class",
                        });
                    }
                    router.push(`/builds/${payload.buildId}`);
                })
                .catch((err) => {
                    this._vm.$toast.error("Cannot Add Anymore");
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
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        checkoutPaymentGateway(context, payload) {
            // Butuh total harga, dan build ID
            const xenditAxios = new Promise((resolve, reject) => {
                axios({
                    url: "/payment/invoice",
                    method: "POST",
                    headers: {
                        access_token: localStorage.access_token,
                    },
                    data: {
                        amount: payload.totalBuildPrice,
                    },
                })
                    .then(({ data }) => {
                        window.location.assign(data.invoice_url);
                        resolve();
                    })
                    .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
            });
            const createHistoryTransaction = new Promise((resolve, reject) => {
                axios({
                    url: "/history",
                    method: "POST",
                    headers: {
                        access_token: localStorage.access_token,
                    },
                    data: {
                        buildId: payload.buildId,
                    },
                })
                    .then(() => {
                        resolve();
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });

            const paymentDone = Promise.all([
                xenditAxios,
                createHistoryTransaction,
            ]);
            console.log(paymentDone);
        },
        getUserTransactions(context) {
            axios({
                url: `/history`,
                headers: {
                    access_token: localStorage.access_token,
                },
            })
                .then(({ data }) => {
                    context.commit("SET_USER_TRANSACTIONS", data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        patchBuildDetails(context, payload) {
            return new Promise((resolve, reject) => {
                axios({
                    url: `/builds/${payload.buildId}/detail`,
                    data: {
                        name: payload.buildName,
                        budget: payload.buildBudget,
                    },
                    method: "POST",
                    headers: {
                        access_token: localStorage.access_token,
                    },
                })
                    .then(() => {
                        context.commit("SET_UPDATE_USER_DETAILS", false);
                        context.dispatch("getBuildById", {
                            buildId: payload.buildId,
                        });
                        resolve();
                    })
                    .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
            });
        },
        deletePart(context, payload) {
            axios({
                method: "POST",
                url: `/builds/${payload.buildId}/remove`,
                data: {
                    partName: payload.partName,
                },
                headers: {
                    access_token: localStorage.access_token,
                },
            })
                .then(() => {
                    context.dispatch("getBuildById", {
                        buildId: payload.buildId,
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        createBuildFromCategory(context, payload) {
            axios({
                url: "/builds",
                method: "POST",
                headers: {
                    access_token: localStorage.access_token,
                },
            })
                .then(({ data }) => {
                    const buildId = data.id;
                    const parts = [];
                    for (const key in payload) {
                        if (
                            key === "header" ||
                            key === "image" ||
                            key === "harga"
                        )
                            continue;

                        if (
                            key === "gpu" ||
                            key === "storage" ||
                            key === "caseFan"
                        ) {
                            const data = {
                                type: key,
                                buildId,
                                partId: [payload[key].id],
                            };
                            parts.push(data);
                        } else {
                            const data = {
                                type: key,
                                buildId,
                                partId: payload[key].id,
                            };
                            parts.push(data);
                        }
                    }

                    // refactor and use reduce.
                    context
                        .dispatch("addBuildCategory", parts[0])
                        .then(() =>
                            context.dispatch("addBuildCategory", parts[1])
                        )
                        .then(() =>
                            context.dispatch("addBuildCategory", parts[2])
                        )
                        .then(() =>
                            context.dispatch("addBuildCategory", parts[3])
                        )
                        .then(() =>
                            context.dispatch("addBuildCategory", parts[4])
                        )
                        .then(() =>
                            context.dispatch("addBuildCategory", parts[5])
                        )
                        .then(() =>
                            context.dispatch("addBuildCategory", parts[6])
                        )
                        .then(() =>
                            context.dispatch("addBuildCategory", parts[7])
                        )
                        .then(() =>
                            context.dispatch("patchBuildDetails", {
                                buildId,
                                buildName: payload.header,
                                buildBudget: +payload.harga,
                            })
                        )
                        .then(() => {
                            router.push(`/builds/${buildId}`);
                        });
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        addBuildCategory(context, payload) {
            return new Promise((resolve, reject) => {
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
                    .then(({ data }) => {
                        resolve(data);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
    },
});
