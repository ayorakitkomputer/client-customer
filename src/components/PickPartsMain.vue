<template>
    <div class="col-span-10 bg-red-400">
        <div class="grid p-3 bg-black" :class="getGridAmount">
            <div class="col-span-2 justify-self-center">
                <h1 class="font-semibold text-pink-500">
                    {{ componentData.category[0] }}
                </h1>
            </div>
            <!-- Category -->
            <div
                v-for="(category, i) in componentData.category.slice(1)"
                :key="`${category}-${i}`"
                class="col-span-1 justify-self-center"
            >
                <h1 class="font-semibold text-pink-500">{{ category }}</h1>
            </div>
        </div>
        <!-- CONTENT -->
        <PickPartsComponent
            v-if="componentData"
            :componentData="componentData.data"
            :type="componentData.type"
        />
    </div>
</template>

<script>
import PickPartsComponent from "./PickPartsComponent.vue";
export default {
    name: "PickPartsMain",
    data() {
        return {
            componentData: {},
        };
    },
    components: {
        PickPartsComponent,
    },
    computed: {
        getGridAmount() {
            return `grid-cols-${this.componentData.category.length + 2}`;
        },
    },
    methods: {
        getData() {
            let data = {};
            switch (this.$route.name) {
                case "buildCPU":
                    data = {
                        category: this.$store.state.componentsCategory.cpu,
                        data: this.$store.state.cpu,
                        type: "cpu",
                    };
                    this.componentData = data;
                    break;
                case "buildMotherboard":
                    data = {
                        category:
                            this.$store.state.componentsCategory.motherboard,
                        data: this.$store.state.motherboard,
                        type: "motherboard",
                    };
                    this.componentData = data;
                    break;
                case "buildMemory":
                    data = {
                        category: this.$store.state.componentsCategory.memory,
                        data: this.$store.state.memory,
                        type: "memory",
                    };
                    this.componentData = data;
                    break;
                case "buildGpu":
                    data = {
                        category: this.$store.state.componentsCategory.gpu,
                        data: this.$store.state.gpu,
                        type: "gpu",
                    };
                    this.componentData = data;
                    break;
                case "buildStorage":
                    data = {
                        category: this.$store.state.componentsCategory.storage,
                        data: this.$store.state.storage,
                        type: "storage",
                    };
                    this.componentData = data;
                    break;
                case "buildPowerSupply":
                    data = {
                        category:
                            this.$store.state.componentsCategory.powerSupply,
                        data: this.$store.state.powerSupply,
                        type: "powerSupply",
                    };
                    this.componentData = data;
                    break;
                case "buildCase":
                    data = {
                        category: this.$store.state.componentsCategory.case,
                        data: this.$store.state.case,
                        type: "case",
                    };
                    this.componentData = data;
                    break;
                case "buildMonitor":
                    data = {
                        category: this.$store.state.componentsCategory.monitor,
                        data: this.$store.state.monitor,
                        type: "monitor",
                    };
                    this.componentData = data;
                    break;
                case "buildCaseFans":
                    data = {
                        category: this.$store.state.componentsCategory.caseFans,
                        data: this.$store.state.caseFans,
                        type: "caseFans",
                    };
                    this.componentData = data;
                    break;
                default:
                    console.log("error 404");
                    break;
            }
        },
    },
    watch: {
        $route(to, from) {
            console.log(to, from);
            this.getData();
        },
    },
};
</script>

<style>
</style>