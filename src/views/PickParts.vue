<template>
    <section class="bg-black h-navbar bg-build-page">
        <div class="container grid h-full grid-cols-12 mx-auto bg-build">
            <div class="h-full col-span-2 bg-build">
                <h5
                    id="title-comp"
                    class="px-4 py-5 text-xl font-semibold text-center bg-black"
                >
                    COMPONENTS
                </h5>
                <ul
                    class="flex flex-col gap-2 px-5 mt-5 text-lg font-medium text-white uppercase "
                >
                    <router-link :to="`/builds/${getBuild._id}/cpu`">
                        <li class="flex justify-between my-3 bg-comp">
                            <div>CPU</div>
                            <div>+</div>
                        </li>
                    </router-link>

                    <router-link :to="`/builds/${getBuild._id}/motherboard`">
                        <li class="flex justify-between mb-3 bg-comp">
                            <div>Motherboard</div>
                            <div>+</div>
                        </li>
                    </router-link>
                    <router-link :to="`/builds/${getBuild._id}/memory`">
                        <li class="flex justify-between mb-3 bg-comp">
                            <div>Memory</div>
                            <div>+</div>
                        </li>
                    </router-link>
                    <router-link :to="`/builds/${getBuild._id}/storage`">
                        <li class="flex justify-between mb-3 bg-comp">
                            <div>Storage</div>
                            <div>+</div>
                        </li>
                    </router-link>
                    <router-link :to="`/builds/${getBuild._id}/gpu`">
                        <li class="flex justify-between mb-3 bg-comp">
                            <div>GPU</div>
                            <div>+</div>
                        </li>
                    </router-link>
                    <router-link :to="`/builds/${getBuild._id}/case`">
                        <li class="flex justify-between mb-3 bg-comp">
                            <div>Case</div>
                            <div>+</div>
                        </li>
                    </router-link>
                    <router-link :to="`/builds/${getBuild._id}/power_supply`">
                        <li class="flex justify-between mb-3 bg-comp">
                            <div>Powersupply</div>
                            <div>+</div>
                        </li>
                    </router-link>
                    <router-link :to="`/builds/${getBuild._id}/monitor`">
                        <li class="flex justify-between mb-3 bg-comp">
                            <div>Monitor</div>
                            <div>+</div>
                        </li>
                    </router-link>
                    <router-link :to="`/builds/${getBuild._id}/fans`">
                        <li class="flex justify-between mb-3 bg-comp">
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
        $route() {
            // console.log(to, from);
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
.bg-build-page {
    background-image: url("https://1.bp.blogspot.com/-2erkUexgLB4/XqlST3AM5tI/AAAAAAAAAA8/2uQSnai6jp0n7jOoa6NFpw68wpjvHAckQCLcBGAsYHQ/s1600/hydra-17.jpg");
    /* background-size: cover; */
}
.bg-build {
    background-color: rgba(0, 0, 0, 0.835);
}
#title-comp {
    color: black;
    background-color: #cfff0a;
}
.bg-comp:hover {
    color: #cfff0a;
}
</style>
