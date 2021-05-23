"use strict";

$(function () {
  $(".slider__inner").slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>'
  });
});
$(function () {
  $(".center").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1
      }
    }]
  });
});

(function ($) {
  $(function () {
    $("input, select").styler();
  });
})(jQuery);