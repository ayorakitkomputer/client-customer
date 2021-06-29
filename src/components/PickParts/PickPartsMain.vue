<template>
    <div
        v-if="!componentLoading"
        class="h-full col-span-10 overflow-hidden bg-red-400"
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

        <!-- We loop the component here, but need to find out the type of data we are looping first. -->
        <!-- This happens inside this component -->
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
        this.getData();
    },
};
</script>

<style>
</style>