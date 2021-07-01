<template>
    <div>
        <div
            v-for="part in componentData"
            :key="`${part._id}`"
            class="grid grid-cols-8 p-3 mx-5 mt-5 bg-black rounded-xl"
        >
            <div class="flex items-center justify-between col-span-2 mx-4">
                <img class="object-cover w-12 h-12" :src="part.image" alt="" />
                <h1 class="text-white">
                    {{ `${part.manufacturer} ${part.name}` }}
                </h1>
            </div>
            <div class="col-span-1 basic-center">
                <h1 class="text-white">{{ part.socket }}</h1>
            </div>
            <div class="col-span-1 basic-center">
                <h1 class="text-white">
                    {{ part.igpu ? "Included" : "Not Available" }}
                </h1>
            </div>
            <div class="col-span-1 basic-center">
                <h1 class="text-white">{{ part.tdp }}</h1>
            </div>
            <div class="col-span-1 basic-center">
                <h1 class="text-white">{{ getPrice(part.price) }}</h1>
            </div>
            <div class="col-span-1 basic-center">
                <h1 class="text-white">{{ part.stock }}</h1>
            </div>
            <div class="col-span-1 basic-center">
                <button @click="addCPU(part)" class="w-1/5 text-white">
                    <img
                        src="https://icons.iconarchive.com/icons/alecive/flatwoken/512/Apps-Dialog-Add-icon.png"
                        alt=""
                    />
                </button>
            </div>
        </div>

        <PaginationFooter />
    </div>
</template>

<script>
import PaginationFooter from "../PaginationFooter.vue";

export default {
    name: "PartsCPU",
    props: ["componentData"],
    methods: {
        getPrice(price) {
            return new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(Math.round(price));
        },
        addCPU(part) {
            const payload = {
                buildId: this.$route.params.id,
                partId: part._id,
                type: "cpu",
            };
            console.log(this.getCurrentBuild, "INI CPU");

            this.$store.dispatch("addBuild", payload);
        },
    },
    computed: {
        getCurrentBuild() {
            return this.$store.state.currentBuild;
        },
    },
    components: {
        PaginationFooter,
    },
};
</script>

<style></style>
