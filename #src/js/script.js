new Swiper('.bottom-header__column.swiper-container', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 20,
	grabCursor: true,
});
new Swiper('.direction__slider.swiper-container', {
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 1.2,
		},
		768: {
			slidesPerView: 1.5,
		},
		992: {
			slidesPerView: 1.7,
		},
		1024: {
			slidesPerView: 3,
		},
		1500: {
			slidesPerView: 4,
		},
		spaceBetween: 0,
		grabCursor: true,
	}
});
new Swiper('.partners__content.swiper-container', {
	spaceBetween: 80,
	grabCursor: true,
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1.2,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 1.5,
		},
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2.5,
		},
		1024: {
			slidesPerView: 3,
		},
	},
	freeMode: {
		enabled: true,
	},
	loop: true
});
//меню бургер
$('.burger-menu').click(function (event) {
	$('.burger-menu, .menu__body').toggleClass('_active')
	$('body').toggleClass('_lock')
})
// Плавная прокрутка к якорям
$(document).ready(function () {
	$(".menu__body").on("click", "a", function (event) {
		// закрытие бургер при клике на ссылку
		$('.menu__body').removeClass('_active')
		$('.menu__burger').removeClass('_active')
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top}, 1500);
	});
});