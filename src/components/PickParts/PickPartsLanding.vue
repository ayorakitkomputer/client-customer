<template>
    <div class="h-full col-span-10">
        <div class="flex items-center justify-center h-full">
            <button @click="createBuild">Create a new build</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "PickPartsLanding",
    methods: {
        createBuild() {
            this.$store.dispatch("createNewBuild");
        },
    },
};
</script>

<style>
</style>