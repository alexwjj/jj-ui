<template>
  <div>
    <h3>子组件</h3>
    <button @click="onChangeChild">点击发送子组件数据</button>
  </div>
</template>
<script lang="ts" setup>
import {
  computed,
  isRef,
  reactive,
  ref,
  shallowReactive,
  toRefs,
  watch,
  watchEffect,
} from "vue";
// ts写法
interface IProps {
  title?: string,
  data?: number[]
}
defineProps<IProps>()
// props默认值
// withDefaults(defineProps<IProps>(), {
//   title: '默认标题',
//   data: () => [1, 2]
//   // 不能和下面怎么写
//   // data: [1, 2]  
// })
// js写法
// defineProps({
//   title: {
//     type: String,
//     default: ""
//   },
//   data: {
//     type: Array,
//     default: () => []
//   },
// })
const emit = defineEmits(['on-change'])
// 父组件还和vue2一样，通过@on-change监听即可
const onChangeChild = () => {
  emit('on-change', 'child data ')
}
// 将子组件数据暴露给父组件
const childrenData = ref<number>(999);
defineExpose({
  childrenData
})
</script>
<style>
</style>
