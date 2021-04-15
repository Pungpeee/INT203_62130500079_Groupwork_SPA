import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import BaseCard from './components/basecard/BaseCard.vue'
import HoverClick from './components/basecard/HoverClick.vue'
//import HoverClick from './components/basecard/HoverClick.vue'

const app = createApp(App)
app.component('base-card', BaseCard)
app.component('hover-click',HoverClick)
app.use(router).mount('#app')
