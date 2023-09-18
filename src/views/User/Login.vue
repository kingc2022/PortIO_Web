<template>
  <n-h1 prefix="bar">
    <n-text type="primary">
      登录
    </n-text>
  </n-h1>

  <n-input-group class="mt-3">
    <n-input
        v-model:value="token"
        autosize
        placeholder="请输入访问密钥"
        style="min-width: 25%"
    />
    <n-button href="https://muhanfrp.cn/auth/login" tag="a" target="_blank" type="warning">
      获取访问密钥
    </n-button>
    <n-button type="primary" @click="login">
      登录
    </n-button>
  </n-input-group>
  <br/>
</template>

<script setup>
import {NButton, NH1, NInput, NInputGroup, NText, useMessage} from 'naive-ui'
import {onMounted, ref} from 'vue'
import router from "@/plugins/router";
import http from "@/plugins/http";
import user from '@/plugins/stores/user'

const token = ref("")
const message = useMessage()

function login() {
  user.commit('updateToken', token.value)
  http.get('/user').then(res => {
    if (res.status === 200) {
      user.commit('updateToken', token.value)
      user.dispatch('fetch')
      message.success("登录成功")
      router.push({name: 'index'})
    }
  }).catch(() => {
    user.commit('updateToken', null)
    message.error("登录失败")
  })
}

onMounted(() => {
  user.commit('updateToken', null)
  user.commit('updateUser', {})
})

</script>