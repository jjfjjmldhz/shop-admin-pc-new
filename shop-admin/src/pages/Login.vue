<script setup>
import { reactive, ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { store } from '@/store'

import { login } from '@/api/manage'
import { toast } from '@/composables/utils'
import { setToken } from '@/composables/auth'

// 定义表单数据源
const form = reactive({
  username: '',
  password: ''
})

// 定义表单校验规则
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 5, message: '请输入2-5个长度的用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ]
}

// 获取form元素
const formRef = ref(null)
// router实例
const router = useRouter()
// loading动画
const loading = ref(false)

// 登录按钮的逻辑
const onSubmit = () => {
  formRef.value.validate(valid => {
    // 有值的时候才触发提交
    if (!valid) return false
    // 开始动画
    loading.value = true
    // 派发actions
    store.dispatch('loginActions', form)
      .then(res => {
        // 成功弹窗
        toast('登录成功', 'success')       
        // 跳转到首页
        router.push('/')
      }).finally(() => loading.value = false)
  }) 
}

function handleKeyup(e) {
  if (e.key === 'Enter') onSubmit()
}

// 页面挂载
onMounted(() => {
  document.addEventListener('keyup', handleKeyup)
})
// 页面卸载
onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyup)
})
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
        <!-- form表单 -->
        <el-form
          class="w-[250px]"
          :model="form"
          :rules="rules"
          ref="formRef"
        >
          <el-form-item prop="username">
            <!-- 文本框 -->
            <el-input 
              v-model="form.username"
              placeholder="请输入用户名"
            >
              <template #prefix>
                <el-icon>
                  <User />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
            <!-- 密码框 -->
            <el-form-item prop="password">
            <el-input 
              v-model="form.password"
              placeholder="请输入密码"
              show-password
            >
              <template #prefix>
                <el-icon>
                  <Lock />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <!-- 登录按钮 -->
          <el-form-item>
            <el-button class="w-[250px]" color="#626aef" round @click="onSubmit" :loading="loading">登 录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.row-container {
  @apply
    min-h-screen;

    .left-col {
      @apply
        flex
        justify-center
        items-center
        text-light-50
        bg-indigo-500;

        .title {
          @apply
            text-5xl
            font-bold
            mb-6;
        }

        .sub-title {
          @apply
            text-gray-200
            text-sm;
        }
    }

    .right-col {
      @apply
        flex
        flex-col
        items-center
        justify-center;

        .title {
          @apply
            text-gray-900
            text-3xl
            font-bold;
        }

        .account {
          @apply
            flex
            items-center
            space-x-2
            my-5
            text-gray-300;

            .line {
              @apply
                w-16
                h-px
                bg-gray-300;
            }
        }
    }
}
</style>