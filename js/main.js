let pageClass = {
	
	slick: {
		init: () => {
			$('.multiple-items').slick({
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				autoplay: false,
				autoplaySpeed: 4000,
				prevArrow: '<button class="slick-prev page-slide-prev" aria-label="Previous" type="button">Previous</button>',
				nextArrow: '<button class="slick-next page-slide-next" aria-label="Next" type="button">Next</button>',
				responsive: [
					{
						breakpoint: 426,
						settings: {
							slidesToScroll: 1,
							slidesToShow: 1
						}
					},
					{
						breakpoint: 1025,
						settings: {
							slidesToScroll: 2,
							slidesToShow: 2
						}
					}
				]
			});
			
		}

	},
	ready: () => {
		pageClass.slick.init();

	}
	
}

$( document ).ready(() => {
	pageClass.ready();
	
});
