<template>
  <section class="bg-register">
    <div class="container flex items-center justify-center h-screen mx-auto">
      <div class="relative flex flex-col w-10/12">
        <div class="p-5 bg-black shadow-xl h-80 rounded-3xl">
          <h2 class="pl-3 text-3xl font-semibold text-white">Welcome To ...</h2>
          <div class="flex items-center justify-start">
            <img
              class="mt-10 w-96 ml-52"
              src="../assets/LOGO TES.png"
              alt="logo"
            />
          </div>
        </div>
        <div
          class="absolute flex flex-col items-center justify-center w-auto p-2 bg-white shadow-2xl  -top-20 right-20 rounded-xl"
        >
          <h2 class="m-3 text-2xl font-semibold">SIGN UP</h2>
          <div
            class="w-12 h-12 mt-2 mb-2 bg-black rounded-full shadow-xl"
          ></div>
          <form @submit.prevent="submitRegister">
            <div class="grid grid-cols-2">
              <input
                type="text"
                v-model="userData.firstname"
                placeholder="First Name"
                class="p-2 m-5 bg-transparent border-b-2  border-ark-green focus:outline-none focus:border-grey-600 w-52"
              />
              <input
                type="text"
                v-model="userData.lastname"
                placeholder="Last Name"
                class="p-2 m-5 bg-transparent border-b-2  border-ark-green w-52 focus:outline-none focus:border-grey-600"
              />
            </div>
            <!-- <div class="grid grid-cols-1"> -->
            <input
              type="text"
              v-model="userData.address"
              placeholder="Address"
              class="w-11/12 p-2 m-5 bg-transparent border-b-2  border-ark-green focus:outline-none focus:border-grey-600"
            />
            <!-- </div> -->
            <div class="grid grid-cols-2">
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
            </div>
            <center>
              <button
                class="w-40 px-2 py-3 mx-auto text-lg font-semibold text-white bg-black  rounded-xl hover:bg-ark-green m-7 focus:outline-none hover:text-black"
              >
                SIGN UP
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
  name: "Register",
  data() {
    return {
      userData: {
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        address: "",
      },
    };
  },
  methods: {
    submitRegister() {
      this.$store.dispatch("userRegister", this.userData);
      this.userData = {
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        address: "",
      };
    },
  },
};
</script>

<style>
.bg-register {
  background-color: #212327;
}
</style>
