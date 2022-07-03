import {defineNuxtConfig} from 'nuxt'
// #NUXT_PUBLIC_SERVICE_URL=http://baobaoapp.herokuapp.com
// NUXT_PUBLIC_SERVICE_URL=https://1847-2a09-bac0-412-00-81d-6909.ap.ngrok.io

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            NUXT_PUBLIC_SERVICE_URL: 'http://baobaoapp.herokuapp.com',
        },
        // NUXT_PUBLIC_SERVICE_URL: 'https://1847-2a09-bac0-412-00-81d-6909.ap.ngrok.io',
        // PUBLIC_API: 'https://1847-2a09-bac0-412-00-81d-6909.ap.ngrok.io'
    },
    meta: {
        title: "Truyện tranh online free",
        link: [{ rel: 'icon', type: 'image/x-icon', href: './assets/favicon.png' }],
    },
    ssr: true,
    modules: ['@nuxtjs/color-mode'],
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
        transpile: ['@heroicons/vue'],
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
        '~/assets/css/main.css'
    ],
})
