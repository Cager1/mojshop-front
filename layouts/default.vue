<script lang="ts" setup>
const visible = ref(false)

const toggle = () => {
  visible.value = !visible.value
}
</script>

<template>
  <div>
    <header>
      <div class="flex fixed p-3 bg-white justify-between w-full h-14" style="z-index: 9999">
        <h1>
          MojShop
        </h1>
        <div>
          <div class="md:hidden">
            <Icon class="cursor-pointer" @click="toggle" name="fa:bars" size="30px" />
          </div>
          <div class="flex-row bg-white md:flex absolute md:static left-0 w-full md:w-auto" :class="visible ? 'flex-row md:flex' : 'hidden md:flex'">
              <nav-link href="/">Početna</nav-link>
          </div>

        </div>
      </div>
    </header>
    <main>
      <div  class="z-10 pt-14">
        <slot />
      </div>

    </main>
    <footer>
      <div class="flex justify-center items-center bg-gray-800 text-white h-14">
        <span>
          © 2021 MojShop
        </span>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
