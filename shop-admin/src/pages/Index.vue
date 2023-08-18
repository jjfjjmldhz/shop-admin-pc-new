<script setup>
import { router } from '@/router'
import { store } from '@/store'

import { showModal } from '@/composables/utils'
import { logout } from '@/api/manage'
import { toast } from '@/composables/utils'

const handleLogout = () => {
  showModal('是否要退出登录')
    .then(() => {
      logout().finally(() => {
        // 派发actions (logoutActions)
        store.dispatch('logoutActions') 
        // 成功退出登录
        toast('成功退出登录', 'success')
        // 跳转到登录页面
        router.push('/login')
      })
    })
    .catch(() => false)
}
</script>

<template>
  <div class="index">
    <h2>{{ $store.state.userInfo.username }}</h2>
    <el-button @click="handleLogout">退出登录</el-button>
  </div>
</template>

<style lang="less" scoped></style>