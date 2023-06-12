<template>
  <Top />
  <div :id="getCurrentRoutePath == '/' ? 'main-container' : 'container'">
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
      return this.$route.path
    },
    methods: {
    },
    mounted() {
    }
  }
}
</script>

