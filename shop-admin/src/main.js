import { createApp } from 'vue'
import App from './App.vue'
import ElemenntPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'
import { router } from '@/router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { store } from '@/store'

const app = createApp(App)
app.use(ElemenntPlus)
app.use(store)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.mount('#app')

