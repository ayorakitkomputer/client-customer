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
  beforeMount() {
    // use this if navbar is buggy.
    if (this.$router.currentRoute.name === "Login") this.isNotLogin = false;
    else this.isNotLogin = true;
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
#app {
  /* background-image: url("https://1.bp.blogspot.com/-2erkUexgLB4/XqlST3AM5tI/AAAAAAAAAA8/2uQSnai6jp0n7jOoa6NFpw68wpjvHAckQCLcBGAsYHQ/s1600/hydra-17.jpg"); */
  background-image: url("https://i.redd.it/7aadu9ocfvx51.jpg");
  background-size: cover;
}
</style>
