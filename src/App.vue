<template>
  <div @click="check($event)">
    <Top ref="top" />
    <div
      :id="getCurrentRoutePath.path == '/' ? 'main-container' : getCurrentRoutePath.matched[0].path == '/project/' ? 'project-container' : 'container'">
      <router-view />
    </div>
    <Footer />
  </div>
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
    check(event) {
      this.$refs.top.clickSelect(event);
    },
  },
  mounted() {
  }
}
</script>

