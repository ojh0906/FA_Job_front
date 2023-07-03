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
            D-{{ differenceDate(new Date(), this.project.apply_end) }}
          </div>
          <div :class="this.project.other_info.like_yn === 0 ? 'unlike-btn' : 'like-btn'" @click.prevent="saveLike">
            <img class="like-icon" :src="this.project.other_info.like_yn === 0 ? '/image/main/unlike.png' : '/image/main/like.png'" />
            {{ this.project.other_info.like_yn === 0 ? '관심' : this.project.other_info.like_cnt+'명' }}
          </div>
        </div>
      </div>
    </section>
  </router-link>
</template>

<script>
import {useCommonStore,useProjectStore} from '@/_stores';

export default {
  props: ['project'],
  components: {
  },
  setup() {
    const commonStore = useCommonStore();
    const projectStore = useProjectStore();
    return {
      commonStore,
      projectStore,
    }
  },
  data() {
    return {
    }
  },
  methods: {
    saveLike(){
      if(this.commonStore.member === null){
        alert('로그인먼저 해주세요.');
        return;
      }
      this.projectStore.saveLike(this.project.project, { member:this.commonStore.member.member,} ).then((resp) => {
        console.log(resp)
        if (resp.data.code == 200) {
          if(this.project.other_info.like_yn === 0){
            this.project.other_info.like_yn = 1;
            this.project.other_info.like_cnt++;
          } else {
            this.project.other_info.like_yn = 0;
            this.project.other_info.like_cnt--;
          }
        }
      }).catch(err => {
        console.log("err", err);
      });
    }
  },
  mounted() {
  },
  created() {
    console.log(this.project)
  }
}

</script>
