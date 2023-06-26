<template>
  <swiper class="project-slider" :navigation="{ nextEl: '.project-button-next', prevEl: '.project-button-prev' }" :loop="true" :modules="modules">
    <swiper-slide>
      <ProjectBox v-for="project in this.project_list.slice(0,4)" :project="project" />
    </swiper-slide>
    <swiper-slide v-if="this.project_list.length > 4">
      <ProjectBox v-for="project in this.project_list.slice(4,8)" :project="project" />
    </swiper-slide>
    <swiper-slide v-if="this.project_list.length > 8">
      <ProjectBox v-for="project in this.project_list.slice(8,12)" :project="project" />
    </swiper-slide>
    <swiper-slide v-if="this.project_list.length > 12">
      <ProjectBox v-for="project in this.project_list.slice(12,16)" :project="project" />
    </swiper-slide>
    <swiper-slide v-if="this.project_list.length > 16">
      <ProjectBox v-for="project in this.project_list.slice(16,20)" :project="project" />
    </swiper-slide>
  </swiper>
  <!--  navigation -->
  <aside class="project-slide-btn-wrap">
    <div class="project-button-prev">
      <img class="more-icon" src="/image/main/next.png" />
    </div>
    <div class="project-button-next">
      <img class="more-icon" src="/image/main/next.png" />
    </div>
  </aside>
</template>

<script>
import ProjectBox from '/src/components/ProjectBox.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper';

export default {
  props:['project_list'],
  components: {
    Swiper,
    SwiperSlide,
    ProjectBox
  },
  data() {
    return {
      cnt: 0,
    }
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  methods: {
  },
  mounted() {
  },
  created() {
  }
}

</script>
