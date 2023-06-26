<template>
  <router-link :to="{ name: 'ProjectDetail', query: {} }">
    <section id="project-box">
      <aside class="project-title-wrap">
        <p class="company">수원엔지니어링</p>
        <p class="title">{{ this.project.name }}</p>
      </aside>

      <div class="info-btn-wrap">
        <aside class="info-wrap">
          <div class="info-box">
            <p class="info-title">기간</p>
            <p class="info-text">{{ getFieldName(this.project.period_type) }}</p>
          </div>
          <div class="info-box">
            <div class="info-col info-box">
              <p class="info-title">분야</p>
              <p class="info-text">{{ getFieldName(this.project.area) }}</p>
            </div>
            <div class="info-col info-box">
              <p class="info-title">지역/근무지</p>
              <p class="info-text">{{ getFieldName(this.project.location1) }} {{ getFieldName(this.project.location2) }} / {{ this.project.work_location }}</p>
            </div>
          </div>
          <div class="info-box">
            <div class="info-col info-box">
              <p class="info-title">산업</p>
              <p class="info-text">{{ getFieldName(this.project.industry) }}</p>
            </div>
            <div class="info-col info-box">
              <p class="info-title">필요인원</p>
              <p class="info-text">{{ this.project.people_cnt }}명</p>
            </div>
          </div>
        </aside>

        <div class="btn-wrap">
          <div class="day-btn">
            D-100
          </div>
          <div :class="true ? 'like-btn' : 'unlike-btn'">
            <img class="like-icon" :src="true ? '/image/main/like.png' : '/image/main/unlike.png'" />
            {{ true ? `00명` : '관심' }}
          </div>
        </div>
      </div>
    </section>
  </router-link>
</template>

<script>
export default {
  props:['project'],
  components: {
  },
  data() {
    return {
    }
  },
  setup() {
    return {
    };
  },
  methods: {
  },
  mounted() {
  },
  created() {
    //console.log(this.project)
  }
}

</script>
