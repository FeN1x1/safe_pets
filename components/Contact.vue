<template>
  <article
    id="contactUs"
    class="
      mx-auto
      lg:pb-20 lg:pt-36
      py-8
      lg:py-0
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
    "
  >
    <section class="z-0 grid grid-cols-1 lg:grid-cols-2 sm:mb-8">
      <div class="lg:space-x-10">
        <nuxt-img
          src="notebook.png"
          class="hidden lg:block relative transform scale-150 notebook"
        />
        <nuxt-img
          src="notebook-mobile.png"
          class="block lg:hidden mx-auto px-4 pb-8"
        />
      </div>
      <section class="space-x-10 m-auto lg:ml-auto flex z-10">
        <div class="m-auto p-4 sm:p-0">
          <div :class="{ 'text-width': isLsm }" class="mb-3">
            <p
              v-html="$t('contactUs.text')"
              class="text-3xl text-brown-primary text-left"
            ></p>
          </div>
          <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(onSubmit)">
              <div class="flex flex-col">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="username"
                  rules="username"
                >
                  <input
                    :placeholder="$t('contactUs.placeholder.name')"
                    type="text"
                    label="username"
                    v-model="username"
                    class="
                      flex-grow
                      w-full
                      h-12
                      px-4
                      mb-2
                      transition
                      duration-200
                      bg-white
                      border border-green-secondary
                      rounded-lg
                      shadow-lg
                      appearance-none
                      md:mr-2
                      focus:border-black focus:outline-none focus:shadow-outline
                    "
                  />
                  <transition name="fade" mode="out-in">
                    <span v-if="errors[0]" class="p-2 mb-1 text-purple-primary">
                      {{ errors[0] }}
                    </span>
                  </transition>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors }"
                  name="email"
                  rules="email"
                >
                  <input
                    :placeholder="$t('contactUs.placeholder.email')"
                    label="email"
                    type="email"
                    v-model="email"
                    class="
                      flex-grow
                      w-full
                      h-12
                      px-4
                      mb-2
                      transition
                      duration-200
                      bg-white
                      border border-green-secondary
                      rounded-lg
                      shadow-lg
                      appearance-none
                      focus:border-green-primary
                      focus:outline-none
                      focus:shadow-outline
                    "
                  />
                  <transition name="fade" mode="out-in">
                    <span v-if="errors[0]" class="p-2 text-purple-primary">
                      {{ errors[0] }}
                    </span>
                  </transition>
                </ValidationProvider>
                <div class="mt-1">
                  <ValidationProvider
                    v-slot="{ errors }"
                    name="message"
                    rules="message"
                  >
                    <textarea
                      label="message"
                      name="message"
                      rows="4"
                      v-model="message"
                      class="
                        flex-grow
                        w-full
                        p-4
                        transition
                        duration-200
                        bg-white
                        border border-green-secondary
                        rounded-lg
                        shadow-lg
                        appearance-none
                        md:mb-0
                        focus:border-green-primary
                        focus:outline-none
                        focus:shadow-outline
                      "
                      :placeholder="$t('contactUs.placeholder.message')"
                    />
                    <transition name="fade" mode="out-in">
                      <span v-if="errors[0]" class="p-2 text-purple-primary">
                        {{ errors[0] }}
                      </span>
                    </transition>
                  </ValidationProvider>
                </div>
              </div>
              <div class="py-2">
                <button
                  type="submit"
                  class="button-wider w-32 hover:text-green-tertiary"
                >
                  {{ $t('contactUs.send') }}
                </button>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </section>
    </section>
  </article>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: 'Contact',
  components: {
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider,
  },
  data() {
    return {
      username: '',
      email: '',
      message: '',
    }
  },
  computed: {
    isLsm() {
      return this.$breakpoints.lSm
    },
  },
  methods: {
    onSubmit() {
      alert('Successful (placeholder)')
    },
  },
}
</script>

<style scoped>
.notebook {
  left: 5rem;
  bottom: 2rem;
  overflow: visible;
}

.text-width {
  width: 30rem;
}
</style>
