<template>
</template>

<script setup>
import http from '../../plugins/http'
import router from "@/plugins/router";

http.get(`/tunnels/${router.params.id}`).then(res => {
  
})
</script>