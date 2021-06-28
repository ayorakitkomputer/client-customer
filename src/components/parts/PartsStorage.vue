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
                <h1 class="text-white">{{ part.type }}</h1>
            </div>
            <div class="col-span-1 basic-center">
                <h1 class="text-white">{{ part.capacity }}</h1>
            </div>
            <div class="col-span-1 basic-center">
                <h1 class="text-white">{{ getPrice(part.price) }}</h1>
            </div>
            <div class="col-span-1 basic-center">
                <h1 class="text-white">{{ part.stock }}</h1>
            </div>
            <div class="col-span-1 basic-center">
                <h1 class="text-white">Add</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PartsStorage",
    props: ["componentData"],
    methods: {
        getPrice(price) {
            return new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(Math.round(price));
        },
    },
};
</script>

<style>
</style>