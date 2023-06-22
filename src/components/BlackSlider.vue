<template>
    <section class="black-slider-wrap max">
        <div class="black-main-title-wrap">
            <p class="main-title">

            </p>
        </div>
        <swiper :slidesPerView="3" :spaceBetween="40" :loop="true"
            :navigation="{ nextEl: '.black-button-next', prevEl: '.black-button-prev' }" :modules="modules"
            class="black-slider">
            <swiper-slide v-for="v in 4">
                <article class="black-box">
                    <p class="black-title">박O민 ㅇㅇㅇㅇㅇ업체 / 사기내용작성 {{v}}</p>
                    <div class="black-sub">
                        <p class="black-sub-title">분류<span>프리랜서</span></p>
                        <p class="black-sub-title">피해사례<span>대금미지급</span></p>
                        <p class="black-sub-title">등록일<span>2023.06.12</span></p>
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
