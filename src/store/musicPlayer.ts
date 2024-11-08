import { defineStore } from "pinia";
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";

export const usePlayerStore = defineStore("player", () => {
  //播放模式
  const playTypeList = ref([
    { name: "顺序播放", value: "sequence" },
    { name: "单曲循环", value: "single" },
    { name: "随机播放", value: "random" },
  ]);
  //播放列表
  const playList = ref([]);
  //当前播放的音乐
  const currentMusic = ref("");
  //当前播放的音乐的索引
  const currentIndex = ref(0);
  //播放器是否显示
  const show = ref(false);
  //播放器是否正在播放
  const isPlaying = ref(false);
  //播放列表是否显示
  const showList = ref(false);
  //当前播放模式
  const playType = ref("random");
  // 是否显示详细的播放器
  const isDetail = ref(false);
  //播放器的音量
  const volume = ref(1);
  return {
    playList,
    currentMusic,
    currentIndex,
    show,
    isPlaying,
    showList,
    isDetail
  };
});
