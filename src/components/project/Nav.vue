<template>
    <nav id="project-nav">
        <p class="project-title">프로젝트 필터 설정</p>
        <div class="category-wrap">
            <p class="title">국가별</p>
            <div class="category">
                <label class="check-text" for="country"
                       v-for="item in this.getFieldList('project_country').sort((a, b) => a.field - b.field)">
                    <input type="checkbox" required name="country" @click="setFilter(item)"
                           :checked="this.fieldList.findIndex(i=> i.field === item.field) < 0 ? false:true"/>
                  {{ item.name }}
                </label>
            </div>
        </div>
        <div class="category-wrap">
            <p class="title">분야</p>
            <div class="category">
                <label class="check-text" for="country"
                       v-for="item in this.getFieldList('project_area').sort((a, b) => a.field - b.field)">
                    <input type="checkbox" required name="country" @click="setFilter(item)"
                           :checked="this.fieldList.findIndex(i=> i.field === item.field) < 0 ? false:true"/>
                  {{ item.name }}
                </label>
            </div>
        </div>
        <div class="category-wrap">
            <p class="title">지역별</p>
            <div class="category">
                <label class="check-text" for="country"
                       v-for="item in this.getFieldList('project_location1').sort((a, b) => a.field - b.field)">
                    <input type="checkbox" required name="country" @click="setFilter(item)"
                           :checked="this.fieldList.findIndex(i=> i.field === item.field) < 0 ? false:true"/>
                  {{ item.name }}
                </label>
            </div>
        </div>
        <div class="category-wrap">
            <p class="title">산업별</p>
            <div class="category">
                <label class="check-text" for="country"
                       v-for="item in this.getFieldList('project_industry').sort((a, b) => a.field - b.field)">
                    <input type="checkbox" required name="country" @click="setFilter(item)"
                           :checked="this.fieldList.findIndex(i=> i.field === item.field) < 0 ? false:true"/>
                  {{ item.name }}
                </label>
            </div>
        </div>
        <div class="fitler-btn" @click="saveFilter">
            필터 저장하기
        </div>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      fieldList:[],
    }
  },
  methods: {
    setFilter(field){
      const idx = this.fieldList.findIndex(i => i.field === field.field);
      if(idx < 0){ // add
        this.fieldList.push(field);
      } else {
        this.fieldList.splice(idx,1);
      }
      this.setFieldFilter();
    },
    setFieldFilter(){
      this.$emit('setFieldFilter',this.fieldList);
    },
    saveFilter() {
      let date = new Date();
      date.setHours(23);
      date.setMinutes(59);
      date.setSeconds(59);
      date.setMilliseconds(0);
      document.cookie = 'projectFieldFilter='+JSON.stringify(this.fieldList)+'; expires=' + date.toGMTString();
      alert('저장되었습니다.');
    }
  },
  mounted() {
    if (document.cookie.indexOf('projectFieldFilter=') >= 0) {
      this.fieldList = JSON.parse(document.cookie.match(new RegExp("(?:^|; )" + 'projectFieldFilter' + "=([^;]*)"))[1]);
      console.log(this.fieldList);
      this.setFieldFilter();
    }
  }
}
</script>

<style></style>