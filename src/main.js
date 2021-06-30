import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

import AOS from "aos";
import "aos/dist/aos.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(Toast);

Vue.config.productionTip = false;
AOS.init();

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
