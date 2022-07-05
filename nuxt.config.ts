import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            NUXT_PUBLIC_SERVICE_URL: 'https://truyenmem.herokuapp.com'
        },
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
