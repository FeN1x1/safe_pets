<template>
  <div class="relative" @mouseover="showMenu" @mouseleave="hideMenu">
    <button
      class="
        text-base
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
      <span>{{ $t('header.navigation.information') }}</span>
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
          overflow-hidden
          border
          mt-4
          z-30
          lg:z-10
        "
        :class='getClassForMenu()'
      >
        <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-6">
          <div>
            <NavButton :isDropdown='true' :name="$t('header.navigation.roadmap')" to="roadmap" />
          </div>
          <div>
            <NavButton :isDropdown='true' :name="$t('header.navigation.ourTeam')" to="ourTeam" />
          </div>
          <div>
            <NavButton :isDropdown='true' :name="$t('header.navigation.faq')" to="faq" />
          </div>
          <div>
            <NavButton :isDropdown='true' :name="$t('header.navigation.contact')" to="contactUs" />
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
    getClassForMenu() {
      return {
        'w-40 mr-4': ['sk', 'cz'].includes(this.$i18n.locale),
        'w-32': this.$i18n.locale === 'en'
      }
    }
  },
}
</script>