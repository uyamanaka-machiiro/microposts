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
  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: false,
      home: '/',
    },
  },
  css: ['@/assets/sass/custom.sass'],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build', 'nuxt-typed-vuex'],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/auth',
    '@nuxtjs/axios',
    // '@nuxtjs/proxy',
  ],
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
