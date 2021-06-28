<template>
    <section class="h-screen bg-black section">
        <div class="relative grid grid-cols-6">
            <div class="absolute transform -translate-x-1/2 left-1/2 top-10">
                <h1
                    data-aos="fade-up"
                    class="text-base text-white md:text-2xl xl:text-4xl"
                >
                    Entry Level AMD Gaming Build
                </h1>
            </div>

            <div class="flex items-center justify-center h-screen col-span-4">
                <img
                    class="object-scale-down h-1/2"
                    data-aos="fade-up-right"
                    src="https://cougargaming.com/_cgrwdr_/wwdpp/wp-content/uploads/2020/01/mx350-RGB-banner-2.png"
                    alt=""
                />
            </div>

            <div
                class="flex items-center justify-center col-span-2 overflow-auto bg-gray-700 "
            >
                <div
                    data-aos="fade-up"
                    class="flex flex-col items-center justify-between w-5/6 bg-white rounded-md  h-2/3"
                >
                    <h5
                        class="text-lg tracking-wide text-center text-black uppercase "
                    >
                        Specifications
                    </h5>
                    <div class="w-full">
                        <ul class="flex flex-col gap-4 font-semibold">
                            <li class="grid items-end grid-cols-6">
                                <h5 class="type-category">CPU</h5>
                                <h6 class="type-data">AMD Ryzen 5 2600</h6>
                            </li>
                            <li class="grid items-end grid-cols-6">
                                <h5 class="type-category">Motherboard</h5>
                                <h6 class="type-data">
                                    ASUS TUF GAMING X570-PLUS
                                </h6>
                            </li>
                            <li class="grid items-end grid-cols-6">
                                <h5 class="type-category">GPU</h5>
                                <h6 class="type-data">
                                    NVIDIA Founders Edition RTX 2060
                                </h6>
                            </li>
                            <li class="grid items-end grid-cols-6">
                                <h5 class="type-category">Memory</h5>
                                <h6 class="type-data">
                                    Corsair Vengeance RGB Pro 16 GB
                                </h6>
                            </li>
                            <li class="grid items-baseline grid-cols-6">
                                <h6 class="type-data">
                                    Samsung 970 Evo Plus 1TB
                                </h6>
                                <h5 class="type-category">Storage</h5>
                                <h6 class="type-data">
                                    Samsung 970 Evo Plus 500GB
                                </h6>
                            </li>
                            <li class="grid items-end grid-cols-6">
                                <h5 class="type-category">Power Supply</h5>
                                <h6 class="type-data">
                                    Gigabyte P GM 80+ Gold
                                </h6>
                            </li>
                            <li class="grid items-end grid-cols-6">
                                <h5 class="type-category">Case</h5>
                                <h6 class="type-data">Corsair 4000D Airflow</h6>
                            </li>
                        </ul>
                    </div>
                    <div class="text-4xl bg-green-400">
                        <h5>Rp. 10,000,000</h5>
                    </div>
                    <div>
                        <button class="text-sm bg-green-400">
                            Customize this build
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
    props: ["index"],
};
</script>

<style>
.type-category {
    @apply text-sm;
}
.type-data {
    @apply col-span-4 col-start-3 text-lg;
}

[data-aos="fade-out"] {
    opacity: 1;
    transition-property: opacity;
    &.aos-animate {
        opacity: 0;
    }
}
</style>