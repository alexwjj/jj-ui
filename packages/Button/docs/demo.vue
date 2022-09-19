<template>
  <div>
    <t-button type="primary" @click="onClick(1)">第一个</t-button>
    <t-button @click="onClick(2)">第二个</t-button>
    <t-button @click="onClick(3)">第三个</t-button>
  </div>
</template>

<script setup>
const onClick = (num) => {
  console.log(`我是第 ${num} 个自定义按钮`);
};
</script>
