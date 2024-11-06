<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import Child from '../../components/index.vue'




import { ref } from 'vue'
const title = ref('Hello')
</script>

<style scoped lang="scss">

</style>
