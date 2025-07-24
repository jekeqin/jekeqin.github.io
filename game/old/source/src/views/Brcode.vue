<script setup>
import {code128} from '@/utils/code128.js'
</script>
<template>
    <div class="main">
        <textarea v-model="text"></textarea>
        <button @click="submit">生成</button>
        <div class="box hor">
            <img v-if="img" :src="img">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            text:'',
            img:''
        }
    },
    methods:{
        submit(){
            let o = code128(this.text);
            this.img = o.url;
        }
    }
}
</script>
<style scoped>
    button{
        width: 100% !important;
        height: 30px;
        background-color: #00a491;
        color: #fff;
        border: none;
        box-shadow: 0px 0px 2px #ccc;
        border-radius: 5px;
    }
    img{
        width: 300px;
        height: 100px;
    }
    .box{
        flex-grow: 1;
        align-content: center;
        justify-content: center;
    }
    </style>