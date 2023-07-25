<template>
    <swiper :pagination="{type: 'fraction',}" :loop="true" :navigation="false" :modules="modules" class="main-slider">
        <swiper-slide>
            <aside class="title-wrap">
                <div>
                    <p class="main-title">메인 카피가 들어갈 영역입니다.</p>
                    <p class="sub-title">서브 카피가 들어갈 영역</p>
                </div>
            </aside>
            <img src="/image/main/slide/slide1.png" />
        </swiper-slide>
        <swiper-slide><img src="/image/main/slide/slide1.png" /></swiper-slide>
        <swiper-slide><img src="/image/main/slide/slide1.png" /></swiper-slide>
        <swiper-slide><img src="/image/main/slide/slide1.png" /></swiper-slide>
    </swiper>
</template>

<script>
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
