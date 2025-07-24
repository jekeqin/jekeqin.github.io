import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {jsonp} from 'vue-jsonp'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.config.globalProperties.$jsonp = jsonp;

app.mount('#app')
