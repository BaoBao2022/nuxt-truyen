<script lang="ts" setup>
import { useFetch, useLazyFetch } from "#imports";

const [
	{ data: topAll, pending },
] = await Promise.all([
	useFetch("/api/top-all", {
		initialCache: true,
		lazy: false,
	})
]);
</script>

<template>
	<div v-show="!pending">
		<LazyHomePageSpotlight />
		<LazyMangaSectionSwiper title="Truyện cập nhật mới" />
		<section class="w-[90%] mx-auto min-w-[333px] w-max-[1300px] mt-6 overflow-x-hidden" style="background: #000">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				<LazyMangaSectionNewUpdated :mangas="topAll" title="Truyện nổi bật nhất" />
				<LazyMangaSectionTabRanking />
			</div>
		</section>
		<!-- <LazyMangaSectionSwiper :mangas="newMangas" title="Truyện mới" /> -->
	</div>
</template>
