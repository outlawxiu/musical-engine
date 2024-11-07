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
