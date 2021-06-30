import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

import AOS from "aos";
import "aos/dist/aos.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VModal from "vue-js-modal";

Vue.use(Toast);
Vue.use(VModal);

Vue.config.productionTip = false;
AOS.init();

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
