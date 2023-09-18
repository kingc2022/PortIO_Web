<template>
  <n-h1 prefix="bar">
    <n-text type="primary">
      隧道列表
    </n-text>
  </n-h1>
  <n-table v-if="tunnels.length !== 0" :single-line="false" class="!text-center">
    <thead>
    <tr>
      <th>隧道 ID</th>
      <th>隧道名称</th>
      <th>本地地址</th>
      <th>隧道协议</th>
      <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="tunnel in tunnels">
      <td>{{ tunnel.id }}</td>
      <td>{{ tunnel.name }}</td>
      <td>{{ tunnel.local_address }}</td>
      <td>{{ tunnel.protocol.toUpperCase() }}</td>
      <td>
        <n-button-group>
          <router-link :to="{ name: `tunnels.show`, params: { id: tunnel.id } }">
            <n-button secondary tertiary type="info">
              详细信息
            </n-button>
          </router-link>
          <n-button secondary tertiary type="error" @click="deleteTunnel(tunnel.id)">删除</n-button>
        </n-button-group>
      </td>
    </tr>
    </tbody>
  </n-table>

  <n-empty v-else description="无隧道" size="large">
    <template #extra>
      <router-link :to="{ name: `tunnels.create` }">
        <n-button size="small">
          创建一个
        </n-button>
      </router-link>
    </template>
  </n-empty>


</template>

<script setup>
import {NButton, NButtonGroup, NEmpty, NH1, NTable, NText, useDialog, useMessage} from "naive-ui";
import http from '../../plugins/http'
import {ref} from "vue";
import {RouterLink} from "vue-router"

const tunnels = ref([])

const message = useMessage()
const dialog = useDialog()

http.get('/tunnels').then(res => {
  tunnels.value = res.data
})

function deleteTunnel(id) {
  dialog.warning({
    title: '删除隧道',
    content: '确定删除隧道吗？',
    positiveText: '删除',
    negativeText: '取消',
    onPositiveClick: () => {
      http.delete(`/tunnels/${id}`).then(res => {
        message.success('删除隧道成功')
        http.get('/tunnels').then(res => {
          tunnels.value = res.data
        })
      })
    }
  })
}

</script>