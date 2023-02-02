<script setup>
</script>
<template>
    <div class="main">
        <textarea v-model="source"></textarea>
        <div class="hor">
            <button @click="fromTo(2)">二转</button>
            <button @click="fromTo(8)">八转</button>
            <button @click="fromTo(10)">十转</button>
            <button @click="fromTo(16)">十六转</button>
        </div>
        <div class="target">
            <div>　二进制：{{target.to2}}</div>
            <div>　八进制：{{target.to8}}</div>
            <div>　十进制：{{target.to10}}</div>
            <div>十六进制：{{target.to16}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            source:'',
            target:{
                to2:'',
                to8:'',
                to10:'',
                to16:''
            }
        }
    },
    methods:{
        fromTo(f, e){
            let array = [];
            this.source.split(' ').forEach(o=>{
                array = array.concat(o.split(','));
            });
            try{
                console.log(array);
                this.target = { to2:'', to8:'', to10:'', to16:''};
                array.forEach(v=>{
                    let n10 = parseInt(v, f);
                    this.target.to2 += (n10.toString(2) + ' ');
                    this.target.to8 += (n10.toString(8) + ' ');
                    this.target.to10 += (n10.toString(10) + ' ');
                    this.target.to16 += (n10.toString(16) + ' ');
                });
            }catch(c){

            }
        }
    }
}
</script>
<style>
.main textarea{
    height: 20vh;
    flex-grow: 0;
    font-size: 1rem;
}
.main button{
    width: 24%;
}
.target>div{
    line-height: 40px;
}
</style>