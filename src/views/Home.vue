<template>
    <div class="app">
        <!-- JUMBOTRON -->
        <Jumbotron />
        <!-- SPECIFICATION -->
        <div class="h-screen bg-gray-800">
            <div class="">
                <div class="grid grid-cols-6">
                    <div class="col-span-4">
                        <h1 class="text-white">GAMBAR</h1>
                    </div>
                    <div
                        class="h-screen col-span-2 px-4 py-4 overflow-auto bg-gray-700 "
                    >
                        <h1>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ratione numquam fuga voluptatem unde nesciunt!
                            Eveniet molestiae, ex velit aliquid numquam
                            consequuntur harum nulla perspiciatis dolores dolore
                            illum excepturi minima suscipit? Lorem ipsum dolor
                            sit amet consectetur, adipisicing elit. Ratione
                            numquam fuga voluptatem unde nesciunt! Eveniet
                            molestiae, ex velit aliquid numquam consequuntur
                            harum nulla perspiciatis dolores dolore illum
                            excepturi minima suscipit? Lorem ipsum dolor sit
                            amet consectetur, adipisicing elit. Ratione numquam
                            fuga voluptatem unde nesciunt! Eveniet molestiae, ex
                            velit aliquid numquam consequuntur harum nulla
                            perspiciatis dolores dolore illum excepturi minima
                            suscipit? Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Ratione numquam fuga voluptatem
                            unde nesciunt! Eveniet molestiae, ex velit aliquid
                            numquam consequuntur harum nulla perspiciatis
                            dolores dolore illum excepturi minima suscipit?
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ratione numquam fuga voluptatem unde nesciunt!
                            Eveniet molestiae, ex velit aliquid numquam
                            consequuntur harum nulla perspiciatis dolores dolore
                            illum excepturi minima suscipit?
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Jumbotron from "../components/Jumbotron.vue";

export default {
    name: "Home",
    components: {
        Jumbotron,
    },
};
</script>

<style></style>
