export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'safe_pets',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  googleFonts: {
    families: {
      Montserrat: [500],
      Sora: [800],
      Nunito: [500],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/styles.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-scrollTo.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  modules: [
    // Simple usage
    'nuxt-breakpoints',
  ],

  // Another way to use options
  breakpoints: {
    // default options
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    options: {
      polyfill: true,
      throttle: 200
    }
  }
}
