<template>
    <div class="container mx-auto bg-red-400 h-navbar">
        <div>
            <h1 class="text-3xl text-center">Transaction History</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserTransactions",
    computed: {
        getTransactions() {
            let dataObj = { data: this.$store.state.userTransactions };
            // return this.$store.state.userTransactions;
            // console.log(dataObj);
            return dataObj;
        },
        // getFields() {
        //     let fields = [
        //         {
        //             name: "createdAt",
        //             title: "Created At",
        //             sortField: "createdAt",
        //         },
        //         {
        //             name: "build._id",
        //             title: "Build ID",
        //         },
        //         {
        //             name: "shipmentStatus",
        //             title: "Shipped",
        //             formatter(value) {
        //                 return value === true ? "Shipped!" : "Packing";
        //             },
        //         },
        //     ];
        //     return fields;
        // },
    },
    beforeMount() {
        // console.log("masuk beforemount");
        this.$store.dispatch("getUserTransactions");
    },
};
</script>

<style>
</style>