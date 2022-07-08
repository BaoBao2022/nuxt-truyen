<script lang="ts" setup>
</script>

<template>
	<HomePageSpotlight />
	<MangaSectionSwiper />
	<section class="w-[95%] mx-auto min-w-[333px] w-max-[1300px] mt-6 overflow-x-hidden">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
			<MangaSectionNewUpdated />
			<MangaSectionTabRanking />
		</div>
	</section>
</template>
