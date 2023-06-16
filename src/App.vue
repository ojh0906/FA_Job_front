<template>
  <Top />
  <div
    :id="getCurrentRoutePath.path == '/' ? 'main-container' : getCurrentRoutePath.matched[0].path == '/project/' ? 'project-container' : 'container'">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Top from './components/common/Top.vue';
import Footer from './components/common/Footer.vue';
export default {
  components: {
    Top,
    Footer,
  },
  computed: {
    getCurrentRoutePath() {
      return this.$route
    },
  },
  methods: {
  },
  mounted() {
  }
}
</script>

