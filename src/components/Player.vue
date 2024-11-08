<template>

  <Teleport to="body">
    <div class="player">播放器组件</div>
  </Teleport>

</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
</script>

<style lang="scss" scoped>
.player {
  background: white;
  height: 100rpx;
  width: 100vw;
  position: fixed;
  bottom: 100rpx;
  z-index: 6;
}
</style>
