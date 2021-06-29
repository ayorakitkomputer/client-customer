<template>
    <div>
        <div
            v-for="part in componentData"
            :key="`${part._id}`"
            class="grid grid-cols-6 p-3 m-2 mt-5 bg-black rounded-3xl"
        >
            <div class="flex items-center justify-between col-span-2">
                <img class="object-cover w-20 h-12" :src="part.image" alt="" />
                <h1 class="text-white">
                    {{ part.name }}
                </h1>
            </div>
            <div class="col-span-1 basic-center">
                <h1 class="text-white">{{ part.size }}</h1>
            </div>
            <div class="col-span-1 basic-center">
                <h1 class="text-white">{{ getPrice(part.price) }}</h1>
            </div>
            <div class="col-span-1 basic-center">
                <h1 class="text-white">{{ part.stock }}</h1>
            </div>
            <div class="col-span-1 basic-center">
                <button @click="addCaseFan(part)" class="text-white">
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
    name: "PartsCaseFan",
    props: ["componentData"],
    methods: {
        getPrice(price) {
            return new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(Math.round(price));
        },
        addCaseFan(part) {
            const currentBuild = this.$store.state.currentBuild;
            const payload = {
                buildId: this.$route.params.id,
                partId: [part._id],
                type: "caseFan",
            };
            if (currentBuild.case_fan) {
                currentBuild.case_fan.forEach((oneCaseFan) => {
                    payload.partId.push(oneCaseFan._id);
                });
            }
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