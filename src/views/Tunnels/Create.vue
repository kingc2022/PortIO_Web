<template>
  <n-h1 prefix="bar">
    <n-text type="primary">
      创建隧道
    </n-text>
  </n-h1>
  <n-form ref="formRef" :model="tunnel" :rules="rules">
    <n-spin :show="spin">
      <n-grid :cols="2" x-gap="12">
        <n-gi>
          <n-form-item label="隧道名称" path="name">
            <n-input v-model:value="tunnel.name"/>
          </n-form-item>
          <n-form-item class="mt-3" label="服务器" path="server">
            <n-select v-model:value="tunnel.server_id" :options="servers_option"
                      @update:value="updateProtocol"/>
          </n-form-item>
          <n-form-item class="mt-3" label="协议" path="protocol">
            <n-select v-model:value="tunnel.protocol" :options="protocols"/>
          </n-form-item>
        </n-gi>
        <n-gi>
          <n-form-item label="本地地址" path="local_address">
            <n-input v-model:value="tunnel.local_address"/>
          </n-form-item>
          <n-form-item v-if="tunnel.protocol === 'http' || tunnel.protocol === 'https'" class="mt-3" label="自定义域名"
                       path="custom_domain">
            <n-input v-model:value="tunnel.custom_domain"/>
          </n-form-item>
          <n-form-item v-else-if="tunnel.protocol === 'tcp' || tunnel.protocol === 'udp'" class="mt-3" label="外部端口"
                       path="remote_port">
            <n-input v-model:value="tunnel.remote_port"/>
          </n-form-item>
          <n-form-item v-else class="mt-3" label="访问密钥" path="sk">
            <n-input v-model:value="tunnel.sk"/>
          </n-form-item>
          <n-button type="primary" @click="create">
            创建
          </n-button>
        </n-gi>
      </n-grid>
    </n-spin>
  </n-form>

</template>

<script setup>
import {NButton, NForm, NFormItem, NGi, NGrid, NH1, NInput, NSelect, NSpin, NText, useMessage} from 'naive-ui'
import {ref} from 'vue'
import user from "@/plugins/stores/user";
import http from "@/plugins/http";

const tunnel = ref({
  "name": null,
  "protocol": 'tcp',
  "custom_domain": null,
  "local_address": "",
  "remote_port": null,
  "sk": null,
  "user_id": user.state.id,
  "server_id": 1,
})

const message = useMessage()
const spin = ref(false)
const formRef = ref(null)

const rules = {
  name: [
    {
      required: true,
      validator(rule, value) {
        if (!value) {
          return new Error("请输入隧道名称")
        }
        if (value.length > 200) {
          return new Error("隧道名称过长")
        }
        return true;
      },
      trigger: ["input", "blur"]
    }
  ],
  local_address: [
    {
      required: true,
      validator(rule, value) {
        if (!value) {
          return new Error("请输入本地地址")
        }
        if (!/^(?:(?:\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/.test(value)) {
          return new Error("请输入正确的本地地址 (IP:Port)")
        }
        return true;
      },
      trigger: ["input", "blur"]
    }
  ],
  custom_domain: [
    {
      required: true,
      validator(rule, value) {
        if (!value) {
          return new Error("请输入自定义域名")
        }
        if (!/^[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/.test(value)) {
          return new Error("请输入正确的域名")
        }
        return true;
      },
      trigger: ["input", "blur"]
    }
  ],
  remote_port: [
    {
      required: true,
      validator(rule, value) {
        if (!value) {
          return new Error("请输入端口号")
        }
        if (!/^(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(value)) {
          return new Error("请输入正确的端口号")
        }
        return true;
      },
      trigger: ["input", "blur"]
    }
  ],
  sk: [
    {
      required: true,
      message: "请输入访问密钥",
      trigger: ["blur"]
    }
  ],
}

const servers_option = ref([])
const servers = ref([])
const protocols = ref([
  {label: "TCP", value: "tcp"},
  {label: "UDP", value: "udp"},
  {label: "HTTP", value: "http"},
  {label: "HTTPS", value: "https"},
  {label: "STCP", value: "stcp"},
  {label: "SUDP", value: "sudp"},
  {label: "XTCP", value: "xtcp"},
])

http.get('/servers').then(res => {
  servers.value = res.data
  for (let server of res.data) {
    servers_option.value.push({
      label: server.name,
      value: server.id,
    })
  }
})

function updateProtocol() {
  for (let server of servers.value) {
    if (server.id === tunnel.value.server_id) {
      for (let protocol of protocols.value) {
        if (protocol.value === 'tcp') {
          protocol['disabled'] = !server.allow_tcp
        } else if (protocol.value === 'udp') {
          protocol['disabled'] = !server.allow_udp
        } else if (protocol.value === 'http') {
          protocol['disabled'] = !server.allow_http
        } else if (protocol.value === 'https') {
          protocol['disabled'] = !server.allow_https
        } else if (protocol.value === 'stcp') {
          protocol['disabled'] = !server.allow_stcp
        } else if (protocol.value === 'sudp') {
          protocol['disabled'] = !server.allow_sudp
        } else if (protocol.value === 'xtcp') {
          protocol['disabled'] = !server.allow_xtcp
        }
      }
      tunnel.value.protocol = null
      break
    }
  }
}

function create() {
  if (tunnel.value.protocol === 'http' || tunnel.value.protocol === 'https') {
    tunnel.value.remote_port = null
    tunnel.value.sk = null
  } else if (tunnel.value.protocol === 'tcp' || tunnel.value.protocol === 'udp') {
    tunnel.value.custom_domain = null
    tunnel.value.sk = null
  } else {
    tunnel.value.custom_domain = null
    tunnel.value.remote_port = null
  }
  spin.value = true
  http.post('/tunnels', tunnel.value).then(res => {
    message.success("创建成功")
    spin.value = false
  }).catch(err => {
    message.error(err.message)
    spin.value = false
  })
}

</script>