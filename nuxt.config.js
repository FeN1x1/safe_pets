export default {
  server: {
    port: '8000' // default: localhost
  },
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/styles.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-scrollTo.js',
    { src: '~/plugins/vue-burger-menu.js', ssr: false },
    { src: '~/plugins/vue-cookie-law.js', ssr: false },
    '~/plugins/vee-validate.js',
    '~/plugins/i18n.js',
    { src: '~/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '~/plugins/vue-screen.js', mode: 'client' }

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/html-validator',
    '@nuxtjs/google-analytics'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules']
  },

  modules: [
    // Simple usage
    "vue-toastification/nuxt",
    '@nuxtjs/axios',
    'nuxt-breakpoints',
    '@nuxtjs/i18n',
    'nuxt-seo',
    '@nuxtjs/robots',
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
      throttle: 200,
    },
  },

  googleAnalytics: {
    id: "UA-217138328-1",
    debug: { sendHitTask: true }
  },

  toast: {
    timeout: 5000,
    maxToasts: 2,
    pauseOnFocusLoss: false,
    pauseOnHover: false
  },

  robots:  {
    UserAgent: '*',
    Disallow: '/not-found'
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'cz', iso: 'cs-CZ', file: 'cz.json' },
      { code: 'sk', iso: 'sk-SK', file: 'sk.json' },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },
}
