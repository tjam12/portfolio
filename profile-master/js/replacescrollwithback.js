;(function () {
	
	var goToTop = function() {
		$(window).scroll(function(){

				$('.js-top').addClass('active');

		});
	
	};

	
	$(function(){
		goToTop();
	
	});


}());