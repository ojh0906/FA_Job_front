<script>
import Top from './components/common/Top.vue';
import Footer from './components/common/Footer.vue';
export default {
  components: {
    Top,
    Footer,
  },
  methods: {
  },
}
</script>

<template>
  <Top/>
  <div id="container">
    <router-view />
  </div>
  <Footer/>
</template>



<style scoped>

</style>

