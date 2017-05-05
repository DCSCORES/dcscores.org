var DS = DS || {};
(function($){
	DS.scrollIn = {
		init : function() {
			window.sr = ScrollReveal();
			var scrollClass = '.scrollIn';

			sr.reveal(scrollClass,{
				duration: 800,
				delay: 150,
				origin: 'bottom',
				distance: '30px',
				scale: 1,
				reset: false
			});
		}
	};

	jQuery(document).ready(function() {
		if ($('.scrollIn')[0]) {
			DS.scrollIn.init();
		}
	});

}(jQuery));