<template>
    <section class="bg-green-200 h-navbar">
        <div class="container grid h-full grid-cols-12 mx-auto bg-blue-200">
            <div class="h-full col-span-2 bg-red-600">
                <h5 class="text-center bg-blue-200">Components</h5>
                <ul class="mx-6">
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
            <div class="col-span-10 bg-red-400"></div>
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