<template>
  <NuxtLoadingBar/>
  <!-- <LazyCommonSearchLoading v-if="isPageLoading" /> -->
  <NuxtPage/>
</template>

<script setup lang="ts">
import {useColorMode} from "#imports";
// const isPageLoading = useState('page:loading', () => false);

const useColor = useColorMode()
useColor.preference = "dark";
</script>