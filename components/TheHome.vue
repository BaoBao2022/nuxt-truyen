<script lang="ts" setup>
import { useFetch, useLazyFetch } from "#imports";

const { data: topAll, pending } = useFetch("/api/top-all", {
	initialCache: true,
	lazy: false,
});
</script>

<template>
	<div v-if="pending">
		<CommonPageLoading />
	</div>
	<div v-else>
		<HomePageSpotlight />
		<MangaSectionSwiper />
		<section class="w-[95%] mx-auto min-w-[333px] w-max-[1300px] mt-6 overflow-x-hidden">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
				<MangaSectionNewUpdated :mangas="topAll" />
				<MangaSectionTabRanking />
			</div>
		</section>
	</div>
</template>
