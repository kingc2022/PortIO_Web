<script setup>
import {useMessage} from 'naive-ui'
import {onMounted} from "vue";
import user from "@/plugins/stores/user";
import router from "@/plugins/router";

const message = useMessage()

onMounted(() => {
  user.commit('updateToken', null)
  user.commit('updateUser', {})
  message.success("已退出登录")
  router.push({name: 'index'})
})
</script>

<template>
</template>

<style scoped>

</style>