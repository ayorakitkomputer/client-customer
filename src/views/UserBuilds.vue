<template>
    <div class="container mx-auto">
        <div>
            <h1 class="text-3xl text-center">Your Builds</h1>
        </div>

        <section v-for="build in getUserBuilds" :key="build._id">
            <!-- Container -->
            <div class="p-2 mt-10 overflow-x-scroll bg-blue-200">
                <h1 class="mb-2 text-xl font-semibold">
                    {{ build.name ? build.name : "No Name Build" }}
                </h1>

                <div class="flex gap-4 flex-nowrap">
                    <!-- CPU -->
                    <div class="build-card">
                        <img
                            class="object-cover w-40 h-40"
                            :src="build.cpu.image"
                            alt=""
                        />
                        <h1>
                            {{ `${build.cpu.manufacturer} ${build.cpu.name}` }}
                        </h1>
                    </div>

                    <!-- Motherboard -->
                    <div class="build-card">
                        <img
                            class="object-cover w-40 h-40"
                            :src="build.motherboard.image"
                            alt=""
                        />
                        <h1>
                            {{
                                `${build.motherboard.manufacturer} ${build.motherboard.name}`
                            }}
                        </h1>
                    </div>

                    <!-- Memory -->
                    <div class="build-card">
                        <img
                            class="object-cover w-40 h-40"
                            :src="build.memory.image"
                            alt=""
                        />
                        <h1>
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
                            class="object-cover w-40 h-40"
                            :src="gpu.image"
                            alt=""
                        />
                        <h1>
                            {{ `${gpu.manufacturer} ${gpu.name}` }}
                        </h1>
                    </div>

                    <!-- Power Supply -->
                    <div class="build-card">
                        <img
                            class="object-cover w-40 h-40"
                            :src="build.powerSupply.image"
                            alt=""
                        />
                        <h1>
                            {{ build.powerSupply.name }}
                        </h1>
                    </div>

                    <!-- Case -->
                    <div class="build-card">
                        <img
                            class="object-cover w-40 h-40"
                            :src="build.case.image"
                            alt=""
                        />
                        <h1>
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
                            class="object-cover w-40 h-40"
                            :src="case_fan.image"
                            alt=""
                        />
                        <h1>
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
                            class="object-cover w-40 h-40"
                            :src="storage.image"
                            alt=""
                        />
                        <h1>
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
                            class="object-cover w-40 h-40"
                            :src="monitor.image"
                            alt=""
                        />
                        <h1>
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
    @apply h-64 bg-white w-52 flex-shrink-0 flex flex-col justify-center items-center;
}
</style>