<template>
  <n-h1 prefix="bar">
    <n-text type="primary">
      下载客户端
    </n-text>
  </n-h1>
  <n-data-table
      :bordered="true"
      :columns="columns"
      :data="clients"
  />
</template>

<script setup>
import {h, ref} from 'vue'
import {NButton, NDataTable, NH1, NText} from 'naive-ui'
import http from '../plugins/http'

const clients = ref([])

http.get('/clients').then(res => {
  clients.value = res.data
})

const createColumns = () => {
  return [
    {
      title: "客户端名称",
      key: "name"
    },
    {
      title: "架构",
      key: "arch"
    },
    {
      title: "操作",
      key: "actions",
      render(row) {
        return h(
            NButton,
            {
              strong: true,
              secondary: true,
              size: "small",
              type: "primary",
              tag: "a",
              href: row.url
            },
            {default: () => "下载"}
        );
      }
    }
  ];
}

const columns = createColumns()
</script>