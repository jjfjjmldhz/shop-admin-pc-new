<script setup>
import { showModal, toast } from '@/composables/utils'
import { logout } from '@/api/manage'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const sotre = useStore()
const handleLogout = () => {
  showModal('是否要退出登录?').then(res => {
    logout()
    .finally(() => {
      // 派发
      sotre.dispatch('logoutActions')

      // 跳转到登录页面
      router.push('/login')

      // 退出成功弹窗
      toast('成功退出登录')
    })
  })
}
</script>

<template>
  <div class="index">
    <h2>{{ $store.state.user.username }}</h2>

    <el-button @click="handleLogout">退出登录</el-button>
  </div>
</template>

<style lang="less" scoped></style>