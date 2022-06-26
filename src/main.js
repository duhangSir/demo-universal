import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/index.scss'
import installIcons from './icons/index'

const app = createApp(App)
installIcons(app)
app.use(store).use(ElementPlus).use(router).mount('#app')
