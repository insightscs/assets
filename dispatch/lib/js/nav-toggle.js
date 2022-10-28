$(window).on('load', function () {
	//MENU TOGGLE
	$(".menu-toggle").click(function () {
		$("body").toggleClass("menu-hide");
	});
	//DROPDOWN
	$(".dropdown .dropbtn").click(function () {
		$(this).closest(".dropdown").find(".dropdown-content").slideToggle('300', "easeInOutQuad");
		$(this).closest(".dropdown").find(".caret").toggleClass("expanded");
	});
});	