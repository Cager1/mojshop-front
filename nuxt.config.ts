// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-icon'],
    css: [
        '~/assets/css/main.css',
    ],
    // @ts-ignore
    pinia: {
        // @ts-ignore
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },

    autoImport: {
        ['store']: '~/store',
    }

})