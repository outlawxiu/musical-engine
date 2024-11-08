<template>
  <!-- #ifdef WEB -->
  <Teleport to="body" :disabled="playerStore.show">
    <div class="player">
      <div class="playerInfo"></div>
      <div class="playIcon"  @click="playerStore.isDetail = true">播放图标</div>
      <div class="listIcon" @click="playerStore.showList = true">列表图标</div>
    </div>
    <div
      class="playerListDialog"
      v-if="playerStore.showList"
      @click="playerStore.showList = false"
    >
      <div class="playerList">
        <view class="tip">播放列表</view>
        <view class="allMusic">
          <view
            v-for="item in playerStore.playList"
            :key="item"
            class="musicItem"
          >
          </view>
          <view v-for="item in 10" :key="item" class="musicItem"
            >{{ item }}
          </view>
        </view>
      </div>
    </div>
    <MusicPlayer>

    </MusicPlayer>
  </Teleport>
    <!-- #endif -->
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { usePlayerStore } from "../store/musicPlayer";
import MusicPlayer from "../components/MusicPlayer.vue";
const playerStore = usePlayerStore();
//telport 会在任意页面显示 这有问题
</script>

<style lang="scss" scoped>
.player {
  background: white;
  height: 100rpx;
  width: 100vw;
  position: fixed;
  bottom: 100rpx;
  z-index: 6;
  display: flex;
  padding: 0 20rpx;
  box-sizing: border-box;
  align-self: center;
}
.playerInfo {
  flex: 1;
  height: 100%;
}
.listIcon {
  height: 100%;
}
.playerListDialog {
  position: fixed;
  bottom: 100rpx;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
}
.playerList {
  position: absolute;
  max-height: 700rpx;
  // top: 0;
  bottom: 100rpx;
  left: 0;
  right: 0;
  background: white;
  display: flex;
  flex-direction: column;
}
.tip{
  height: 100rpx;
  line-height: 100rpx;
  padding: 0 20rpx;
  background: #eee;
}
.allMusic {
  overflow-y: auto;
}
.musicItem {
  height: 100rpx;
  line-height: 100rpx;
  padding: 0 40rpx;
  border-bottom: 2rpx solid #eee;
}
</style>
