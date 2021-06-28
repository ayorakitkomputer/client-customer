<template>
    <div>
        <div
            v-for="part in componentData"
            :key="`${part._id}`"
            class="grid grid-cols-7 p-3 m-2 mt-5 bg-black rounded-3xl"
        >
            <div class="flex items-center justify-between col-span-2 mx-4">
                <img class="object-cover w-20 h-12" :src="part.image" alt="" />
                <h1 class="text-white">{{ part.name }}</h1>
            </div>
            <div class="col-span-1 basic-center">
                <h1 class="text-white">{{ part.efficiency_rating }}</h1>
            </div>
            <div class="col-span-1 basic-center">
                <h1 class="text-white">{{ `${part.wattage} Watt` }}</h1>
            </div>
            <div class="col-span-1 basic-center">
                <h1 class="text-white">{{ getPrice(part.price) }}</h1>
            </div>
            <div class="col-span-1 basic-center">
                <h1 class="text-white">{{ part.stock }}</h1>
            </div>
            <div class="col-span-1 basic-center">
                <button @click="addPowerSupply(part)" class="text-white">
                    Add
                </button>
            </div>
        </div>

        <PaginationFooter />
    </div>
</template>

<script>
import PaginationFooter from "../PaginationFooter.vue";
export default {
    name: "PartsPowerSupply",
    props: ["componentData"],
    methods: {
        getPrice(price) {
            return new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(Math.round(price));
        },
        addPowerSupply(part) {
            const payload = {
                buildId: this.$route.params.id,
                partId: part._id,
                type: "powerSupply",
            };
            this.$store.dispatch("addBuild", payload);
        },
    },
    components: {
        PaginationFooter,
    },
};
</script>

<style>
</style>