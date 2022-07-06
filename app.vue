<template>
  <NuxtLoadingBar/>
  <NuxtPage/>
</template>

<script setup lang="ts">
import {useColorMode} from "#imports";

const useColor = useColorMode()
console.log("useColor", useColor);

useColor.preference = "dark";
</script>