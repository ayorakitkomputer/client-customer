<template>
    <div class="h-full col-span-10">
        <h1 class="p-3 text-center">Your Build</h1>

        <div class="flex flex-wrap">
            <div
                class="flex flex-col items-center justify-center w-1/4 h-64 border-2 "
            >
                <img
                    class="object-cover w-full h-32"
                    :src="getBuild.cpu.image"
                    alt=""
                />
                <h5>{{ getBuild.cpu.name }}</h5>
            </div>

            <div
                class="flex flex-col items-center justify-center w-1/4 h-64 border-2 "
            >
                <img
                    class="object-cover w-full h-32"
                    :src="getBuild.motherboard.image"
                    alt=""
                />
                <h5>{{ getBuild.motherboard.name }}</h5>
            </div>
            <div
                class="flex flex-col items-center justify-center w-1/4 h-64 border-2 "
            >
                <img
                    class="object-cover w-full h-32"
                    :src="getBuild.memory.image"
                    alt=""
                />
                <h5>{{ getBuild.memory.name }}</h5>
            </div>

            <div
                v-for="storage in getBuild.storage"
                :key="storage._id"
                class="flex flex-col items-center justify-center w-1/4 h-64 border-2 "
            >
                <img
                    class="object-cover w-full h-32"
                    :src="storage.image"
                    alt=""
                />
                <h5>{{ storage.name }}</h5>
            </div>

            <div
                v-for="gpu in getBuild.gpu"
                :key="gpu._id"
                class="flex flex-col items-center justify-center w-1/4 h-64 border-2 "
            >
                <img class="object-cover w-full h-32" :src="gpu.image" alt="" />
                <h5>{{ gpu.name }}</h5>
            </div>

            <div
                class="flex flex-col items-center justify-center w-1/4 h-64 border-2 "
            >
                <img
                    class="object-cover w-full h-3/4"
                    :src="getBuild.case.image"
                    alt=""
                />
                <h5>{{ getBuild.case.name }}</h5>
            </div>

            <div
                class="flex flex-col items-center justify-center w-1/4 h-64 border-2 "
            >
                <img
                    class="object-cover w-full h-3/4"
                    :src="getBuild.powerSupply.image"
                    alt=""
                />
                <h5>{{ getBuild.powerSupply.name }}</h5>
            </div>

            <div
                v-for="monitor in getBuild.monitor"
                :key="monitor._id"
                class="flex flex-col items-center justify-center w-1/4 h-64 border-2 "
            >
                <img
                    class="object-cover w-full h-32"
                    :src="monitor.image"
                    alt=""
                />
                <h5>{{ monitor.name }}</h5>
            </div>

            <div
                v-for="case_fan in getBuild.case_fan"
                :key="case_fan._id"
                class="flex flex-col items-center justify-center w-1/4 h-64 border-2 "
            >
                <img
                    class="object-cover w-full h-32"
                    :src="case_fan.image"
                    alt=""
                />
                <h5>{{ case_fan.name }}</h5>
            </div>
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
        console.log(this.$route, "INI DI MOUNTED PICK PARTS BUILD");
        // Why here? So that you can just add build id to URL and it will be the currentBuild by default.
        let payload = {
            buildId: this.$route.params.id,
        };
        if (this.$route.params.id && this.$route.params.id != "undefined") {
            this.$store.dispatch("getBuildById", payload);
        }
    },
};
</script>

<style>
</style>