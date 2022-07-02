import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        NUXT_PUBLIC_SERVICE_URL: process.env.NUXT_PUBLIC_SERVICE_URL
    },
    meta: {
        title: "Truyện tranh online free",
    },
    // ssr: true,
    modules: ['@nuxtjs/color-mode', '@vueuse/nuxt',],
    colorMode: {
        preference: 'dark', // default value of $colorMode.preference
        fallback: 'dark', // fallback value if not system preference found
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '-mode',
        storageKey: 'nuxt-color-mode'
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {}
                }
            }
        }
    },
    css: [
        '~/assets/css/main.css',
    ],
})
