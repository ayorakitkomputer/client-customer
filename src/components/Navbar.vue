<template>
    <section id="navbar" class="bg-black shadow-2xl h-28 section h-navbar">
        <div class="grid h-full grid-cols-12 mx-auto max-w-screen">
            <div class="self-center col-span-2 text-white justify-self-center">
                <img
                    src="../assets/LOGO TES.png"
                    alt="logo"
                    class="w-3/4 mx-10 my-3"
                />
            </div>
            <div
                class="self-center col-span-2 col-start-11 justify-self-center"
            >
                <ul
                    v-if="!getAccessToken"
                    id="navbarButton"
                    class="flex items-center justify-center gap-4 mx-auto font-semibold text-black  text-md"
                >
                    <li
                        class="px-5 py-3 bg-white cursor-pointer  register hover:bg-black rounded-xl"
                    >
                        <router-link to="/login"> LOGIN </router-link>
                    </li>
                </ul>
                <div v-else>
                    <div
                        class="relative cursor-pointer"
                        @click="openProfileOptions"
                    >
                        <div class="text-white basic-center">
                            <img
                                class="
                                    object-cover
                                    w-10
                                    h-10
                                    p-0.5
                                    bg-ark-green
                                    rounded-full
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
                            class="absolute right-0 z-50 w-48 bg-white rounded-md shadow-xl "
                        >
                            <div>
                                <ul>
                                    <li class="flex flex-col p-2 border-b-2">
                                        <h5>Signed in as</h5>
                                        <h6 class="font-semibold text-gray-800">
                                            customer@mail.com
                                        </h6>
                                    </li>
                                    <li
                                        class="border-b-2 profile-options"
                                        @click="goToCreateBuild"
                                    >
                                        Create a new build
                                    </li>
                                    <li
                                        class="profile-options"
                                        @click="goToMyBuilds"
                                    >
                                        Your builds
                                    </li>
                                    <li
                                        @click="goToTransactionHistory"
                                        class="profile-options"
                                    >
                                        Transaction history
                                    </li>
                                    <li
                                        @click="logOutUser"
                                        class="border-t-2 profile-options"
                                    >
                                        Sign out
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
            this.$router.push(`/`);
        },
        goToCreateBuild() {
            this.$router.push("/builds");
        },
        goToTransactionHistory() {
            let userId = localStorage.user_id;
            this.$router.push(`/profiles/${userId}/transactions`);
        },
    },
    computed: {
        getAccessToken() {
            if (localStorage.access_token) return true;
            return false;
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
    @apply px-2 py-1 hover:bg-ark-green;
}
#navbar {
    background-color: black;
    /* background-image: url(""); */
}
</style>
