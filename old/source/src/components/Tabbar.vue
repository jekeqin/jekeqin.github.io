<script setup>
import { onMounted, onUnmounted , getCurrentInstance, ref } from 'vue'
import { useRouter } from 'vue-router'
// https://vant-contrib.gitee.io/vant/#/zh-CN/grid

const router = useRouter();
const ins = getCurrentInstance();
onMounted(()=>{
    window.onresize = async()=>{
        ins.data.width = document.body.offsetWidth;
    }
});
onUnmounted(()=>{
    window.onresize = null;
});

const navTo = (e)=>{
    router.push({ path:e.uri });
    ins.data.drop = { show: false, item: e};
}

const  menus = ref([
    {
        name: '天气',
        uri:'/weather'
    },
    {
        name: '日历',
        uri:'/calendar'
    },
    {
        name: 'MD5',
        uri:'/md5'
    },
    {
        name: 'BASE64',
        uri:'/base64'
    },
    {
        name: '进制转换',
        uri:'/radix'
    },
    {
        name: '字数统计',
        uri:'/counter'
    },
    {
        name: '时间戳',
        uri:'/timer'
    },
    {
        name: '二维码',
        uri:'/qrcode'
    },
    {
        name: '条码',
        uri:'/brcode'
    },
    {
        name: '系统信息',
        uri:'/system'
    }
]);
</script>
<template>
    <div v-if="width>768" class="tabbar">
        <div v-for="item in menus">
            <div @click="navTo(item)">{{item.name}}</div>
        </div>
    </div>
    <div v-else class="dropdown" :class="drop.show ? 'show' : ''">
        <div class="grid" v-if="drop.show">
            <div v-for="item in menus">
                <div @click="navTo(item)">{{item.name}}</div>
            </div>
        </div>
        <div class="nav" @click="doDrop">{{drop.item.name || '菜单'}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            width: document.body.offsetWidth,
            drop: {
                show: false,
                item: {}
            }
        }
    },
    methods:{
        doDrop(){
            this.drop.show = !this.drop.show;
        }
    }
}
</script>

<style scoped>
:deep(.van-dropdown-menu__bar) {
    position: fixed;
    bottom: 0px;
}
:deep(.van-grid) {
    flex-grow: 0;
    flex-shrink: 0;
}
.tabbar{
    position: fixed;
    max-width: calc(100vw - 40px);
    min-width: 50vw;
    left: 50vw;
    bottom: 20px;
    transform: translateX(-50%);
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items:center;
    height: 80px;
    border-radius: 20px;
    padding:0px 30px;
    background-color: rgba(255,255,255,0.2);
    backdrop-filter: blur(5px);
    box-shadow: 0px 0px 5px #fff;
    z-index: 3;
}

.tabbar>div{
    flex-grow: 0;
    text-align: center;
    width: 80px;
    color: #fff;
    font-size: 14px;
    text-shadow: 0px 0px 2px #000;
    cursor: pointer;
}


.dropdown{
    background-color: rgba(0,0,0,0.7);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.dropdown .nav{
    line-height: 44px;
    text-align: center;
    color: #00bd7e;
    font-size: 14px;
    background-color: rgba(255,255,255,0.95);
    text-shadow: 0px 0px 1px #000;
    cursor: pointer;
}
.grid{
    width: 100vw;
    padding: 30px 20px 20px;
    display: grid;
    grid-template-columns: repeat(4, auto);
    border-bottom: 1px solid #ccc;
    background-color: #fff;
    border-radius: 15px 15px 0px 0px;
}
.grid>div{
    height: 80px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 1px #ccc;
    font-size: 13px;
    cursor: pointer;
}
.show{
    position: fixed;
    z-index: 999;
    height: 100vh;
}

</style>