$(function() {
	function toggleMenu() {
		$('body').append('<div id="mui-overlay"><div id="sidedrawer"><nav id="sidenav"><div><h2 class="mui-appbar-line-height">Menu</h2></div><div class="mui-divider"></div><ul></ul></nav></div></div>');
		$('#sidenav ul').append($('#top-menu').html());
		$('#sidedrawer').addClass('active');
		$('#mui-overlay').on('click', function() {
			$('#mui-overlay').remove();
		});
	};

	$('.jq-toggleMenu').on('click', function() {
		toggleMenu();
	});

	$(document).scroll(function() {
		var y = $(this).scrollTop();
		if (y > 600) {
			$('.subscriber').fadeIn();
		} else {
			$('.subscriber').fadeOut();
		}
	});

	$("#event-countdown")
		.countdown("2016/02/18", function(event) {
			$(this).text(
				event.strftime('nog %-w weken, %-d dagen en %-H uren')
			);
		});

});