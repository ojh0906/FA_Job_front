<template>
  <div id="mypage">
    <LeftGnb />
    <div class="content-container">
      <div class="mypage-info-container">
        <p class="area-title">회원정보 수정</p>

        <div class="">

        </div>

        <div class="next-btn-wrap">
          <router-link :to="{ name: '', query: {} }">
            <div class="btn btn1">
              완료
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import LeftGnb from "/src/components/mypage/LeftGnb.vue";

export default {
  components: {
    LeftGnb
  },
  data() {
    return {
    }
  },
  methods: {
  }
}

</script>
