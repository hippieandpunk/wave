$(function () {

  $('.blog__slider-items').slick({
    arrows: false,
    dots: true,
  });

  $('.menu__btn, .menu a').on('click', function () {
    $('.header__top-inner').toggleClass('header__top-inner--active');
  });

    $(".menu a, .go-top").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  var mixer = mixitup('.gallery__content');

});
