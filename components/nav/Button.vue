<template>
  <div>
    <template v-if="desktop">
      <nuxt-link
        v-if="!checkIfHome()"
        :class="getClassForNav()"
        :to="{ path: localePath('/'), hash: `#${to}` }"
      >
        {{ this.name }}
      </nuxt-link>
      <div v-else v-scroll-to="`#${to}`" :class="getClassForNav()">
        {{ this.name }}
      </div>
    </template>
    <template v-else>
      <div
        v-if="!checkIfHome()"
        class="px-4 py-3 text-2xl text-green-secondary cursor-pointer"
      >
        <nuxt-link :to="{ path: localePath('/'), hash: `#${to}` }">
          {{ this.name }}
        </nuxt-link>
      </div>
      <div
        class="px-4 py-3 text-2xl text-green-secondary cursor-pointer"
        v-else
        v-scroll-to="`#${to}`"
      >
        {{ this.name }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    desktop: {
      type: Boolean,
      default: true,
    },
    isDropdown: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    checkIfHome() {
      return (
        this.$route.path === '/' ||
        this.$route.path === '/sk' ||
        this.$route.path === '/cz'
      )
    },
    getClassForNav() {
      return {
        'cursor-pointer nav-item' : !this.isDropdown,
        'cursor-pointer -m-4 p-3 flex items-start rounded-lg hover:bg-green-secondary' : this.isDropdown
      }
    }
  },
}
</script>
