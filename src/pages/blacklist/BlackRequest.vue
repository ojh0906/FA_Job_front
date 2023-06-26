<template>
  <div id="free_section04">
    <!--타이틀-->
    <div class="free04_header">
      <h3 class="title_bg">블랙리스트</h3>
    </div>

    <div class="free04_box">
      <!--타이틀-->
      <div class="free04_r_header">
        <h3>블랙리스트 등록 요청</h3>
      </div>

      <table class="comment02">
        <tr class="tr_com">
          <td class="fw_com01">분류</td>
          <td class="fw_com02">
            <a class="fw_01" :class="field.field == this.target?'btn7':'btn6'"
               @click="this.target = field.field"
               v-for="field in this.getFieldList('blacklist_target').sort((a, b) => a.field - b.field)">
              {{ field.name }}
            </a>
          </td>
        </tr>

        <tr class="tr_com">
          <td class="fw_com01">피해사례</td>
          <td class="fw_com02">
            <a class="fw_01" :class="field.field == this.type?'btn7':'btn6'"
               @click="this.type = field.field"
               v-for="field in this.getFieldList('blacklist_type').sort((a, b) => a.field - b.field)">
              {{ field.name }}
            </a>
          </td>
        </tr>

        <tr class="tr_com">
          <td class="fw_com01">제목</td>
          <td class="fw_com02">
            <div class="field_input">
              <input type="text" placeholder="제목을 입력해주세요." v-model="this.title">
            </div>
          </td>
        </tr>

        <tr class="tr_com">
          <td class="fw_com01">내용</td>
          <td class="fw_com02 td_02">
            <div class="field_input">
              <input type="text" placeholder="내용을 입력해주세요." v-model="this.content">
            </div>
          </td>
        </tr>

        <tr class="tr_com">
          <td class="fw_com01">이미지</td>
          <td class="fw_com02 fw_02">
            <input id="files_new" name="files_new" ref="files_new" class="hidden" type="file" @change="handleChange($event)" />
            <a href="#" class="btn2 fw_01" @click.prevent="addFiles('files_new')"><i class="i_icon"></i>파일올리기</a>
            <p class="file01" v-for="(item, idx) in this.files_new">{{ item.name }}<a @click="removeFile(idx, 'files_new')"><i class="i_icon"></i></a></p>
          </td>
        </tr>

      </table>

      <div class="fw_next">
        <div class="btn btn4" @click="$router.go(-1)">이전</div>
        <div class="btn btn1" @click="this.save">등록</div>
      </div>
    </div>
  </div>

</template>

<script>
import { useCommonStore, useBlacklistStore } from '@/_stores';

export default {
  components: {
  },
  setup() {
    const commonStore = useCommonStore();
    const blacklistStore = useBlacklistStore();
    return {
      commonStore,
      blacklistStore,
    }
  },
  data() {
    return {
      target:0,
      type:0,
      title:'',
      content:'',
      files_new:[],
    }
  },
  methods: {
    addFiles(obj) {
      if (obj == "files_new" && Object.keys(this.files_new).length >= 3) {
        alert("파일은 3개까지 등록할 수 있습니다.");
        return false;
      }
      this.$refs[obj].click();
    },
    handleChange(event) {
      // console.log(`${obj} handleChange`, obj, this.$refs.new_images.files);
      // console.log("handleChange", event.target.files);
      let uploadedFiles = event.target.files;
      /*
        Adds the uploaded file to the files array
      */
      for (var i = 0; i < uploadedFiles.length; i++) {
        //uploadedFiles[i].preview = URL.createObjectURL(uploadedFiles[i]);
        this[event.target.id].push(uploadedFiles[i]);
        //console.log(`upload file`, this[event.target.id], uploadedFiles[i]);
      }
    },
    removeFile(key, target_files) {
      this[target_files].splice(key, 1);
    },
    save() {
      if(this.target === 0 || this.type === 0 || this.title === '' || this.content === ''){
        alert('필수값을 입력해주세요.');
        return;
      }
      let paramData = new FormData();
      paramData.append("member", this.commonStore.member.member);
      paramData.append("target", this.target);
      paramData.append("type", this.type);
      paramData.append("title", this.title);
      paramData.append("content", this.content);

      if (this.files_new.length > 0) {
        // paramData.append("new_images", this.new_images);
        this.files_new.forEach((element, index) => {
          paramData.append(`files_new`, element);
        });
      }

      this.blacklistStore.save(paramData).then((resp) => {
        if (resp.data.code == 200) {
          alert('등록되었습니다.');
          this.$router.push({name:'BlacklistList'});
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
  },
  mounted() {
  }
}
</script>
