<template>
    <div class="main">
        <div class="today hor">
            <div>
                <img :src="'/assets/imgs/' + data.observe.weather_code + '.png'"/>
                <div>{{data.observe.weather}}</div>
            </div>
            <div>
                <div>{{data.observe.degree}}°</div>
                <div>{{data.observe.humidity}}%</div>
                <div>{{data.observe.pressure}}Pa</div>
                <div>{{data.observe.wind_power}}级</div>
            </div>
            <div>
                <div>限行</div>
                <div>{{data.limit.tail_number}}</div>
            </div>
        </div>
        <div class="else hor">
            <div class="h24">
                <div v-for="item in data.forecast_1h" class="hor">
                    <img :src="'/assets/imgs/' + item.weather_code + '.png'"/>
                    <div>{{item.degree}}°</div>
                    <div>
                        <div>{{item.weather}}</div>
                        <div>{{item.wind_direction}}{{item.wind_power}}级</div>
                    </div>                
                </div>
            </div>
            <div class="day7">
                <div v-for="item in data.forecast_24h" class="hor">
                    <div class="hor">
                        <img :src="'/assets/imgs/' + item.day_weather_code + '.png'"/>
                        <div>{{item.max_degree}}°</div>
                        <div>
                            <div>{{item.day_weather}}</div>
                            <div>{{item.day_wind_direction}}{{item.day_wind_power}}级</div>
                        </div>
                    </div>
                    <div class="hor">
                        <img :src="'/assets/imgs/' + item.night_weather_code + '.png'"/>
                        <div>{{item.min_degree}}°</div>
                        <div>
                            <div>{{item.night_weather}}</div>
                            <div>{{item.night_wind_direction}}{{item.night_wind_power}}级</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            addr:{},
            data:{
                alarm:{},
                forecast_1h:[],     // 24小时每小时天气
                forecast_24h:[],    // 7天天气
                index:{},           // 友情提醒
                limit:{},           // 机动车限行
                observe:{},         // 当前天气
                tips:{}             // 个性提示
            }
        }
    },
    methods:{
        queryLocate(){

        },
        queryWeather(){

        }
    },
    mounted(){
        this.$jsonp('https://wis.qq.com/weather/common', {
            source:'pc',
            province:'浙江省',
            city:'杭州市',
            county:'',
            weather_type:'observe|forecast_1h|forecast_24h|index|alarm|tips|limit'
        }).then(res=>{
            this.data = res.data;
            console.log(res.data);
        });
    }
}
</script>
<style scoped>
.main{
    height: calc(100vh - 120px);
    background-color: transparent;
}
.today, .else{
    width: 100%;
    max-width: 800px;
}
.today{
    height: 35%;
    flex-shrink: 0;
    flex-grow: 0;
    margin-bottom: 5px;
}
.else{
    flex-grow: 1;
    overflow: hidden;
}

.else>div{
    width: 28%;
    height: 100%;
    overflow-y: auto;
    border-radius: 10px;
    background-color: rgba(255,255,255,0.8);
}
.h24{
    
    text-align: center;
}
.else img{
    width: 50px;
    height: 50px;
}
.day7{
    flex-grow: 1;
    margin: 0px 5px;
}
</style>