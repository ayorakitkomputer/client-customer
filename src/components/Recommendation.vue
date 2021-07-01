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
                <h2 class="text-lg text-white type-data">
                  : {{ build.cpu.name }}
                </h2>
              </li>
              <li class="grid items-end grid-cols-6">
                <h2 class="text-lg font-semibold type-category">Motherboard</h2>
                <h2 class="text-lg text-white type-data">
                  : {{ build.motherboard.name }}
                </h2>
              </li>
              <li class="grid items-end grid-cols-6">
                <h2 class="text-lg font-semibold type-category">GPU</h2>
                <h2 class="text-lg text-white type-data">
                  : {{ build.gpu.name }}
                </h2>
              </li>
              <li class="grid items-end grid-cols-6">
                <h2 class="text-lg font-semibold type-category">Memory</h2>
                <h2 class="text-lg text-white type-data">
                  : {{ build.memory.name }}
                </h2>
              </li>
              <li class="grid items-baseline grid-cols-6">
                <h2 class="text-lg font-semibold type-category">Storage</h2>
                <h2 class="text-lg text-white type-data">
                  : {{ build.storage.name }}
                </h2>
              </li>
              <li class="grid items-end grid-cols-6">
                <h2 class="text-lg font-semibold type-category">
                  Power Supply
                </h2>
                <h2 class="text-lg text-white type-data">
                  : {{ build.powerSupply.name }}
                </h2>
              </li>
              <li class="grid items-end grid-cols-6">
                <h2 class="text-lg font-semibold type-category">Case</h2>
                <h2 class="text-lg text-white type-data">
                  : {{ build.case.name }}
                </h2>
              </li>
            </ul>
          </div>
          <div class="text-4xl font-semibold text-white">
            <h5>{{ getRupiahHarga }}</h5>
          </div>
          <div>
            <button
              @click="createCustomizeBuild"
              id="specButton"
              class="px-4 py-2 text-xl font-semibold rounded-2xl"
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
      this.$store.dispatch("createBuildFromCategory", this.build);
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
}
.img-shadow {
  -webkit-filter: drop-shadow(5px 5px 5px #cfff0a);
  filter: drop-shadow(5px 10px 10px #cfff0a);
}
</style>
