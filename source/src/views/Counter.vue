<template>
    <div class="main">
        <div class="hor">
            <span>长度：{{length}}</span>
            <button @click="change">统计</button>
        </div>
        <textarea v-model="body" @change="change" @input="change"></textarea>
    </div>
</template>
<script>
export default {
    data(){
        return {
            body:'',
            length: 0
        }
    },
    methods:{
        change(e){
            this.length = this.body.length;
        }
    }
}
</script>
<style scoped less>
.main textarea{
    flex-grow: 1;
    flex-shrink: 1;
    font-size: 1rem;
}
.main button{
    width: 100px;
}
</style>
