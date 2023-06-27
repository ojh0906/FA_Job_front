<template>
  <div class="register_section">
    <!-- 회원가입 헤더 -->
    <RegisterHeader step="4" v-if="!(this.$route.query.isForeigner != null && this.$route.query.state != null)"/>

    <!-- 내국인 회원 완료 화면 -->
    <article class="register-complete" v-if="false">
      <div class="end_input_box">
        <div class="check"><img src="/image/register/Checkmark.png" alt="완료이미지입니다."></div>
        <p class="title">
          <strong class="bold">{{ this.$route.query.nick_name }}</strong> 님의 회원가입을 축하드립니다.
        </p>
      </div>

      <div class="next2">
        <router-link :to="{ name: 'Index' }">
          <div class="btn btn1">FA JOB 시작하기</div>
        </router-link>
        <router-link :to="{ name: '' }">
          <div class="btn btn2">이력서 작성하기</div>
        </router-link>
      </div>
    </article>

    <!-- 기업 회원 완료 화면 -->
    <article class="register-complete" v-if="this.$route.query.isForeigner == null">
      <div class="end_input_box">
        <div class="check"><img src="/image/register/Checkmark.png" alt="완료이미지입니다."></div>
        <p class="title">
          <strong class="bold">{{ this.$route.query.nick_name }}</strong> 님의 회원가입을 축하드립니다.
        </p>
      </div>

      <div class="next2">
        <router-link :to="{ name: 'Index' }">
          <div class="btn btn1">FA JOB 시작하기</div>
        </router-link>
      </div>
    </article>

    <!-- 외국인 회원 완료 승인 화면 -->
    <article class="register-complete" v-if="this.$route.query.isForeigner != null && this.$route.query.state == null">
      <div class="end_input_box">
        <div class="check"><img src="/image/register/Checkmark.png" alt="완료이미지입니다."></div>
        <p class="title">
          <strong class="bold">{{ this.$route.query.nick_name }}</strong> 님의 가입을 감사드립니다.
        </p>

        <p class="sub-title">관리자 승인 후 활동하실 수 있습니다.<br>
          알림을 통해 승인 여부를 확인하실 수 있습니다.</p>
      </div>

      <div class="next">
        <router-link :to="{ name: 'Index' }">
          <div class="btn btn4">
            홈
          </div>
        </router-link>
      </div>
    </article>

    <!-- 외국인 회원 완료 미승인 화면 -->
    <article class="register-complete" v-if="this.$route.query.isForeigner != null && this.$route.query.state != null">
      <div class="end_input_box">
        <div class="check"><img src="/image/register/Typing.png" alt="대기이미지입니다."></div>
        <p class="title">
          <strong class="bold">관리자 승인 대기 중입니다.</strong>
        </p>
      </div>

      <div class="next">
        <router-link :to="{ name: 'Index' }">
          <div class="btn btn4">
            홈
          </div>
        </router-link>
      </div>
    </article>
  </div>
</template>

<script>
import RegisterHeader from '/src/components/register/Header.vue';

export default {
  data() {
    return {
    }
  },
  components: {
    RegisterHeader
  },
  methods: {
  },
  mounted() {
  }
}

</script>
