<script setup lang='ts'>
import { ref } from 'vue'
import type { dynamicItem } from '../../../services/type';
const dynamicList = defineModel<dynamicItem[]>();
console.log(dynamicList.value);
</script>

<template>
    <view class="recommend-content">
        <view v-for="(item, index) in dynamicList" :key="index" class="item">

            <view>
                <image :src="item.user.avatarUrl" class="pic" />
                <view class="title">{{ item.user.nickname }}</view>
            </view>
            <view class="content">
                <text>{{ JSON.parse(item.json).msg }}</text>
            </view>
        </view>
    </view>
</template>

<style lang="scss" scoped>
.item {
    min-height: 80px;
    border-bottom: 1px solid #eee;
    padding: 10px;

    .title {
        display: flex;
        align-items: center;
        height: 50px;

        image {
            width: 50px;
            height: 50px;
            border: 1px solid #eee;
            border-radius: 50%;
            margin-right: 15px;
        }
    }

    .content {
        padding-left: 65px;
    }

    .pic {
        margin-top: 10px;

        image {
            width: 80px;
            height: 80px;
            border: 1px solid #ccc;
            margin-right: 4px;
        }
    }

    .bar {
        font-size: 14px;
        color: #666;
        display: flex;
        justify-content: space-between;
    }
}
</style>
