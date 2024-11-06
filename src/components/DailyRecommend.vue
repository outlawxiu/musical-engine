<script lang="ts" setup>
import { ref } from 'vue'
import { recommendSongsApi } from '../services/index'
import type { recommendRes, alItem } from '../services/type'
const recommendSongs = ref<recommendRes[]>([])
recommendSongsApi().then(res => {
    console.log(res.data.data.dailySongs)
    recommendSongs.value = res.data.data.dailySongs
})
</script>

<template>
    <view class="daily-recommend">
        <view class="recommend-title">
            <text>💕每日推荐</text>
            <image :src="recommendSongs[0].al.picUrl" alt="" />  
        </view>
        <view class="heart-pattern">
            <text>❤️心动模式</text>
            <image src="" alt="" />
        </view>
        <view class="private-radar">
            <text>⛈️私人雷达</text>
            <image src="" alt="" />
        </view>
    </view>
</template>

<style lang="scss" scoped>
.daily-recommend {
    display: flex;
    overflow-x: auto;
    &::-webkit-scrollbar { 
        display: none;
    }
    .recommend-title ,.heart-pattern,.private-radar {
        position: relative;
        margin-right: 10px;
        text {
            position: absolute;
            z-index: 3;
        }
    }
}
image {
    width: 150px;
    height: 190px;
    border-radius: 20px;
    background: pink;
}
</style>
