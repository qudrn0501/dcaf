//swiper 1
var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 26.6667,
  slidesPerGroup: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//swiper 3
var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
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

// //tab menu
// function openTab(evt, tabName) {
//   var i, tabContent, tabLinks;
//   tabContent = document.getElementsByClassName("tab_content");
//   for (i = 0; i < tabContent.length; i++) {
//     tabContent[i].style.display = "none";
//   }
//   tabLinks = document.getElementsByClassName("tab_links");
//   for (i = 0; i < tabLinks.length; i++) {
//     tabLinks[i].className = tabLinks[i].className.replace(" active", "");
//   }
//   document.getElementById(tabName).style.display = "block";
//   evt.currentTarget.className += " active";
// }

$(document).ready(function () {
  $(".tab_links").click(function () {
    var idx = $(this).index();
    $(".tab_links").removeClass("on_active");
    $(".tab_links").eq(idx).addClass("on_active");
    $(".tab_content > div").hide();
    $(".tab_content > div").eq(idx).show();
  })
});