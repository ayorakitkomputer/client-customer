<template>
  <div class="h-full col-span-10">
    <div
      class="flex items-center justify-center h-full text-white bg-build-home"
    >
      <div class="flex items-center justify-center w-2/3 bg-transparent h-2/3">
        <span>
          <center>
            <h1 class="my-5 text-7xl">Are You Ready To Build</h1>
          </center>
          <center>
            <h1 class="text-7xl">Your Own PC ?</h1>
          </center>
          <div class="flex items-center justify-center mt-10">
            <button
              class="px-5 py-4 text-2xl bg-black rounded-3xl btn-build"
              @click="createBuild"
            >
              Create New Build
            </button>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PickPartsHome",
  methods: {
    createBuild() {
      this.$store.dispatch("createNewBuild");
    },
  },
};
</script>

<style>
.bg-build-home {
  background-color: rgba(0, 0, 0, 0.157);
}
.btn-build {
  background-color: #cfff0a;
  color: black;
}
.btn-build:hover {
  background-color: black;
  color: #cfff0a;
}
</style>
