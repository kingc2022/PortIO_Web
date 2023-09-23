<template>
  <n-config-provider :locale="zhCN" :theme="theme">
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
  darkTheme,
  lightTheme,
  NConfigProvider,
  NDialogProvider,
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
  useOsTheme,
  zhCN
} from 'naive-ui'
import {computed} from 'vue'
import Nav from './components/Nav.vue'

const theme = computed(() => {
  return useOsTheme().value === 'light' ? lightTheme : darkTheme
})
</script>

<style scoped>
</style>
