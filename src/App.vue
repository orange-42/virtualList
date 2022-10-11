<script setup>
import { ref } from 'vue'
import VirtualList from './components/VirtualList.vue'
import HelloWorld from './components/HelloWorld.vue'
const activeKey = ref(1)
</script>

<template>
   <!-- <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="虚拟滚动list">
      <VirtualList />
    </a-tab-pane>
    <a-tab-pane key="2" tab="普通list">
      <HelloWorld/>
    </a-tab-pane>
  </a-tabs>
  -->
  
  <router-view>
 

  </router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
