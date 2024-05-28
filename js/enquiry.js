document.getElementById("submit").addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var tel = document.getElementById("tel").value;
    var email = document.getElementById("email").value;
    var type = document.getElementById("type").value;
    var date = document.getElementById("date").value;
    var guest = document.getElementById("guest").value;
    var enquiry = document.getElementById("enquiry").value;

    // 모든 필드가 채워져 있는지 확인
    if (name === "" || tel === "" || email === "" || type === "" || date === "" || guest === "" || enquiry === "") {
        alert("빈칸 없이 작성해주세요.");
    } else {
        // 확인 창으로 입력된 값을 확인
        var confirmationMessage = "이름: " + name + "\n연락처: " + tel + "\n이메일: " + email + "\n웨딩종류: " + type + "\n예식 날짜: " + date + "\n예상 하객 수: " + guest + "\n문의사항: " + enquiry + "\n---------------------------------------" + "\n문의 내용을 접수하시겠습니까?";
        
        var confirmed = confirm(confirmationMessage);

        // 확인이 눌렸을 때
        if (confirmed){
            alert("접수 완료되었습니다.")
            name = '';
            tel = '';
            email = '';
            type = '';
            date = '';
            guest = '';
            enquiry = '';
        } else {
            return false}

    }
});

    //아코디언 메뉴
    $(function(){
        $('.acc-que').on('click', function(){
            $(this).next('.acc-ans').stop().slideToggle(300);
            //현재 클릭된 .acc-que에게 toggleClass(on)을 적용..
            //형제 요소는 on 제거..
            $(this).toggleClass('on').siblings().removeClass('on')
            //하나만 내려오게..
            $(this).next('.acc-ans').siblings('.acc-ans').stop().slideUp(300)
        })
    })
