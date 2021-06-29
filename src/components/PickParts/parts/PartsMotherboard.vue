<template>
  <div>
    <div
      v-for="part in componentData"
      :key="`${part._id}`"
      class="grid grid-cols-8 p-3 m-2 mt-5 bg-black rounded-3xl"
    >
      <div class="flex items-center justify-between col-span-2 mx-4">
        <img class="object-cover w-12 h-12" :src="part.image" alt="" />
        <h1 class="text-white">
          {{ `${part.manufacturer} ${part.name}` }}
        </h1>
      </div>
      <div class="col-span-1 basic-center">
        <h1 class="text-white">{{ part.socket }}</h1>
      </div>
      <div class="col-span-1 basic-center">
        <h1 class="text-white">
          {{ part.form_factor }}
        </h1>
      </div>
      <div class="col-span-1 basic-center">
        <h1 class="text-white">{{ part.memory_type }}</h1>
      </div>
      <div class="col-span-1 basic-center">
        <h1 class="text-white">{{ getPrice(part.price) }}</h1>
      </div>
      <div class="col-span-1 basic-center">
        <h1 class="text-white">{{ part.stock }}</h1>
      </div>
      <div class="col-span-1 basic-center">
        <button @click="addMotherboard(part)" class="w-1/6 text-white">
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
  name: "PartsMotherboard",
  props: ["componentData"],
  methods: {
    getPrice(price) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(Math.round(price));
    },
    addMotherboard(part) {
      const payload = {
        buildId: this.$route.params.id,
        partId: part._id,
        type: "motherboard",
      };
      this.$store.dispatch("addBuild", payload);
    },
  },
  components: {
    PaginationFooter,
  },
};
</script>

<style></style>
