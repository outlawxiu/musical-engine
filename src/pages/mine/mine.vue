<template>
  <div class="whole">
    我的

    <img :src="userInfo.profile?.avatarUrl" alt="">
    <view @click="toLogin">去登陆</view>
  </div>
  <Player></Player>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { getAccountInfo } from "../../services/index";
import Player from "../../components/Player.vue";
import { useUserInfoStore } from "../../store/userInfo";
const user = useUserInfoStore();
const userInfo = ref(user.userInfo);
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
  background: pink;
  // #ifdef WEB
  height: calc(100vh - 188rpx);
  // #endif
}
</style>
