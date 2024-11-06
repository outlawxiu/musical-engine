<<<<<<< HEAD
=======
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

>>>>>>> 0d5eead17f1e07c8610c2529e9ab42731604d027
<template>
  我的
  <view @click="toLogin">去登陆</view>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
const toLogin = () => {
    uni.navigateTo({
        url : "/pages/login/login"
    })
}
</script>

<style lang="scss" scoped></style>
