import { createApp } from 'vue'
import { router } from '@/router'

import ElemenntPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'
import 'nprogress/nprogress.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { store } from '@/store'
import '@/permission'

import App from './App.vue'

const app = createApp(App)
app.use(ElemenntPlus)
app.use(store)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.mount('#app')
