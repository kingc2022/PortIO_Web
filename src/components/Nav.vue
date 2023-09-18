<template>
  <n-layout has-sider>
    <n-layout-sider
        :collapsed="collapsed"
        :collapsed-width="64"
        :width="240"
        bordered
        collapse-mode="width"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
    >
      <n-menu
          v-model:value="activeKey"
          :collapsed="collapsed"
          :collapsed-icon-size="22"
          :collapsed-width="64"
          :options="menuOptions"
          :render-icon="renderIcon"
          :render-label="renderLabel"
          style="height: 100vh"
      />
    </n-layout-sider>
    <n-layout class="mt-10 ml-3">
      <n-layout-content>
        <div class="ml-2 mr-5">
          <router-view></router-view>
        </div>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup>
import {h, ref} from "vue"
import {NIcon, NLayout, NLayoutContent, NLayoutSider, NMenu} from "naive-ui"
import {RouterLink, RouterView} from 'vue-router'
import {AddOutline, HomeOutline, ListOutline} from '@vicons/ionicons5'
import router from "@/plugins/router";


const collapsed = ref(false)
const activeKey = ref()

// 防止 router 获取不到当前名称
setTimeout(() => {
  activeKey.value = router.currentRoute.value.name
}, 500)

const menuOptions = [
  {
    label: "首页",
    key: "index",
    icon: HomeOutline,
  },
  {
    label: "隧道列表",
    key: "tunnels",
    icon: ListOutline,
  },
  {
    label: "创建隧道",
    key: "tunnels.create",
    icon: AddOutline,
  },
]

function renderIcon(option) {
  if ("icon" in option) {
    return h(NIcon, null, {default: () => h(option.icon)});
  }
}

function renderLabel(option) {
  if ("href" in option) {
    return h(
        "a",
        {
          href: option.href,
          target: "_blank",
        },
        option.label
    )
  } else {
    return h(
        RouterLink,
        {
          to: {
            name: option.key,
          }
        },
        {default: () => option.label}
    )
  }
}
</script>

<style scoped>

</style>