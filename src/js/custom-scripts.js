// Custom Scripts - Start

$(document).ready(function() {

	// Tooltip Scripts
	$('[data-toggle="tooltip"]').tooltip();

	// Header Top - Calc - Start
	$header_ht = $('.header-wrap').height() + 55;

	$('.movie-slider-wrap').css({
		paddingTop: $header_ht 
	});

	$('.pg-top-section').css({
		paddingTop: $header_ht - 35 
	});	
	// Header Top - Calc - End

	// Owl Carousel - Movie Slider - Start
	$('.movie-slider').owlCarousel({
		nav: true,
	    loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,	    
	    responsiveClass: true,
	    navText: ['<i class="fa fa-angle-left fa-2x"></i>','<i class="fa fa-angle-right fa-2x"></i>'],
	    responsive:{
	        0:{
	            items: 1
	        },
	        360:{
	            items: 2
	        },	        
	        480:{
	            items: 2
	        },
	        600:{
	            items: 3
	        },
	        1000:{
	            items: 4
	        }
	    }
	});
	// Owl Carousel - Movie Slider - End

	// Contact Us - Page - Start
	$('#contact-form-link').click(function(e) {
		e.preventDefault();

		$('.contact-form-wrap').slideToggle(500);
	});
	// Contact Us - Page - End


	

});

// Custom Scripts - End
