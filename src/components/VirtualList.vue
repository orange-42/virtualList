<template>
  <div id="main" ref="slider">
    <div class="wrap" :style="{ height: currentArr.length * itemHeight + 'px' }">
      <div
        v-for="(item, index) in renderList"
        :key="index"
        class="item"
        :style="{
          position: 'absolute',
          left: 0,
          top: 0,
          transform: item.transform,
        }"
      >
        <div class="item-content head">
          <a-image
            class="head-img"
            :width="80"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </div>
        <div class="item-content content">
          <ul class="pro-info">
            <li>
              <h4>Product {{ item.item }}</h4>
            </li>
            <li class="num">x {{ item.item + 1 }}</li>
          </ul>
          <ul class="pro-info grey">
            <li>月销：{{ 30 + item.item }}</li>
            <a-button shape="circle">
              <template #icon><ShoppingCartOutlined /></template>
            </a-button>
          </ul>
        </div>
      </div>
          
    </div>
  </div>
</template>
<script setup>
import _ from "lodash";
import { ShoppingCartOutlined } from "@ant-design/icons-vue";
import { computed, onMounted, ref } from "vue";
const totalArr = ref([]); // 总数据

// 模拟一共有2万条数据
for (let i = 0; i < 100000; i++) {
  totalArr.value.push(i);
}

// 默认第一屏取1页数据
const currentArr = ref([]);

// 每段分10条数据
let page = 1;

// 屏幕高度
const screenH = window.screen.height;
const canShowItemNum = ref(Math.ceil(screenH / props.itemHeight));

const props = defineProps({
  // 每个子元素的高度
  itemHeight: {
    type: Number,
    default: 90,
  },
});

const startInex = ref(0); // 可视区域的起始索引
const endIndex = ref(9); // 可视区域的尾部索引

const slider = ref();

function scroll() {
  // 固定区域能够显示的个数
  const scrollTop = slider.value?.scrollTop || 0; // 滚动距离
  // 是否已经滑到底的判断
  if (currentArr.value.length * props.itemHeight - scrollTop - screenH < 400) {
    requestAnimationFrame(() => {
      currentArr.value.push(
        ...totalArr.value.slice(page * 10, page * 10 + canShowItemNum.value + 5)
      );
      page++;
      scroll();
    });
    return;
  }

  // 起始索引 滚动离顶部的距离 除以每个元素的高度 得到当前最顶部的索引
  let currentStartIndex = Math.floor(scrollTop / props.itemHeight);

  // 最顶部的索引加上页面区域显示的个数 得到 终点索引
  let currentEndIndex = currentStartIndex + canShowItemNum.value;

  if (currentStartIndex === startInex.value && currentEndIndex === endIndex.value) return;

  /**
   * @description  使用requestAnimationFrame 执行滑动的动画渲染
   * 1、requestAnimationFrame 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，
   * 一般来说，这个频率为每秒60帧。
   * 2、在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的的cpu，gpu和内存使用量。
   */
  requestAnimationFrame(() => {
    startInex.value = currentStartIndex;
    endIndex.value = currentEndIndex;
  });
}

// 可视区域的渲染列表
const renderList = computed(() => {
  const list = currentArr.value.slice(startInex.value, endIndex.value + 5);
  const currentRenderList = list.map((item, index) => {
    return {
      key: index,
      transform: `translateY(${(startInex.value + index) * props.itemHeight}px)`,
      item,
    };
  });
  return currentRenderList;
});

onMounted(() => {
  currentArr.value = totalArr.value.slice(0, canShowItemNum.value);

  const dom = document.getElementById("main");

  dom.addEventListener("scroll", _.throttle(scroll, 50), true);
});
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
  color: #999;
}

.head {
  width: 30%;
  line-height: 90px;
}

.content {
  width: 70%;
  margin: 10px 0;
  .pro-info {
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-between;
    .num {
      color: #989;
    }
  }
}
</style>
