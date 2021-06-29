<template>
  <div>
    <ul class="flex items-center justify-center gap-2 mt-8 mb-10">
      <li @click="goToPage(i)" v-for="i in 10" :key="i">
        {{ i }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PaginationFooter",
  methods: {
    goToPage(i) {
      let payload = {
        route: this.$route.name,
        page: i,
      };
      this.$store.dispatch("getData", payload);
    },
  },
  computed: {
    getCurrentPage() {
      return this.$store.state.componentData.page;
    },
  },
};
</script>

<style scoped>
li {
  @apply mx-1 h-10 w-10 flex items-center justify-center bg-white cursor-pointer rounded-xl font-semibold;
}

li:hover {
  color: #cfff0a;
  background-color: black;
}
</style>
