window.onload=function(){
	$('.first-block-container').toggleClass('animated');
	$('.first-block-container').toggleClass('fadeIn');
};
$(document).ready(function() {

	var $toggleButton = $('.toggle-button'),
		$toggleInfo = $('.toggle-info'),
    	$menuWrap = $('.menu-wrap'),
    	$sidebarArrow = $('.sidebar-menu-arrow');

	// Hamburger button

	$toggleButton.on('click', function() {
		$toggleInfo.removeClass('info-open');
		$('.contact-information').removeClass('menu-show');
		$(this).toggleClass('button-open');		
		$menuWrap.toggleClass('menu-show');
	});

	$toggleInfo.on('click', function() {
		$toggleButton.removeClass('button-open');
		$menuWrap.removeClass('menu-show');
		$(this).toggleClass('info-open');		
		$('.contact-information').toggleClass('menu-show');
	});

	// Sidebar navigation arrows

	$sidebarArrow.click(function() {
		$(this).next().slideToggle(300);
	});

	$('.link a').hover(function(){
		$(this).toggleClass('link-a-hover');
		}, function(){
		$(this).removeClass('link-a-hover');
	});

});