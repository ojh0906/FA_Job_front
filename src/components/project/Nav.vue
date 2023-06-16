<template>
    <nav id="project-nav">
        <p class="project-title">프로젝트 필터 설정</p>
        <div class="category-wrap">
            <p class="title">국가별</p>
            <div class="category">
                <label class="check-text" for="country" v-for="v in 6">
                    <input type="checkbox" required name="country" />
                    대한민국
                </label>
            </div>
        </div>
        <div class="category-wrap">
            <p class="title">분야</p>
            <div class="category">
                <label class="check-text" for="country" v-for="v in 6">
                    <input type="checkbox" required name="country" />
                    기구
                </label>
            </div>
        </div>
        <div class="category-wrap">
            <p class="title">지역별</p>
            <div class="category">
                <label class="check-text" for="country" v-for="v in 6">
                    <input type="checkbox" required name="country" />
                    서울
                </label>
            </div>
        </div>
        <div class="category-wrap">
            <p class="title">산업별</p>
            <div class="category">
                <label class="check-text" for="country" v-for="v in 6">
                    <input type="checkbox" required name="country" />
                    디스플레이
                </label>
            </div>
        </div>

        <div class="fitler-btn">
            필터 저장하기
        </div>

    </nav>
</template>

<script>
export default {

}
</script>

<style></style>