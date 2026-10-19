import { createApp } from 'vue'
import './style.css'
import './core/components/about.css'
import { appInfo } from './core/app-info';
import App from './App.vue'
import router from "./router";

document.title = appInfo.appName;
const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
if (favicon && appInfo.favicon) favicon.href = appInfo.favicon;

createApp(App).use(router).mount('#app')
