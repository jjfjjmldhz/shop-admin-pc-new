<script setup>
// 导入reactive函数 
import { reactive, ref } from 'vue'
// 导入login方法
import { login } from '@/api/manager'
// 导入弹窗方法
import { ElNotification } from 'element-plus'

// account的响应式数据
const form = reactive({
  username: '',
  password: ''
})

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

// form表单逻辑
const formRef = ref(null)
// 登录按钮的点击逻辑
const onSubmit = () => {
  formRef.value.validate(valid => {
    // 如果没有有效值, 直接返回false
    if (!valid) {
      return false
    }
    // 数据来自于account中的响应式数据(也就是文本框和密码输入后得到的值)
    login(form.username, form.password)
    // 请求成功
    .then(res => {
      console.log(res)
    })
    // 捕获异常
    .catch(err => {
      console.log('错误信息:', err.response.data.msg)
      // 错误弹窗
      ElNotification({
        message: err.response.data.msg || '请求失败',
        type: 'error',
        // 默认弹窗持续时间是4500ms
        duration: 3000
      })
    })
  })
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
          ref="formRef"
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