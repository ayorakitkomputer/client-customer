<template>
  <section id="navbar" class="bg-black shadow-2xl h-28 section h-navbar">
    <div class="grid h-full grid-cols-12 mx-auto max-w-screen">
      <div class="self-center col-span-2 p-4 text-white justify-self-center">
        <img src="../assets/LOGO TES.png" alt="logo" class="w-3/4 mx-10 my-3" />
      </div>
      <div class="self-center col-span-2 col-start-11 justify-self-center">
        <ul
          id="navbarButton"
          class="flex items-center justify-center gap-4 mx-auto font-semibold text-black  text-md"
        >
          <li
            class="px-5 py-3 bg-white cursor-pointer  register hover:bg-black rounded-xl"
          >
            <router-link to="/login"> REGISTER </router-link>
          </li>
          <!-- <li class="p-2 m-4 bg-gray-900 cursor-pointer rounded-xl">
                        LOGIN
                    </li> -->
          <li
            class="px-5 py-3 mr-10 bg-white cursor-pointer  checkout hover:bg-black rounded-xl"
          >
            CHECKOUT
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.register:hover {
  color: #cfff0a;
}
.checkout:hover {
  color: #cfff0a;
}
</style>
