<script lang="ts" setup>
import Rankings from '@/components/Rankings.vue';
import { topListDetailApi } from '../../services/index'
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
const topListDetail = ref([]);

onLoad((option) => {
    topListDetailApi(option.id).then(res => {
        topListDetail.value = res.data.list;
        console.log(res.data);
    })
    console.log(id);
})
</script>

<template>
    <view class="toplist">
        <Rankings style="margin-top: 30px;margin-left: 10px;" />
        <view class="box">
            <view class="title-box">
                <text class="title">🎸官方榜</text>
            </view>
            <view class="content-box">
                <view class="top">
                    <text class="name">热歌榜</text>
                    <text>更新</text>
                </view>
                <view class="down">
                    <view class="img">
                        <image src="" alt="" />
                    </view>
                    <view class="info">
                        <text class="name">1 周杰伦 - 七里香</text>
                        <text class="author">2 周杰伦</text>
                        <text class="author">2 周杰伦</text>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<style lang="scss" scoped>
.toplist {
    padding: 0 10px;

    .title-box {
        font-size: 20px;
        font-weight: 600;
    }
}

.content-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
    height: 140px;
    border: 1px solid #eee;
    border-radius: 20px;
    background: #eee;

    .top {
        display: flex;
        justify-content: space-between;
        padding: 10px;

        .name {
            font-size: 25px;
            font-weight: 600;
            color: #333;
        }
    }

    .down {
        display: flex;
        flex-wrap: wrap;

        .img {
            width: 80px;
            height: 80px;
            background: pink;
            border-radius: 20px;
            margin-left: 10px;
        }

        .info {
            display: flex;
            flex-direction: column;
            margin-left: 20px;

            text {
                padding-top: 6px;
                color: #333;
                font-weight: 600;

            }
        }
    }
}
</style>
