<template>
  <!-- TODO : 팀 팝업 -->
  <article class="popup-box-wrap popup-applicant-wrap">
    <div class="popup-title">
      <p>
        {{ this.apply.team_name }}
      </p>
      <img class="close-icon" @click="this.$emit('popup', false)" src="/image/project/close2.png" />
    </div>
    <div class="popup-box">
      <p class="info">팀소개</p>
      <p class="info-text">
        {{ this.apply.team_info }}
      </p>
      <p class="team-list-title">팀원 목록({{ this.apply.team == null ? 0: this.apply.team.length + 1 }})</p>
      <div class="team-list-wrap">
        <div class="team-list">
          <p>{{ this.apply.other_info.member_info.name }}</p>
          <p>{{ this.apply.other_info.member_info.phone_number }}</p>
          <p>{{ this.apply.other_info.member_info.email }}</p>
        </div>
        <div class="team-list" v-for="(t, idx) in this.apply.team" :key="idx">
          <p>{{ t.other_info.member_info.name }}</p>
          <p>{{ t.other_info.member_info.phone_number }}</p>
          <p>{{ t.other_info.member_info.email }}</p>
        </div>
      </div>
    </div>
    <div class="next-btn-wrap">
      <p class="people-cnt">
        합격자/모집인원 <span class="num1">{{ this.pass }}</span><span class="num2"> / {{ this.cnt }}명</span>
      </p>
      <div v-if="this.apply.pass == null || this.isPass" class="pass-text-wrap">
        <div class="btn btn6" @click="this.$emit('passApplicant', this.apply, false)">
          불합격
        </div>
        <div class="btn btn7" @click="this.$emit('passApplicant', this.apply, true)">
          합격
        </div>
      </div>
      <div v-else-if="this.apply.pass" class="pass-text-wrap">
        <p class="pass-text">합격</p>
        <div class="choose-again" @click="this.isPass = true;">다시 선택</div>
      </div>
      <div v-else class="pass-text-wrap">
        <p class="nonpass-text">불합격</p>
        <div class="choose-again" @click="this.isPass = true;">다시 선택</div>
      </div>
    </div>
  </article>
</template>

<script>

export default {
  props: ['pass','cnt','apply'],
  components: {
  },
  data() {
    return {
      isPass: false, // true:초기화
    }
  },
  methods: {
  },
  mounted() {
  }
}

</script>

<style></style>