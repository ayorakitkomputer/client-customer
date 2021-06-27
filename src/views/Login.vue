<template>
    <section class="bg-gray-300">
        <div class="container flex items-center h-screen mx-auto">
            <div class="relative flex flex-col w-full">
                <div class="p-5 bg-black shadow-xl rounded-3xl">
                    <h2 class="pl-3 text-2xl font-semibold text-white">
                        Welcome To PIPISI
                    </h2>
                    <p class="pl-3 mt-2 text-sm text-white">
                        P C P A R T P I C K E R
                    </p>
                    <div class="pl-3 mt-44">
                        <p class="text-sm text-white">
                            Don't Have Any Account?
                            <a href="#" class="text-sm text-pink-500"
                                >Register Here</a
                            >
                        </p>
                    </div>
                </div>
                <div
                    class="absolute flex flex-col items-center justify-center w-64 p-2 bg-white shadow-2xl  -top-10 right-20 rounded-xl"
                >
                    <h2 class="m-3 text-2xl font-semibold">PLEASE LOGIN !</h2>
                    <div
                        class="w-12 h-12 mt-2 mb-2 bg-black rounded-full shadow-xl "
                    ></div>
                    <input
                        type="text"
                        placeholder="Email"
                        class="p-2 m-5 bg-transparent border-b-2 border-pink-500  focus:outline-none focus:border-grey-600 w-52"
                    />
                    <input
                        type="text"
                        placeholder="Password"
                        class="p-2 mb-5 bg-transparent border-b-2 border-pink-500  w-52 focus:outline-none focus:border-grey-600"
                    />
                    <button
                        class="w-40 p-2 mt-4 font-semibold text-white bg-black  rounded-xl hover:bg-pink-500 mb-7 focus:outline-none"
                    >
                        LOGIN
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Login",
};
</script>

<style>
</style>