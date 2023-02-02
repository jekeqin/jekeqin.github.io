<script setup>
// https://github.com/satazor/js-spark-md5
import SparkMD5 from 'spark-md5'
</script>
<template>
    <div class="main">
        <div class="header">
            选择文件 <input type="file" @change="fileEntry"/>
            或输入内容
        </div>
        <textarea v-model="source" placeholder="请输入要加密的内容"></textarea>
        <button @click="doEncry">编码</button>
        <div class="hor">
            <input type="text" readonly v-model="targetUp" placeholder="MD5 大写" @click="doCopy"/>
            <input type="text" readonly v-model="target" placeholder="MD5 小写" @click="doCopy"/>
        </div>
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
            this.target = SparkMD5.hash(this.source);
            this.targetUp = this.target.toUpperCase();
        },
        fileEntry(e){
            const file = e.target.files[0];
            const reader = new FileReader();
            var spark = new SparkMD5.ArrayBuffer();
            reader.onload = (f)=>{
                spark.append(f.target.result);
                this.target = spark.end();
                this.targetUp = this.target.toUpperCase();
                this.source = 'MD5(' + file.name + '[buffer]' + ')';
            }
            reader.readAsArrayBuffer(file);
        },
        doCopy(e){
            console.log(e.target.value);
            const input = document.createElement('input');
            document.body.appendChild(input);
            input.setAttribute('value', e.target.value);
            input.select();
            document.execCommand('Copy');
            input.remove();
            // navigator.clipboard.writeText(e.target.value);
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
    width: 100%;
}
.main .hor input{
    width: 48%;
    height: 50px;
    text-align: center;
    font-size: 17px;
    font-family: 'consolas';
}
</style>