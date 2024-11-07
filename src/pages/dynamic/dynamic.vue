<script setup lang='ts'>
import { ref } from 'vue'
import { dynamicApi } from '../../services/index';
import type { dynamicItem } from '../../services/type';
import Follow from './components/follow.vue';
import Recommend from './components/recommend.vue';

const dynamicList = ref<dynamicItem[]>([])
const navTabs = ref<string[]>(['关注', '推荐'])
const navTabIndex = ref<number>(1)

const getDynamicList = () =>{
    dynamicApi().then(res =>{
        dynamicList.value = res.data.events
    })
}
getDynamicList()

</script>

<template>
    <view class="dynamic">
        <view class="nav">
            <img src="../../static/01.png" alt="" class="img1">
            <view class="nav-tab">
                <view v-for="(item, $index) in navTabs" :key="item" :class="{active: navTabIndex === $index}"
                    @click="navTabIndex = $index">{{ item }}</view>

            </view>
            <img src="../../static/music_1.png" alt="" class="img2">
        </view>
        <Follow v-if="navTabIndex === 0"></Follow>
        <Recommend v-else v-model="dynamicList"></Recommend>
    </view>
</template>

<style lang="scss" scoped>
.dynamic{
    padding: 0 30rpx;
}
.nav{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;
    .img1{
        width: 50rpx;
        height: 50rpx;
    }
    .img2 {
        width: 60rpx;
        height: 60rpx;
    }
    .nav-tab{
        flex: 1;
        display: flex;
        margin: 0 60rpx;
        view{
            flex: 1;
            text-align: center;
            font-weight: bolder;
            font-size: 40rpx;
        }
        .active {
            color: #f00;
        }
    }
}
</style>
