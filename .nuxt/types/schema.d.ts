import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
     app: {
        baseURL: string,

        buildAssetsDir: string,

        cdnURL: string,
    },

    NUXT_PUBLIC_SERVICE_URL: string,
  }
  interface PublicRuntimeConfig {
  
  }
}