var swiper = new Swiper(".mySwiperBanner", {
  effect: "fade",
});
$(".card-deck a").fancybox({
  caption: function (instance, item) {
    return $(this).parent().find(".card-text").html();
  },
});
var swiper = new Swiper(".mySwiperCompany", {
  slidesPerView: 2,
  spaceBetween: 60,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
