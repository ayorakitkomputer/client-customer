<template>
    <nav class="h-20 bg-red-200">
        <div class="grid h-full grid-cols-12 mx-auto max-w-screen">
            <div
                class="self-center col-span-2 p-4 text-white  justify-self-center"
            >
                <span class="text-3xl">LOGO</span>
            </div>
            <div
                class="self-center col-span-2 col-start-11 justify-self-center"
            >
                <ul
                    class="flex items-center justify-center gap-4 mx-auto text-white "
                >
                    <li class="p-2 bg-gray-900 cursor-pointer rounded-xl">
                        REGISTER
                    </li>
                    <!-- <li class="p-2 m-4 bg-gray-900 cursor-pointer rounded-xl">
                        LOGIN
                    </li> -->
                    <li class="p-2 bg-gray-900 cursor-pointer rounded-xl">
                        CHECKOUT
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
};
</script>

<style>
</style>