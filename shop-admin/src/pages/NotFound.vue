<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const errorTip = `您输入的路径 ${route.params.pathMatch} 不存在, 请重新输入!`
</script>

<template>
  <div class="not-found">
    <el-result
      icon="warning"
      title="404页面"
      :sub-title="errorTip">
      <template #extra>
        <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
      </template>
    </el-result>
  </div>
</template>

<style lang="less" scoped></style>