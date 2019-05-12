<template>
    <div>
        {{orderId}}
    </div>
</template>

<script>
    export default {
        name: "Order",
        data() {
            return {
                orderId: this.$route.params.orderId,
            };
        },
    }
</script>

<style scoped>

</style>