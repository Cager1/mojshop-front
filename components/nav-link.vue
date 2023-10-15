<script lang="ts" setup>
defineProps({
  href: String,
})
</script>

<template>
  <nuxt-link class="bg-opacity-30 font-bold  text-center text-md md:text-xl py-2 px-4" active-class="text-red-500" :to="href">
  <div class="hover:scale-125 transition flex justify-center items-center ease-in-out duration-300">
      <slot />
  </div>
  </nuxt-link>

</template>

<style scoped></style>
