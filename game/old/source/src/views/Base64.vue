<script setup>
</script>
<template>
    <div class="main">
        <div class="header">
            请输入内容
        </div>
        <textarea v-model="source" placeholder="请输入内容"></textarea>
        <div class="hor">
            <button @click="doEncry">编码</button>
            <button @click="doDencry">解码</button>
        </div>
        
        <textarea v-model="target" readonly></textarea>
    </div>
</template>
<script>
export default {
    data(){
        return {
            source:'',
            target:'',
            targetUp:''
        }
    },
    methods:{
        doEncry(e){
            if( this.source.length==0 )
                return;
            this.target = window.btoa(unescape(encodeURIComponent(this.source)));
        },
        doDencry(){
            if( this.source.length==0 )
                return;
            this.target = decodeURIComponent(escape(window.atob(this.source)));
        },
        doCopy(e){
            console.log(e.target.value);
            const input = document.createElement('input');
            document.body.appendChild(input);
            input.setAttribute('value', e.target.value);
            input.select();
            document.execCommand('Copy');
            input.remove();
        }
    }
}
</script>
<style scoped>
.main textarea{
    flex-grow: 1;
    flex-shrink: 1;
    font-size: 1rem;
}
.main button{
    width: 48%;
}
</style>