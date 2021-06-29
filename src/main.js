import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import AOS from "aos";
import "aos/dist/aos.css";

// import { ClientTable } from "vue-tables-2";

// Vue.use(ClientTable);

Vue.config.productionTip = false;
AOS.init();

// new Vue({
//     el: "#people",
//     data: {
//         columns: ["id", "name", "age"],
//         tableData: [
//             { id: 1, name: "John", age: "20" },
//             { id: 2, name: "Jane", age: "24" },
//             { id: 3, name: "Susan", age: "16" },
//             { id: 4, name: "Chris", age: "55" },
//             { id: 5, name: "Dan", age: "40" },
//         ],
//         options: {
//             // see the options API
//             perPage: 25,
//         },
//     },
// });

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
