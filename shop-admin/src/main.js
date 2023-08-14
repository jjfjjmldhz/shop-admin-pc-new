import { createApp } from 'vue'
import App from '@/App.vue'
// 导入Element-Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 导入windi-css
import 'virtual:windi.css'
// 导入router
import { router } from '@/router'

const app = createApp(App)
app.use(ElementPlus) // 使用Element-Plus
app.use(router)      // 使用router
app.mount('#app')
