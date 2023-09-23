<template>
  <n-h1 prefix="bar">
    <n-text type="primary">
      首页
    </n-text>
  </n-h1>
  <n-h2>
    欢迎使用 {{ config.title }}
  </n-h2>
  <n-alert title="新 UI" type="warning" class="mb-3">
    当前为新 UI 的预览版本, 不代表最终成品
  </n-alert>
  <n-grid :cols="2" :x-gap="12">
    <n-gi>
      <n-card title="用户信息">
        <n-statistic :value="user.state.user.name" label="用户名"></n-statistic>
        <br/>
        <n-statistic label="剩余流量" tabular-nums>
          <n-number-animation :duration="user.state.user.traffic >= 5000 ? 2500 : 3000" :from="0"
                              :to="user.state.user.traffic"></n-number-animation>
          <template #suffix>
            GB
          </template>
        </n-statistic>
      </n-card>
    </n-gi>
    <n-gi>
      <n-card title="访问密钥">
        访问密钥是用于访问 {{ config.title }} API 的密钥，您可以使用它来开发自己的客户端。删除所有访问密钥后，将需要再次登录此面板。
        <div v-if="token">
          <br/>
          <n-text type="info">
            <n-text type="error">
              请妥善保管您的访问密钥
            </n-text>
            <br/>
            {{ token }}
          </n-text>
        </div>
        <br/>
        <n-button class="!mt-2 !mr-2" secondary strong type="info" @click="getNewToken">
          获取新密钥
        </n-button>
        <n-button secondary strong type="error" @click="deleteAllToken">
          删除所有密钥
        </n-button>
      </n-card>
    </n-gi>
  </n-grid>
</template>

<script setup>
import {
  NButton,
  NCard,
  NGi,
  NGrid,
  NH1,
  NH2,
  NNumberAnimation,
  NStatistic,
  NText,
    NAlert,
  useDialog,
  useMessage
} from "naive-ui";
import config from '../config/config'
import user from '../plugins/stores/user'
import {onMounted, ref} from 'vue'
import http from '../plugins/http'
import router from "@/plugins/router";

const message = useMessage()
const dialog = useDialog()

onMounted(() => {
  user.dispatch('fetch')
})

const token = ref("")

function getNewToken() {
  http.post('/tokens').then(res => {
    token.value = res.data.token
    message.success('获取成功')
  })
}

function deleteAllToken() {
  dialog.warning({
    title: '删除所有密钥',
    content: '确定删除所有密钥？',
    positiveText: "确定",
    negativeText: "取消",
    onPositiveClick: () => {
      http.delete('/tokens').then(() => {
        message.success('删除成功')
        token.value = ""
        router.push({name: 'logout'})
      })
    }
  })
}

</script>

<style scoped>
</style>