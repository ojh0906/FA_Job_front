<template>
    <section id="apply" @click="this.clickSelect">
        <p class="apply-title">팀 지원하기</p>
        <div class="field-wrap">

            <div class="field">
                <p class="input-title">팀 이름</p>
                <div class="input-wrap">
                    <div class="field_input">
                        <input type="text" placeholder="팀 이름을 입력해주세요.">
                    </div>
                </div>
            </div>

            <div class="field">
                <p class="input-title">팀 소개</p>
                <div class="input-wrap">
                    <div class="field_input">
                        <textarea placeholder="팀 소개 내용을 입력해주세요."></textarea>
                        <!-- <input type="text" placeholder="닉네임"> -->
                    </div>
                </div>
            </div>
            <div class="field">
                <p class="input-title">팀원 목록</p>
                <div class="team-list-wrap">
                    <div class="team-list input-wrap" v-for="v in 3">
                        <div class="name">홍길동</div>
                        <div class="phone">010-0000-0000</div>
                        <div class="email">hong@gmail.com</div>
                        <img class="close-icon" src="/image/project/close.png" />
                    </div>
                </div>
                <div class="add-member-wrap">
                    <div class="add-member btn btn3" @click="this.addMemberPopup = true">
                        <img class="add-icon" src="/image/project/add.png" />
                        팀원 초대하기
                    </div>
                </div>
            </div>
        </div>

        <div class="team-apply-btn-wrap">
            <router-link :to="{ name: 'ProjectApplyCompletion', query: {} }">
                <div class="team-apply-btn btn btn1">
                    <img class="team-icon" src='/image/project/team.png' />
                    팀 지원하기
                </div>
            </router-link>
        </div>
    </section>

    <section id="popup" class="team-popup" v-if="this.addMemberPopup" @click="this.clickSelect">
        <article class="popup-box-wrap">
            <div class="popup-title">
                <p>
                    팀원 초대
                </p>
                <img class="close-icon" @click="this.addMemberPopup = false" src="/image/project/close2.png" />
            </div>
            <div class="popup-box">
                <p class="search-title">팀원의 휴대폰번호로 검색하여 팀원을 초대해 주세요.</p>
                <label class="popup-search">
                    <input type="phone" class="search" placeholder="휴대폰번호 검색" />
                    <img class="team-icon" src='/image/project/search.png' />
                </label>
                <div class="field-wrap">
                    <div class="field">
                        <p class="input-title">검색 결과</p>
                        <div class="team-search-list">
                            <div class="team-list-wrap">
                                <div class="team-list input-wrap" v-for="v in 7">
                                    <input type="checkbox" class="checkbox" />
                                    <div class="name">홍길동</div>
                                    <div class="phone">010-0000-0000</div>
                                    <div class="email">hong@gmail.com</div>
                                </div>
                            </div>
                        </div>
                        <div class="add-member-wrap">
                            <div class="add-member btn btn1">
                                <img class="add-icon" src="/image/project/add2.png" />
                                초대하기
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </section>
</template>

<script>
export default {
    data() {
        return {
            addMemberPopup: false,
        }
    },
    methods: {
        clickSelect(event) {
            if (event.target.classList.contains('team-popup')) {
                this.addMemberPopup = false;
            }
        },
    },
    mounted() {
    }
}
</script>

<style></style>