<script lang="ts" setup>
</script>

<template>
  <div class="sm:grid flex flex-col justify-center sm:gap-2 sm:grid-cols-2 min-h-screen px-10 py-5">
    <div class="sm:h-full z-20">
      <div class="flex flex-col sm:h-full justify-center">
        <div class="mb-2">
          <span class="text-3xl text-red-500">Dobrodošli na MojShop</span>
        </div>
        <h2 class="flex text-lg sm:text-xl">
          Vaša destinacija za izvanredno i brzo riješenje vaše web trgovine. Bez obzira jeste li startup ili već
          postojeća tvrtka, tu smo da vam pomognemo uspjeti online.
        </h2>
        <div class="flex sm:hidden items-center h-full">
          <img src="/background1.png" alt="computer-background">
        </div>
        <div>
          <Button class="mt-10 w-full rounded-lg hover:bg-red-500" href="/">
            <Icon name="fa:shopping-cart" size="20px" class="mr-2" />
            Isprobaj
          </Button>
        </div>
      </div>
    </div>
    <div class="hidden sm:block -z-10 ">
      <div class="flex items-center h-full">
        <img src="/background1.png" alt="computer-background">
      </div>

    </div>
  </div>
</template>

<style scoped></style>
