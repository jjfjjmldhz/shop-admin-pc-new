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