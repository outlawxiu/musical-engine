<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
<<<<<<< HEAD

    <Child />
=======
    <!-- #ifdef H5 -->  
     <!-- 除了H5页面显示，其余页面不显示 -->
    <view class="red">
      这是红色
    </view>-=
    <!-- #endif -->
>>>>>>> 0717
  </view>
</template>

<script setup lang="ts">


import { ref } from 'vue'
const title = ref('Hello')
</script>

<style scoped lang="scss">

</style>
