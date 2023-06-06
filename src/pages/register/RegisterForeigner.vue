<template>
    <div class="foreigner_section">
       <!--회원가입 순서-->
       <div class="join_header">
           <h3 class="join_bg">회원가입</h3>
           <ul class="join_step">
               <li class="join_step_01">01.회원유형 선택</li>
               <li class="join_step_02_">02.약관동의</li>
               <li class="join_step_03_on">03.정보입력</li>
               <li class="join_step_04">04.가입완료</li>
           </ul>
       </div>

       <div class="foreigner_input_box">
           <div class="input_l">
               <div class="field01">
                   <p>아이디</p>
                   <div class="field01_input">
                       <input type="text" placeholder="이메일주소"><span>@</span>
                       <select>
                           <option value="">직접입력</option>
                       </select>
                   </div>
                   <a href="#">중복확인</a>
                   <p class="notice">사용 가능한 아이디 입니다.</p>
               </div>

               <div class="field02">
                   <p>닉네임</p>
                   <div class="field02_input">
                       <input type="text" placeholder="닉네임">
                   </div>
                   <a href="#">중복확인</a>
                   <p class="notice">사용 가능한 아이디 입니다.</p>
               </div>

               <div class="field03">
                   <p>비밀번호</p>
                   <div class="field03_input">
                       <input class="userpw" type="password" placeholder="비밀번호 입력">
                   </div>
               </div>

               <div class="field04">
                   <p>비밀번호 확인</p>
                   <div class="field04_input">
                       <input class="userpw_confirm" type="password" placeholder="비밀번호 확인">
                   </div>
                   <p class="notice">비밀번호가 일치하지 않습니다.</p>
               </div>

               <div class="field05">
                   <p>이름</p>
                   <div class="field05_input">
                       <input type="text" placeholder="이름">
                   </div>
               </div>
           </div>

           <div class="input_r">
               <div class="field06">
                   <p>생년월일</p>
                   <div class="field06_input">
                       <input type="text" placeholder="YYYY.MM.DD">
                   </div>
               </div>

               <div class="field07">
                   <p>휴대폰번호</p>
                   <div class="field07_input">
                       <input type="text" placeholder="휴대폰 번호">
                   </div>
                   <a href="#">인증번호&nbsp;&nbsp;전송</a>
                   <p class="notice">남은시간 01:44</p>
               </div>

               <div class="field08">
                   <div class="field08_input">
                       <input type="text" placeholder="인증번호">
                   </div>
                   <a href="#">인증번호 확인</a>
               </div>

               <div class="field09">
                   <p>주소</p>
                   <div class="field09_input">
                       <input type="text" placeholder="주소입력">
                   </div>
                   <a href="#">주소 찾기</a>
               </div>
                   
               <div class="field10">
                   <div class="field10_input">
                       <input type="text" placeholder="상세주소 입력">
                   </div>
               </div>

               <div class="field11">
                   <p>외국인등록번호</p>
                   <div class="field11_input">
                       <input type="text" placeholder="외국인등록번호">
                   </div>
                   <a href="#">중복확인</a>
                   <p class="notice">인증되었습니다.</p>
               </div>

               <div class="field12">
                   <p>외국인등록증</p>
                   <div class="field12_input">
                       <input type="file" placeholder="">
                   </div>
                   <a href="#">파일 업로드</a>
               </div>
           </div>
       </div>

       <div class="foreigner_agree_next">
               <div class="btn_prev"><a href="#">이전</a></div>
               <div class="btn_next"><a href="#">완료</a></div>
           </div>
       </div>
</template>

<script>

</script> 
