<template>
  <section class="black-slider-wrap max">
    <div class="black-main-title-wrap">
      <p class="main-title"></p>
    </div>
<!--    <swiper class="black-slider" :navigation="{ nextEl: '.project-button-next', prevEl: '.project-button-prev' }" :loop="true" :modules="modules">-->
      <swiper :slidesPerView="3" :spaceBetween="40" :loop="true"
              :navigation="{ nextEl: '.black-button-next', prevEl: '.black-button-prev' }" :modules="modules"
              class="black-slider">
      <swiper-slide  v-for="item in this.blacklistList">
        <article class="black-box">
          <p class="black-title">{{ item.title }}</p>
          <div class="black-sub">
            <p class="black-sub-title">분류<span>{{ item.target }}</span></p>
            <p class="black-sub-title">피해사례<span>{{ item.type }}</span></p>
            <p class="black-sub-title">등록일<span>{{ formattedDate(item.reg_date) }}</span></p>
          </div>
        </article>
      </swiper-slide>
    </swiper>
    <!--  navigation -->
    <aside class="black-slide-btn-wrap">
      <div class="black-button-prev">
        <img class="more-icon" src="/image/main/next.png" />
      </div>
      <div class="black-button-next">
        <img class="more-icon" src="/image/main/next.png" />
      </div>
    </aside>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper';

export default {
  props:['blacklistList'],
  data() {
    return {
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  methods: {
  },
  mounted() {
  }
}

</script>
