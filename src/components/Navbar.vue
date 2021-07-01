<template>
  <section id="navbar" class="bg-black shadow-2xl h-28 section h-navbar">
    <div class="grid h-full grid-cols-12 mx-auto max-w-screen">
      <div
        @click="goToHome"
        class="self-center col-span-2 text-white cursor-pointer  justify-self-center"
      >
        <img src="../assets/LOGO TES.png" alt="logo" class="w-3/4 mx-10 my-3" />
      </div>
      <div class="self-center col-span-2 col-start-12 justify-self-center">
        <ul
          v-if="!getAccessToken"
          id="navbarButton"
          class="flex items-center justify-center gap-4 mx-auto font-semibold text-black  text-md"
        >
          <li
            class="px-5 py-3 bg-white cursor-pointer  register hover:bg-black rounded-xl"
          >
            <router-link to="/login"> SIGN IN </router-link>
          </li>
        </ul>
        <div v-else>
          <div class="relative cursor-pointer" @click="openProfileOptions">
            <div class="text-white basic-center">
              <img
                class="
                  object-cover
                  w-10
                  h-10
                  p-0.5
                  bg-ark-green
                  rounded-full
                  mx-3
                "
                src="https://images.unsplash.com/photo-1624794448959-4b2b2f424a9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
                alt=""
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div
              v-if="showProfileOptions"
              class="absolute right-0 z-50 w-48 mt-3 bg-white rounded-md shadow-xl "
            >
              <div>
                <ul>
                  <li class="flex flex-col p-3 px-4 border-b-2">
                    <h5>Signed in as</h5>
                    <h6 class="font-semibold text-gray-800">
                      {{ getUserEmail }}
                    </h6>
                  </li>
                  <li
                    class="px-4 py-2 border-b-2 profile-options"
                    @click="goToCreateBuild"
                  >
                    Create new build
                  </li>
                  <li class="px-4 py-2 profile-options" @click="goToMyBuilds">
                    My builds
                  </li>
                  <li
                    class="px-4 pb-2 profile-options"
                    @click="goToTransactionHistory"
                  >
                    Transaction History
                  </li>
                  <li
                    @click="logOutUser"
                    class="px-4 py-3 font-medium border-t-2 profile-options"
                  >
                    Sign Out
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      showProfileOptions: false,
    };
  },
  methods: {
    openProfileOptions() {
      this.showProfileOptions = !this.showProfileOptions;
    },
    goToMyBuilds() {
      let userId = localStorage.user_id;
      this.$router.push(`/profiles/${userId}/builds`);
    },
    logOutUser() {
      localStorage.clear();
      this.$store.commit("SET_USER_LOGGED_IN", {});
      this.$router.push(`/`);
    },
    goToCreateBuild() {
      this.$store.dispatch("createNewBuild");
    },
    goToTransactionHistory() {
      let userId = localStorage.user_id;
      this.$router.push(`/profiles/${userId}/transactions`);
    },
    goToHome() {
      this.$router.push("/");
    },
  },
  computed: {
    getAccessToken() {
      const userLoggedIn = this.$store.state.userLoggedIn;
      if (userLoggedIn.access_token) return true;
      return false;
    },
    getUserEmail() {
      return this.$store.state.userLoggedIn.email;
    },
  },
};
</script>

<style>
.register:hover {
  color: #cfff0a;
}
.checkout:hover {
  color: #cfff0a;
}
.profile-options {
  @apply py-1 hover:bg-ark-green;
}
#navbar {
  background-color: black;
  /* background-image: url(""); */
}
</style>
