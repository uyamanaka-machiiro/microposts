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
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build'],
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/auth'],
  build: {},
  server: {
    port: 8000,
  },
}

export default config
