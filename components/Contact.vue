<template>
  <div
    id="contactUs"
    class="
      mx-auto
      pb-20
      pt-36
      sm:max-w-xl
      px-8
      md:max-w-full
      lg:max-w-screen-xl
    "
  >
    <div class="z-0 grid grid-cols-2 sm:mb-8">
      <div class="space-x-10">
        <nuxt-img
          src="notebook-safepets.png"
          class="relative transform scale-150 notebook"
        />
      </div>
      <div class="space-x-10 flex w-max z-10 max-w-screen-md">
        <div class="ml-auto ">
          <div class="max-w-xl mb-3">
            <p
              v-html="$t('contactUs.text')"
              class="text-3xl text-brown-primary text-left"
            ></p>
          </div>
          <ValidationObserver v-slot="{ invalid }">
            <form @submit.prevent="onSubmit">
              <div class="flex flex-col">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="username"
                  rules="username"
                >
                  <input
                    :placeholder="$t('contactUs.placeholder.name')"
                    type="text"
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
                  <span class="p-2 text-purple-primary">
                    {{ errors[0] }}
                  </span>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors }"
                  name="email"
                  rules="email"
                >
                  <input
                    :placeholder="$t('contactUs.placeholder.email')"
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
                  <span class="p-2 text-purple-primary">
                    {{ errors[0] }}
                  </span>
                </ValidationProvider>

                <div class="mt-1">
                  <ValidationProvider
                    v-slot="{ errors }"
                    name="message"
                    rules="message"
                  >
                    <textarea
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
                    <span class="p-2 text-purple-primary">
                      {{ errors[0] }}
                    </span>
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
      </div>
    </div>
  </div>
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
  methods: {
    onSubmit() {
      alert('test')
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
</style>
