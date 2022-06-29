<template>
  <div>
    <h1>ref</h1>
    <button @click="addCount">click me {{ count }}</button>
    <div>
      <button @click="stopWatch">停止监听count</button>
    </div>
    <div>响应式基础类型数据更新{{ count }}</div>
    <div>计算属性computed：{{ doubleCount }}</div>

    <h1>reactive</h1>
    <button @click="change">点击修改对象信息</button>
    <div>响应式引用类型数据更新：{{ articleInfo }}</div>
    <h1>shallowReactive</h1>
    <button @click="changeShallow">点击修改对象信息</button>
    <div>视图不会更新：{{ shallowExp }}</div>
    <h1>组件通信</h1>
    <Child ref="childInstance" @on-change="onChangeChild"></Child>
  </div>
</template>
<script lang="ts" setup>
import Child from './child.vue'
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
const childInstance = ref()
const onChangeChild = (data: string) => {
  console.log(data, '子组件数据');
  // 子组件实例通过ref访问
  // <Child ref="childInstance" @on-change="onChangeChild"></Child>
  console.log(childInstance.value, '子组件实例');
  console.log(childInstance.value.childrenData, '子组件数据'); // 999
}


const count = ref<number>(0);
const notRef: number = 1;

const addCount = () => {
  count.value++;
  console.log("addCount");
  // 判断是否为ref对象
  console.log(isRef(count)); //true
  console.log(isRef(notRef)); //false
};

const articleInfo = reactive({
  author: "Vue Team",
  content: "2020",
});

let { author, content } = toRefs(articleInfo);
const shallowExp = shallowReactive({
  a: 1,
  b: {
    x: "x",
    y: "y",
  },
});
const change = () => {
  // ref判断
  console.log(isRef(articleInfo)); //false
  console.log(isRef(shallowExp)); //false
  console.log(isRef(author)); //true
  author.value = "JJ Study";
  shallowExp.a = 2;
};
const changeShallow = () => {
  shallowExp.b.x = "JJ";
  console.log(shallowExp);
};
// watchEffect 
const stopWatch = watchEffect((oninvalidate) => {
  oninvalidate(() => {
    console.log('前置校验函数');
  })
  console.log('watchEffect count变化', count.value);
}, {
  // 副作用刷新时机 flush 一般使用post
  // 可选：pre(组件更新前执行)/sync(强制效果始终同步触发)/post(组件更新后执行)
  flush: "post",
  // 开发调试
  onTrigger() {
    console.log('开发调试');
  }
})
// watch
// 单个监听
watch(count, (newVal, oldVal) => {
  console.log(newVal, "count newVal");
});

// 多个监听
// watch([count1, count2], (newVal) => {
//   console.log(newVal, 'count newVal');
// })
// 深度监听对象
// watch(articleInfo, (newVal) => {
//   console.log(newVal, 'articleInfo newVal');
// },{deep: true, immediate: true})
// // 监听对象某个属性
// watch(() => articleInfo.author, (newVal) => {
//   console.log(newVal, 'articleInfo newVal');
// })
//  计算属性： computed
// let doubleCount1 = computed(() => {
//   return count.value + 2
// })
let doubleCount = computed({
  get: () => {
    return count.value * 2;
  },
  set: (value) => {
    count.value = value * 3;
  },
});
</script>
<style>
.count {
  color: red;
}
</style>
