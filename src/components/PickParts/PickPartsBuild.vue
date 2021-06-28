<template>
    <div class="h-full col-span-10">
        <div class="flex items-center justify-center h-full">
            <h1>Your Build</h1>
            <div>{{ getBuild.monitor }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PickPartsBuild",
    computed: {
        getBuild() {
            return this.$store.state.currentBuild;
        },
    },
    created() {
        // console.log("masuk mounted");
        console.log(this.$route, "INI DI MOUNTED PICK PARTS BUILD");
        let payload = {
            buildId: this.$route.params.id,
        };
        if (this.$route.params.id) {
            this.$store.dispatch("getBuildById", payload);
        }
    },
};
</script>

<style>
</style>