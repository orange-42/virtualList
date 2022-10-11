<template>
   <div id="main"  >
      <div class="wrap">
        <div v-for="(item,index) in totalArr"
          :key="index"
          class="item">
          <div class="item-content head">
            <a-image
              class="head-img"
              :width="80"
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </div>
          <div class="item-content content">
          <ul class="pro-info">
            <li><h4>Product {{index}}</h4></li>
            <li class="num">x {{index+1}}</li>
          </ul>
          <ul class="pro-info grey">
            <li>月销：{{30 + index}}</li>
            <a-button  shape="circle">
              <template #icon><ShoppingCartOutlined /></template>
            </a-button>
            
          </ul>
          </div>
        </div>    
    </div> 
</div>
</template>
<script  setup>
import _ from 'lodash'
import {ShoppingCartOutlined} from '@ant-design/icons-vue'
import { computed, onMounted, ref } from "vue";
const totalArr = ref([]); // 总数据



onMounted(() => {
  // 模拟一共有2万条数据
  for (let i = 0; i < 8000; i++) {
    totalArr.value.push(i);
  }
})

</script>

<style lang="less" scoped>
#main {
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  position: relative;
}

.item {
  width: 90%;
  display: flex;
  height: 90px;
  margin: 0 auto;
  border-bottom: 1px #dcdcdc solid;
}

.grey {
  color:#999
}


.head {
  width:30%;
  line-height: 90px;
}


.content {
  width:70%;
  margin: 10px 0;
  .pro-info{
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-between;
    .num {
      color:#989
    }
  }
}
</style>