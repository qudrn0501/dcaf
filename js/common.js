// 셋타임아웃에 반복문으로 딜레이 시키기
// function cultuerAni() {
//     const cultuerImg = document.querySelectorAll('.cultuer_ani');
//     for (let i = 0; i < cultuerImg.length; i++) {
//         setTimeout(function () {
//             cultuerImg[i].classList.add('ani');
//         }, 250 * i);
//     }
// }
// cultuerAni();

// 헤더 fixed 기능
const cultuerImg = document.querySelectorAll('.cultuer_ani');
function scrollPlay() {
    for (i = 0; i < cultuerImg.length; i++) {
        if (window.innerHeight > cultuerImg[i].getBoundingClientRect().top + 100) {
            cultuerImg[i].classList.add('ani');
        }
    }
}
window.addEventListener('load', scrollPlay);
window.addEventListener('scroll', scrollPlay);

function scrollfix() {
    const fixwrap = document.getElementById('headerWrap');
    const fixnav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        fixwrap.classList.add('fix');
        fixnav.classList.add('fix');
    } else if (window.scrollY < 100) {
        fixwrap.classList.remove('fix');
        fixnav.classList.remove('fix');
    }
}
window.addEventListener('load', scrollfix);
window.addEventListener('scroll', scrollfix);

const navtab = {

    init: function () {
        this.motab();
    },
    motab: function () {
        let mobBtn = $(".btn_nav");
        let closeBtn = $(".btn_close");

        // 모바일 버튼 클릭
        $(mobBtn).click(function () {
            $(".menu_clip").addClass("on");

        });
        // 닫기 버튼 클릭
        $(closeBtn).click(function () {
            $(".menu_clip").removeClass("on");
        });
    }
}

$(document).ready(function () {
    navtab.init();
})

// 스크롤 제한 ON
function scroll_on() {
    $('.header_wrap').on('scroll touchmove mousewheel', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
}

// 스크롤 제한 OFF
function scroll_off() {
    $('.header_wrap').off('scroll touchmove mousewheel');
}

