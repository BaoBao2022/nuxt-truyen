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

const { data: month, pending } = useLazyFetch("/api/top-month", {
	initialCache: true,
	lazy: true,
});

const { data: week } = useLazyFetch("/api/top-week", {
	initialCache: true,
	lazy: true,
});

const { data: day } = useLazyFetch("/api/top-day", {
	initialCache: true,
	lazy: true,
});


watchEffect(() => {
	categories.value["Top Tháng"] = month.value;
	categories.value["Top Tuần"] = week.value;
	categories.value["Top Ngày"] = day.value;
})

</script>

<template>
	<div class="mt-4" v-if="!pending">
		<ClientOnly>
			<TabGroup>
				<TabList class="flex space-x-1 rounded-xl p-1 bg-deep-black" style="height: 45px">
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
