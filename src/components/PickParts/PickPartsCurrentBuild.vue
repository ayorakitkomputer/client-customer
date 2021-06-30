<template>
    <div class="h-full col-span-10">
        <div class="flex justify-between bg-gray-800 rounded-tr-xl">
            <div></div>
            <h1
                class="px-8 py-5 text-xl font-semibold text-center  text-ark-green rounded-3xl"
            >
                MY CURRENT BUILD PC
            </h1>
            <h1 class="py-5 text-lg font-semibold text-center text-white px-7">
                Estimated Wattage:
                <span :class="getWattageColour"> {{ getWattage }} W </span>
            </h1>
        </div>
        <div
            class="grid grid-cols-1 gap-5 px-10 pt-10 pb-6  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5"
        >
            <!--Card 1-->
            <div v-if="getBuild.cpu">
                <h1 class="text-xl font-semibold text-center text-ark-green">
                    CPU
                </h1>
                <div
                    class="h-64 my-3 border-2 shadow-lg  rounded-xl bg-card-build"
                >
                    <center>
                        <img
                            class="h-40 p-3 m-2"
                            :src="getBuild.cpu.image"
                            alt=""
                        />
                    </center>
                    <div class="px-4 pt-3">
                        <div class="text-lg font-bold text-center text-white">
                            {{ getBuild.cpu.manufacturer }}
                            {{ getBuild.cpu.name }}
                        </div>
                    </div>
                </div>
            </div>

            <!--Card 2-->
            <div v-if="getBuild.motherboard">
                <h1 class="text-xl font-semibold text-center text-ark-green">
                    Motherboard
                </h1>
                <div
                    class="h-64 my-3 border-2 shadow-lg  rounded-xl bg-card-build"
                >
                    <center>
                        <img
                            class="h-40 p-3 m-2"
                            :src="getBuild.motherboard.image"
                            alt=""
                        />
                    </center>
                    <div class="px-4 pt-3">
                        <div class="text-lg font-bold text-center text-white">
                            {{ getBuild.motherboard.manufacturer }}
                            {{ getBuild.motherboard.name }}
                        </div>
                    </div>
                </div>
            </div>

            <!--Card 3-->
            <div v-if="getBuild.memory">
                <h1 class="text-xl font-semibold text-center text-ark-green">
                    Memory
                </h1>
                <div
                    class="h-64 my-3 border-2 shadow-lg  rounded-xl bg-card-build"
                >
                    <center>
                        <img
                            class="h-40 p-3 m-2"
                            :src="getBuild.memory.image"
                            alt=""
                        />
                    </center>
                    <div class="px-4 pt-3">
                        <div class="text-lg font-bold text-center text-white">
                            {{ getBuild.memory.name }}
                        </div>
                    </div>
                </div>
            </div>

            <!--Card 4-->
            <div v-if="getBuild.storage">
                <h1 class="text-xl font-semibold text-center text-ark-green">
                    Storage
                </h1>
                <div class="overflow-y-auto card-scroll h-80">
                    <div
                        v-for="storage in getBuild.storage"
                        :key="storage._id"
                        class="h-64 my-3 border-2 shadow-lg  rounded-xl bg-card-build"
                    >
                        <center>
                            <img
                                class="h-40 p-3 m-2"
                                :src="storage.image"
                                alt=""
                            />
                        </center>
                        <div class="px-4 pt-3">
                            <div
                                class="text-lg font-bold text-center text-white"
                            >
                                {{ storage.name }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--Card 5-->
            <div v-if="getBuild.gpu">
                <h1 class="text-xl font-semibold text-center text-ark-green">
                    GPU
                </h1>
                <div class="card-container">
                    <div
                        v-for="gpu in getBuild.gpu"
                        :key="gpu._id"
                        class="w-full h-64 my-3 border-2 shadow-lg  rounded-xl bg-card-build"
                    >
                        <center>
                            <img
                                class="object-scale-down w-40 h-40 p-3 m-2"
                                :src="gpu.image"
                                alt=""
                            />
                        </center>
                        <div class="px-4 pt-3">
                            <div
                                class="text-lg font-bold text-center text-white"
                            >
                                {{ gpu.manufacturer }} {{ gpu.name }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--Card 6-->
            <div v-if="getBuild.case">
                <h1 class="text-xl font-semibold text-center text-ark-green">
                    Case
                </h1>
                <div
                    class="h-64 my-3 border-2 shadow-lg  rounded-xl bg-card-build"
                >
                    <center>
                        <img
                            class="h-40 p-3 m-2"
                            :src="getBuild.case.image"
                            alt=""
                        />
                    </center>
                    <div class="px-4 pt-3">
                        <div class="text-lg font-bold text-center text-white">
                            {{ getBuild.case.name }}
                        </div>
                    </div>
                </div>
            </div>

            <!--Card 7-->
            <div v-if="getBuild.powerSupply">
                <h1 class="text-xl font-semibold text-center text-ark-green">
                    Power Supply
                </h1>
                <div
                    class="h-64 my-3 border-2 shadow-lg  rounded-xl bg-card-build"
                >
                    <center>
                        <img
                            class="h-40 p-3 m-2"
                            :src="getBuild.powerSupply.image"
                            alt=""
                        />
                    </center>
                    <div class="px-4 pt-3">
                        <div class="text-lg font-bold text-center text-white">
                            {{ getBuild.powerSupply.name }}
                        </div>
                    </div>
                </div>
            </div>

            <!--Card 8-->
            <div v-if="getBuild.monitor">
                <h1 class="text-xl font-semibold text-center text-ark-green">
                    Monitor
                </h1>
                <div class="card-container">
                    <div
                        v-for="monitor in getBuild.monitor"
                        :key="monitor._id"
                        class="h-64 my-3 border-2 shadow-lg  rounded-xl bg-card-build"
                    >
                        <center>
                            <img
                                class="h-40 p-3 m-2"
                                :src="monitor.image"
                                alt=""
                            />
                        </center>
                        <div class="px-4 pt-3">
                            <div
                                class="text-lg font-bold text-center text-white"
                            >
                                {{ monitor.manufacturer }} {{ monitor.name }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--Card 9-->
            <div v-if="getBuild.case_fan">
                <h1 class="text-xl font-semibold text-center text-ark-green">
                    Case Fan
                </h1>
                <div class="card-container">
                    <div
                        v-for="case_fan in getBuild.case_fan"
                        :key="case_fan._id"
                        class="h-64 my-3 border-2 shadow-lg  rounded-xl bg-card-build"
                    >
                        <center>
                            <img
                                class="h-40 p-3 m-2"
                                :src="case_fan.image"
                                alt=""
                            />
                        </center>
                        <div class="px-4 pt-3">
                            <div
                                class="text-lg font-bold text-center text-white"
                            >
                                {{ case_fan.name }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PickPartsCurrentBuild",
    methods: {
        getTotalWattage() {
            const currentBuild = this.getBuild;
            let totalWattage = 0;
            if (currentBuild.cpu) totalWattage += currentBuild.cpu.tdp;
            if (currentBuild.gpu) {
                currentBuild.gpu.forEach((oneGpu) => {
                    totalWattage += oneGpu.tdp;
                });
            }
            return totalWattage;
        },
    },
    computed: {
        getBuild() {
            return this.$store.state.currentBuild;
        },
        getWattage() {
            return this.getTotalWattage();
        },
        getWattageColour() {
            const currentBuild = this.getBuild;
            const totalWattage = this.getWattage;
            if (currentBuild.powerSupply && totalWattage) {
                if (currentBuild.powerSupply.wattage > totalWattage)
                    return "text-ark-green";
                else {
                    return "text-red-400";
                }
            }
            return "";
        },
    },
    created() {
        // console.log(this.$route, "INI DI MOUNTED PICK PARTS BUILD");
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
.bg-card-build {
    background-color: rgba(34, 34, 34, 0.739);
}
.card-scroll::-webkit-scrollbar-thumb {
    background-color: #cfff0a;
    border: 4px solid transparent;
    border-radius: 8px;
    background-clip: padding-box;
}

.card-scroll::-webkit-scrollbar {
    width: 16px;
}
.card-container {
    @apply overflow-x-hidden overflow-y-auto card-scroll h-72 w-56;
}
</style>
