<template>
    <div class="grid p-3 m-2 mt-5 bg-black rounded-3xl" :class="getGridAmount">
        <div class="col-span-2">
            <center>
                <h1 class="text-white">test</h1>
            </center>
        </div>
        <div class="col-span-1">
            <center>
                <h1 class="text-white">AM 4</h1>
            </center>
        </div>
        <div class="col-span-1">
            <center>
                <h1 class="text-white">Included</h1>
            </center>
        </div>
        <div class="col-span-1">
            <center>
                <h1 class="text-white">80 W</h1>
            </center>
        </div>
        <div class="col-span-1">
            <center>
                <h1 class="text-white">10.000.000</h1>
            </center>
        </div>
        <div class="col-span-1">
            <center>
                <h1 class="text-white">200</h1>
            </center>
        </div>
    </div>
</template>

<script>
export default {
    name: "PickPartsComponent",
    props: ["component"],
    computed: {
        getGridAmount() {
            return `grid-cols-${this.component.category.length + 1}`;
        },
        // getName() {
        //     return `${this.component.data.manufacturer} ${this.component.data.name}`;
        // },
    },
};
</script>

<style>
</style>