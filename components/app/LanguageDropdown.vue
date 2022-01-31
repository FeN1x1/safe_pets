<template>
  <div class="relative ml-6" @mouseover="showMenu" @mouseleave="hideMenu">
    <button
      class="
        text-base
        uppercase
        flex
        items-center
        text-gray-100
        transition-colors
        duration-200
        hover:text-green-secondary
      "
      @focus="showMenu"
      @keydown.shift.tab="hideMenu"
      @keydown.esc.exact="hideMenu"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
      <nuxt-img
        preload
        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
        :src="`flags/${flagLocale()}`"
        alt="flag"
        class="w-6 h-6"
      />
      <span class="ml-2 pt-1">{{ locale }}</span>
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          class="heroicon-ui"
          d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
        ></path>
      </svg>
    </button>
    <transition name="mega-menu-fade">
      <div
        v-show="isVisible"
        class="
          mega-menu
          absolute
          normal-case
          font-normal
          bg-white
          shadow-md
          rounded-lg
          lg:w-20
          overflow-hidden
          border
          mt-4
          w-full
          z-30
          lg:z-10
        "
      >
        <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-6">
          <div>
            <nuxt-link
              :to="switchLocalePath('en')"
              class="
                -m-4
                p-3
                flex
                items-start
                rounded-lg
                hover:bg-green-secondary
              "
            >
              <span class="ml-2 capitalize">EN</span>
            </nuxt-link>
          </div>

          <div>
            <nuxt-link
              :to="switchLocalePath('sk')"
              class="
                -m-4
                p-3
                flex
                items-start
                rounded-lg
                hover:bg-green-secondary
              "
            >
              <span class="ml-2 capitalize">SK</span>
            </nuxt-link>
          </div>

          <div>
            <nuxt-link
              :to="switchLocalePath('cz')"
              class="
                -m-4
                p-3
                flex
                items-start
                rounded-lg
                hover:bg-green-secondary
              "
            >
              <span class="ml-2 capitalize">CZ</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  mounted() {
    this.menuItems = document.querySelectorAll('.mega-menu a')
  },
  data() {
    return {
      isVisible: false,
      menuItems: null,
      focusedIndex: 0,
    }
  },
  methods: {
    showMenu() {
      this.isVisible = true
    },
    hideMenu() {
      this.isVisible = false
      this.focusedIndex = 0
    },
    startArrowKeys() {
      this.menuItems[0].focus()
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1

      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1

      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusItem() {
      this.menuItems[this.focusedIndex].focus()
    },
    flagLocale() {
      switch (this.$i18n.locale) {
        case 'en':
          return 'united-kingdom.png'
        case 'sk':
          return 'slovakia.png'
        case 'cz':
          return 'czech-republic.png'
      }
    },
    switchLocale() {
      this.$router.push(this.$route.path.split('#'))
      return this.switchLocalePath('sk')
    },
  },
  computed: {
    locale() {
      return this.$i18n.locale
    },
  },
}
</script>
