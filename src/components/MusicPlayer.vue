<template>
  <div class="whole">
    
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
</script>

<style lang="scss" scoped>
.whole {
  height: 100vh;
  width: 100vw;

  background: green;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  // #ifndef WEB
  top: 88rpx;
  bottom: 100rpx;
  // #endif
  z-index: 6;
}
</style>
