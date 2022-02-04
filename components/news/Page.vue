<template>
  <div id="news" class="px-4 xl:px-4 pt-4 pb-8 sm:pb-16">
    <div class="mx-auto container">
      <span role="contentinfo">
        <AppTitle :title="$t('news.title')" />
      </span>
      <div
        tabindex="0"
        aria-label="Group of cards"
        class="focus:outline-none mt-4 lg:mt-8"
      >
        <div
          class="
            grid
            sm:grid-cols-1
            md:grid-cols-1
            lg:grid-cols-2
            xl:grid-cols-2
            gap-8
          "
        >
          <NewsNewestSection
            :link="newestSection.link"
            :text="newestSection.text"
            :title="newestSection.title"
            :date="newestSection.date"
            :author="newestSection.author"
            :image="newestSection.image"
          />
          <div>
            <div
              class="
                grid
                sm:grid-cols-1
                md:grid-cols-2
                lg:grid-cols-2
                xl:grid-cols-2
                gap-8
              "
            >
              <NewsSection
                :link="sections[0].link"
                :text="sections[0].text"
                :title="sections[0].title"
                :date="sections[0].date"
                :author="sections[0].author"
                :image="sections[0].image"
              />
              <NewsSection
                :link="sections[1].link"
                :text="sections[1].text"
                :title="sections[1].title"
                :date="sections[1].date"
                :author="sections[1].author"
                :image="sections[1].image"
              />
            </div>

            <div
              class="
                mt-8
                grid
                sm:grid-cols-1
                md:grid-cols-2
                lg:grid-cols-2
                xl:grid-cols-2
                gap-8
              "
            >
<!--              <NewsSection-->
<!--                :link="sections[2].link"-->
<!--                :text="sections[2].text"-->
<!--                :title="sections[2].title"-->
<!--                :date="sections[2].date"-->
<!--                :author="sections[2].author"-->
<!--                :image="sections[2].image"-->
<!--              />-->
<!--              <NewsSection-->
<!--                :link="sections[3].link"-->
<!--                :text="sections[3].text"-->
<!--                :title="sections[3].title"-->
<!--                :date="sections[3].date"-->
<!--                :author="sections[3].author"-->
<!--                :image="sections[3].image"-->
<!--              />-->
              <NewsComingSoon />
              <NewsComingSoon />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index.vue',
  data() {
    return {
      newestSection: {
        image: this.$t('news.posts[0].image'),
        author: this.$t('news.posts[0].author'),
        date: this.$t('news.posts[0].date'),
        title: this.$t('news.posts[0].title'),
        text: this.$t('news.posts[0].textNews'),
        link: this.$t('news.posts[0].link'),
      },
      sections: [
        {
          image: this.$t('news.posts[1].imageNews'),
          author: this.$t('news.posts[1].author'),
          date: this.$t('news.posts[1].date'),
          title: this.$t('news.posts[1].title'),
          text: this.$t('news.posts[1].textNews'),
          link: this.$t('news.posts[1].link'),
        },
        {
          image: this.$t('news.posts[2].image'),
          author: this.$t('news.posts[2].author'),
          date: this.$t('news.posts[2].date'),
          title: this.$t('news.posts[2].title'),
          text: this.$t('news.posts[2].textNews'),
          link: this.$t('news.posts[2].link'),
        }
      ],
    }
  },
}
</script>

<style scoped>
.news-newest-max-lines {
  max-lines: 6;
}

.news-max-lines {
  max-lines: 3;
}
</style>
