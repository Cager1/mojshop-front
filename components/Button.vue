<script lang="ts" setup>
defineProps({
  color: String,
})
</script>

<template>
  <button class="hover:bg-blue-700 bg-blue-500 cursor-pointer text-white font-bold py-2 px-4" :class="color">
    <slot />
  </button>
</template>

<style scoped></style>
