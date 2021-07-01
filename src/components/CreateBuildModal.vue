<template>
    <modal
        name="create-new-build"
        :clickToClose="false"
        :focusTrap="true"
        styles="padding: 20px; display: flex; flex-direction: column; height: 100%; border-radius: 15px; background-color: #212327"
    >
        <h1 class="mb-4 text-2xl font-semibold text-center text-ark-green">
            Create New Build
        </h1>
        <form @submit.prevent="addBuildDetails" class="h-full text-white">
            <div class="flex flex-col justify-around h-full">
                <div class="flex flex-col">
                    <input
                        v-model="buildDetails.name"
                        class="input-styling"
                        type="text"
                        placeholder="Build Name ( e.g Spartan High End PC )"
                    />
                </div>
                <div class="flex flex-col">
                    <input
                        v-model="buildDetails.budget"
                        class="input-styling"
                        type="number"
                        placeholder="Set Budget ( e.g 12500500 )"
                    />
                </div>
                <button
                    class="
                        self-center
                        px-3
                        py-2
                        mt-2
                        text-lg
                        font-semibold
                        text-black
                        uppercase
                        w-28
                        bg-ark-green
                        rounded-xl
                        hover:bg-black
                        hover:text-ark-green
                    "
                >
                    CREATE
                </button>
            </div>
        </form>
    </modal>
</template>

<script>
export default {
    name: "CreateBuildModal",
    data() {
        return {
            buildDetails: {
                name: "",
                budget: "",
            },
        };
    },
    props: ["openModal"],
    methods: {
        show() {
            this.$modal.show("create-new-build");
        },
        hide() {
            this.$modal.hide("create-new-build");
        },
        addBuildDetails() {
            const payload = {
                buildId: this.$route.params.id,
                buildName: this.buildDetails.name,
                buildBudget: this.buildDetails.budget,
            };
            if (payload.buildId && payload.buildName && payload.buildBudget) {
                this.$store
                    .dispatch("patchBuildDetails", payload)
                    .then(() => {
                        this.hide();
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        },
    },
    computed: {
        checkUserData() {
            return this.$store.state.updateUserData;
        },
    },
    watch: {
        checkUserData(status) {
            if (status) this.show();
        },
    },
};
</script>

<style>
.v--modal-overlay {
    background: rgba(0, 0, 0, 0.85);
}
.input-styling {
    @apply border-2 rounded-xl bg-ark-gray border-gray-500 h-12 placeholder-gray-400 mt-2 pl-2;
}
</style>