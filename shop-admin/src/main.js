import { createApp } from 'vue'
import App from '@/App.vue'
// 导入Element-Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 导入windi-css
import 'virtual:windi.css'
// 导入router
import { router } from '@/router'
// 注册所有icon图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
// 使用Element-Plus
app.use(ElementPlus) 
// 批量注册Element-Plus全局组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) { 
  app.component(key, component)
}
// 使用router
app.use(router)      
app.mount('#app')
