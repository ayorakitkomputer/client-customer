<template>
  <section class="bg-gray-200">
    <div class="container flex items-center justify-center h-screen mx-auto">
      <div class="relative flex flex-col w-10/12">
        <div class="p-5 bg-black shadow-xl h-80 rounded-3xl">
          <h2 class="pl-3 text-3xl font-semibold text-white">Welcome To ...</h2>
          <div class="flex items-center justify-start">
            <img
              class="mt-10 w-96 ml-96"
              src="../assets/LOGO TES.png"
              alt="logo"
            />
          </div>
          <div class="pl-3 mt-14">
            <p class="text-white text-md">
              Don't Have Any Account ?
              <a href="#" class="text-md text-ark-green">Register Here</a>
            </p>
          </div>
        </div>
        <div
          class="absolute flex flex-col items-center justify-center w-64 p-2 bg-white shadow-2xl  -top-10 right-20 rounded-xl"
        >
          <h2 class="m-3 text-2xl font-semibold">SIGN IN</h2>
          <div
            class="w-12 h-12 mt-2 mb-2 bg-black rounded-full shadow-xl"
          ></div>
          <form @submit.prevent="submitLogin">
            <input
              type="text"
              v-model="userData.email"
              placeholder="Email"
              class="p-2 m-5 bg-transparent border-b-2  border-ark-green focus:outline-none focus:border-grey-600 w-52"
            />
            <input
              type="password"
              v-model="userData.password"
              placeholder="Password"
              class="p-2 m-5 bg-transparent border-b-2  border-ark-green w-52 focus:outline-none focus:border-grey-600"
            />
            <center>
              <button
                class="w-40 px-2 py-3 mx-auto font-semibold text-white bg-black  rounded-xl hover:bg-ark-green m-7 focus:outline-none hover:text-black"
              >
                SIGN IN
              </button>
            </center>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submitLogin() {
      this.$store.dispatch("userLogin", this.userData);
      this.userData = {
        email: "",
        password: "",
      };
    },
  },
};
</script>

<style></style>
