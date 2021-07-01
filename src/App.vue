<template>
    <div id="app" class="h-screen">
        <Navbar v-if="isNotLogin" />
        <router-view />
    </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
    name: "App",
    components: {
        Navbar,
    },
    data() {
        return { isNotLogin: true };
    },
    watch: {
        $route(to) {
            if (to.name === "Register" || to.name === "Login") {
                this.isNotLogin = false;
            } else this.isNotLogin = true;
        },
    },
    beforeMount() {
        // Remove Navbar in Login and Register
        const localUser = {
            user_id: localStorage.user_id,
            access_token: localStorage.access_token,
            email: localStorage.email,
        };

        if (localUser.user_id && localUser.access_token && localUser.email) {
            this.$store.commit("SET_USER_LOGGED_IN", localUser);
        }
    },
};
</script>

<style>
.h-navbar {
    height: calc(100vh - 112px);
}
.basic-center {
    @apply flex justify-center items-center;
}
#app {
    /* background-image: url("https://1.bp.blogspot.com/-2erkUexgLB4/XqlST3AM5tI/AAAAAAAAAA8/2uQSnai6jp0n7jOoa6NFpw68wpjvHAckQCLcBGAsYHQ/s1600/hydra-17.jpg"); */
    background-image: url("https://i.redd.it/7aadu9ocfvx51.jpg");
    background-size: cover;
}
.Vue-Toastification__toast--default.my-custom-toast-class {
    background-color: #cfff0a;
    color: black;
}
</style>
