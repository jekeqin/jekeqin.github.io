import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const views = import.meta.globEager('@/views/**/*.vue');

function routes(array){
    const rs = [{}];
    Object.entries(array).forEach(([file,module])=>{
        let name = file.split('/').pop()?.split('.')[0].toLocaleLowerCase();
        if( name=='dashboard' ){
            rs.push({ path:`/`       , name:'home', component:module.default, children:[] });
        }else{
            rs.push({ path:`/${name}`, name:name  , component:module.default, children:[] });
        }
        // console.log(file,module);
    });
    return rs;
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [...routes(views)]
    // routes: [
    //     {
    //         path: '/',
    //         name: 'home',
    //         component: Dashboard
    //     },
    //     {
    //         path: '/weather',
    //         name: 'weather',
    //         component: () => import('../views/Weather.vue')
    //     },
    //     {
    //         path: '/md5',
    //         name: 'md5',
    //         component: () => import('../views/MD5.vue')
    //     },
    //     {
    //         path: '/base64',
    //         name: 'base64',
    //         component: () => import('../views/Base64.vue')
    //     }
    // ]
})

export default router
