import {defineNuxtConfig} from "nuxt";

export default defineNuxtConfig({
    ssr: true,
    target: 'server',
    runtimeConfig: {
        public: {
            NUXT_PUBLIC_SERVICE_URL: process.env.NUXT_PUBLIC_SERVICE_URL,
            DOMAIN: process.env.DOMAIN,
            SIZE_NAME: process.env.SIZE_NAME,
        },
    },
    meta: {
        title: "Truyện tranh online - Miễn phí - Không quảng cáo",
        link: [{rel: "icon", type: "image/x-icon", href: "https://i.im.ge/2022/07/15/FotbqY.png"}],
    },
    image: {
        dir: 'public/',
        staticFilename: '[publicPath]/[name]-[hash][ext]',
        domains: ['meetruyen.com', 'meetruyen.netlify.app', 'https://meetruyen.netlify.app', 'www.meetruyen.com', 'https://meetruyen.com'],
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
            "2xl": 1536,
        },
    },
    modules: ["@nuxtjs/color-mode", "@nuxt/image-edge"],
    colorMode: {
        preference: "dark", // default value of $colorMode.preference
        fallback: "dark", // fallback value if not system preference found
        hid: "nuxt-color-mode-script",
        globalName: "__NUXT_COLOR_MODE__",
        componentName: "ColorScheme",
        classPrefix: "",
        classSuffix: "-mode",
        storageKey: "nuxt-color-mode",
    },
    build: {
        transpile: ["@heroicons/vue"],
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    css: ["~/assets/css/main.css"],
});
