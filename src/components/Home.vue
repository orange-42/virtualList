<template>
  <a-space>
    <a-button @click="toVirtual" type="primary">虚拟滚动列表</a-button>
    <a-button :loading="loading" @click="toNormalList">普通列表</a-button>
  </a-space>
  <div class="desc">
    <p>虚拟列表为200000个节点,普通列表为8000个节点,跳转普通列表会比较卡</p>

  </div>



  <!-- <router-link  to="/virtualList">虚拟滚动列表</router-link>
    <router-link  to="/list">普通列表</router-link> -->
</template>
<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

function toVirtual () {
  router.push('/virtualList')
}

const loading = ref(false)
function toNormalList () {
  try {
    loading.value = true
    router.push('/list')
  } finally {
    loading.value = false
  }
  
}
</script>
<style>
.desc {
  margin-top: 20px;
  color:#999;
}
</style>