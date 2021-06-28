<template>
    <div class="col-span-10 bg-red-400">
        <div class="grid p-3 bg-black" :class="getGridAmount">
            <div class="col-span-2">
                <center>
                    <h1 class="font-semibold text-pink-500">
                        {{ component.category[0] }}
                    </h1>
                </center>
            </div>

            <!-- Category -->
            <div
                v-for="(category, i) in component.category.slice(1)"
                :key="i"
                class="col-span-1"
            >
                <center>
                    <h1 class="font-semibold text-pink-500">{{ category }}</h1>
                </center>
            </div>
        </div>
        <!-- CONTENT -->
        <PickPartsComponent
            v-for="part in component.data"
            :key="part._id"
            :part="part"
        />
    </div>
</template>

<script>
import PickPartsComponent from "./PickPartsComponent.vue";

export default {
    name: "PickPartsMain",
    props: ["component"],
    components: {
        PickPartsComponent,
    },
    computed: {
        getGridAmount() {
            return `grid-cols-${this.component.category.length + 1}`;
        },
    },
};
</script>

<style>
</style>