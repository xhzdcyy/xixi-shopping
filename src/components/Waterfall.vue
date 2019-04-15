<template>
    <div class="row">
        <div class="column">
            <img src="../assets/img1.jpg" alt="">
            <img src="../assets/img1.jpg" alt="">
            <img src="../assets/img1.jpg" alt="">
            <img src="../assets/img1.jpg" alt="">
        </div>
        <div class="column">
            <img src="../assets/img2.jpg" alt="">
            <img src="../assets/img2.jpg" alt="">
            <img src="../assets/img2.jpg" alt="">
            <img src="../assets/img2.jpg" alt="">

        </div>
        <div class="column">
            <img src="../assets/img3.jpg" alt="">
            <img src="../assets/img3.jpg" alt="">
            <img src="../assets/img3.jpg" alt="">
            <img src="../assets/img3.jpg" alt="">
        </div>
    </div>
</template>

<style scoped>
    .row{
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
    }
    .column{
        display: flex;
        flex: auto;
        flex-direction: column;

    }
    img{
        width: 380px;
        margin: 10px;
    }
</style>