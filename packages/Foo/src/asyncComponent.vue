<template>
  <div>{{ title }}</div>
</template>
  <script lang="ts" setup>
  import { ref, onMounted } from "vue"
  let title = ref<string>('默认标题')
  // 得用axios
  onMounted(() => {
    setTimeout(() => {
      title.value = '修改之后的标题'
    }, 3000);
  })
  
  </script>

