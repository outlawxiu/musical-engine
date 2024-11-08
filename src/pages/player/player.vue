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
  } catch (error) {
    console.log(error)
  }
}
music()

</script>

<template>
  <view class="player-container">
    <audio :src="url" controls></audio>
  </view>
</template>

<style lang="scss" scoped>
.player-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20rpx;
}
</style>
