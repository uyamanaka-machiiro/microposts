import type { NuxtConfig } from '@nuxt/types'
import type { StorybookConfig } from '@storybook/core/types'
import { withTests } from '@storybook/addon-jest'
import jestResult from './tests/.jest-result.json'

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
  ignore: ['coverage', 'tests', 'jest.config.ts'],
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

const storybook: StorybookConfig & { [key: string]: any } = {
  // as StorybookConfig ?
  stories: [
    '~/tests/**/*.stories.mdx',
    '~/tests/**/*.story.mdx',
    '~/tests/**/*.stories.@(js|jsx|ts|tsx)',
    '~/tests/**/*.story.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-controls',
    '@storybook/addon-jest',
    '@storybook/addon-notes',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
  ],
  webpackFinal(config) {
    config.module?.rules.push({
      test: /\.stor(y|ies)\.ts$/,
      loaders: [require.resolve('@storybook/source-loader')],
      enforce: 'pre',
    })
    return config
  },
  decorators: [withTests({ results: jestResult })],
}

export default { storybook, ...config }
