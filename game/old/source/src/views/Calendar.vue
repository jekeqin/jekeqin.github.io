<script setup>
import { ref, reactive, getCurrentInstance } from 'vue';

const ins = getCurrentInstance();
const weeks = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
let today = reactive(new Date());
let current = reactive(new Date());
let calc = reactive({day:today.getDate(), less:0 });

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : `0${n}`
}
const fmt = (date, format)=>{
    if( !date )
        return '';
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    if( format=='yyyy-MM' )
        return `${[year, month].map(formatNumber).join('-')}`;
    if( format=='yyyy-MM-dd' )
        return `${[year, month, day].map(formatNumber).join('-')}`;
    if( format=='HH:mm:ss' )
        return `${[hour, minute, second].map(formatNumber).join(':')}`;
    return `${[year, month, day].map(formatNumber).join('-')} ${[hour, minute, second].map(formatNumber).join(':')}`;
}

const dayLess = ()=>{
    const cli = new Date(`${current.getFullYear()}/${current.getMonth()+1}/${formatNumber(calc.day)}`);
    const diff = (cli.getTime() - today.getTime()) / 24 / 3600 / 1000 + 1;
    calc.less = diff.toFixed(0);
    console.log(calc);
}

const monthCalc = ()=>{
    const y = current.getFullYear(), m = current.getMonth()+1;
    calc.weekday = new Date(`${y}/${m}/01`).getDay();
    calc.days = ( [null, 31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m] || ((y % 400 == 0 || y % 4 == 0 && y % 100 != 0) ? 29 : 28) );
    calc.day = Math.min(calc.days, calc.day);
    dayLess();
}

const nextMonth = (n)=>{
    current.setMonth(current.getMonth() + n);
    monthCalc();
}
const nextYear = (n)=>{
    current.setFullYear(current.getFullYear() + n);
    monthCalc();
}

const clickDays = (i)=>{
    calc.day = i;
    monthCalc();
}

monthCalc();

setInterval(() => {
    today.setTime(new Date().getTime());
    ins.proxy.$forceUpdate();
}, 100);
</script>
<template>
    <div class="main">
        <div class="header hor">
            <div class="hor">
                <div @click="nextYear(-1)">&lt;&lt;</div>
                <div @click="nextMonth(-1)">&lt;</div>
            </div>
            <div class="m">{{fmt(current, 'yyyy-MM')}}</div>
            <div class="hor">
                <div @click="nextMonth(1)">&gt;</div>
                <div @click="nextYear(1)">&gt;&gt;</div>
            </div>
        </div>
        <div class="today hor">
            <div>{{fmt(today, 'yyyy-MM-dd')}}</div>
            <div>{{fmt(today, 'HH:mm:ss')}}</div>
            <div>{{calc.less!=0 ? calc.less : ''}}</div>
        </div>
        <div class="whs">
            <div v-for="w in weeks">{{w}}</div>
        </div>
        <div class="days">
            <div v-for="d in (calc.weekday-1)"></div>
            <div v-for="d in calc.days" :class="calc.day==d ? 'cli':'' " @click="clickDays(d)">{{d}}</div>
        </div>
    </div>
</template>
<style>
.header .m{
    font-size: 22px;
}
.header .hor div{
    width: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #00a491;
    color: #fff;
    border-radius: 50%;
    font-size: 14px;
}
.header .hor div+div{
    margin-left: 5px;
}
.today>div{
    width: 30%;
    font-size: 20px;
}
.today>div:nth-child(2){
    text-align: center;
}
.today>div:last-child{
    text-align: right;
}

.whs, .days{
    display: grid;
    grid-template-columns: repeat(7, auto);
    grid-template-rows: repeat(6, auto);
    text-align: center;
}
.whs{
    background-color: #00a491;
    color:#fff;
    line-height: 40px;
    font-size: 14px;
}
.days{
    flex-grow: 1;
    font-size: 32px;
}
.days div{
    box-shadow: 0px 0px 0.5px #000;

    color:#666;
    cursor: pointer;
}
.days .cli{
    color: #fff;
    background-color: #00a491;
}
@media (max-width: 768px) {
    .whs{
        font-size: 12px;
    }
    .days{
        font-size: 20px;
    }
    .today>div{
        font-size: 14px;
    }
}
</style>
