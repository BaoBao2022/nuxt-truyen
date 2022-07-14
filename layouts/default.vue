<script setup>
const config = useRuntimeConfig();
const publicConfig = config.public;
</script>

<template>
  <div class="_layout">
    <LazyTheHeader/>
    <div class="overflow-x-hidden ">
      <slot/>
    </div>
    <LazyTheFooter/>
  </div>

</template>