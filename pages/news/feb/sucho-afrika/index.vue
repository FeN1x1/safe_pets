<template>
  <NewsPageTemplate :text='news.text' :title='news.title' :date='news.date' :author='news.author' :image='news.image' />
</template>

<script>
export default {
  data() {
    return {
      news: {
        image: this.$t('news.posts[2].image'),
        author: this.$t('news.posts[2].author'),
        date: this.$t('news.posts[2].date'),
        title: this.$t('news.posts[2].title'),
        text: this.$t('news.posts[2].text'),
        link: this.$t('news.posts[2].link'),
      }
    }
  }
}
</script>