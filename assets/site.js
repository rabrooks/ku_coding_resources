var SideNav = (function(){
	var navItem = $(".nav-item a");

	function init() {
		$(navItem).on('click', function() {
			$(".nav-item .active").removeClass("active");
			$(this).addClass("active")
		});
	}
	return {
		init: init
	}
})();

$(document).ready(function() {
	SideNav.init();
});
