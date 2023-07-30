<template>
    <div id="mypage">
        <LeftGnb />
        <div class="content-container">
            <div id="container01">
                <div class="mypage-contact-container">
                    <p class="area-title">서비스 결제 안내</p>
                    <div class="sub-title">
                        <span class="sub01">&bull;&nbsp; 기본 기능 : </span>
                        <span class="sub02">업무일지, 공수계산표, 블랙리스트, 게시판 활용</span>
                    </div>
                </div>

                <div class="price01">
                    <input type="checkbox" />
                    <div class="p01">
                        <span class="pp01">월정액</span>
                        <span class="ppp01">베이직 (구직자)</span>
                    </div>
                    <p class="p02">프로젝트 지원 무제한, 기본 기능 제공</p>
                    <p class="pppp01">
                        11,000원<br>
                        <span class="p_01">(VAT포함)</span>
                    </p>
                </div>

                <div class="price02">
                    <input type="checkbox" />
                    <div class="p01">
                        <span class="pp01">월정액</span>
                        <span class="ppp01">상품명</span>
                    </div>
                    <p class="p02">여러개 추가될 경우 이런식으로 표시. 지금은 위에 하나밖에 없음.</p>
                    <p class="pppp01">
                        11,000원<br>
                        <span class="p_01">(VAT포함)</span>
                    </p>
                </div>
            </div>

            <div class="next-btn-wrap">
                <router-link :to="{ name: 'MypagePay2', query: {} }">
                    <div class="btn btn1">
                        다음
                    </div>
                </router-link>
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
}

</script>


