<template>
    <swiper :navigation="{ nextEl: '.project-button-next', prevEl: '.project-button-prev' }" :loop="true" :modules="modules"
        class="project-slider">
        <swiper-slide v-for="v in 2">
            <ProjectBox v-for="v in 4" />
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
    data() {
        return {
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        ProjectBox
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
