<template>
  <section class="h-screen bg-black shadow-2xl section">
    <div class="relative grid grid-cols-6">
      <div class="absolute transform -translate-x-1/2 left-1/3 top-14">
        <h1
          data-aos="fade-up"
          id="spec-title"
          class="font-semibold md:text-2xl xl:text-5xl"
        >
          Entry Level AMD Gaming Build
        </h1>
      </div>

      <div class="flex items-center justify-center h-screen col-span-4">
        <img
          class="object-scale-down mt-20 h-2/3"
          data-aos="fade-up-right"
          src="https://cougargaming.com/_cgrwdr_/wwdpp/wp-content/uploads/2020/01/mx350-RGB-banner-2.png"
          alt=""
        />
      </div>

      <div
        class="flex items-center justify-center col-span-2 overflow-auto  box-right"
      >
        <div
          data-aos="fade-up"
          class="flex flex-col items-center justify-between w-5/6 px-10 py-8 shadow-2xl  box-spec rounded-xl h-2/3"
        >
          <h1
            class="text-4xl font-semibold tracking-wide text-center  type-category"
          >
            SPECIFICATIONS
          </h1>
          <div class="w-full">
            <ul class="flex flex-col gap-4">
              <li class="grid items-end grid-cols-6">
                <h2 class="text-lg font-semibold type-category">CPU</h2>
                <h2 class="text-lg text-white type-data">: AMD Ryzen 5 2600</h2>
              </li>
              <li class="grid items-end grid-cols-6">
                <h2 class="text-lg font-semibold type-category">Motherboard</h2>
                <h2 class="text-lg text-white type-data">
                  : ASUS TUF GAMING X570-PLUS
                </h2>
              </li>
              <li class="grid items-end grid-cols-6">
                <h2 class="text-lg font-semibold type-category">GPU</h2>
                <h2 class="text-lg text-white type-data">
                  : NVIDIA Founders Edition RTX 2060
                </h2>
              </li>
              <li class="grid items-end grid-cols-6">
                <h2 class="text-lg font-semibold type-category">Memory</h2>
                <h2 class="text-lg text-white type-data">
                  : Corsair Vengeance RGB Pro 16 GB
                </h2>
              </li>
              <li class="grid items-baseline grid-cols-6">
                <h2 class="text-lg font-semibold type-category">Storage</h2>
                <h2 class="text-lg text-white type-data">
                  : Samsung 970 Evo Plus 1TB,
                </h2>
                <h2 class="text-lg text-white type-data">
                  Samsung 970 Evo Plus 500GB
                </h2>
              </li>
              <li class="grid items-end grid-cols-6">
                <h2 class="text-lg font-semibold type-category">
                  Power Supply
                </h2>
                <h2 class="text-lg text-white type-data">
                  : Gigabyte P GM 80+ Gold
                </h2>
              </li>
              <li class="grid items-end grid-cols-6">
                <h2 class="text-lg font-semibold type-category">Case</h2>
                <h2 class="text-lg text-white type-data">
                  : Corsair 4000D Airflow
                </h2>
              </li>
            </ul>
          </div>
          <div class="text-4xl font-semibold text-white">
            <h5>Rp. 10,000,000</h5>
          </div>
          <div>
            <button
              id="specButton"
              class="px-3 py-2 text-xl font-semibold rounded-2xl"
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
  props: ["index"],
};
</script>

<style>
.type-category {
  @apply text-sm;
  color: #cfff0a;
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
#specButton {
  color: black;
  background-color: #cfff0a;
}
#specButton:hover {
  color: #cfff0a;
  background-color: black;
}
.box-right {
  background: linear-gradient(90deg, rgb(0, 0, 0) 2%, rgba(56, 56, 56, 1) 100%);
}
.box-spec {
  background-color: #050505a8;
}
#spec-title {
  color: #fcfff0;
  text-shadow: 2px 2px 1px #cfff0a;
}
</style>
