<template>
    <div class="n01_l">
        <div class="menu">
            <router-link :to="{ name: 'NoticeList', query: {} }">
                <div :class="click == 1 ? 'menu01' : 'menu02'">
                    공지사항
                    <i class="i_icon"></i>
                </div>
            </router-link>
            <router-link :to="{ name: 'AskList', query: {} }">
                <div :class="click == 2 ? 'menu01' : 'menu02'">
                    문의하기
                    <i class="i_icon"></i>
                </div>
            </router-link>
            <router-link :to="{ name: 'Faq', query: {} }">
                <div :class="click == 3 ? 'menu01' : 'menu02'">
                    FAQ
                    <i class="i_icon"></i>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['click'],
}
</script>

<style></style>