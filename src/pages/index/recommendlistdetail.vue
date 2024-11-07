<script lang="ts" setup>
import { ref } from 'vue';
import type { hotListItem } from '../../services/type';
import { playlistDetailApi } from '../../services/index';
const recommendListDetail = ref<hotListItem[]>([]);
const playlistId = 'id';
playlistDetailApi(playlistId).then( res => {
    recommendListDetail.value = res.data.playlist;
    // console.log(res);
})
</script>

<template>

</template>

<style lang="scss" scoped>

</style>
