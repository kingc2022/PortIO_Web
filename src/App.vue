<template>
  <n-config-provider :locale="zhCN">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-message-provider :duration="3000">
          <n-notification-provider>
            <Nav/>
          </n-notification-provider>
        </n-message-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup>
import {
  NConfigProvider,
  NDialogProvider,
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
  zhCN
} from 'naive-ui'
import Nav from './components/Nav.vue'
</script>

<style scoped>
</style>
