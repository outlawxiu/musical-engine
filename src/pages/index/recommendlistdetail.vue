<script lang="ts" setup>
import { ref } from 'vue';
import type { listItem } from '../../services/type';
import { playlistDetailApi } from '../../services/index';
import { onLoad } from '@dcloudio/uni-app';
const recommendListDetail = ref<listItem[]>([]);

onLoad((option) => {
    playlistDetailApi(option.id).then(res => {
        recommendListDetail.value = res.data.playlist;
        console.log(res.data.playlist);
    })
    // console.log(option.id)
})
</script>

<template>
    <view>
        <view class="nav">
            <image :src="recommendListDetail.coverImgUrl" alt="" class="coverImg" />
            <view class="desc">
                <text>{{ recommendListDetail.name }}</text>
                <view class="creator">
                    <image :src="recommendListDetail?.creator?.avatarUrl" alt="" class="avatar" />
                    <text class="nickname">{{ recommendListDetail.creator.nickname }}</text>
                </view>
                <view class="btn">
                    <button size="mini" v-for="(item, idx) in recommendListDetail.tags" :key="idx">{{ item }}</button>
                </view>
            </view>
        </view>
        <text class="description">{{ recommendListDetail.description }}</text>
        <view class="songs" v-for="(item, idx) in recommendListDetail.tracks" :key="idx">
            <text class="id">
                {{ idx + 1 }}
            </text>
            <view class="song" style="display: flex; flex-direction: column;">
                <text class="artists">{{ item.ar.map(item => item.name).join('、') }}</text>
            </view>
        </view>
    </view>
</template>

<style lang="scss" scoped>
.nav {
    display: flex;

    .desc {
        display: flex;
        flex-direction: column;

        .avatar {
            width: 40px;
            height: 40px;
            border-radius: 30px;
        }
    }

}

.description {
    margin-top: 20px;
    font-size: 14px;
    line-height: 24px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    border: 1px solid #ccc;
}

.coverImg {
    width: 150px;
    height: 150px;
    border-radius: 20px;
}

.creator {
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.songs {
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
}
</style>
