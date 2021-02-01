import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  head: {
    title: 'microposts-web',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['@/assets/sass/custom.sass'],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build', 'nuxt-typed-vuex'],
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios', ['@nuxtjs/moment', ['ja']]],
  build: {},
  server: {
    port: 8000,
  },
  bootstrapVue: {
    icons: true,
    bootstrapCss: false,
    bootstrapVueCss: false,
  },
}

export default config
