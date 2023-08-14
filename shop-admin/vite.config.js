import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 1.windi-css
import WindiCSS from 'vite-plugin-windicss'
// 2.path核心
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  // 配置路径别名: src => @
  resolve: {
    alias: {
      // 在Node.js中，__dirname是一个全局变量，它表示当前执行脚本所在的目录的绝对路径。
      "@": path.resolve(__dirname, "src")
    }
  },
  // 处理跨域CORS
  server: {
    proxy: {
      "/api": {
        target: 'http://ceshi13.dishait.cn', // baseURL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  // 插件
  plugins: [
    vue(),
    // 2.调用WindiCSS
    WindiCSS()
  ],
})
