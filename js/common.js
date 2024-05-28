//모바일 메뉴
const mGnbBg = $('.m_gnb_bg'),
      mGnb = $('.m_gnb_area');

function mMenuOn(){
    mGnbBg.fadeIn('fast', function(){
        $(this).addClass('on')
    });
    mGnb.animate({
        right:0
    }, 500)
}
function mMenuOff(){
    mGnbBg.fadeOut('fast', function(){
        $(this).removeClass('on')
    });
    mGnb.animate({
        right: '-100%'
    })
}

//로그인
const login = document.querySelector(".login")
const mlogin = document.querySelector('.m_login')
const loginArea = document.querySelector(".login_area")
const del = document.querySelector("#delete")
const id = document.querySelector("#id")
const pw = document.querySelector("#password")
const loginOk = document.querySelector("#loginOk")
const join = document.querySelector("#join")

login.onclick = function() {
    loginArea.classList.add('on')
}
mlogin.onclick = function(){
    loginArea.classList.add('on')
}
del.onclick = function() {
    loginArea.classList.remove('on')
}

//로그인 클릭
loginOk.addEventListener("click", function () {

    // 모든 필드가 채워져 있는지 확인
    if(id.value == '' || pw.value == ''){
        alert('빈칸 없이 작성해주세요.')
    }
    else{
        alert(`${id.value}님 환영합니다.♡♡`)
        id.value = ''
        pw.value = ''
        alert('원래 화면으로 돌아갑니다.')
        loginArea.classList.remove('on')
    }
});

//회원가입 클릭
join.addEventListener("click", function () {

    // 모든 필드가 채워져 있는지 확인
    if(id.value == '' || pw.value == ''){
        alert('빈칸 없이 작성해주세요.')
    }
    else{
         // 확인 창으로 입력된 값을 확인
         if (confirm(`${id.value}으로 회원가입하시겠습니까?`)){
            id.value = ''
            pw.value = ''
            alert('다시 로그인 해주세요.')
        } else {
            id.value = ''
            pw.value = ''
        }
    }
});