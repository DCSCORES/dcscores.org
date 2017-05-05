var DS = DS || {};
(function($){
	DS.carousel = {

    // News carousel
		initCarouselNews : function () {
			DS.carousel.els.carouselNews.slick({
				arrows: true,
				prevArrow: '<button class="News-previousButton  Icon  Icon-arrowLeft  slick-prev"></button>',
				nextArrow: '<button class="News-nextButton  Icon  Icon-arrowRight  slick-next"></button>',
				slidesToShow: 3,
				slidesToScroll: 1,
				variableWidth: true,
				dots: false,
				waitForAnimate: false,
				pauseOnHover: false,
				infinite: false,
				responsive : [
					{
						breakpoint:600,
						settings: {
							centerMode: true,
							slidesToShow: 1,
							infinite: false,
							dots: true
						}
					}
				]
			});
		},
		init : function() {
			DS.carousel.els = {
				carousel : $('.js-carousel'),
				carouselNews: $('.js-carouselNews')
			};

			if(DS.carousel.els.carouselNews[0]) {
				DS.carousel.initCarouselNews();
			}
		}
	};

	jQuery(document).ready(function() {
		DS.carousel.init();
	});

}(jQuery));