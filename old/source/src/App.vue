<script setup>
import { RouterView } from 'vue-router'
import Tabbar from './components/Tabbar.vue'
</script>

<template>

    <Tabbar/>

    <main class="_main_">
        <RouterView/>
    </main>

</template>
<style>
._main_{
    flex-grow: 0;
    flex-shrink: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;
    overflow: hidden;
}

.main{
    flex-grow: 1;
    width: 800px;
    padding:20px;
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    margin-bottom: 120px;
    height: 100%;
}
.main .header{
    padding-bottom: 10px;
}
.main textarea{
    width: 100%;
    padding: 10px;
    font-family: 'consolas';
    max-width: 100%;
    min-width: 100%;
}
.main .hor{
    justify-content: space-between;
}
.main button{
    margin: 10px 0px 15px;
    height: 30px;
}
@media (max-width: 768px) {
    ._main_{
        height: calc(100vh - 44px);
        padding-bottom: 0px;
    }
    .main{
        width: calc(100vw - 40px);
        margin-bottom: 0px;
    }
}
</style>
