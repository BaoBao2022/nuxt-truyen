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

// watchEffect(() => {
// 	useState('page:loading', () => pending.value);
// })
</script>

<template>
	<div v-show="!pending">
		<HomePageSpotlight />
		<MangaSectionSwiper />
		<section class="w-[90%] mx-auto min-w-[333px] w-max-[1300px] mt-6 overflow-x-hidden" style="background: #000">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				<MangaSectionNewUpdated :mangas="topAll" />
				<MangaSectionTabRanking />
			</div>
		</section>
	</div>
</template>
