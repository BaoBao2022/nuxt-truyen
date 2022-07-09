<script setup>
import { ref } from "vue";
const comic = ref("");
const { data: month, pending, refresh } = useFetch(`/api/top-month?comic=${comic.value}`);
</script>

<template>
	<div class="mt-4" v-if="!pending">
    <LazyMangaSectionRankList :mangas="month" />
	</div>
</template>
