<template>
    <section class="bg-green-200 h-navbar">
        <div class="container grid h-full grid-cols-12 mx-auto bg-blue-200">
            <div class="h-full col-span-2 bg-red-600">
                <h5 class="p-3 font-semibold text-center bg-blue-200">
                    Components
                </h5>
                <ul class="flex flex-col gap-2 mx-4 mt-5 uppercase">
                    <router-link :to="`/build/${getBuild._id}/cpu`">
                        <li class="flex justify-between">
                            <div>CPU</div>
                            <div>+</div>
                        </li>
                    </router-link>

                    <router-link :to="`/build/${getBuild._id}/motherboard`">
                        <li class="flex justify-between">
                            <div>Motherboard</div>
                            <div>+</div>
                        </li>
                    </router-link>
                    <router-link :to="`/build/${getBuild._id}/memory`">
                        <li class="flex justify-between">
                            <div>Memory</div>
                            <div>+</div>
                        </li>
                    </router-link>
                    <router-link :to="`/build/${getBuild._id}/storage`">
                        <li class="flex justify-between">
                            <div>Storage</div>
                            <div>+</div>
                        </li>
                    </router-link>
                    <router-link :to="`/build/${getBuild._id}/gpu`">
                        <li class="flex justify-between">
                            <div>GPU</div>
                            <div>+</div>
                        </li>
                    </router-link>
                    <router-link :to="`/build/${getBuild._id}/case`">
                        <li class="flex justify-between">
                            <div>Case</div>
                            <div>+</div>
                        </li>
                    </router-link>
                    <router-link :to="`/build/${getBuild._id}/power_supply`">
                        <li class="flex justify-between">
                            <div>Powersupply</div>
                            <div>+</div>
                        </li>
                    </router-link>
                    <router-link :to="`/build/${getBuild._id}/monitor`">
                        <li class="flex justify-between">
                            <div>Monitor</div>
                            <div>+</div>
                        </li>
                    </router-link>
                    <router-link :to="`/build/${getBuild._id}/fans`">
                        <li class="flex justify-between">
                            <div>Case Fans</div>
                            <div>+</div>
                        </li>
                    </router-link>
                </ul>
            </div>
            <router-view />
        </div>
    </section>
</template>

<script>
export default {
    name: "PickParts",
    methods: {
        getData() {
            let payload = {
                route: this.$route.name,
            };
            this.$store.dispatch("getData", payload);
        },
    },
    watch: {
        $route(to, from) {
            console.log(to, from);
            this.getData();
        },
    },
    computed: {
        getBuild() {
            return this.$store.state.currentBuild;
        },
    },
    // created() {
    //     console.log(this.$route);
    //     console.log("created di pick parts main");
    //     this.getData();
    // },
};
</script>

<style>
</style>