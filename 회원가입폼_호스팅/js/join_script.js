function validateForm(){

const f = document.member;

const reg_exp = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9]).{6,10}$");
const match = reg_exp.exec(f.id.value);

if(match == null){
 alert("아이디는 6~10자의 영문, 숫자를 포함해야 합니다.");
 f.id.focus();
 return false;
}

if(f.name.value == ""){
 alert("이름을 입력하세요.");
 f.name.focus();
 return false;
}

const reg_exp1 = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$");
const match1 = reg_exp1.exec(f.pass.value);

if(match1 == null){
 alert("비밀번호는 8~20자의 영문/숫자/특수문자를 모두 포함해야 합니다.");
 f.pass.focus();
 return false;
}

if(f.pass.value != f.pass_confirm.value){
 alert("비밀번호가 일치하지 않습니다.");
 f.pass_confirm.focus();
 return false;
}

if(f.tel.value == ""){
 alert("전화번호를 입력하세요.");
 f.tel.focus();
 return false;
}

if(f.email.value == ""){
 alert("이메일을 입력하세요.");
 f.email.focus();
 return false;
}

if(f.addr.value == ""){
 alert("주소를 입력하세요.");
 f.addr.focus();
 return false;
}

  // 필수 체크박스 확인
  const requiredCheckboxes = f.querySelectorAll('input[type="checkbox"][required]');
  for (let i = 0; i < requiredCheckboxes.length; i++) {
    if (!requiredCheckboxes[i].checked) {
      alert("필수 약관에 동의해 주세요.");
      requiredCheckboxes[i].focus();
      return false;
    }
  }



alert("폼 제출 성공! (테스트용)");

return true;
}