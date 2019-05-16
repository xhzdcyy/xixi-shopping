<template>
    <div class="row">
        <div class="column">
            <router-link to='detail/5cd8384a0237d70069e7566d'>
                <img src="../assets/w1.jpg" alt="">
            </router-link>
            <router-link to='detail/5cd83488c8959c00687a4f80'>
                <img src="../assets/w2.jpg" alt="">
            </router-link>

        </div>
        <div class="column">
            <router-link to='detail/5cd8399d30863b007055ce5b'>
                <img src="../assets/w3.jpg" alt="">
            </router-link>

            <router-link to='/'>
                <img src="../assets/w4.jpg" alt="">
            </router-link>

        </div>
        <div class="column">
            <router-link to='detail/5cd83a5f43e78c0065c5d4cd'>
                <img src="../assets/w6.jpg" alt="">
            </router-link>
            <router-link to='detail/5cd83ae917b54d0075ad8701'>
                <img src="../assets/w5.jpg" alt="">
            </router-link>

        </div>
    </div>
</template>

<style scoped>
    .row {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
    }

    .column {
        display: flex;
        flex: auto;
        flex-direction: column;

    }

    img {
        width: 380px;
        margin: 10px;
    }
</style>