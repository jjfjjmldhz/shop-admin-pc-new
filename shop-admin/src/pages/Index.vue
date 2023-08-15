<script setup>
import { useCookies } from '@vueuse/integrations/useCookies'

const cookie = useCookies()
const set = () => {
  cookie.set('admin-token', '123456')
}
const get = () => {
  console.log( cookie.get('admin-token') )
}
const remove = () => {
  cookie.remove('admin-token')
}
</script>

<template>
  <div class="index">
    <el-button @click="set" type="primary">设置token</el-button>
    <el-button @click="get" type="success">读取token</el-button>
    <el-button @click="remove">删除token</el-button>
  </div>
</template>

<style lang="less" scoped></style>