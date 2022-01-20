<template>
  <div
    class="
      px-4
      pb-4
      sm:pb-8
      pt-8
      mx-auto
      mb-4
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      md:px-24 md:mb-8
      lg:mb-6 lg:px-8 lg:pb-16
    "
  >
    <AppTitle :title="$t('charity.partner.title')" class="-mt-2 mb-4 sm:mb-0" />
    <div class="grid gap-6 row-gap-10 lg:grid-cols-2">
      <div class="lg:py-6 lg:pr-16">
        <div class="flex">
          <div class="flex flex-col items-center mr-4">
            <div>
              <div
                class="
                  pt-1
                  text-2xl text-green-secondary
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  border border-green-primary
                  rounded-full
                "
              >
                1
              </div>
            </div>
            <div class="w-px h-full bg-green-primary"></div>
          </div>
          <div class="pt-1 pb-8">
            <p class="font-thin text-xl">
              {{ $t('charity.partner.requirements.1') }}
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col items-center mr-4">
            <div>
              <div
                class="
                  pt-1
                  text-2xl text-green-secondary
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  border border-green-primary
                  rounded-full
                "
              >
                2
              </div>
            </div>
            <div class="w-px h-full bg-green-primary"></div>
          </div>
          <div class="pt-1 pb-8">
            <p class="font-thin text-xl">
              {{ $t('charity.partner.requirements.2') }}
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col items-center mr-4">
            <div>
              <div
                class="
                  pt-1
                  text-2xl text-green-secondary
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  border border-green-primary
                  rounded-full
                "
              >
                3
              </div>
            </div>
            <div class="w-px h-full bg-green-primary"></div>
          </div>
          <div class="pt-1 pb-8">
            <p class="font-thin text-xl">
              {{ $t('charity.partner.requirements.3') }}
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col items-center mr-4">
            <div>
              <div
                class="
                  pt-1
                  text-2xl text-green-secondary
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  border border-green-primary
                  rounded-full
                "
              >
                4
              </div>
            </div>
            <div class="w-px h-full bg-green-primary"></div>
          </div>
          <div class="pt-1 pb-8">
            <p class="font-thin text-xl">
              {{ $t('charity.partner.requirements.4') }}
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col items-center mr-4">
            <div>
              <div
                class="
                  pt-1
                  text-2xl text-green-secondary
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  border border-green-primary
                  rounded-full
                "
              >
                5
              </div>
            </div>
            <div class="w-px h-full bg-green-primary"></div>
          </div>
          <div class="pt-1 pb-8">
            <p class="font-thin text-xl">
              {{ $t('charity.partner.requirements.5') }}
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col items-center mr-4">
            <div>
              <div
                class="
                  pt-1
                  text-2xl text-green-secondary
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  border border-green-primary
                  rounded-full
                "
              >
                ?
              </div>
            </div>
          </div>
          <div class="pt-1">
            <p class="mb-2 font-thin text-xl">
              {{ $t('charity.partner.requirements.ps') }}
            </p>
            <p class="text-gray-700"></p>
          </div>
        </div>
      </div>
      <div class="relative">
<!--        <img-->
<!--          class="-->
<!--            inset-0-->
<!--            object-cover object-bottom-->
<!--            w-full-->
<!--            rounded-->
<!--            shadow-lg-->
<!--            h-96-->
<!--            lg:absolute lg:h-full-->
<!--          "-->
<!--          src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"-->
<!--          alt=""-->
<!--        />-->
        <nuxt-img
          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
          src="dog.png"
          class="w-2/3 m-auto"
          alt="dog"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Steps',
}
</script>

<style scoped></style>
