<template>
  <div>
    <div
      v-for="part in componentData"
      :key="`${part._id}`"
      class="grid grid-cols-6 p-3 mx-5 mt-5 bg-black rounded-xl"
    >
      <div class="flex items-center justify-between col-span-2 mx-4">
        <img class="object-cover w-20 h-12" :src="part.image" alt="" />
        <h1 class="text-white">
          {{ `${part.manufacturer} ${part.name}` }}
        </h1>
      </div>
      <div class="col-span-1 basic-center">
        <h1 class="text-white">{{ part.size }}</h1>
      </div>
      <div class="col-span-1 basic-center">
        <h1 class="text-white">{{ getPrice(part.price) }}</h1>
      </div>
      <div class="col-span-1 basic-center">
        <h1 class="text-white">{{ part.stock }}</h1>
      </div>
      <div class="col-span-1 basic-center">
        <button @click="addMonitor(part)" class="w-1/6 text-white">
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
  name: "PartsMonitor",
  props: ["componentData"],
  methods: {
    getPrice(price) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(Math.round(price));
    },
    addMonitor(part) {
      const currentBuild = this.$store.state.currentBuild;
      const payload = {
        buildId: this.$route.params.id,
        partId: [part._id],
        type: "monitor",
      };
      if (currentBuild.monitor) {
        currentBuild.monitor.forEach((oneMonitor) => {
          payload.partId.push(oneMonitor._id);
        });
      }
      this.$store.dispatch("addBuild", payload);
    },
  },
  components: {
    PaginationFooter,
  },
};
</script>

<style></style>
