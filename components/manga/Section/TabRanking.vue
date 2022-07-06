<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

const categories = ref({
	"Top Tháng": [

	],
	"Top Tuần": [

	],
	"Top Ngày": [

	],
});

const wComic = useState('switch:comic');
const comic = ref("");
const { data: month, pending, refresh } = await useAsyncData('month', () => $fetch(`/api/top-month?comic=${comic.value}`));

// const { data: week } = useLazyFetch("/api/top-week", {
// 	initialCache: true,
// 	lazy: true,
// });

const { data: week } = await useAsyncData('month', () => $fetch(`/api/top-week?comic=${comic.value}`));


// const { data: day } = useLazyFetch("/api/top-day", {
// 	initialCache: true,
// 	lazy: true,
// });

const { data: day } = await useAsyncData('month', () => $fetch(`/api/top-day?comic=${comic.value}`));


watchEffect(() => {
	categories.value["Top Tháng"] = month.value;
	categories.value["Top Tuần"] = week.value;
	categories.value["Top Ngày"] = day.value;
})

watch([wComic], () => {
	categories.value["Top Tháng"] = month.value;
	categories.value["Top Tuần"] = week.value;
	categories.value["Top Ngày"] = day.value;
	console.log("categories", categories.value);
	comic.value = wComic.value;
	refresh();
})

</script>

<template>
	<div class="mt-4" v-if="!pending">
		<ClientOnly>
			<TabGroup>
				<TabList class="flex space-x-1 rounded-xl p-1 bg-deep-black my-6" style="height: 45px">
					<Tab v-for="category in Object.keys(categories)" as="template" :key="category"
						v-slot="{ selected }">
						<button :class="[
							'w-full rounded-lg py-2.5 font-medium leading-5 text-white-700 text-1xl',
							'focus:outline-none focus:ring-2',
							selected
								? 'bg-white text-gray-700 shadow'
								: 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
						]">
							{{ category }}
						</button>
					</Tab>
				</TabList>

				<TabPanels class="mt-2">
					<TabPanel v-for="(mangas, i) in Object.values(categories)" :key="i">
						<LazyMangaSectionRankList :mangas="mangas" />
					</TabPanel>
				</TabPanels>
			</TabGroup>
		</ClientOnly>
	</div>
</template>
