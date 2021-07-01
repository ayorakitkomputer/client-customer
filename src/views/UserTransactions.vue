<template>
    <div class="container mx-auto h-navbar">
        <div>
            <zing-grid
                pager
                filter
                search
                sort
                zebra
                gridlines="both"
                page-size="10"
                page-size-card="10"
                page-size-options="2,4,10,20"
                layout="row"
                role="grid"
                viewport="tablet-portrait"
                theme="ios"
            >
                <zg-caption
                    class="
                        px-10
                        pt-0
                        text-3xl
                        font-semibold
                        leading-tight
                        bg-gray-800
                        pb-7
                        text-ark-green
                    "
                    >Transaction History</zg-caption
                >
                <zg-data :src="transactionData">
                    <!-- <zg-param name="idKey" value="id"></zg-param> -->
                    <zg-param name="headers" :value="access_token"></zg-param>
                    <zg-column index="_id"></zg-column>
                    <zg-column index="build.name"></zg-column>
                    <zg-column index="user.address"></zg-column>
                    <zg-column
                        header="Shipment"
                        type="toggle"
                        type-toggle-options='["Not Shipped", "Shipped"]'
                        index="shipmentStatus"
                    ></zg-column>
                </zg-data>
            </zing-grid>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserTransactions",
    data() {
        return {
            transactionData: [],
            access_token: "",
        };
    },
    created() {
        let token = localStorage.access_token;
        this.access_token = `{"access_token": "${token}"}`;
        if (this.$route.path) {
            // this.transactionData = `http://localhost:3000/history`;
            this.transactionData = `https://ayorakitkomputer.herokuapp.com/history`;
        }
    },
    beforeMount() {
        this.$store.dispatch("getUserTransactions");
    },
};
</script>

<style></style>
