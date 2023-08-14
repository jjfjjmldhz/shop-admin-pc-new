<script setup>
import { useRoute } from 'vue-router'
// router: 内部有一些方法, 如router.push()
// route: 内部有一些参数, 如route.params.pathMatch

const route = useRoute()
const errorTip = `您输入的路径 "${route.params.pathMatch}" 不存在~`

</script>

<template>
  <div class="not-found">
    <el-result
        icon="warning"
        title="404页面"
        :sub-title="errorTip"
      >
        <template #extra>
          <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
        </template>
      </el-result>
  </div>
</template>

<style lang="less" scoped></style>