<template>
    <section class="bg-green-200 h-navbar">
        <div class="container grid h-full grid-cols-12 mx-auto bg-blue-200">
            <div class="h-full col-span-2 bg-red-600">
                <h5 class="p-3 font-semibold text-center bg-blue-200">
                    Components
                </h5>
                <ul class="flex flex-col gap-2 mx-4 mt-5 uppercase">
                    <li class="flex justify-between">
                        <div>CPU</div>
                        <div>+</div>
                    </li>
                    <li class="flex justify-between">
                        <div>Motherboard</div>
                        <div>+</div>
                    </li>
                    <li class="flex justify-between">
                        <div>Memory</div>
                        <div>+</div>
                    </li>
                    <li class="flex justify-between">
                        <div>Storage</div>
                        <div>+</div>
                    </li>
                    <li class="flex justify-between">
                        <div>GPU</div>
                        <div>+</div>
                    </li>
                    <li class="flex justify-between">
                        <div>Case</div>
                        <div>+</div>
                    </li>
                    <li class="flex justify-between">
                        <div>Powersupply</div>
                        <div>+</div>
                    </li>
                    <li class="flex justify-between">
                        <div>Monitor</div>
                        <div>+</div>
                    </li>
                </ul>
            </div>

            <div class="col-span-10 bg-red-400">
                <div class="grid grid-cols-7 p-3 bg-black">
                    <div class="col-span-2">
                        <center>
                            <h1 class="font-semibold text-pink-500">Name</h1>
                        </center>
                    </div>
                    <div class="col-span-1">
                        <center>
                            <h1 class="font-semibold text-pink-500">Socket</h1>
                        </center>
                    </div>
                    <div class="col-span-1">
                        <center>
                            <h1 class="font-semibold text-pink-500">iGPU</h1>
                        </center>
                    </div>
                    <div class="col-span-1">
                        <center>
                            <h1 class="font-semibold text-pink-500">TDP</h1>
                        </center>
                    </div>
                    <div class="col-span-1">
                        <center>
                            <h1 class="font-semibold text-pink-500">Price</h1>
                        </center>
                    </div>
                    <div class="col-span-1">
                        <center>
                            <h1 class="font-semibold text-pink-500">Stock</h1>
                        </center>
                    </div>
                </div>
                <!-- CONTENT -->
                <div class="grid grid-cols-7 p-3 m-2 mt-5 bg-black rounded-3xl">
                    <div class="col-span-2">
                        <center>
                            <h1 class="text-white">Gambar + AMD Ryzen 9</h1>
                        </center>
                    </div>
                    <div class="col-span-1">
                        <center>
                            <h1 class="text-white">AM 4</h1>
                        </center>
                    </div>
                    <div class="col-span-1">
                        <center>
                            <h1 class="text-white">Included</h1>
                        </center>
                    </div>
                    <div class="col-span-1">
                        <center>
                            <h1 class="text-white">80 W</h1>
                        </center>
                    </div>
                    <div class="col-span-1">
                        <center>
                            <h1 class="text-white">10.000.000</h1>
                        </center>
                    </div>
                    <div class="col-span-1">
                        <center>
                            <h1 class="text-white">200</h1>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "PickParts",
};
</script>

<style>
</style>