<<<<<<< HEAD
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>

    <Child />
=======
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getBannerApi } from '../../services/index';
import type { bannersItem } from '../../services/type';
import DailyRecommend from '../../components/DailyRecommend.vue'
const greeting = ref('')
const getGreeting = () => {
  const now = new Date()
  const hour = now.getHours()
  if (hour >= 18 || hour < 5) {
    greeting.value = '晚上好'
  } else if (hour > 12 || hour < 18) {
    greeting.value = '下午好'
  } else if (hour < 12 || hour >= 5) {
    greeting.value = '早上好'
  }
}
onMounted(() => {
  getGreeting()
})
const banners = ref<bannersItem[]>([])
getBannerApi().then(res => {
  banners.value = res.data.banners
  // console.log(res.data.banners)
})




</script>
<template>

  <view class="content">
    <view class="nav">
      <img src="../../static/01.png" alt="" class="img1">
      <input type="text" placeholder="输入搜索内容" class="search">
      <img src="../../static/music_1.png" alt="" class="img2">
    </view>
    <swiper class="swiper">
      <swiper-item v-for="item in banners" :key="item.targetId">
        <view class="swiper-item">
          <image :src="item.imageUrl" alt="" style="width:100% ;height: 180px;" />
        </view>
      </swiper-item>
    </swiper>
    <text class="greeting">{{ greeting }}</text>
    <DailyRecommend />
>>>>>>> main
  </view>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;

  .search {
    background: #ccc;
    width: 230px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    padding-left: 10px;
  }
}

.img1,
.img2 {
  width: 30px;
  height: 30px;
}

.greeting {
  font-size: 20px;
  color: #333;
  font-weight: 500;
  height: 50px;
  line-height: 50px;
  margin-left: 15px;
}

.swiper {
  width: 100%;
  height: 180px;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 10px;
  box-sizing: border-box;
}
.content {
  padding: 0 10px;
}
</style>
