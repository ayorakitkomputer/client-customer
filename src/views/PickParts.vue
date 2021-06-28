<template>
    <section class="bg-green-200 h-navbar">
        <div class="container grid h-full grid-cols-12 mx-auto bg-blue-200">
            <div class="h-full col-span-2 bg-red-600">
                <h5 class="p-3 font-semibold text-center bg-blue-200">
                    Components
                </h5>
                <ul class="flex flex-col gap-2 mx-4 mt-5 uppercase">
                    <li class="flex justify-between">
                        <div>CPU</div>
                        <div>+</div>
                    </li>
                    <li class="flex justify-between">
                        <div>Motherboard</div>
                        <div>+</div>
                    </li>
                    <li class="flex justify-between">
                        <div>Memory</div>
                        <div>+</div>
                    </li>
                    <li class="flex justify-between">
                        <div>Storage</div>
                        <div>+</div>
                    </li>
                    <li class="flex justify-between">
                        <div>GPU</div>
                        <div>+</div>
                    </li>
                    <li class="flex justify-between">
                        <div>Case</div>
                        <div>+</div>
                    </li>
                    <li class="flex justify-between">
                        <div>Powersupply</div>
                        <div>+</div>
                    </li>
                    <li class="flex justify-between">
                        <div>Monitor</div>
                        <div>+</div>
                    </li>
                </ul>
            </div>

            <PickPartsMain :component="getCPU" />
        </div>
    </section>
</template>

<script>
import PickPartsMain from "../components/PickPartsMain.vue";

export default {
    name: "PickParts",
    components: {
        PickPartsMain,
    },
    computed: {
        getCPU() {
            // console.log(this.$store.state.componentsCategory);
            let cpuData = {
                category: this.$store.state.componentsCategory.cpu,
                data: this.$store.state.cpu,
            };
            return cpuData;
        },
    },
};
</script>

<style>
</style>