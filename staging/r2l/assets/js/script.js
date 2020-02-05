(function($) {
	$(document).ready(function() {

		var bannerHeight = window.innerHeight - 237;
		if (!$('#banner-section').hasClass('inner-page')) {
			$('#banner-section').css({height: bannerHeight});
		} else {
			$('#banner-section').css({height: 350});
		}

		$('[data-fancybox="iframe"]').fancybox({
			tpl : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen allow="autoplay; fullscreen" src="" frameborder="0"></iframe>',
			scrolling : 'no'
		});

	});
})(jQuery);