<template>
    <div class="main">
        <div class="form">
            <div class="hor center">
                <div><input v-model="form.str" maxlength="19"/></div>
                <div>🔁</div>
                <div><input v-model="form.num" maxlength="13"/></div>
            </div>
            <div class="hor btns">
                <div>
                    <div @click="btn('now')">现在</div>
                    <div @click="btn('=0')">=0 分</div>
                </div>
                <div>
                    <div @click="btn('mm', 10)">+10 分</div>
                    <div @click="btn('mm', -10)">-10 分</div>
                </div>
                <div>
                    <div @click="btn('HH', 1)">+1 H</div>
                    <div @click="btn('HH', -1)">-1 H</div>
                </div>
                <div>
                    <div @click="btn('dd', 1)">+1 Day</div>
                    <div @click="btn('dd', -1)">-1 Day</div>
                </div>
                <div>
                    <div @click="btn('MM', 1)">1 Mon</div>
                    <div @click="btn('MM', -1)">-1 Mon</div>
                </div>
            </div>
        </div>
        <div class="cells hor">
            <div>
                <div class="hor">
                    <div>今天</div>
                    <div>星期{{day.now.week}}</div>
                </div>
                <div class="hor">
                    <div>{{day.now.date}}</div>
                    <div>
                        <div>{{day.now.nStart}}</div>
                        <div>{{day.now.nEnd}}</div>
                    </div>
                </div>
            </div>
            <div>
                <div class="hor">
                    <div>昨天</div>
                    <div>星期{{day.before.week}}</div>
                </div>
                <div class="hor">
                    <div>{{day.before.date}}</div>
                    <div>
                        <div>{{day.before.nStart}}</div>
                        <div>{{day.before.nEnd}}</div>
                    </div>
                </div>
            </div>
            <div>
                <div>本周</div>
                <div>
                    <div class="hor">
                        <div>{{week.now.start}}</div>
                        <div>{{week.now.nStart}}</div>
                    </div>
                    <div class="hor">
                        <div>{{week.now.end}}</div>
                        <div>{{week.now.nEnd}}</div>
                    </div>
                </div>
            </div>
            <div>
                <div>上周</div>
                <div>
                    <div class="hor">
                        <div>{{week.before.start}}</div>
                        <div>{{week.before.nStart}}</div>
                    </div>
                    <div class="hor">
                        <div>{{week.before.end}}</div>
                        <div>{{week.before.nEnd}}</div>
                    </div>
                </div>
            </div>
            <div>
                <div>本月</div>
                <div>
                    <div class="hor">
                        <div>{{month.now.start}}</div>
                        <div>{{month.now.nStart}}</div>
                    </div>
                    <div class="hor">
                        <div>{{month.now.end}}</div>
                        <div>{{month.now.nEnd}}</div>
                    </div>
                </div>
            </div>
            <div>
                <div>上月</div>
                <div>
                    <div class="hor">
                        <div>{{month.before.start}}</div>
                        <div>{{month.before.nStart}}</div>
                    </div>
                    <div class="hor">
                        <div>{{month.before.end}}</div>
                        <div>{{month.before.nEnd}}</div>
                    </div>
                </div>
            </div>
            <div>
                <div>本年</div>
                <div>
                    <div class="hor">
                        <div>{{year.now.start}}</div>
                        <div>{{year.now.nStart}}</div>
                    </div>
                    <div class="hor">
                        <div>{{year.now.end}}</div>
                        <div>{{year.now.nEnd}}</div>
                    </div>
                </div>
            </div>
            <div>
                <div>上年</div>
                <div>
                    <div class="hor">
                        <div>{{year.before.start}}</div>
                        <div>{{year.before.nStart}}</div>
                    </div>
                    <div class="hor">
                        <div>{{year.before.end}}</div>
                        <div>{{year.before.nEnd}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form:{
                str:'',
                num:''
            },
            day:{
                now:{

                },
                before:{

                }
            },
            week:{
                now:{

                },
                before:{

                }
            },
            month:{
                now:{

                },
                before:{

                }
            },
            year:{
                now:{

                },
                before:{

                }
            }
        }
    },
    methods:{
        handle(){
            {
                let now = new Date();
                this.day.now.date = this.format(now, 'yyyy-MM-dd');
                this.day.now.week = now.getDay();
                this.day.now.nStart = new Date(this.day.now.date.replace(/-/g, '/')).getTime();
                this.day.now.nEnd = this.day.now.nStart + 86399999;

                now.setDate(now.getDate()-1);
                this.day.before.date = this.format(now, 'yyyy-MM-dd');
                this.day.before.week = now.getDay();
                this.day.before.nStart = new Date(this.day.before.date.replace(/-/g, '/')).getTime();
                this.day.before.nEnd = this.day.before.nStart + 86399999;
            }
            {
                let w = new Date();
                w.setDate(w.getDate() - this.day.now.week + 1);
                this.week.now.start = this.format(w, 'yyyy-MM-dd');
                this.week.now.nStart = new Date(this.week.now.start.replace(/-/g, '/')).getTime();
                w.setDate(w.getDate() + 6);
                this.week.now.end = this.format(w, 'yyyy-MM-dd');
                this.week.now.nEnd = new Date(this.week.now.end.replace(/-/g, '/')).getTime() + 86399999;

                w.setDate(w.getDate()-13);
                this.week.before.start = this.format(w, 'yyyy-MM-dd');
                this.week.before.nStart = new Date(this.week.before.start.replace(/-/g, '/')).getTime();
                w.setDate(w.getDate() + 6);
                this.week.before.end = this.format(w, 'yyyy-MM-dd');
                this.week.before.nEnd = new Date(this.week.before.end.replace(/-/g, '/')).getTime() + 86399999;
            }
            {
                let m = new Date();
                m.setDate(m.getDate() - m.getDate() + 1);
                this.month.now.start = this.format(m, 'yyyy-MM-dd');
                this.month.now.nStart = new Date(this.month.now.start.replace(/-/g, '/')).getTime();
                m.setDate(m.getDate() + this.mDays(m) - 1);
                this.month.now.end = this.format(m, 'yyyy-MM-dd');
                this.month.now.nEnd = new Date(this.month.now.end.replace(/-/g, '/')).getTime() + 86399999;

                m.setDate(m.getDate() - m.getDate());
                this.month.before.end = this.format(m, 'yyyy-MM-dd');
                this.month.before.nEnd = new Date(this.month.before.end.replace(/-/g, '/')).getTime() + 86399999;
                m.setDate(m.getDate() - this.mDays(m) + 1);
                this.month.before.start = this.format(m, 'yyyy-MM-dd');
                this.month.before.nStart = new Date(this.month.before.start.replace(/-/g, '/')).getTime();
            }
            {
                let y = new Date();
                this.year.now.start = y.getFullYear() + '-01-01';
                this.year.now.nStart = new Date(this.year.now.start.replace(/-/g, '/')).getTime();
                y = new Date(this.year.now.nStart);
                y.setFullYear(y.getFullYear() + 1);
                y.setDate(y.getDate() - 1);
                this.year.now.end = this.format(y, 'yyyy-MM-dd');
                this.year.now.nEnd = new Date(this.year.now.end.replace(/-/g, '/')).getTime() + 86399999;

                y = new Date(this.year.now.nStart);
                y.setDate(y.getDate() - 1);
                this.year.before.end = this.format(y, 'yyyy-MM-dd');
                this.year.before.nEnd = new Date(this.year.before.end.replace(/-/g, '/')).getTime() + 86399999;
                this.year.before.start = y.getFullYear() + '-01-01';
                this.year.before.nStart = new Date(this.year.before.start.replace(/-/g, '/')).getTime();
            }
        },
        mDays(date){
            const y = date.getFullYear(), m = date.getMonth()+1;
            return ( [null, 31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m] || ((y % 400 == 0 || y % 4 == 0 && y % 100 != 0) ? 29 : 28) );
        },
        format(date, format){
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            const day = date.getDate()
            const hour = date.getHours()
            const minute = date.getMinutes()
            const second = date.getSeconds()

            if( format=='yyyy-MM' )
                return `${[year, month].map(this.formatNumber).join('-')}`;
            if( format=='yyyy-MM-dd' )
                return `${[year, month, day].map(this.formatNumber).join('-')}`;
            if( format=='HH:mm:ss' )
                return `${[hour, minute, second].map(this.formatNumber).join(':')}`;

            return `${[year, month, day].map(this.formatNumber).join('-')} ${[hour, minute, second].map(this.formatNumber).join(':')}`;
        },
        formatNumber(n){
            n = n.toString()
            return n[1] ? n : `0${n}`
        },
        btn(key, n){
            if(key==='now'){
                let now = new Date();
                this.form = {str:this.format(now), num:now.getTime()}
                return;
            }else if(key==='=0'){
                if( this.form.str ){
                    let t = new Date(this.form.str.replace(/-/g, '/').substring(0,10));
                    this.form = {str:this.format(t), num:t.getTime()}
                }
                return;
            }
            try{
                if( !this.form.num )
                    return;
                let t = new Date(this.form.num);
                if(key==='dd'){
                    t.setDate(t.getDate() + n);
                }else if(key==='HH'){
                    t.setHours(t.getHours() + n);
                }else if(key==='mm'){
                    t.setMinutes(t.getMinutes() + n);
                }else if(key==='MM'){
                    t.setMonth(t.getMonth() + n);
                }
                this.form = {str:this.format(t), num:t.getTime()}
            }catch{
                
            }
        }
    },
    mounted(){
        this.handle();
    }
}
</script>
<style scoped>
.cells{
    flex-wrap: wrap;
}
.cells>div{
    width: 48%;
    height: 90px;
    border-radius: 7px;
    box-shadow: 0px 0px 2px #ccc;
    padding: 10px 10px 0px;
    margin-top: 10px;
}
.form{
    box-shadow: 0px 0px 2px #ccc;
    padding: 10px;
    flex-wrap: wrap;
    justify-content: flex-start;
}
.form input{
    width: 180px;
    height: 35px;
    text-align: center;
    font-size: 16px;
    margin: 5px 0px;
}
.form .center div+div, .form .btns>div+div{
    margin-left: 10px;
}
.form .btns>div div{
    width: 60px;
    line-height: 28px;
    background-color: #00a491;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 5px;
}
.form .btns>div div:last-child{
    background-color: #f77;
}
.form .hor{
    justify-content: center;
}
</style>