<template>
    <div>
        <ul class="flex items-center justify-center gap-2 m-2">
            <li
                @click="goToPage(i)"
                v-for="i in getCurrentPage.totalPage"
                :key="i"
            >
                {{ i }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "PaginationFooter",
    methods: {
        goToPage(i) {
            let payload = {
                route: this.$route.name,
                page: i,
            };
            this.$store.dispatch("getData", payload);
        },
    },
    computed: {
        getCurrentPage() {
            return this.$store.state.componentData.pagination;
        },
    },
};
</script>

<style scoped>
li {
    @apply h-10 w-10 flex items-center justify-center bg-white cursor-pointer;
}
</style>