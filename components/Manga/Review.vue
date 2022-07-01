<script setup>
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/vue'
import {ChevronDownIcon} from '@heroicons/vue/solid'

defineProps({
  review: {
    type: Object,
  }
})
</script>

<template>
  <div class="flex-col-reverse flex">
    <Disclosure v-slot="{ open }">
      <DisclosureButton>
        <button class="flex w-full flex-col items-center bg-cyan-300/0 text-white">Tóm tắt
          <ChevronDownIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-8 w-8"
          />
        </button>
      </DisclosureButton>
      <DisclosurePanel class="transform scale-100 opacity-100">
        <p class="text-white">
          {{ review }}
        </p>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>
