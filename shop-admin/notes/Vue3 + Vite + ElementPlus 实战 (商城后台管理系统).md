# Vue3 + Vite + ElementPlus 实战 (商城后台管理系统)

课程演示地址：http://shopadmin.dishawang.com

用户名： admin

密码：admin

## 项目分析及基本环境配置

### 项目涉及技术

1. Vue3的Setup语法糖
2. Vite构建工具 
3. Vuex状态管理工具 
4. ElementPlus组件库
5. WindiCSS框架
6. Vue-Router
7. VueUse工具库
8. axios网络请求工具
9. etc……



### 项目涉及内容

1. 图表统计渲染
2. 商品多规格
3. 角色权限模块
4. 订单发货导出
5. 图库模块
6. 优惠券模块
7. 用户模块
8. 分销模块
9. etc……



### 项目所需前置知识储备

* JavaScript基础
* Vue.js基础



### 项目所需基础环境

* Node.js 16.0以上版本



### 查询当前的npm版本 

```sh
# 查询当前的npm版本 v: --version
npm -v
```



### 获取当前npm的注册表地址 

```sh
# 获取当前npm的注册表地址 (如果说在国内环境下， 下载较慢建议淘宝镜像源)
npm config get registry
```



###  将当前的镜像源设置为淘宝镜像源 (重要)

```sh
# 将当前的镜像源设置为淘宝镜像源, 可以有效提升npm安装速度
npm config set registry=https://registry.npmmirror.com
```



### 小技巧：方向上键

> 按方向上键可以快速的弹出历史输入的指令



## 项目搭建

### 以vite作为构建工具创建一个名称叫 “shop-admin” 的项目

```sh
# 以vite作为构建工具创建一个名称叫 “shop-admin” 的项目
npm init vite@latest shop-admin -- --template vue
```



### 安装项目的所有依赖 (dependencies)

```sh
# 安装项目的所有依赖 (dependencies)
npm i
```



### 启动本地服务

```sh
# 启动本地服务
npm run dev
```



### 删除.vscode目录

> 为什么要删除它，因为你的仓库是共享的，不同的开发者有不同的编辑器（集成环境），有一个.vsocde目录，可能会让非vscode用户出现报错的情况



## 安装项目所需插件(vscode用户)

#### 01-Vue Language Features (Volar)

![image-20230814140841615](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/86918ffc7c9549e2f4157a676b2a2bf05518a92a.png)

> 主要用途是让vscode对于Vue语法有高亮显示





## 安装及配置ElementPlus

ElementPlus官网：https://element-plus.org/zh-CN/

### 点击进入指南

![image-20230812144508819](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/3d22aae560bba766bbb1d97a68d626b183b99850.png)





### 点击安装

![image-20230814141248214](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/171ff025668c4663936a38e73fc2566b7595a857.png)



### 选择对应的包管理工具指令

```sh
# 选择一个你喜欢的包管理器

# NPM
$ npm install element-plus --save

# Yarn
$ yarn add element-plus

# pnpm
$ pnpm install element-plus

```



### 使用npm安装element-plus

```sh
# 使用npm安装element-plus并保存到package.json文件的依赖项中
npm install element-plus --save
```

### 安装之前

![image-20230812145042263](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/6c38f4b9e668ed3e6f893517cd5a31de90627fea.png)

### 安装之后

![image-20230812145033197](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/bc31312218ff0c6fefaa5714d2fc6ac2fed52543.png)



### 点击快速开始-完整引入用法

![image-20230814203604559](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/7b9255f4663147eb8e3ef2cb28fd96afb797e7e2.png)

> 注意:  该项目没有结合ts, 但图中的`main.ts` 和 `main.js`用法一致



### 在`main.js`中引入两条`import`并使用`ElementPlus`

![image-20230814142705294](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/c053c1f53101d9d097026a411e7d57cebce60079.png)

#### main.js

````js
import { createApp } from 'vue'

// 导入ElementPlus start
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 导入ElementPlus end

import './style.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus) // 使用ElementPlus
app.mount('#app')
````



### 测试ElementPlus是否可以正常使用

#### 点击组件

![image-20230814143140155](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/20f586507d2de5437b5eb538070bd9e9feef22c2.png)



#### **`App.vue图示`**

![image-20230814143331553](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/14b05ab7ce40b2ca32c5f3b0b4100b25d92eb7bd.png)

#### `App.vue`代码

```vue
<script setup>

</script>

<template>
  <div class="app">
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
  </div>
</template>

<style lang="less" scoped></style>
```



### 删除项目初始化后自带的`style.css`

![image-20230814143640789](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/69222c5b99e077745dc4bd3a00bec0567602b9bc.png)



### 删除 `main.js`中style的 import语句

![image-20230814143727620](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/821ea706cb93147ca912c12a3ccf5c6a90a11235.png)



**观察浏览器渲染**

> 出现下图就表明，ElementPlus组件库安装并且配置成功

![image-20230814144028967](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/5a7bcc7c71462021f3f0459e89f7f4e864dce57e.png)



## 安装及配置CSS框架 - windi-css

### 为什么使用windi-css?

> 使用windi-css主要是可以兼容各大浏览器, 开发者只关注写, 无需担心兼容性问题
>
> windi-css采用原子化的技术, 在熟练后可以大幅度提升开发效率

windi-css官网： https://cn.windicss.org/



### 点击了解更多

![image-20230812151741953](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/0e6438d662a3eeae006006f131bf6189bc2f23ac.png)



### 点击安装并选择vite作为构建工具

![image-20230812151848869](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/1e7afc60aea8dbe3d680c9de216d4356b40e3b19.png)

### 安装

![image-20230814144832264](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/799a851fa4ca8ba887b4ce856e5fa0fe56049193.png)

```sh
# 这将安装vite-plugin-windicss和windicss作为开发依赖项，并将它们添加到您的package.json文件中的"devDependencies"部分。
# -D其实是一种语法糖的写法： 完整写法是--save-dev
npm i -D vite-plugin-windicss windicss
```



### 安装之前 

![image-20230812152535402](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/de5a5b841ff93a4e0b8b7de19e3daa972c899d0d.png)

### 安装之后

![image-20230812152542958](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/c2f4a3d597ed2f58705b3acce600ea670548e57f.png)



### 配置配置 vite.config.js

![image-20230814145235524](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/fd5c14fbd3bc9c5fcf2d0b554601af419a8039fb.png)

![image-20230814145527661](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/48dd0fbe2b8a2747515afb918d953c5d32067563.png)

```sh
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS()],
})
```



### 在 `main.js`中引入`windicss`

![image-20230814145704551](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/ced8aef318b49a6c76d387d80c40751b676dbfda.png)

![image-20230814145922548](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/81b6849559ada979d019a5e51d3083218c78d62c.png)



### `main.js代码`

```js
import { createApp } from 'vue'

// 导入ElementPlus start
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入windi css 
import 'virtual:windi.css'

import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus) // 使用ElementPlus
app.mount('#app')
```



### 安装 WindiCSS IntelliSense 插件

> 安装该插件可以让vscode, 对于windicss 代码提示更加友好 

![image-20230814150102277](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/bf910a363b42ac5092e63502fb3406ec73cbd2e5.png)



### 体验windicss - button案例

> windicss使用的是原子化的css处理技术, 代码如下：

```html
 <button class="类名1 类名2 类名3 类名4 类名5 类名n">按钮</button>
```

> 分析后发现，这种写法是很方便，但是对于代码的可读性而言其实不佳，因为在html结构中有了太多的描述性内容，没有很好的结构和样式相分离这种感觉，所以还要抽离这些原子类名，代码如下：

```html
 <button class="btn">按钮</button>
```

```css
.btn {
    @apply 类名1 类名2 类名3 类名4 类名5 类名n;
}
```



### 安装less-loader

```sh
# 将less-loader 安装在开发依赖
npm i less-loader -D
```



### windicss可以搭配原生css一起开发

> 优先级是我们自己在style中的更高

![image-20230812160915383](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/5f0f2ee367e601edda28fb7ca211a73116b161bb.png)

![image-20230812161019749](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/7b9d68c877ec9457046551bff9ac487ab29a09ec.png)

### windicss 示例代码

```vue
<script setup>

</script>

<template>
  <!-- 2.windicss -->
  <!-- rem: root(html) (em) 1rem = html的字号: 16px -->
  <!-- px-4: px: p(padding) x(水平)  4代表的是4倍的0.25 padding: 0 1rem; -->
  <!-- py-4: px: p(padding) y(垂直)  4代表的是4倍的0.25 padding: 1rem 0; -->
  <!-- ring-width(number): 是以2px作为基准单位的 -->
  <!-- ring-8: 8 * 2 = 16px -->
  <!-- 8 * 2px -->
  <!-- 4 * 2px -->
  <div class="btn">
    <button class="btn-attribute">
      按钮
    </button>
  </div>
</template>

<style scoped>
.btn {
  margin: 100px auto;
  width: 300px;
  height: 300px;
}

.btn-attribute {
  /* 将抽离后的原子化类名应用起来 */
  @apply bg-purple-500 text-gray-50 px-4 py-4 transition-all duration-300 hover:(bg-purple-100) focus: (ring-8 ring-purple-900) rounded-full;
}
</style>
```



## 配置文件系统的路径别名

### 为什么要配置路径别名?

> 我们这一个项目基本99%的代码都是围绕src这一个目录去进行的, 那我们有时去引入这一个文件的一个路径就会变得比较麻烦。
>
> 所以呢，我们有必要给这个src去指定一个别名，方便我们后期去引入其它个文件。

### vite.config.js

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

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
  plugins: [
    vue(),
    // 使用windi-css
    WindiCSS()
  ],
}) 
```



## 新建 `jsconfig.json`

> 该文件可以让vscode对`@`别名识别更加友好

![image-20230814163942480](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/6aaa956550326de50fddf6bafdc9d5a9734f08da.png)

### jsconfig.json

````jso
{
  "compilerOptions": {
    // "target": "es5",
    "module": "esnext",
    "baseUrl": "./",
    "moduleResolution": "node",
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  }
}
````



## 新建Index.vue (后台首页 )

> 后台首页目录结构: src/pages/Index.vue 

![image-20230814162216563](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/ff2e0a1eb179c5acfda9b9271eba167f3d273338.png)

### Index.vue

```vue
<script setup>

</script>

<template>
  <div class="index">
    <h2>index组件</h2>
  </div>
</template>

<style lang="less" scoped></style>
```



## Vue-Router的配置及使用

vue-router官网: https://router.vuejs.org/zh/

> 注意事项： vue3建议搭配v4.x版本的vue-router 

![image-20230812170403829](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/2cedf1d4b8ec362dcc2ebc0d4b13ee3f6e3faf0d.png)



### 点击入门 

![image-20230812170523200](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/1a3d52269131a17c74d1487954ca4e845f5646bb.png)



### 点击安装

![image-20230812170617114](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/f00bcce0d62fa720e0404903f7a1843e61daa2cd.png)



### 选择喜欢的包管理器安装 Vue-router

```sh
# npm
# @4:指定4.x的版本
npm i vue-router@4

# yarn
yarn add vue-router@4
```



### 安装后在`package.json`中查看对应的版本

![image-20230814162634407](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/5c8a9b35b42a56e4c94ea8f9af137a38ccbd7bf4.png)



## 新建router/index.js (路由映射关系表 )

> vue-router目录结构: src/router/index.js

![image-20230814163130039](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/59cad8f8f7ab585956f38b44f294fb364eba640d.png)

```js
import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // 路由重定向
    {
      path: '/',
      redirect: '/index'
    },
    // 后台首页(Index.vue)
    {
      name: 'index',
      path: '/index',
      component: () => import('../pages/Index.vue')
    }
  ]
})
```



### 在`main.js`导入vue-router/使用vue-router

![image-20230814163644426](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/dcfcef6f7cfbe24fe1def89ddbf2a4881cf0f678.png)



## 新建About.vue (关于页面)

![image-20230814164335113](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/54bf23178b5b0df68b2ed02142a843973956062e.png)

### About.vue

```vue
<script setup>

</script>

<template>
  <div class="about">
    <h2>about组件</h2>
  </div>
</template>

<style lang="less" scoped></style>
```



## 新建NotFound.vue (404页面)

![image-20230814164548421](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/7c6efcadbb1feb76193dbc729da75f7eb532f566.png)

### NotFound.vue

```vue
<script setup>

</script>

<template>
  <div class="not-found">
    <h2>not-found组件</h2>
  </div>
</template>

<style lang="less" scoped></style>
```



## 更新router/index.js (路由映射关系表)

![image-20230814165103314](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/dc91122eb911e68db3ec9eb630b8868370457949.png)

### index.js

```js
import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // 路由重定向
    {
      path: '/',
      redirect: '/index'
    },
    // 后台首页(Index.vue)
    {
      name: 'index',
      path: '/index',
      component: () => import('@/pages/Index.vue')
    },
    // 关于页面(About.vue)
    {
      name: 'about',
      path: '/about',
      component: () => import('@/pages/About.vue')
    },
    // 404页面(NotFound.vue)
    {
      name: 'not-found',
      path: '/:pathMatch(.*)',
      component: () => import('@/pages/NotFound.vue')
    }
  ]
})
```



## 更新App.vue (根组件)

![image-20230814180050765](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/3d3bd21a548955c416a25f898dea48ca89faee00.png)



### App.vue

```vue
<script setup>

</script>

<template>
  <div class="app">
    <!-- router-view: 占位 -->
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped></style>
```



## 美化NotFound.vue(404页面)

![image-20230814211409736](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/7216ee6515bce47b59e715bc8a94cace35c6a952.png)

### 404页面美化前代码

![image-20230814172933063](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/40a2eb2a608c0e425b245ec439031211a0434ed2.png)

### 404页面美化后代码

![image-20230814174112203](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/395b4ba57fdb58e86389524ebfa18bbd9e3f0cab.png)



### NotFound.vue

```vue
<script setup>
import { useRoute } from 'vue-router'
// route: 有参数(params等...)
const route = useRoute()
// 错误提示
const errorTip = `您输入的路径: ${route.params.pathMatch} 不存在, 请输入正确的路径`
</script>

<template>
  <div class="not-found">
    <el-result icon="warning" title="404提示" :sub-title="errorTip">
      <template #extra>
        <!-- 注意: $router只能在template模板中使用 -->
        <!-- $router是“路由实例对象”，它包含了路由的跳转、监听、前进、后退等方法，主要用于控制路由的跳转。 -->
        <!-- push('/'): 回到首页 -->
        <el-button type="primary" @click="$router.push('/')">回到首页</el-button>
      </template>   
    </el-result>
  </div>
</template>

<style lang="less" scoped></style>
```



## Login.vue 的开发 (登录页面)

### 创建登录页面的基本结构

![image-20230814174240878](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/aa033f19ffb09bacbfd580bb37c545c1691e06d6.png)



### Login.vue

```vue
<script setup>

</script>

<template>
  <div class="login">
    <h2>login组件</h2>
  </div>
</template>

<style lang="less" scoped></style>
```



### 配置登录页面的路由映射关系表

#### index.js

```js
// 导入vue-router核心
import { createRouter, createWebHashHistory } from 'vue-router'

// 导出router
export const router = createRouter({
  // 指定历史记录模式: hash模式
  history: createWebHashHistory(),
  // 在routes数组中配置路由映射关系表: path 和 component 的关系
  routes: [
    // 配置路由的重定向
    {
      path: '/',
      redirect: '/index'
    },
    // 404页面 (NotFound.vue)
    {
      name: 'not-found',
      path: '/:pathMatch(.*)',
      component: () => import('@/pages/NotFound.vue')
    },
    // 后台首页 (Index.vue)
    {
      name: 'index',
      path: '/index',
      component: () => import('@/pages/Index.vue')
    },
    // 关于页面 (About.vue)
    {
      name: 'about',
      path: '/about',
      component: () => import('@/pages/About.vue')
    },
    // 登录页面 (Login.vue)
    {
      name: 'login',
      path: '/login',
      component: () => import('@/pages/Login.vue')
    }
  ]
})
```



### Layout布局美化Login.vue (登录页面)

> layout布局, 会将整个屏幕横向瓜分成24(栏)列, 如屏幕宽度为1920px时, 则一栏(列)占(80px)

![image-20230814212857476](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/058c7d755b9547c20810537a65a66348a1371c31.png)



### 更新Login.vue

![image-20230814180557772](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/86d89c3c655a73f75f7a13d21be8b69862a337a7.png)

```vue
<script setup>

</script>

<template>
  <div class="login">
    <!-- 因为是左右布局: 所以只保留两列(el-col) -->
    <el-row class="min-h-screen">
      <!-- 左列 -->
      <el-col 
        class="left-col bg-indigo-500"
        :span="16"
      >
        左边
      </el-col>
    <!-- 右列 -->
      <el-col 
        class="bg-light-50"
        :span="8">
        右边
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped></style>
```



### 使用ElementPlus中的form典型表单

![image-20230814183504357](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/cacd7d6686fdc050007cee03c409e77e94e2b3e4.png)

```vue
  <!-- form start -->
        <el-form :model="form" class="w-[15.625rem]">
          <el-form-item>
            <el-input v-model="form.username" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.password" placeholder="请输入密码" />
          </el-form-item>

          <el-form-item>
            <el-button round color="#626aef" class="w-[15.625rem]" type="primary" @click="onSubmit">
              登 录
            </el-button>
          </el-form-item>
        </el-form>
         <!-- form end -->
```



### 完整的Login.vue

**Login.vue**

```vue
<script setup>
import { reactive } from 'vue'
// ref 独立的数据
// reactive: 关联的数据 (username, password)
const form = reactive({
  username: '',
  password: ''
})



const onSubmit = () => {
  console.log('submit!')
}

</script>

<template>
  <div class="login">
    <el-row class="min-h-screen">
      <!-- 左栏 -->
      <el-col class="left-col" :span="16">
        <div>
          <div class="welcome">欢迎光临</div>
          <div class="desc">此站点是《vue3 + vite实战商城后台开发》视频课程的演示地址</div>
        </div>
      </el-col>

      <!-- 右栏 -->
      <el-col class="right-col" :span="8">
        <h2 class="title">欢迎回来</h2>
        <div class="account-password-login">
          <span class="w-[4rem] h-[1px] bg-gray-200"></span>
          <span>账号密码登录</span>
          <span class="w-[4rem] h-[1px] bg-gray-200"></span>
        </div>

        <!-- form start -->
        <el-form :model="form" class="w-[15.625rem]">
          <el-form-item>
            <el-input v-model="form.username" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.password" placeholder="请输入密码" />
          </el-form-item>

          <el-form-item>
            <el-button round color="#626aef" class="w-[15.625rem]" type="primary" @click="onSubmit">
              登 录
            </el-button>
          </el-form-item>
        </el-form>
        <!-- form end -->

      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
// 左栏
.left-col {
  @apply flex justify-center items-center bg-indigo-500;

  .welcome {
    @apply text-light-50 font-bold text-5xl mb-4;
  }

  .desc {
    @apply text-gray-200 text-sm;
  }

}


// 右栏
.right-col {
  @apply flex justify-center items-center bg-light-50 flex-col;

  .title {
    @apply font-bold text-3xl text-gray-800;
  }

  .account-password-login {
    @apply flex items-center justify-center my-5 space-x-2 text-gray-300;
  }
}
</style>
```



## 使用ElementPlus 设置icon图标

![image-20230814225328338](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/3ae770468099adbe051d3a1c5f6b8c6c8c899b22.png)

### 使用你习惯的包管理器来安装

```sh
# 选择一个你喜欢的包管理器

# NPM
npm install @element-plus/icons-vue
# Yarn
yarn add @element-plus/icons-vue
# pnpm
pnpm install @element-plus/icons-vue
```

> npm install @element-plus/icons-vue 指令详细解析

```sh
# npm install @element-plus/icons-vue 指令详细解析
要安装 @element-plus/icons-vue 的中文版本，您需要首先确保您的项目中已经安装了 Element Plus 和 Node.js。

然后，您可以按照以下步骤进行安装：

打开终端或命令行界面，并导航到您的项目目录。

运行以下命令安装 @element-plus/icons-vue 的中文包：

shell
npm install element-plus/icons-vue@element-plus-china
这将安装 @element-plus/icons-vue 的最新版本，并指定使用 element-plus-china 分支。
3. 安装完成后，您可以在您的 Vue 项目中使用 @element-plus/icons-vue 中文包了。

请注意，@element-plus/icons-vue 中文包是针对 Element Plus 的中文定制版本，因此它可能包含一些特定的样式和图标。如果您需要使用原始的 @element-plus/icons-vue 包，请删除您之前安装的中文包，并使用以下命令重新安装：

shell
npm install @element-plus/icons-vue
希望这可以帮助到您！如有其他问题，请随时提问。
```



### 点击form表单中的input(使用插槽)

![image-20230812223420358](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/e72f679ac2f3420bae304a7cd573180a9b3586a0.png)

![image-20230812223616792](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/e621c5a04e2c0bb8f21d276341b82095c1b8e993.png)

**具名插槽 #prefix**

```vue
<template #prefix>
	<el-icon class="el-input__icon"><search /></el-icon>
</template>
```

### 注意需要配合 script逻辑代码

```js
import { Search } from '@element-plus/icons-vue'
```



### 默认是放大镜， 如果需要修改则需要再次回到 icon图标

![image-20230812224429317](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/ccaa75ab83930120233b73f28c1d5885a4e0d610.png)

### 最终我们更新后的Login.vue （加上了User和Lock两个内置组件）

```vvue
<script setup>
import { reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
// ref 独立的数据
// reactive: 关联的数据 (username, password)
const form = reactive({
  username: '',
  password: ''
})




const onSubmit = () => {
  console.log('submit!')
}

</script>

<template>
  <div class="login">
    <el-row class="min-h-screen">
      <!-- 左栏 -->
      <el-col class="left-col" :span="16">
        <div>
          <div class="welcome">欢迎光临</div>
          <div class="desc">此站点是《vue3 + vite实战商城后台开发》视频课程的演示地址</div>
        </div>
      </el-col>

      <!-- 右栏 -->
      <el-col class="right-col" :span="8">
        <h2 class="title">欢迎回来</h2>
        <div class="account-password-login">
          <span class="w-[4rem] h-[1px] bg-gray-200"></span>
          <span>账号密码登录</span>
          <span class="w-[4rem] h-[1px] bg-gray-200"></span>
        </div>

        <!-- form start -->
        <el-form :model="form" class="w-[15.625rem]">
          <el-form-item>
            <el-input v-model="form.username" placeholder="请输入用户名">
              <template #prefix>
                <el-icon><User /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.password" placeholder="请输入密码">
              <template #prefix>
                <el-icon><Lock /></el-icon>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-button round color="#626aef" class="w-[15.625rem]" type="primary" @click="onSubmit">
              登 录
            </el-button>
          </el-form-item>
        </el-form>
        <!-- form end -->

      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
// 左栏(列)
.left-col {
  @apply flex justify-center items-center bg-indigo-500;

  .welcome {
    @apply text-light-50 font-bold text-5xl mb-4;
  }

  .desc {
    @apply text-gray-200 text-sm;
  }

}


// 右栏(列)
.right-col {
  @apply flex justify-center items-center bg-light-50 flex-col;

  .title {
    @apply font-bold text-3xl text-gray-800;
  }

  .account-password-login {
    @apply flex items-center justify-center my-5 space-x-2 text-gray-300;
  }
}
</style>
```



### 注册所有icon图标

> 因为按需引入组件的话， 每次都要改动import中的组件， 有点麻烦， 所以为了减少心智负担， 建议注册所有 icon图标

![image-20230814231706539](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/1db4cc8040277936bf99463cc2e59cb0862ab634.png)

![image-20230814232022388](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/18f69bdbbd0fa4ba7e3574296bcb2ede06cbedf0.png)

### 在main.js中配置相关代码 (注册icon图标)

**man.js**

```js
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
```



### 加上小眼睛

> 给ElmentPlus中的密码框加上小眼睛 可以设置show-password属性

![image-20230814232213404](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/906f50b4a07cf28569fcd860e28394a17580a215.png)



![image-20230813133004038](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/0f48ddf07afc845bc32afb6ec1e68fc57553ac01.png)

## 表单校验功能实现

![image-20230813133202814](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/77950f42ca659d9cb76e7c195329c8e7be8c523f.png)

![image-20230813133140766](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/3475495e52bb4e42209635d70d7d42cfa4a50a40.png)

### 在 script 中写rules

```vue
// 表单校验逻辑
const rules = {
  // 到form-item加prop
  // 1.必填: required: true 
  // 2.提示信息: message: '请输入用户名'
  // 3.触发条件: trigger: 'blur' 
  // 4.约束字符长度: min || max
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 5, message: '请输入2~5字的用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
}
```



### 在template中写rules

```vue
<script setup>
import { reactive } from 'vue'

// account的响应式数据
const form = reactive({
  username: '',
  password: ''
})

// 登录按钮的点击逻辑
const onSubmit = () => {
  console.log('submit')
}

// 表单校验逻辑
// 将rules对象写在form元素上, 如<el-form :rules="fules"></el-form>
const rules = {
  // 1.必填: required: true 
  // 2.提示信息: message: '请输入用户名'
  // 3.触发条件: trigger: 'blur' 
  // 4.约束字符长度: min || max

  // 5.将具体的规则写在form-item元素上
  // 如<el-form-item prop="username"><el-form-item>
  // 如<el-form-item prop="password"><el-form-item>
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 5, message: '请输入2~5字的用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
}
</script>

<template>
  <div class="login">
     <!-- 因为是左右布局: 所以只保留两列(el-col) -->
     <!-- el-row: 不要抽离, 也不要写过多样式 -->
    <el-row class="min-h-screen">
      <!-- 左列 -->
      <el-col class="left-col" :span="16">
        <!-- 加上一个div可以让外层flex布局, 精确的操控一个整体 -->
        <div>
          <h2 class="title">欢迎光临</h2>
          <div class="sub-title">此站点是《Vue3实战商城后台管理系统开发》视频课程的演示地址</div>
        </div>
      </el-col>
      <!-- 右列 -->
      <el-col class="right-col" :span="8">
        <h2 class="title">欢迎回来</h2>
        <div class="account">
          <span class="line"></span>
          <span>账号密码登录</span>
          <span class="line"></span>
        </div> 

        <!-- form表单 start -->
        <el-form 
          class="form w-[250px]"
          :model="form" 
          :rules="rules"
        >
          <!-- 文本框 -->
          <el-form-item prop="username">
            <el-input 
              v-model="form.username"
              placeholder="请输入用户名"
            >
            <!-- 嵌套插槽(user) -->
              <template #prefix>
                <el-icon><User /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input 
              v-model="form.password"
              placeholder="请输入密码"
              
              show-password 
            >
              <!-- 嵌套插槽(lock) -->
              <template #prefix>
                <el-icon><Lock /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <!-- 登录按钮 -->
          <el-form-item>
            <el-button 
              class="btn w-[250px]" 
              type="primary" 
              @click="onSubmit"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
        <!-- form表单 end -->
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
  // 左列
  .left-col {
    @apply
      bg-indigo-500
      flex
      justify-center
      items-center
      text-light-50;

      // 主标题
      .title {
        @apply
          text-5xl
          font-bold
          mb-6;
      }

      // 子标题
      .sub-title {
        @apply
          text-sm;
      }
  }
  // 右列
  .right-col {
    @apply
      bg-light-50
      flex
      flex-col
      justify-center
      items-center;

      // 主标题
      .title {
        @apply
          text-3xl
          font-bold;
      }
      // account账号
      .account {
        @apply
          flex
          space-x-2
          items-center
          text-gray-300
          mt-5
          mb-8;

          // 线
          .line {
            @apply
              w-16
              h-px
              bg-gray-300;
          }
      }
      // form
      .form {
        // 登录按钮
        .btn {
          background-color: #626aef;
          @apply
            rounded-full;
        }
      }
  }
</style>
```



### 更新后的Login.vue (完成的表单校验代码) 

```vue
<script setup>
import { reactive } from 'vue'

// account的响应式数据
const form = reactive({
  username: '',
  password: ''
})

// 登录按钮的点击逻辑
const onSubmit = () => {
  console.log('submit')
}

// 表单校验逻辑
const rules = {
  // 到form-item加prop
  // 1.必填: required: true 
  // 2.提示信息: message: '请输入用户名'
  // 3.触发条件: trigger: 'blur' 
  // 4.约束字符长度: min || max
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 5, message: '请输入2~5字的用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
}
</script>

<template>
  <div class="login">
     <!-- 因为是左右布局: 所以只保留两列(el-col) -->
     <!-- el-row: 不要抽离, 也不要写过多样式 -->
    <el-row class="min-h-screen">
      <!-- 左列 -->
      <el-col class="left-col" :span="16">
        <!-- 加上一个div可以让外层flex布局, 精确的操控一个整体 -->
        <div>
          <h2 class="title">欢迎光临</h2>
          <div class="sub-title">此站点是《Vue3实战商城后台管理系统开发》视频课程的演示地址</div>
        </div>
      </el-col>
      <!-- 右列 -->
      <el-col class="right-col" :span="8">
        <h2 class="title">欢迎回来</h2>
        <div class="account">
          <span class="line"></span>
          <span>账号密码登录</span>
          <span class="line"></span>
        </div> 

        <!-- form表单 start -->
        <el-form 
          class="form w-[250px]"
          :model="form" 
          :rules="rules"
        >
          <!-- 文本框 -->
          <el-form-item prop="username">
            <el-input 
              v-model="form.username"
              placeholder="请输入用户名"
            >
            <!-- 嵌套插槽(user) -->
              <template #prefix>
                <el-icon><User /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input 
              v-model="form.password"
              placeholder="请输入密码"
              
              show-password 
            >
              <!-- 嵌套插槽(lock) -->
              <template #prefix>
                <el-icon><Lock /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <!-- 登录按钮 -->
          <el-form-item>
            <el-button 
              class="btn w-[250px]" 
              type="primary" 
              @click="onSubmit"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
        <!-- form表单 end -->
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
  // 左列
  .left-col {
    @apply
      bg-indigo-500
      flex
      justify-center
      items-center
      text-light-50;

      // 主标题
      .title {
        @apply
          text-5xl
          font-bold
          mb-6;
      }

      // 子标题
      .sub-title {
        @apply
          text-sm;
      }
  }
  // 右列
  .right-col {
    @apply
      bg-light-50
      flex
      flex-col
      justify-center
      items-center;

      // 主标题
      .title {
        @apply
          text-3xl
          font-bold;
      }
      // account账号
      .account {
        @apply
          flex
          space-x-2
          items-center
          text-gray-300
          mt-5
          mb-8;

          // 线
          .line {
            @apply
              w-16
              h-px
              bg-gray-300;
          }
      }
      // form
      .form {
        // 登录按钮
        .btn {
          background-color: #626aef;
          @apply
            rounded-full;
        }
      }
  }
</style>
```



## Vue3+Vite实战后台api接口文档

文档地址: http://dishaxy.dishait.cn/shopadminapi/



## 安装 axios 网络请求库

中文非官网: http://www.axios-js.com/zh-cn/

### 点击进入文档

![image-20230813134540665](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/98b51d2ad4b376707acb08de1c9495edc13adfd0.png)



### 搜索安装

![image-20230814234417981](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/f9a6c750255f8e1d8491d5eec2d3df1dd7e763fb.png)

```sh
# 安装 axios 网络请求库
npm i axios
```



### 搜索定位到创建实例

![image-20230813134642135](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/d9482311e22c8edceee48f0ec2debec3ccea1286.png)



### 在根目录上创建了 `axios.js`

![image-20230813140600789](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/9527d2addf488de216268470fdb5231da1fd7783.png)



### 在接口文档中获取baseURL

![image-20230814234955830](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/b44542b3d050de60819a277b4a2684151afb3301.png)

### 新建axios.js

```js
// 导入axios核心
import axios from 'axios'

// 创建实例
export const service = axios.create({
  // baseURL: http://ceshi13.dishait.cn
  baseURL: 'http://ceshi13.dishait.cn'
})
```



### 请求方式: post

![image-20230814235716846](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/5300430fb141b169463090e9d0a561e818852394.png)



### 新建manage.js

> 目录结构: 在src/api/manage.js

![image-20230814235405087](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/4a7611952622ffe41fc8736bdd6e0b20ea894f16.png)

```js
// 从src/axios.js导入自己封装的service
import { service } from '@/axios.js'

// 封装login方法
export function login(username, password) {
  // 返回service
  // 请求方式: post
  // 格式: post(url, { 参数1, 参数2 })
  return service.post('admin/login', {
    username,
    password
  })
}
```



### 在`Login.vue`中发起网络请求

![image-20230815000108080](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/e855de8ec25ee107bd9405220bc451aa1556f908.png)

### 更新Login.vue

```vue
<script setup>
import { reactive, ref } from 'vue'
import { login } from '@/api/manager.js'

// ref 独立的数据
// reactive: 关联的数据 (username, password)
const form = reactive({
  username: '',
  password: ''
})

// 设置规则: 
const rules = {
  // 因为可以验证多个, 所以数据类型可以定义为数组
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    { max: 5, message: '请输入2~5的字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
  ]
}

// 登录按钮的点击逻辑 start
// 定义一下form表单中的ref数据
const formRef = ref(null)
const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (!valid) {
      return false
    }
    login(form.username, form.password)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  })
}
// 登录按钮的点击逻辑 end
</script>
```



## 处理跨域问题 (在开发环境中解决)

![image-20230815000720379](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/7a94f3f648b677245ce5e7b81af0df0ae179f6fa.png)



### 进入 vite官网

官网: https://vitejs.dev/

### 点击config

![image-20230815000854018](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/ad57a4dd3cb564e159d11185fb3283a69d73273a.png)

### 找到Server Options -> server.proxy

![image-20230815001050817](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/ff08041c592d9564d515c9da0a5ebb728d3806d5.png)

### 找到 Example -> with options

![image-20230815001242041](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/9af19751c07b012d395839806c0316af5c035786.png)



### 配置vite.config.js

```js
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
```

### 将自己封装的实例中的baseURL替换为'/api'

### 更新axios.js

```js
// 导入axios核心
import axios from 'axios'

// 创建实例
export const service = axios.create({
  // baseURL: http://ceshi13.dishait.cn
  // 将原来的baseURL替换为'/api'
  baseURL: '/api'
})
```



### 点击测试跨域是否处理成功

![image-20230815001659057](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/e7137bccf0b29b764413875312eaa177175e4bd6.png)

### 以下是chatGpt对象Proxy server(代理服务器的解释)

![image-20230813153003865](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/b265bd017bf85e8173c6c85227649bee1263d7e9.png)

## 更新Login.vue (优化请求请求失败(err)信息的输出)

### 第一步: 给form元素加上ref, 如下图

![image-20230815002319308](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/ed919c77c9d253d0cc32dcf4846dc29286c2049e.png)

### 第二步: 定义响应式数据 

![image-20230815002827933](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/fb5a87cb74981851e31acb7157baa7f45d17be63.png)

![image-20230815002758691](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/2a04f3d10288cfd54a9ab0ac24e7bcb6ed64150e.png)

![image-20230815003146676](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/d57e800f3fda126911d06c5ae78782fc3f1823eb.png)

### 测试优化后的控制台error输出

![image-20230815003310033](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/3b6ba666bc6802fc4173b4c902d3367b6f728f8c.png)



## 使用ElementPlus美化 Notification Error通知

![image-20230815003646977](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/e026e1b3ce516b26f1dcbc6b5c604418ff76eb94.png)



### 选择open4

![image-20230815003826436](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/0f4cc680c4fbfc55f3e1ecf4a814df650d1d87fc.png)

### duration弹窗持续时间 (默认4500ms)

![image-20230815004312547](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/4763bce2a815f39eed7dbb8075fa949d5b63b0b4.png)

### 修改后的通知 (错误弹窗)

```vue
 // 错误弹窗
      ElNotification({
        message: err.response.data.msg || '请求失败',
        type: 'error',
        // 默认弹窗持续时间是4500ms
        duration: 3000
      })
```



### 查看弹窗效果

![image-20230813145414943](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/d5b67ac19a58f8ca367eea9854f20c5396deb9da.png)



## token

### 什么是token?

```sh
Token在计算机科学和网络安全领域中，是一种用于身份验证和授权的令牌。它可以是一个字符串、数字或其他形式的数据。Token的主要作用是在用户进行身份验证时生成一个唯一的标识符，并在用户进行授权访问时进行验证。它可以防止未经授权的用户访问受限资源，确保只有经过身份验证和授权的用户才能使用特定的服务或功能。

在Web应用程序中，Token通常用于实现用户登录和会话管理。当用户成功登录后，系统会为其生成一个Token，并将其存储在用户的设备上（如浏览器的Cookie或本地存储）。每次用户访问需要身份验证的页面时，系统会检查Token的有效性，并根据Token中的信息判断用户是否有权访问该页面。

Token还可以用于实现单点登录（SSO）功能。通过使用Token，用户只需要进行一次身份验证，就可以在多个应用程序或服务中保持登录状态，而无需重复输入用户名和密码。此外，Token还可以用于授权访问第三方应用程序或API。当用户授权第三方应用程序访问其个人数据时，系统会生成一个Token，并将其提供给第三方应用程序。第三方应用程序可以使用该Token来访问用户的数据，同时系统可以根据Token的权限设置来限制第三方应用程序的访问范围。

总之，Token是一种用于身份验证和授权的令牌，可以确保只有经过身份验证和授权的用户才能访问特定的资源或服务。通过使用Token，可以提高系统的安全性和用户体验，并实现单点登录和授权访问的功能。
```



### 为什么要将token存储在cookie上?

```sh
将Token存储在cookie上是一种常见的做法，主要有以下原因：

1. 方便性：将Token存储在cookie中可以避免每次请求都通过服务器传递Token，从而减轻服务器的负担。
2. 安全性：虽然cookie容易受到CSRF（跨站请求伪造）攻击，但在正确的设置下，例如设置httpOnly和Secure属性，可以有效地防止Token被恶意读取或篡改。同时，使用加密和签名等安全措施也可以进一步提高Token的安全性。
3. 会话管理：将Token存储在cookie中可以方便地实现会话管理，即保持用户的登录状态。即使在浏览器关闭后，cookie仍然存在，因此用户可以保持登录状态。

需要注意的是，使用cookie存储Token时需要注意以下几点：

1. 设置httpOnly属性：该属性可以防止Token被JavaScript读取，从而防止CSRF攻击。
2. 设置Secure属性：该属性可以保证Token只在HTTPS下传输，进一步提高安全性。
3. 防止CSRF攻击：在使用cookie存储Token时，需要采取措施防止CSRF攻击。例如，在用户登录后，服务器可以生成一个新的Token并将其存储在cookie中，同时将旧的Token删除。这样，即使攻击者盗用了用户的Token，也无法进行有效的攻击。

总之，将Token存储在cookie上可以提高方便性、安全性和会话管理能力，但需要注意安全设置和防止CSRF攻击等风险。
```



## 使用VueUse中的cookie来快速实现(存储/读取/删除)

```sh
使用VueUse是把原本不支持响应式的一些js的一些API变成支持响应式的，大大提高我们的开发效率.

以下是gpt的回答:
使用VueUse的好处有以下几点：

1. 方便引入和使用插件：VueUse允许我们通过调用Vue.use函数并传入要使用的插件作为参数，方便地引入和使用插件。这使得在Vue应用中扩展其功能和特性变得简单。
2. 支持链式调用：VueUse支持链式调用，可以一次性安装多个插件。
3. 提升访问速度和用户体验：VueUse可以使页面局部刷新，不用每次跳转页面都要请求所有数据和DOM，这大大加快了访问速度，提升了用户体验。
4. 支持单页面应用：VueUse是单页面应用，使页面局部刷新，不用每次跳转页面都要请求所有数据和DOM，这样大大加快了访问速度和提升用户体验。
5. 节省开发时间：使用VueUse的第三方UI组件库可以节省很多开发时间，从而提升开发效率。

综上所述，VueUse能够方便地引入和使用插件、支持链式调用、提升访问速度和用户体验、支持单页面应用、节省开发时间等优点，对于Vue开发者来说是一个非常有用的工具。
```



**VueUse官网: https://vueuse.org/**

![image-20230813155445524](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/e1b9d91db85a5a8c282b4c109df5862434e56519.png)

![image-20230813155714499](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/62c2995e42a82e5f3777b371df9c3bc46e2c8cb4.png)

### 安装

![image-20230813160028158](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/3530775f238715429313d28fab343337f5c64064.png)

#### 安装1

```sh
# npm i @vueuse/integrations 命令是用于安装 @vueuse/integrations 包的命令。这个包是用于集成 Vue.js 和其他库或工具的。
npm i @vueuse/integrations
```

### 安装2

```sh
# npm i universal-cookie 命令是用于安装 universal-cookie 包的命令。这个包提供了一种在任何 JavaScript 环境中使用 Cookie 的方式，无需关心浏览器或服务器环境。
npm i universal-cookie
```





### 选项

![image-20230813155819434](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/f57387c7366a3530e1df46b4bc255e7a06e5630a.png)



### 重新配置后台首页`Index.vue`

![image-20230813160631193](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/50b3fb5a224c259b866a76f162443bf867f3db3b.png)

**import 导入 useCookies**

```sh
  import { useCookies } from '@vueuse/integrations/useCookies'
```

**内部所有方法如下**

![image-20230813160921048](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/ee82555943496f86e3aa174af68143ed57bf7fc5.png)

```sh
  import { useCookies } from '@vueuse/integrations/useCookies'

  const cookie = useCookies()
  console.log(cookie)
```



## 在Login.vue中设置token

![image-20230816180935534](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/5996108f686ca5e0b5253aa2b1058b8818a06894.png)

![image-20230816181011035](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/f047d9fa66532e66e44e53ccf0f9c7613fdf9d51.png)



### 更新Login.vue

```vue
<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

import { ElNotification } from 'element-plus'
import { login } from '@/api/manager'

import { useCookies } from '@vueuse/integrations/useCookies'

// 表单数据源
const form = reactive({
  username: '',
  password: ''
})

// 定义表单的规则
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 5, message: '请输入2~5字的用户名', trigger: 'blur' }
 ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
}

// 获取表单元素
const formRef = ref(null)
const router = useRouter()
const cookie = useCookies()
// 登录按钮的逻辑
const onSubmit = () => {
  formRef.value.validate(valid => {
    if (!valid) return false
    // 登录方法
    login(form.username, form.password)
      .then(res => {
        // 弹窗
        ElNotification({
          message: '登录成功',
          type: 'success',
          duration: 3000
        })

        // 设置token和用户信息
        cookie.set('admin-token', res.token)

        // 跳转回后台首页
        router.push('/')
      })
  })
}
</script>

<template>
  <div class="login">
    <el-row class="row-container">
      <el-col class="left-col" :lg="16" :md="12">
        <div>
          <h2 class="title">欢迎光临</h2>
          <div class="sub-title">此站点是《Vue3实战商城后台管理系统开发》视频课程的演示地址</div>
        </div>
      </el-col>
      <el-col class="right-col" :lg="8" :md="12">
        <h2 class="title">欢迎回来</h2>
        <div class="account">
          <span class="line"></span>
          <span>账号密码登录</span>
          <span class="line"></span>
        </div>
        <!-- form表单 start -->
        <el-form class="w-[250px]" :model="form" :rules="rules" ref="formRef">
          <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名">
              <template #prefix>
                <el-icon>
                  <User />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" placeholder="请输入密码" type="password" show-password>
              <template #prefix>
                <el-icon>
                  <Lock />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="w-[250px]" type="primary" color="#626aef" round @click="onSubmit">
              登 录
            </el-button>
          </el-form-item>
        </el-form>
        <!-- form表单 end -->
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.row-container {
  @apply min-h-screen;

  .left-col {
    @apply flex justify-center items-center text-light-50 bg-indigo-500;

    .title {
      @apply text-5xl font-bold mb-6;
    }

    .sub-title {
      @apply text-sm text-gray-200;
    }
  }

  .right-col {
    @apply flex flex-col items-center justify-center;

    .title {
      @apply font-bold text-3xl text-gray-900;
    }

    .account {
      @apply flex items-center space-x-2 my-5 text-gray-300;

      .line {
        @apply w-16 h-px bg-gray-300;
      }
    }
  }
}
</style>
```





## 拦截器

![image-20230813165950768](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/74875a04deb0abf540ca32cef0aaf23e17e2ea15.png)



### 响应拦截器的使用场景

#### 一、(当我们接口中有太多重复的data时, 可以使用拦截器来处理)， 如下图就是典型的场景：

![image-20230813165456219](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/64073ead286d9da1b15b25f555ee770a27e1970e.png)



#### 二、可以用来统一处理报错信息

![image-20230816182805423](E:\web前端代码\20230815\shop-admin-pc-new\shop-admin\notes\assets\image-20230816182829262.png)



### 响应拦截器代码

```sh
// ElementPlus (通知)
import { ElNotification } from 'element-plus'

// 添加响应拦截器
service.interceptors.response.use(
  // 成功
  (response) => {
    // 拦截冗余的data
    return response.data.data
  },
  (error) => {
    // 统一处理报错信息
    ElNotification({
      message: error.response.data.msg || '请求失败',
      type: 'error',
      duration: 3000
    })
    return Promise.reject(error)
  }
)
```



### 请求拦截器代码

> 请求拦截器是在请求之前去head头当中自动添加上这一个token，那我们之后的所有的相关接口就不需要单独去传这一个token了

```vue
// cookie
import { useCookies } from '@vueuse/integrations/useCookies'

// 添加请求拦截器(request)
service.interceptors.request.use(
  (config) => {
    const cookie = useCookies()
    const token = cookie.get('admin-token')
    if (token) {
      config.headers['token'] = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
```



### 更新axios.js

```js
import axios from "axios"
  
// ElementPlus (通知)
import { ElNotification } from 'element-plus'
// cookie
import { useCookies } from '@vueuse/integrations/useCookies'

export const service = axios.create({
  // 将baseURL替换为'/api'
  baseURL: "/api"
})

// 添加请求拦截器(request)
service.interceptors.request.use(
  (config) => {
    const cookie = useCookies()
    const token = cookie.get('admin-token')
    if (token) {
      config.headers['token'] = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  // 成功
  (response) => {
    // 拦截冗余的data
    return response.data.data
  },
  (error) => {
    // 统一处理报错信息
    ElNotification({
      message: error.response.data.msg || '请求失败',
      type: 'error',
      duration: 3000
    })
    return Promise.reject(error)
  }
)
```



### 封装getInfo方法, 用来获取用户的信息和权限

![image-20230816183600405](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/129d2e71bdeeb1b8ed5522a220ca6bd0fd1cb8f5.png)



### 确实请求方式为post

![image-20230813204254022](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/a39e72532d3df8abab2cb82da0e4d92640d19174.png)

### 更新manage.js (getInfo方法 (获取信息))

```js
import { service } from '@/axios'

export function login(username, password) {
  return service.post('/admin/login', {
    username,
    password
  })
}

// getInfo方法 (获取信息
export function getInfo() {
  return service.post('/admin/getinfo')
}
```



### 在Login.vue中获取用户信息权限

![image-20230816183842406](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/5f1fdc55384d986f4a70fb99bab521ba8ecd870d.png)

![image-20230816183921306](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/4e32e824dca04f2ab1c833d3a45903e3f8b9d407.png)

### 更新Login.vue

```vue
<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

import { ElNotification } from 'element-plus'
import { login, getInfo } from '@/api/manage'

import { useCookies } from '@vueuse/integrations/useCookies'

// 表单数据源
const form = reactive({
  username: '',
  password: ''
})

// 定义表单的规则
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 5, message: '请输入2~5字的用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
}

// 获取表单元素
const formRef = ref(null)
const router = useRouter()
const cookie = useCookies()
const loading = ref(false)
// 登录按钮的逻辑
const onSubmit = () => {
  formRef.value.validate(valid => {
    if (!valid) return false

    loading.value = true

    // 登录方法
    login(form.username, form.password)
      .then(res => {
        // 弹窗
        ElNotification({
          message: '登录成功',
          type: 'success',
          duration: 3000
        })

        // 设置token
        cookie.set('admin-token', res.token)

        // 获取用户信息
        getInfo().then(res2 => {
          console.log(res2)
        })

        // 跳转回后台首页
        router.push('/')
      })
      .finally(() => {
        loading.value = false
      })
  })
}
</script>

<template>
  <div class="login">
    <el-row class="row-container">
      <el-col class="left-col" :lg="16" :md="12">
        <div>
          <h2 class="title">欢迎光临</h2>
          <div class="sub-title">此站点是《Vue3实战商城后台管理系统开发》视频课程的演示地址</div>
        </div>
      </el-col>
      <el-col class="right-col" :lg="8" :md="12">
        <h2 class="title">欢迎回来</h2>
        <div class="account">
          <span class="line"></span>
          <span>账号密码登录</span>
          <span class="line"></span>
        </div>
        <!-- form表单 start -->
        <el-form class="w-[250px]" :model="form" :rules="rules" ref="formRef">
          <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名">
              <template #prefix>
                <el-icon>
                  <User />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" placeholder="请输入密码" type="password" show-password>
              <template #prefix>
                <el-icon>
                  <Lock />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="w-[250px]" type="primary" color="#626aef" round @click="onSubmit" :loading="loading">
              登 录
            </el-button>
          </el-form-item>
        </el-form>
        <!-- form表单 end -->
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.row-container {
  @apply min-h-screen;

  .left-col {
    @apply flex justify-center items-center text-light-50 bg-indigo-500;

    .title {
      @apply text-5xl font-bold mb-6;
    }

    .sub-title {
      @apply text-sm text-gray-200;
    }
  }

  .right-col {
    @apply flex flex-col items-center justify-center;

    .title {
      @apply font-bold text-3xl text-gray-900;
    }

    .account {
      @apply flex items-center space-x-2 my-5 text-gray-300;

      .line {
        @apply w-16 h-px bg-gray-300;
      }
    }
  }
}
</style>@/api/manage
```



### 给登录按钮加上loading动画

> 在请求之前加上loading开始动画, 请求之后结束动画

```vue
// 点击按钮加载动画的逻辑
const loading = ref(false)

const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (!valid) {
      return false
    }

    // 请求成功之前(有动画的)
    loading.value = true

    login(form.username, form.password)
      // 请求成功:
      .then(res => {
        // cookie操作
        cookie.set('admin-token', res.token)  // res.data.data.token

        // getInfo
        getInfo().then(res2 => {
          console.log(res2)
        })

        // 跳转回首页
        router.push('/index')
      })
      .finally(() => {
        loading.value = false // 结束动画
      }) 
  })
}
```



## 常用工具库封装

### 封装cookie

![image-20230816191907895](E:\web前端代码\20230815\shop-admin-pc-new\shop-admin\notes\assets\image-20230816191914384.png)



### 更新Login.vue (使用setToken方法简化设置token的代码)

![image-20230816192546961](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/3578e20fe72a67e8c45de5724549afe48a0f6f0e.png)

![image-20230816192735653](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/c857115240606a3344b603a0a8dfff32fa72ec48.png)

```vue
<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

import { ElNotification } from 'element-plus'
import { login, getInfo } from '@/api/manage'

import { useCookies } from '@vueuse/integrations/useCookies'

import { setToken } from '@/composables/auth'



// 表单数据源
const form = reactive({
  username: '',
  password: ''
})

// 定义表单的规则
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 5, message: '请输入2~5字的用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
}

// 获取表单元素
const formRef = ref(null)
const router = useRouter()
const cookie = useCookies()
const loading = ref(false)
// 登录按钮的逻辑
const onSubmit = () => {
  formRef.value.validate(valid => {
    if (!valid) return false

    loading.value = true

    // 登录方法
    login(form.username, form.password)
      .then(res => {
        // 弹窗
        ElNotification({
          message: '登录成功',
          type: 'success',
          duration: 3000
        })

        // 设置token
        cookie.set('admin-token', res.token)

        setToken(res.token)

        // 获取用户信息
        getInfo().then(res2 => {
          console.log(res2)
        })

        // 跳转回后台首页
        router.push('/')
      })
      .finally(() => {
        loading.value = false
      })
  })
}
</script>

<template>
  <div class="login">
    <el-row class="row-container">
      <el-col class="left-col" :lg="16" :md="12">
        <div>
          <h2 class="title">欢迎光临</h2>
          <div class="sub-title">此站点是《Vue3实战商城后台管理系统开发》视频课程的演示地址</div>
        </div>
      </el-col>
      <el-col class="right-col" :lg="8" :md="12">
        <h2 class="title">欢迎回来</h2>
        <div class="account">
          <span class="line"></span>
          <span>账号密码登录</span>
          <span class="line"></span>
        </div>
        <!-- form表单 start -->
        <el-form class="w-[250px]" :model="form" :rules="rules" ref="formRef">
          <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名">
              <template #prefix>
                <el-icon>
                  <User />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" placeholder="请输入密码" type="password" show-password>
              <template #prefix>
                <el-icon>
                  <Lock />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="w-[250px]" type="primary" color="#626aef" round @click="onSubmit" :loading="loading">
              登 录
            </el-button>
          </el-form-item>
        </el-form>
        <!-- form表单 end -->
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.row-container {
  @apply min-h-screen;

  .left-col {
    @apply flex justify-center items-center text-light-50 bg-indigo-500;

    .title {
      @apply text-5xl font-bold mb-6;
    }

    .sub-title {
      @apply text-sm text-gray-200;
    }
  }

  .right-col {
    @apply flex flex-col items-center justify-center;

    .title {
      @apply font-bold text-3xl text-gray-900;
    }

    .account {
      @apply flex items-center space-x-2 my-5 text-gray-300;

      .line {
        @apply w-16 h-px bg-gray-300;
      }
    }
  }
}
</style>@/api/manage
```



### 更新axios.js 使用 getToken方法简化请求拦截器中的代码

![image-20230816193128866](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/f52bcfaae490287bd0ba0efe7d320bb7115cfca1.png)

![image-20230816193244439](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/4ef5adef441219d3382b8c9bf045da62d96803a4.png)

```js
import axios from "axios"
  
// ElementPlus (通知)
import { ElNotification } from 'element-plus'
// cookie
import { useCookies } from '@vueuse/integrations/useCookies'

// 导入getToken
import { getToken } from '@/composables/auth'

export const service = axios.create({
  // 将baseURL替换为'/api'
  baseURL: "/api"
})

// 添加请求拦截器(request)
service.interceptors.request.use(
  (config) => {
    const cookie = useCookies()
    // const token = cookie.get('admin-token')

    const token = getToken()
    if (token) {
      config.headers['token'] = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  // 成功
  (response) => {
    // 拦截冗余的data
    return response.data.data
  },
  (error) => {
    // 统一处理报错信息
    ElNotification({
      message: error.response.data.msg || '请求失败',
      type: 'error',
      duration: 3000
    })
    return Promise.reject(error)
  }
)
```





## Vuex4

vuex官网: https://vuex.vuejs.org/zh/

### 点击安装 / 点击npm

![image-20230815220023798](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/d85c96c41f4bf73ac3030270bf2320a744a6a34d.png)



### 安装指令

```sh
npm install vuex@next --save
```



### 点击开始

![image-20230815220411865](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/ba47f1773cb40560c8615e4d05cb3ccda4534b83.png)





### 使用

![image-20230815220658023](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/11f66f508fa0fc2ed54a91ae6d3721f2c071b849.png)



### 新建src/store/index.js

![image-20230815221636390](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/c2090e68f4dc30027c54b36842d773e5d12d8207.png)



### 创建仓库 store/index.js

```js
import { createStore } from 'vuex'

export const store = createStore({
  state: () => {
    // 用户信息
    user: {}
  },
  mutations: {
    // 记录用户信息
    SET_USERINFO(state, user) {
      state.user = user
    }
  }
}) 
```



### 在main.js中使用仓库 

![image-20230815221829445](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/846193398cb4ba885ceb4e2327733fdea1eb28e1.png)

```js
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
```



### 在Login.vue中使用仓库

![image-20230815222840803](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/c2c96a40d836c996231449edd885f37c5a836dd9.png)

![image-20230815222937854](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/2ed6e011ef16ab9ca5fcc14c86697bcf90b6fc99.png)



### 将Mutations中的方法抽取常量

> 在mutations中的方法名写成常量并抽离到mutations-type.js中

![image-20230815223950083](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/a7db5223c0dde764e0e5590ee72c1e44e7212c3a.png)

#### mutations-type.js

```js
export const SET_USERINFO = 'SET_USERINFO'
```



### 在store中使用常量

![image-20230815224136137](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/631451474040dc9cbb22023c322987bc4c7d7c29.png)

#### store/index.js

```js
import { createStore } from 'vuex'
import { SET_USERINFO } from '@/store/mutations-type'

export const store = createStore({
  state: () => {
    // 用户信息
    user: {}
  },
  mutations: {
    // 记录用户信息
    [SET_USERINFO](state, user) {
      state.user = user
    }
  }
})
```



### 在Login.vue中使用常量

![image-20230815224219916](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/f075af204367d12fa16c699cf9b1cfb1bc386181.png)

![image-20230815224305933](E:\web前端代码\20230816\notes\assets\image-20230815224305933.png)

#### Login.vue (伪代码)

```vue
<script setup>
// 导入常量
import { SET_USERINFO } from '@/store/mutations-type'

// 获取用户信息
getInfo().then(res2 => {
	store.commit(SET_USERINFO, res2)
})

</script>
```



## 导航守卫

### 全局前置守卫

> 让路由重定向到后台首页的行为, 更改成一打开项目就定位到登录界面, 如果已经有token了, 才让其正常重定向到后台首页。



### 新建permission.js

![image-20230816222434692](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/e987abe76f5ade10ced86f98fc6c15339852a788.png)

```js
import { router } from '@/router'

import { getToken } from '@/composables/auth'
import { toast } from '@/composables/utils'

// 全局前置守卫
// 方案一:
router.beforeEach((to, from) => {
  const token = getToken() 
  if (!token && to.path !== '/login') {
    toast('请先登录', 3000, 'warning')
    return '/login'
  }

  if (token && to.path === '/login') {
    toast('请勿重复登录', 3000, 'error')
    return from.path ? from.path : '/'
  }
})

// 全局前置守卫
// 方案二:
// router.beforeEach((to, from, next) => {
//   // 没有登录的用户, 强制跳转到登录页面
//   const token = getToken()
//   if (!token && to.path !== '/login') {
//     toast('请先登录', 3000, 'warning')
//     return next({ path: '/login' })
//   }

//   // 请勿重复登录
//   if (token && to.path === '/login') {
//     toast('请勿重复登录', 3000, 'error')
//     return next({ path: from.path ? from.path : '/' })
//   }

//   // 放行
//   next()
// })
```



### 在main.js中使用permission.js

![image-20230816222541927](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/3021ef183b6ac2b6279c6162b0b600815599b478.png)

```main.js
import { createApp } from 'vue'
import { router } from '@/router'

import ElemenntPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'
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
```

