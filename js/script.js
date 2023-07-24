// Burger Menu
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(function() {

	var header = $(".header__content"),
		homeH = $("#home").innerHeight(),
		scrollOffset = $(window).scrollTop();

	// Header Fixed
	checkScroll(scrollOffset);	

	$(window).on("scroll", function() {
		
		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);

	});

	function checkScroll(scrollOffset) {
		scrollOffset = $(this).scrollTop();

		if(scrollOffset >= homeH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}
});
// Scroll

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}