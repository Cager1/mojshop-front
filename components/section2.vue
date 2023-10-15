<script lang="ts" setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
  <div style="font-size: 20px" class="md:grid-cols-2 md:grid gap-2 text-white w-full py-10  px-10 bg-cyan-800">
      <div class="flex flex-col sm:flex-row my-10 items-center">
        <div class="mr-5">
          <img src="/features/responsive.png" height="150" width="150" style="min-width: 75px; min-height: 75px" alt="responsive">
        </div>
        <div class="text-center sm:text-left">
          <span class="text-red-300">Prilagođeni Dizajn
          </span> Naši dizajneri stvaraju web trgovine koje odražavaju vaš brend i privlače kupce svojim estetskim i funkcionalnim pristupom.
        </div>
      </div>
    <div class="flex my-10 flex-col-reverse sm:flex-row  items-center">
      <div class="mr-5 text-center sm-text-right">
        <span class="text-red-300">
          Preglednost
        </span> Kroz intuitivno korisničko sučelje i navigaciju osiguravamo da posjetitelji lako pronađu ono što traže.
      </div>
      <div>
        <img src="/features/user-friendly.png" height="150" width="150" style="min-width: 75px; min-height: 75px" alt="user friendly">
        </div>
    </div>
    <div class="flex my-10  flex-col sm:flex-row items-center">
      <div class="mr-5">
        <img src="/features/security.png" height="150" width="150" style="min-width: 75px; min-height: 75px" alt="security">
      </div>
      <div class="text-center sm:text-left">
        <span class="text-red-300">Sigurnost</span>
        Vaša web trgovina bit će opremljena najnovijim sigurnosnim standardima kako biste osigurali zaštitu osobnih podataka i plaćanja kupaca.
      </div>
    </div>
    <div class="flex my-10  flex-col-reverse sm:flex-row items-center">
      <div class="mr-5 text-center sm:text-right">
        <span class="text-red-300">
          Analitika
        </span> Pratimo uspjeh vaše web trgovine i pružamo vam informacije za donošenje ključnih poslovnih odluka.
      </div>
      <div>
        <img src="/features/analytics.png" height="150" width="150" style="min-width: 75px; min-height: 75px" alt="analytics">
      </div>
    </div>
  </div>
</template>

<style scoped></style>
