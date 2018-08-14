$(function() {

	// Custom JS
	$(".btn--switch").on('click', function() {
		$(this).toggleClass("active");
	});

	$(window).scroll(function(){
		$(".navbar-collapse").removeClass("show");
    let navbarHeight = $('.navbar').height();
    if ($(this).scrollTop() >= navbarHeight) {
			$('.navbar').addClass('navbar--bg');
    } else {
			$('.navbar').removeClass('navbar--bg');
		}
  });

});
