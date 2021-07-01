<template>
    <section class="h-screen bg-black shadow-2xl section">
        <div class="relative grid grid-cols-6">
            <div class="absolute transform -translate-x-1/2 left-1/3 top-14">
                <h1
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    id="spec-title"
                    class="font-bold md:text-2xl xl:text-5xl"
                >
                    {{ build.header }}
                </h1>
            </div>

            <div class="flex items-center justify-center h-screen col-span-4">
                <img
                    class="object-scale-down mt-20 h-2/3 img-shadow"
                    data-aos="fade-up-right"
                    data-aos-duration="3000"
                    :src="build.image"
                    alt=""
                />
            </div>

            <div
                class="flex items-center justify-center col-span-2 overflow-auto  box-right"
            >
                <div
                    data-aos="zoom-in-left"
                    data-aos-duration="3000"
                    class="flex flex-col items-center justify-between w-5/6 shadow-2xl  2xl:px-10 2xl:py-8 box-spec rounded-xl h-2/3"
                >
                    <h1
                        class="text-lg font-semibold tracking-wide text-center  2xl:text-4xl type-category"
                    >
                        SPECIFICATIONS
                    </h1>
                    <div class="w-full">
                        <ul
                            class="flex flex-col gap-2 text-sm text-white  2xl:gap-4 2xl:text-lg"
                        >
                            <li class="flex justify-between px-3">
                                <h2 class="type-category">CPU:</h2>

                                <h2 class="type-data">
                                    {{ build.cpu.name }}
                                </h2>
                            </li>
                            <li class="flex justify-between px-3">
                                <h2 class="type-category">Motherboard:</h2>

                                <h2 class="type-data">
                                    {{ build.motherboard.name }}
                                </h2>
                            </li>
                            <li class="flex justify-between px-3">
                                <h2 class="type-category">GPU:</h2>

                                <h2 class="type-data">
                                    {{ build.gpu.name }}
                                </h2>
                            </li>
                            <li class="flex justify-between px-3">
                                <h2 class="type-category">Memory:</h2>

                                <h2 class="type-data">
                                    {{ build.memory.name }}
                                </h2>
                            </li>
                            <li class="flex justify-between px-3">
                                <h2 class="type-category">Storage:</h2>

                                <h2 class="type-data">
                                    {{ build.storage.name }}
                                </h2>
                            </li>
                            <li class="flex justify-between px-3">
                                <h2 class="type-category">Power Supply:</h2>

                                <h2 class="type-data">
                                    {{ build.powerSupply.name }}
                                </h2>
                            </li>
                            <li class="flex justify-between px-3">
                                <h2 class="type-category">Case:</h2>

                                <h2 class="type-data">
                                    {{ build.case.name }}
                                </h2>
                            </li>
                        </ul>
                    </div>
                    <div class="font-semibold text-white 2xl:text-4xl">
                        <h5>{{ getRupiahHarga }}</h5>
                    </div>
                    <div>
                        <button
                            @click="createCustomizeBuild"
                            id="specButton"
                            class="px-2 py-1 mb-2 font-semibold  2xl:px-4 2xl:py-2 2xl:text-xl rounded-2xl"
                        >
                            Customize This Build
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Recommendation",
    props: ["build"],
    methods: {
        createCustomizeBuild() {
            if (!localStorage.access_token) {
                this.$router.push({ name: "Login" });
            } else {
                this.$toast.success(
                    "Please wait! Creating this build for you.",
                    {
                        position: "top-right",
                        timeout: 10000,
                        closeOnClick: true,
                        pauseOnFocusLoss: true,
                        pauseOnHover: true,
                        draggable: true,
                        draggablePercent: 0.6,
                        showCloseButtonOnHover: false,
                        hideProgressBar: false,
                        closeButton: false,
                        icon: true,
                        rtl: false,
                    }
                );
                this.$store.dispatch("createBuildFromCategory", this.build);
            }
        },
    },
    computed: {
        getRupiahHarga() {
            return new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(this.build.harga);
        },
    },
};
</script>

<style>
.type-category {
    @apply text-sm 2xl:text-lg font-semibold truncate;
    color: #cfff0a;
}
.type-data {
    @apply 2xl:text-lg truncate;
}
#specButton {
    /* color: black;
    background-color: #cfff0a; */
    @apply text-black bg-ark-green hover:text-ark-green hover:bg-black border-2 border-opacity-0 hover:border-opacity-100;
}
/* #specButton:hover {
    color: #cfff0a;
    background-color: black;
} */
.box-right {
    background: linear-gradient(
        90deg,
        rgb(0, 0, 0) 2%,
        rgba(56, 56, 56, 1) 100%
    );
}
/* .box-right {
    background: linear-gradient(
        90deg,
        rgb(0, 0, 0) 2%,
        rgba(56, 56, 56, 1) 100%
    );
} */
.box-spec {
    background-color: #050505a8;
}
#spec-title {
    color: #fcfff0;
}
.img-shadow {
    -webkit-filter: drop-shadow(5px 5px 5px #cfff0a);
    filter: drop-shadow(5px 10px 10px #cfff0a);
}
</style>
