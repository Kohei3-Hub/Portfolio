
$('.Sp_veiw').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.Sp_carousel_menu',
});
$('.Sp_carousel_menu').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  centerMode: true,
  centerPadding:'20%',
  focusOnSelect: true,
    asNavFor: '.Sp_veiw',
});