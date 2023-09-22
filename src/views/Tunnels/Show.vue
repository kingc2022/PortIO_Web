<template>
  <n-h1 prefix="bar">
    <n-text type="primary">
      {{ tunnel.name }}
    </n-text>
  </n-h1>
  <n-tabs animated type="line">
    <n-tab-pane name="config" tab="配置文件">
      <n-input v-model:value="config" placeholder="加载中" readonly rows="15" type="textarea"
               @click="copy(config)"></n-input>
    </n-tab-pane>
  </n-tabs>
</template>

<script setup>
import http from '../../plugins/http'
import router from "@/plugins/router";
import {ref} from "vue";
import {NH1, NInput, NTabPane, NTabs, NText, useMessage} from 'naive-ui'

const tunnel = ref({})
const config = ref("")

const message = useMessage()

http.get(`/tunnels/${router.currentRoute.value.params.id}`).then(res => {
  tunnel.value = res.data
  config.value = tunnel.value.config.server + "\n\n" + tunnel.value.config.client
})

function copy(text) {
  navigator.clipboard.writeText(text)
  message.success("复制成功")
}
</script>