<template>
     <div class="section">
        <!--약관동의-->
        <div class="join_header">
            <h3 class="join_bg">회원가입</h3>
            <ul class="join_step">
                <li class="join_step_01">01.회원유형 선택</li>
                <li class="join_step_02_">02.약관동의</li>
                <li class="join_step_03_on">03.정보입력</li>
                <li class="join_step_04">04.가입완료</li>
            </ul>
        </div>

        <div class="input_box">
            <div class="input_l">
                <div class="field01">
                    <p>아이디</p>
                    <input type="text" placeholder="이메일주소">&nbsp;&nbsp;@&nbsp;&nbsp;
                    <select>
                        <option value="">직접입력</option>
                    </select>
                    <a href="#">중복확인</a>
                    <p class="notice">사용 가능한 아이디 입니다.</p>
                </div>
                <div class="field02">
                    <p>닉네임</p>
                        <input type="text" placeholder="닉네임">
                    <a href="#">중복확인</a>
                    <p class="notice">사용 가능한 아이디 입니다.</p>
                </div>
                <div class="field03">
                    <p>비밀번호</p>
                    <input class="userpw" type="password" placeholder="비밀번호 입력">
                </div>
                <div class="field04">
                    <p>비밀번호 확인</p>
                    <input class="userpw_confirm" type="password" placeholder="비밀번호 확인">
                    <p class="notice">비밀번호가 일치하지 않습니다.</p>
                </div>
                <div class="field05">
                    <p>이름</p>
                    <input type="text" placeholder="이름">
                </div>
            </div>
                    <div class="input_r"></div>
        </div>
    </div>
</template>

<script>

</script> 
