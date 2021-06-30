<template>
    <div id="app" class="">
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
    beforeMount() {
        // use this if navbar is buggy.
        if (this.$router.currentRoute.name === "Login") this.isNotLogin = false;
        else this.isNotLogin = true;

        const localUser = {
            user_id: localStorage.user_id,
            access_token: localStorage.access_token,
            email: localStorage.email,
        };

        console.log(localUser, "ini app vue");

        if (localUser.user_id && localUser.access_token && localUser.email) {
            this.$store.commit("SET_USER_LOGGED_IN", localUser);
        }
    },
    beforeUpdate() {
        // console.log(this.$router.currentRoute, "ini beforeupdate");
        if (this.$router.currentRoute.name === "Login") this.isNotLogin = false;
        else this.isNotLogin = true;
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
</style>
