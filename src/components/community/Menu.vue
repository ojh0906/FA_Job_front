<template>
    <div class="free01_l">
        <div class="menu">
            <router-link :to="{ name: 'KnowHowList', query: {} }">
                <div :class="click == 1 ? 'menu02' : 'menu01'">
                    Know-how
                    <i class="i_icon"></i>
                </div>
            </router-link>
            <router-link :to="{ name: 'FreePromo', query: {} }">
                <div :class="click == 2 ? 'menu02' : 'menu01'">
                    자유홍보
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