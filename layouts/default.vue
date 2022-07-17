<template>
  <div class="_layout max-w-[450px] mx-auto bg-accent-1 h-[100vh]">
    <LazyTheHeader/>
    <div>
      <slot/>
    </div>
    <LazyTheFooter/>
  </div>
</template>