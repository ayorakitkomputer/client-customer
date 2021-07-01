<template>
    <section class="h-navbar">
        <div
            class="container relative grid h-full grid-cols-12 mx-auto  bg-build rounded-xl"
        >
            <div class="col-span-2 h-navbar bg-build rounded-xl">
                <h5
                    id="title-comp"
                    class="px-2 py-3 font-semibold text-center bg-black  2xl:px-4 2xl:py-5 2xl:text-xl rounded-tl-xl"
                >
                    COMPONENTS
                </h5>
                <div class="flex flex-col justify-between">
                    <ul
                        class="
                            px-4
                            flex flex-col
                            gap-0.5
                            font-medium
                            text-white
                            uppercase
                            mt-2
                            2xl:text-lg
                            2xl:gap-2
                            2xl:px-5
                            2xl:mt-5
                        "
                    >
                        <router-link :to="`/builds/${getBuild._id}/cpu`">
                            <li
                                class="relative flex justify-between  2xl:my-3 bg-comp"
                            >
                                <div>CPU</div>
                                <div>+</div>
                                <div
                                    v-if="checkIncompatiblePart"
                                    class="absolute text-sm font-semibold text-red-500 normal-case  -right-56 2xl:left-0 2xl:-top-5"
                                >
                                    You have an incompatible part!
                                </div>
                            </li>
                        </router-link>

                        <router-link
                            :to="
                                getBuild.cpu
                                    ? `/builds/${getBuild._id}/motherboard`
                                    : ''
                            "
                            :class="getBuild.cpu ? '' : 'text-white opacity-50'"
                        >
                            <li class="flex justify-between 2xl:mb-3 bg-comp">
                                <div>Motherboard</div>
                                <div>+</div>
                            </li>
                        </router-link>
                        <router-link
                            :to="
                                getBuild.motherboard
                                    ? `/builds/${getBuild._id}/memory`
                                    : ''
                            "
                            :class="
                                getBuild.motherboard
                                    ? ''
                                    : 'text-white opacity-50'
                            "
                        >
                            <li class="flex justify-between 2xl:mb-3 bg-comp">
                                <div>Memory</div>
                                <div>+</div>
                            </li>
                        </router-link>
                        <router-link
                            :to="
                                getBuild.memory
                                    ? `/builds/${getBuild._id}/storage`
                                    : ''
                            "
                            :class="
                                getBuild.memory ? '' : 'text-white opacity-50'
                            "
                        >
                            <li class="flex justify-between 2xl:mb-3 bg-comp">
                                <div>
                                    Storage
                                    <span class="normal-case opacity-50"
                                        >*</span
                                    >
                                </div>
                                <div>+</div>
                            </li>
                        </router-link>
                        <router-link
                            :to="
                                getBuild.storage
                                    ? `/builds/${getBuild._id}/gpu`
                                    : ''
                            "
                            :class="
                                getBuild.storage ? '' : 'text-white opacity-50'
                            "
                        >
                            <li class="flex justify-between 2xl:mb-3 bg-comp">
                                <div>
                                    GPU
                                    <span class="normal-case opacity-50"
                                        >*</span
                                    >
                                </div>
                                <div>+</div>
                            </li>
                        </router-link>
                        <router-link
                            :to="
                                getBuild.gpu
                                    ? `/builds/${getBuild._id}/case`
                                    : ''
                            "
                            :class="getBuild.gpu ? '' : 'text-white opacity-50'"
                        >
                            <li class="flex justify-between 2xl:mb-3 bg-comp">
                                <div>Case</div>
                                <div>+</div>
                            </li>
                        </router-link>
                        <router-link
                            :to="
                                getBuild.gpu
                                    ? `/builds/${getBuild._id}/fans`
                                    : ''
                            "
                            :class="
                                getBuild.case ? '' : 'text-white opacity-50'
                            "
                        >
                            <li class="flex justify-between 2xl:mb-3 bg-comp">
                                <div>
                                    Case Fans
                                    <span class="normal-case opacity-50"
                                        >*</span
                                    >
                                </div>
                                <div>+</div>
                            </li>
                        </router-link>
                        <router-link
                            :to="
                                getBuild.case_fan
                                    ? `/builds/${getBuild._id}/power_supply`
                                    : ''
                            "
                            :class="
                                getBuild.case_fan ? '' : 'text-white opacity-50'
                            "
                        >
                            <li class="flex justify-between 2xl:mb-3 bg-comp">
                                <div>Power Supply</div>
                                <div>+</div>
                            </li>
                        </router-link>
                        <router-link :to="`/builds/${getBuild._id}/monitor`">
                            <li class="flex justify-between bg-comp">
                                <div>
                                    Monitor
                                    <span class="normal-case opacity-50"
                                        >*</span
                                    >
                                </div>
                                <div>+</div>
                            </li>
                        </router-link>
                        <div class="text-xs normal-case opacity-50">
                            *Max. 3 pcs
                        </div>
                    </ul>
                    <div
                        v-if="checkBuildsRoute"
                        class="mt-4 2xl:mx-5 2xl:mt-14"
                    >
                        <div
                            class="flex flex-col items-start px-4 font-medium  2xl:text-lg text-ark-green"
                        >
                            <h1>Estimated Budget :</h1>
                            <h5 class="mt-2" :class="getBudgetColour">
                                {{ getCurrentBuildPrice }}
                            </h5>
                            <h6 class="ml-auto text-sm">
                                / {{ getUserBudget }}
                            </h6>
                        </div>
                        <div
                            class="flex flex-col items-center px-4 mt-4 text-center  2xl:text-lg 2xl:mt-8"
                        >
                            <button
                                @click="checkOutBuild"
                                class="w-full font-semibold text-black border-2 border-opacity-0  2xl:py-2 2xl:mb-5 bg-ark-green rounded-xl hover:text-ark-green hover:bg-black hover:border-opacity-100"
                            >
                                Checkout
                            </button>
                            <!-- <button
                                class="w-full py-2 font-semibold text-black bg-ark-green rounded-xl hover:text-ark-green hover:bg-black"
                            >
                                Print PDF
                            </button> -->
                        </div>
                    </div>
                </div>
                <div class="absolute mt-5 2xl:mt-10">
                    <center>
                        <button
                            v-if="!checkBuildsRoute"
                            @click="goBackToBuilds"
                            class="py-2 font-semibold  2xl:w-10/12 hover:text-white rounded-xl text-ark-green"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-10 h-10 2xl:w-1/5 2xl:h-1/5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>
                    </center>
                </div>
            </div>
            <CreateBuildModal :openModal="openModal" />
            <router-view />
        </div>
    </section>
</template>

<script>
import CreateBuildModal from "../components/CreateBuildModal.vue";

export default {
    name: "PickParts",
    data() {
        return {
            openModal: false,
        };
    },
    components: {
        CreateBuildModal,
    },
    methods: {
        getData() {
            let payload = {
                route: this.$route.name,
            };
            this.$store.dispatch("getData", payload);
        },
        calculatePrice(currentBuild) {
            const payload = {
                buildId: currentBuild._id,
                totalPrice: 0,
            };
            for (const key in currentBuild) {
                if (Array.isArray(currentBuild[key])) {
                    currentBuild[key].forEach((onePart) => {
                        payload.totalPrice += +onePart.price;
                    });
                } else {
                    if (currentBuild[key].price)
                        payload.totalPrice += +currentBuild[key].price;
                }
            }
            return payload.totalPrice;
        },
        checkOutBuild() {
            const currentBuild = this.$store.state.currentBuild;
            if (
                currentBuild.case &&
                currentBuild.case_fan &&
                currentBuild.cpu &&
                currentBuild.gpu &&
                currentBuild.memory &&
                currentBuild.monitor &&
                currentBuild.motherboard &&
                currentBuild.powerSupply &&
                currentBuild.storage
            ) {
                this.$toast.success(
                    "Success! Redirecting you to Xendit Payment Gateway.",
                    {
                        position: "top-right",
                        timeout: 10000,
                        closeOnClick: true,
                        pauseOnFocusLoss: true,
                        pauseOnHover: true,
                        draggable: true,
                        draggablePercent: 0.6,
                        showCloseButtonOnHover: false,
                        hideProgressBar: true,
                        closeButton: false,
                        icon: true,
                        rtl: false,
                    }
                );

                const payload = {
                    buildId: currentBuild._id,
                    totalBuildPrice: 0,
                };
                for (const key in currentBuild) {
                    if (Array.isArray(currentBuild[key])) {
                        currentBuild[key].forEach((onePart) => {
                            payload.totalBuildPrice += +onePart.price;
                        });
                    } else {
                        if (currentBuild[key].price)
                            payload.totalBuildPrice += +currentBuild[key].price;
                    }
                }
                setTimeout(() => {
                    this.$store.dispatch("checkoutPaymentGateway", payload);
                }, 3000);
            } else {
                this.$toast("You haven't completed your build!", {
                    position: "top-right",
                    timeout: 5000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: true,
                    closeButton: "button",
                    icon: true,
                    rtl: false,
                });
            }
        },
        goBackToBuilds() {
            const currentBuild = this.$store.state.currentBuild;
            const currentRoute = this.$route;
            if (currentBuild._id)
                this.$router.push(`/builds/${currentBuild._id}`);
            else if (currentRoute.params.id !== "undefined")
                this.$router.push(`/builds/${currentRoute.params.id}`);
        },
    },
    watch: {
        $route() {
            // Get data from current route.
            this.getData();
        },
        getBuild(currentBuild) {
            if (!currentBuild.name && !currentBuild.budget) {
                this.$store.commit("SET_UPDATE_USER_DETAILS", true);
            }

            // Check for incompatible parts!!!
            let incompatibleFlag = false;
            if (currentBuild.cpu && currentBuild.motherboard) {
                currentBuild.cpu.socket == currentBuild.motherboard.socket
                    ? ""
                    : (incompatibleFlag = true);
            }

            if (currentBuild.motherboard && currentBuild.case) {
                if (currentBuild.motherboard === "ATX") {
                    if (currentBuild.case.form_factor === "ATX") return;
                    else {
                        incompatibleFlag = true;
                    }
                } else if (
                    currentBuild.motherboard.form_factor === "Micro ATX"
                ) {
                    if (
                        currentBuild.case.form_factor === "ATX" ||
                        currentBuild.case.form_factor === "Micro ATX"
                    )
                        return;
                    else {
                        incompatibleFlag = true;
                    }
                } else if (
                    currentBuild.motherboard.form_factor === "Mini ITX"
                ) {
                    if (
                        currentBuild.case.form_factor === "ATX" ||
                        currentBuild.case.form_factor === "Micro ATX" ||
                        currentBuild.case.form_factor === "Mini ITX"
                    )
                        return;
                    else {
                        incompatibleFlag = true;
                    }
                }
            }

            if (currentBuild.motherboard && currentBuild.memory) {
                currentBuild.motherboard.memory_type ==
                currentBuild.memory.memory_type
                    ? ""
                    : (incompatibleFlag = true);
            }

            this.$store.commit("SET_INCOMPATIBLE_PART", incompatibleFlag);
        },
    },
    computed: {
        getBuild() {
            return this.$store.state.currentBuild;
        },
        checkBuildsRoute() {
            return this.$route.name === "buildCurrentBuild" ? true : false;
        },
        getCurrentBuildPrice() {
            let totalPrice = this.calculatePrice(this.getBuild);
            return new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(totalPrice);
        },
        getUserBudget() {
            let userBudget = this.getBuild.budget;
            return new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(userBudget);
        },
        getBudgetColour() {
            let userBudget = this.getBuild.budget;
            let totalPrice = this.calculatePrice(this.getBuild);
            if (+totalPrice > +userBudget) {
                return "text-red-400";
            } else return "text-white";
        },
        checkIncompatiblePart() {
            return this.$store.state.incompatibleWarning;
        },
    },
    created() {
        // If user refreshes, make sure vuex has latest currentBuild
        const buildId = this.$route.params.id;
        const currentBuild = this.$store.state.currentBuild;
        if (buildId && !currentBuild._id) {
            this.$store.dispatch("getBuildById", { buildId });
        }
    },
    beforeUpdate() {
        // Show Modal Handler
        const currentBuild = this.$store.state.currentBuild;
        if (!currentBuild.name && !currentBuild.budget) {
            this.$store.commit("SET_UPDATE_USER_DETAILS", true);
        }
    },
};
</script>

<style>
.bg-build-page {
    background-image: url("https://1.bp.blogspot.com/-2erkUexgLB4/XqlST3AM5tI/AAAAAAAAAA8/2uQSnai6jp0n7jOoa6NFpw68wpjvHAckQCLcBGAsYHQ/s1600/hydra-17.jpg");
    /* background-color: rgb(29, 29, 29); */
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
