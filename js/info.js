//swiper 1
var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 26.6667,
  slidesPerGroup: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1199: {
      slidesPerView: 3,
      spaceBetween: 26.6667,
      slidesPerGroup: 3,
    }
  }

});

//swiper 3
var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 2,
  spaceBetween: 28,
  slidesPerGroup: 1,
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
  breakpoints: {
    1199: {
      slidesPerView: 4,
      spaceBetween: 28,
      slidesPerGroup: 4
    }
  }
});

//swiper 2
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//tab menu
function openTab(evt, tabName) {
  var i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName("tab_content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabLinks = document.getElementsByClassName("tab_links");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

//문화예술정보 data- 탭
$(function () {

  $('.sb_tab li a').click(function (e) {
    var dataCode = $(this).parent('li').data('code');
    $(this).parent('li').addClass('on').siblings('li').removeClass('on');
    $('.sb_list_wrap .sb_list div').each(function () {
      $(this).removeClass('temp_opa');
      switch (dataCode) {
        case 'A30-A':
          if (!$(this).hasClass('type1')) $(this).addClass('temp_opa');
          break;
        case 'A30-B':
          if (!$(this).hasClass('type2')) $(this).addClass('temp_opa');
          break;
        case 'A30-C':
          if (!$(this).hasClass('type3')) $(this).addClass('temp_opa');
          break;
        case 'A30-D':
          if (!$(this).hasClass('type4')) $(this).addClass('temp_opa');
          break;
        case 'A30-Z':
          if (!$(this).hasClass('type5')) $(this).addClass('temp_opa');
          break;
        default:
          break;
      };

    });
    $('.sb_prog_list div').each(function () {
      $(this).removeClass('temp_opa');
      switch (dataCode) {
        case 'A30-A':
          if (!$(this).hasClass('type1')) $(this).addClass('temp_opa');
          break;
        case 'A30-B':
          if (!$(this).hasClass('type2')) $(this).addClass('temp_opa');
          break;
        case 'A30-C':
          if (!$(this).hasClass('type3')) $(this).addClass('temp_opa');
          break;
        case 'A30-D':
          if (!$(this).hasClass('type4')) $(this).addClass('temp_opa');
          break;
        case 'A30-Z':
          if (!$(this).hasClass('type5')) $(this).addClass('temp_opa');
          break;
        default:
          break;
      };

    });
    e.preventDefault();
  })

})