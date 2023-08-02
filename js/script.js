var swiper = new Swiper(".mySwiperBanner", {
  effect: "fade",
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
});
$(".card-deck a").fancybox({
  caption: function (instance, item) {
    return $(this).parent().find(".card-text").html();
  },
});

$(".show").click(function () {
  $("#target").show(200);
  $(".show").hide(0);
  $(".hide").show(0);
});
$(".hide").click(function () {
  $("#target").hide(500);
  $(".show").show(0);
  $(".hide").hide(0);
});
$(".toggle").click(function () {
  $("#target").toggle("slow");
});

var swiper = new Swiper(".mySwiperCompany", {
  spaceBetween: 60,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".mySwiperSSSArea", {
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const header = document.querySelector(".header");
const headerHeight = parseInt(window.getComputedStyle(header).height);

document.addEventListener("scroll", function () {
  if (window.scrollY > headerHeight) {
    header.classList.add("header_scroll");
  } else {
    header.classList.remove("header_scroll");
  }
});
