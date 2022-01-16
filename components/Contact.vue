<template>
  <section
    id="contactUs"
    class="
      mx-auto
      lg:pb-20 lg:pt-36
      py-8
      lg:py-0
      sm:max-w-full
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
      <section class="space-x-10 my-auto w-full lg:ml-auto flex z-10">
        <div class="m-auto w-full sm:w-5/6 md:w-4/6 lg:w-4/5 p-4 sm:p-0">
          <div class="mb-3">
            <p
              v-html="$t('contactUs.text')"
              class="text-3xl text-brown-primary text-left"
            ></p>
          </div>
          <ValidationObserver v-slot="{ handleSubmit }" ref="observer">
            <form @submit.prevent="handleSubmit(onSubmit)">
              <div class="flex flex-col w-full">
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
              <div v-if="isButtonEnabled" class="py-2">
                <button
                  :class='{"cursor-not-allowed" : !isButtonEnabled}'
                  type="submit"
                  :disabled=!isButtonEnabled
                  class="button-wider w-32 hover:text-green-tertiary"
                >
                  {{ $t('contactUs.send') }}
                </button>
              </div>
              <div class="py-2" v-else>
                <button
                  :class='{"cursor-not-allowed" : !isButtonEnabled}'
                  :disabled=!isButtonEnabled
                  type="submit"
                  class="button-wider w-32 hover:text-green-tertiary"
                >
                  <div class="loader">Loading...</div>
                </button>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </section>
    </section>
  </section>
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
      localhostApi: 'http://localhost:8001/api/contact-form',
      productionApi: 'https://api.safepetstoken.com/api/contact-form',
      isButtonEnabled: true,
    }
  },
  computed: {
    isLsm() {
      return this.$breakpoints.lSm
    }
  },
  methods: {
    onSubmit() {
      if (this.isButtonEnabled) {
        this.isButtonEnabled = false
        this.appendFormData()
        this.submitData()
      }
    },
    appendFormData() {
      let formData = new FormData()
      formData.append('name', this.username)
      formData.append('email', this.email)
      formData.append('message', this.message)
      return formData
    },
    clearForm() {
      this.username = ''
      this.email = ''
      this.message = ''
    },
    submitData() {
      this.$axios
        .$post(this.productionApi, this.appendFormData())
        .then(() => {
          this.clearForm()
          this.$refs.observer.reset()
          this.$toast.success(this.$t('contactUs.form.success'), {})
          this.isButtonEnabled = true
        })
        .catch(() => {
          this.$toast.warning(this.$t('contactUs.form.error'), {})
          setTimeout(() => this.isButtonEnabled = true, 5000);
        })
    },
  },
}
</script>

<style>
.notebook {
  left: 5rem;
  bottom: 2rem;
  overflow: visible;
}

.text-width {
  width: 30rem;
}
.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}
.loader {
  color: #ffffff;
  font-size: 10px;
  position: relative;
  bottom: 1.2rem;
  text-indent: -9999em;
  -webkit-transform: translateZ(0) scale(0.7);
  -ms-transform: translateZ(0) scale(0.7);
  transform: translateZ(0) scale(0.7);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
.Vue-Toastification__toast--success {
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
  --tw-gradient-from: #00b3b7;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(0, 179, 183, 0));
  --tw-gradient-to: #0ce2af;
}

.Vue-Toastification__toast--warning {
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
  --tw-gradient-from: #ff1d6f;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(255, 29, 111, 0));
  --tw-gradient-to: #ffc5df;
}
</style>
