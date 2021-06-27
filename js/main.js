let pageClass = {
	doc: $( document ),
	win: $( window ),
	slick: {
		init: () => {

			$('.multiple-items').slick({
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				autoplay: false,
				autoplaySpeed: 4000,
				prevArrow: '<button class="slick-prev page-slide-prev" aria-label="Previous" type="button"><i class="icon-prev"></i></button>',
				nextArrow: '<button class="slick-next page-slide-next" aria-label="Next" type="button"><i class="icon-next"></i></button>',
				responsive: [
					{
						breakpoint: 767,
						settings: {
							slidesToScroll: 1,
							slidesToShow: 1
						}
					},
					{
						breakpoint: 1279,
						settings: {
							slidesToScroll: 2,
							slidesToShow: 2
						}
					}
				]
			});
			
		},
		filter: () => {
			let element = document.getElementsByClassName( 'filter-btn active' );
			Array.from(element).forEach( ( el ) => {
				if ( el.getAttribute( 'id' ) ) {
					$('.multiple-items').slick('slickFilter','.' + el.getAttribute( 'id' ));
					
				}
				
			});
			
		},
		unFilter: () => {
			$('.multiple-items').slick('slickUnfilter');
			
		}

	},
	evens: {
		add: () => {
			let element = document.getElementsByClassName("filter-btn");
			Array.from(element).forEach( ( el ) => {
				el.addEventListener( 'click', event => {
					pageClass.evens.element( event );
					
				});
				
			});
			
		},
		element: ( event ) => {
			if ( ! Array.from(event.target.classList).includes( 'active' ) ) {
				let element = document.getElementsByClassName( 'filter-btn active' );
				Array.from(element).forEach( ( el ) => {
					pageClass.slick.unFilter();
					el.classList.remove( 'active' );
					
				});
				event.target.classList.add( 'active' );
				pageClass.slick.filter();
				
				
			}
			
		}
	},
	ready: () => {
		pageClass.evens.add();
		pageClass.slick.init();
		pageClass.slick.filter();

	}
	
}

document.addEventListener('DOMContentLoaded', function() {
	pageClass.ready();
	
}, false);
