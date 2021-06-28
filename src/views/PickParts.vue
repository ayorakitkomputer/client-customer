<template>
    <section class="bg-green-200 h-navbar">
        <div class="container grid h-full grid-cols-12 mx-auto bg-blue-200">
            <div class="h-full col-span-2 bg-red-600">
                <h5 class="p-3 font-semibold text-center bg-blue-200">
                    Components
                </h5>
                <ul class="flex flex-col gap-2 mx-4 mt-5 uppercase">
                    <router-link to="/build/cpu">
                        <li class="flex justify-between">
                            <div>CPU</div>
                            <div>+</div>
                        </li>
                    </router-link>

                    <router-link to="/build/motherboard">
                        <li class="flex justify-between">
                            <div>Motherboard</div>
                            <div>+</div>
                        </li>
                    </router-link>
                    <router-link to="/build/memory">
                        <li class="flex justify-between">
                            <div>Memory</div>
                            <div>+</div>
                        </li>
                    </router-link>
                    <router-link to="/build/storage">
                        <li class="flex justify-between">
                            <div>Storage</div>
                            <div>+</div>
                        </li>
                    </router-link>
                    <router-link to="/build/gpu">
                        <li class="flex justify-between">
                            <div>GPU</div>
                            <div>+</div>
                        </li>
                    </router-link>
                    <router-link to="/build/case">
                        <li class="flex justify-between">
                            <div>Case</div>
                            <div>+</div>
                        </li>
                    </router-link>
                    <router-link to="/build/power_supply">
                        <li class="flex justify-between">
                            <div>Powersupply</div>
                            <div>+</div>
                        </li>
                    </router-link>
                    <router-link to="/build/monitor">
                        <li class="flex justify-between">
                            <div>Monitor</div>
                            <div>+</div>
                        </li>
                    </router-link>
                    <router-link to="/build/fans">
                        <li class="flex justify-between">
                            <div>Case Fans</div>
                            <div>+</div>
                        </li>
                    </router-link>
                </ul>
            </div>

            <router-view />
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