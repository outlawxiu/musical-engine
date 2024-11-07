<script lang="ts" setup>
import { getMusic } from '@/service'
import { ref } from 'vue'
import { getMusicUrl } from '@/service'


const url = ref('')
const musicCover = ref('')
const music = async () => {
  try {
    const res = await getMusic()
    musicCover.value = res.data.songs[0]
    const id = res.data.songs[0].id
    const res2 = await getMusicUrl(id)
    url.value = res2.data.data[0].url
    console.log(musicCover.value)
    
  } catch (error) {
    console.log(error)
  }
}
music()

interface PlayerData {
  audioSrc: string;  // 音频文件地址
  playing: boolean; // 是否正在播放
  duration: number; // 音频时长
  currentTime: number; // 当前播放时间
}

// const innerAudioContext = wx.createInnerAudioContext({
//   useWebAudioImplement: false // 是否使用 WebAudio 作为底层音频驱动，默认关闭。对于短音频、播放频繁的音频建议开启此选项，开启后将获得更优的性能表现。由于开启此选项后也会带来一定的内存增长，因此对于长音频建议关闭此选项
// })
// innerAudioContext.src = url.value

// innerAudioContext.play() // 播放

// innerAudioContext.pause() // 暂停

// innerAudioContext.stop() // 停止

// innerAudioContext.destroy() // 释放音频资源
</script>

<template>
<!-- player.wxml -->
<view class="player-container">
  <audio :src="url" controls></audio>
  
  <view class="player-controls">
    <!-- <image :src="musicCover.al.picUrl" mode="aspectFit"></image> -->
    <!-- <slider value="{{currentTime}}" min="0" max="{{duration}}" step="1" bindchange="onSeek"></slider> -->
  </view>
</view>
</template>

<style lang="scss" scoped>
/* player.wxss */
.player-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20rpx;
}

.player-controls {
  display: flex;
  align-items: center;
  margin-top: 20rpx;
}

.player-controls image {
  width: 60rpx;
  height: 60rpx;
}

slider {
  flex-grow: 1;
  margin: 0 20rpx;
}
</style>
