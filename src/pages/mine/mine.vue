<script setup lang='ts'>
import { ref} from 'vue'
import { getBannerApi } from '../../services/index'
import type { bannersItem } from '../../services/type'

const songs = ref<bannersItem[]>([])

const getSongList = async () => {
    try{
      const res = await getBannerApi()
      songs.value = res.data.banners

    }catch(e){
      console.log(e)
    }
}

getSongList()
</script>

<template>
  <div class="mine">
    <swiper>
      <swiper-item v-for="(song, index) in songs" :key="song.targetId">
        <image mode="widthFix" :src="song.imageUrl" />
      </swiper-item>
    </swiper>

  </div>
</template>

<style lang="scss" scoped>
    
</style>
