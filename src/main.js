import {createApp} from 'vue'
import App from './App.vue'

import config from './config/config'

import axios from 'axios'
import VueAxios from 'vue-axios'

import router from "./plugins/router";

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

import './style.css'

document.title = config.title

const app = createApp(App)

app.use(router, VueAxios, axios);

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

app.mount('#app')
