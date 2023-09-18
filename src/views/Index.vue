<template>
  <n-h1 prefix="bar">
    <n-text type="primary">
      首页
    </n-text>
  </n-h1>
  <n-h1>
    欢迎使用 {{ config.title }}
  </n-h1>
  <!--  <n-steps :current="current" status="process">-->
  <!--    <n-step-->
  <!--        :title="step.title"-->
  <!--        :description="step.description ?? ''"-->
  <!--        v-for="step in steps"-->
  <!--    />-->
  <!--  </n-steps>-->
</template>

<script setup>
import {NH1, NText} from "naive-ui";
import config from '../config/config'
// import {ref} from 'vue'

// const current = ref(1)
//
// const steps = ref([
//   {
//     title: '创建隧道',
//   },
//   {
//     title: '获取流量',
//   },
//   {
//     title: '下载客户端',
//   },
//   {
//     title: '启动客户端',
//   },
// ])
</script>