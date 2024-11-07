<script lang="ts" setup>
import { getMusicList } from '@/service'
import { ref } from 'vue'


const info = ref<AnyObject>([])
const getMusicListData = async () => {
  try {
    const res = await getMusicList()
    info.value = res.data.result
    console.log(res.data)
  } catch (error) {
    console.log(error)
  }
}
getMusicListData()

</script>

<template>
  <scroll-view class="box" scroll-x show-scrollbar="false">
    <view class="slideBox">
      <view class="slideBox-item" v-for="(item, index) in 5" :key="index">
        <view class="">
          {{ item }}
        </view>
        <view></view>
      </view>
    </view>
  </scroll-view>
</template>

<style lang="scss" scoped>
.box{
  width: 100%;
  height: 200rpx;
  display: flex;
  .slideBox{
    display: flex;
    width: 100%;
    height: 200rpx;
    .slideBox-item{
    flex-shrink: 0;
    width: 200rpx;
    height: 200rpx;
    }
  }
}
</style>
