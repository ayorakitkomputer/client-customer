<template>
    <div class="app">
        <!-- JUMBOTRON -->
        <Jumbotron />
        <!-- SPECIFICATION -->
        <Recommendation />
        <div>
            <Recommendation />
        </div>
        <div
            class="fixed bg-white rounded-full shadow-lg cursor-pointer  bottom-5 left-5 object"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                />
            </svg>
        </div>
    </div>
</template>

<script>
import Jumbotron from "../components/Jumbotron.vue";
import Recommendation from "../components/Recommendation.vue";

export default {
    name: "Home",
    components: {
        Jumbotron,
        Recommendation,
    },
};
</script>

<style>
.object {
    animation: MoveUpDown 3s linear infinite;
}

@keyframes MoveUpDown {
    0%,
    100% {
        @apply bottom-5;
    }
    50% {
        bottom: 10px;
    }
}
</style>
