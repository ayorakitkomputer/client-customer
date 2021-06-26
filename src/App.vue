<template>
    <div id="app" class="max-w-full">
        <Navbar />
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
};
</script>

<style>
.h-navbar {
    height: calc(100vh - 80px);
}
</style>