import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/markdown.css';

import JUI from '../packages';
import Preview from './components/Preview.vue';

const app = createApp(App)
app.component('Preview', Preview)
app.use(JUI).use(router).mount('#app')
