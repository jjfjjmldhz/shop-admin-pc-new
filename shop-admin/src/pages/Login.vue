<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import { toast } from '@/composables/utils'

// form表单的数据源
const form = reactive({
  username: '',
  password: ''
})

// 定义表单校验规则
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 5, message: '请输入2~5长度的用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ]
}

// 获取form表单元素
const formRef = ref(null)
const router = useRouter()
const store = useStore()
// 生成仓库
const loading = ref(false)
// 登录按钮的逻辑
const onSubmit = () => {
  formRef.value.validate(valid => {
    if (!valid) return false
    // 有动画
    loading.value = true
    // 调用login方法
    store.dispatch('loginActions', form).then((res) => {
      console.log(res)
      toast('登录成功')
      router.push('/')
    })
      .finally(() => {
        // 结束动画
        loading.value = false
      })
  })
}

function handleKeyUp(e) {
  // 用户按下 'Enter' 键
  if (e.key == 'Enter') onSubmit()
}

// 页面加载成功: 添加键盘事件
onMounted(() => {
  document.addEventListener('keyup', handleKeyUp)
})

// 页面卸载: 移除键盘事件
onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyUp)
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

        <!-- form 表单 start -->
        <el-form class="w-[250px]" :model="form" :rules="rules" ref="formRef">
          <!-- 文本框 start -->
          <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名">
              <template #prefix>
                <el-icon>
                  <User />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <!-- 文本框 end -->
          <!-- 密码框 -->
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
            <el-button class="w-[250px] rounded-full" type="primary" color="#626aef" @click="onSubmit" :loading="loading">
              登 录
            </el-button>
          </el-form-item>
        </el-form>
        <!-- form 表单 end -->
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.row-container {
  @apply min-h-screen;

  // 左列
  .left-col {
    @apply flex justify-center items-center text-light-50 bg-indigo-500;

    .title {
      @apply font-bold text-5xl mb-6;
    }

    .sub-title {
      @apply text-gray-200 text-sm;
    }
  }

  // 右列
  .right-col {
    @apply flex flex-col justify-center items-center;

    .title {
      @apply text-3xl font-bold text-gray-900;
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