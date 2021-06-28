<template>
    <div
        v-if="!componentLoading"
        class="h-full col-span-10 overflow-y-scroll bg-red-400"
    >
        <div class="sticky top-0 grid p-3 bg-black" :class="getGridAmount">
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
    components: {
        PickPartsComponent,
    },
    methods: {
        getData() {
            let payload = {
                route: this.$route.name,
            };
            this.$store.dispatch("getData", payload);
        },
    },
    computed: {
        getGridAmount() {
            if (Object.keys(this.componentData).length) {
                return `grid-cols-${this.componentData.category.length + 2}`;
            }
            return 3;
        },
        componentData() {
            return this.$store.state.componentData;
        },
        componentLoading() {
            return this.$store.state.componentDataLoading;
        },
    },
    created() {
        // console.log(this.$route);
        // console.log("created di pick parts main");
        this.getData();
    },
};
</script>

<style>
</style>