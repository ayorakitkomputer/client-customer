<template>
    <div
        v-if="!componentLoading"
        class="col-span-10 overflow-y-scroll h-navbar bg-main"
    >
        <div
            class="sticky top-0 grid text-xl bg-gray-800  2xl:py-5 text-ark-green rounded-tr-xl"
            :class="getGridAmount"
        >
            <div class="col-span-2 justify-self-center">
                <h1 class="font-semibold">
                    {{ componentData.category[0] }}
                </h1>
            </div>
            <!-- Category -->
            <div
                v-for="(category, i) in componentData.category.slice(1)"
                :key="`${category}-${i}`"
                class="col-span-1 justify-self-center"
            >
                <h1 class="font-semibold">{{ category }}</h1>
            </div>
        </div>
        <!-- CONTENT -->

        <PickPartsComponent
            v-if="componentData"
            :componentData="componentData.data"
            :type="componentData.type"
            class="font-semibold text-md"
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
        this.$store.dispatch("getData", this.$route.name);
    },
};
</script>

<style>
.bg-main {
    background-color: rgba(34, 34, 34, 0.739);
}
.bg-main::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.bg-main {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
</style>
