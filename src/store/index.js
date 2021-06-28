import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cpu: [
            {
                _id: { $oid: "60d5ca9fc6e53a61d8e36f50" },
                manufacturer: "AMD",
                name: "Ryzen 7 3700X",
                socket: "AM4",
                igpu: false,
                tdp: 65,
                price: 5103840.5,
                stock: 32,
                image: "https://www.amd.com/system/files/2019-06/238593-ryzen-7-pib-left-facing-1260x709.png",
            },
            {
                _id: { $oid: "60d5ca9fc6e53a61d8e36f51" },
                manufacturer: "Intel",
                name: "Core i7-9700K",
                socket: "LGA1151",
                igpu: true,
                tdp: 95,
                price: 5102405,
                stock: 66,
                image: "https://tonixcomputer.co.id/wp-content/uploads/2020/05/Intel-Core-i7-8700K.png",
            },
        ],
        componentsCategory: {
            cpu: ["Name", "Socket", "iGPU", "TDP", "Price", "Stock"],
        },
    },
    mutations: {},
    actions: {},
    modules: {},
});
