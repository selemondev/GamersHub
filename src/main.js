import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./index.css"
const app = createApp(App)
app.config.performance = true;
app.use(router)
app.mount('#app')
