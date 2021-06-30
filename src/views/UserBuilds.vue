<template>
    <div
        class="container mx-auto overflow-y-auto  h-navbar bg-my-build custom-scroll"
    >
        <div>
            <h1 class="pt-6 text-4xl font-bold text-center text-ark-green">
                MY BUILDS
            </h1>
        </div>

        <section v-for="build in getUserBuilds" :key="build._id">
            <!-- Container -->
            <div
                id="my-build"
                class="px-8 py-2 pb-6 mx-8 mt-8 overflow-x-scroll rounded-xl"
            >
                <h1 class="mt-2 mb-3 text-xl font-semibold text-ark-green">
                    {{ build.name ? build.name : "No Name Build" }}
                </h1>

                <div
                    class="flex gap-4 text-lg font-semibold text-white  flex-nowrap"
                >
                    <!-- CPU -->
                    <div class="build-card">
                        <img
                            class="object-scale-down w-40 h-40"
                            :src="build.cpu.image"
                            alt=""
                        />
                        <h1 class="px-3 pt-4">
                            {{ `${build.cpu.manufacturer} ${build.cpu.name}` }}
                        </h1>
                    </div>

                    <!-- Motherboard -->
                    <div class="build-card">
                        <img
                            class="object-scale-down w-40 h-40"
                            :src="build.motherboard.image"
                            alt=""
                        />
                        <h1 class="px-3 pt-4">
                            {{
                                `${build.motherboard.manufacturer} ${build.motherboard.name}`
                            }}
                        </h1>
                    </div>

                    <!-- Memory -->
                    <div class="build-card">
                        <img
                            class="object-scale-down w-40 h-40"
                            :src="build.memory.image"
                            alt=""
                        />
                        <h1 class="px-3 pt-4">
                            {{ build.memory.name }}
                        </h1>
                    </div>

                    <!-- GPU -->
                    <div
                        v-for="(gpu, i) in build.gpu"
                        :key="`${gpu._id}-${build._id}-${i}`"
                        class="build-card"
                    >
                        <img
                            class="object-scale-down w-40 h-40"
                            :src="gpu.image"
                            alt=""
                        />
                        <h1 class="px-3 pt-4">
                            {{ `${gpu.manufacturer} ${gpu.name}` }}
                        </h1>
                    </div>

                    <!-- Power Supply -->
                    <div class="build-card">
                        <img
                            class="object-scale-down w-40 h-40"
                            :src="build.powerSupply.image"
                            alt=""
                        />
                        <h1 class="px-3 pt-4">
                            {{ build.powerSupply.name }}
                        </h1>
                    </div>

                    <!-- Case -->
                    <div class="build-card">
                        <img
                            class="object-scale-down w-40 h-40"
                            :src="build.case.image"
                            alt=""
                        />
                        <h1 class="px-3 pt-4">
                            {{ build.case.name }}
                        </h1>
                    </div>

                    <!-- Case Fan -->
                    <div
                        v-for="(case_fan, i) in build.case_fan"
                        :key="`${case_fan._id}-${build._id}-${i}`"
                        class="build-card"
                    >
                        <img
                            class="object-scale-down w-40 h-40"
                            :src="case_fan.image"
                            alt=""
                        />
                        <h1 class="px-3 pt-4">
                            {{ case_fan.name }}
                        </h1>
                    </div>

                    <!-- Storage -->
                    <div
                        v-for="(storage, i) in build.storage"
                        :key="`${storage._id}-${build._id}-${i}`"
                        class="build-card"
                    >
                        <img
                            class="object-scale-down w-40 h-40"
                            :src="storage.image"
                            alt=""
                        />
                        <h1 class="px-3 pt-4">
                            {{ storage.name }}
                        </h1>
                    </div>

                    <!-- Monitor -->
                    <div
                        v-for="(monitor, i) in build.monitor"
                        :key="`${monitor._id}-${build._id}-${i}`"
                        class="build-card"
                    >
                        <img
                            class="object-scale-down w-40 h-40"
                            :src="monitor.image"
                            alt=""
                        />
                        <h1 class="px-3 pt-4">
                            {{ monitor.name }}
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "UserBuilds",
    computed: {
        getUserBuilds() {
            const perfectBuilds = [];
            const unfinishedBuilds = [];
            this.$store.state.userBuilds.forEach((build) => {
                if (
                    build.case &&
                    build.case_fan &&
                    build.cpu &&
                    build.gpu &&
                    build.memory &&
                    build.monitor &&
                    build.motherboard &&
                    build.powerSupply &&
                    build.storage
                )
                    perfectBuilds.push(build);
                else unfinishedBuilds.push(build);
            });
            return perfectBuilds;
        },
    },
    mounted() {
        this.$store.dispatch("getUserBuilds");
    },
};
</script>

<style>
.build-card {
    @apply h-64 w-52 flex-shrink-0 flex flex-col justify-center items-center text-center;
    background-color: rgba(34, 34, 34, 0.739);
}
#my-build {
    background-color: rgba(31, 31, 31, 0.363);
}
#my-build::-webkit-scrollbar-thumb {
    background-color: #cfff0a;
    border: 4px solid transparent;
    border-radius: 8px;
    background-clip: padding-box;
}

.custom-scroll::-webkit-scrollbar-thumb {
    background-color: #cfff0a;
    border: 4px solid transparent;
    border-radius: 8px;
    background-clip: padding-box;
}

.custom-scroll::-webkit-scrollbar {
    width: 16px;
}

#my-build::-webkit-scrollbar {
    width: 16px;
}
.bg-my-build {
    background-color: rgba(0, 0, 0, 0.924);
}
</style>
