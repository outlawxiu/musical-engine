<template>
  <div class="whole">
    <img :src="userInfo.profile?.avatarUrl" class="avatar" />
    <view @click="toLogin">立即登录></view>
  </div>
  <Player></Player>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { getAccountInfo } from "../../services/index";
import Player from "../../components/Player.vue";
import { useUserInfoStore } from "../../store/userInfo";
const user = useUserInfoStore();
const userInfo = ref(uni.getStorageSync("userInfo") ? JSON.parse(uni.getStorageSync("detailInfo")) : user.detailInfo);
console.log(userInfo.value);

const getInfo = () => {
  uni.getStorage({
    key: "userInfo",
    success: function (res) {
      const cookies = JSON.parse(res.data).cookie;
      // console.log(decodeURIComponent(cookie));
      getAccountInfo(cookies)
    },
  });
};
getInfo();

const toLogin = () => {
  uni.navigateTo({
    url: "/pages/login/login",
  });
};
</script>

<style lang="scss" scoped>
.whole {
  height: 100vh;
  width: 100vw;
  background: url("http://p1.music.126.net/2zSNIqTcpHL2jIvU6hG0EA==/109951162868128395.jpg") no-repeat;
  background-size: contain;
  // #ifdef WEB
  height: calc(100vh - 188rpx);
  // #endif
}
</style>
