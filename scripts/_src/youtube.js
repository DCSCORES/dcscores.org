(function($) {
	var player;
	var videoId;
	var iframe;
	var open = true;
	var flip = false;
	var pause = "M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28";
	var play = "M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26";
	var $animation = $('#animation');
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	var els = {
		progressBar: $('#progressBar'),
		progressBarDiv: $('#progressBar div')
	}
	var progressBarMouseDown = false;

	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	$('.initVideo').on('click', function(){
		$('.Youtube').addClass('is-open');
		$('.Youtube').animate(
			{opacity:1 }, {display:'block'}
		);
		videoId = matchYoutubeUrl($(this).attr('data-youtube-url'));

		onYouTubeIframeAPIReady(videoId);
		$('.page-body').addClass('quickview-blur');
		$('.Youtube').scrollLock();
	});

	function matchYoutubeUrl(url){
		var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
		return (url.match(p)) ? RegExp.$1 : false ;
	}

	function onYouTubeIframeAPIReady(videoId) {
	    player = new YT.Player('youtubeVideo', {
	        width: 600,
	        height: 400,
	        videoId: videoId,
	        playerVars: {
	        	'controls': 0,
	        	'modestbranding' :0,
	        	'autoplay' : 1,
	        	'showinfo' : 0
	        },
	        events: {
	            onReady: initialize,
	            'onStateChange' : function(event) {
	            	if (event.data == YT.PlayerState.PLAYING) {
	            		flip = true;
	            	} else if (event.data == YT.PlayerState.PAUSED){
	            		flip=false;
	            	}
	            	animatePlayPauseBtn();
	            }
	        }
	    });
	}

	function initialize(){
		var time_update_interval;

	    // Update the controls on load
	    // Work in Progress
	    updateProgressBar();

	    // Clear any old interval.
	    clearInterval(time_update_interval);

	    // Start interval to update elapsed time display and
	    // the elapsed part of the progress bar every second.
	    time_update_interval = setInterval(function () {
	        getRemainingTime();
	    }, 1000);
	    window.requestAnimationFrame(updateProgressBar);

	}

	els.progressBar.on('click', function (e) {
		var totalWidth = els.progressBar.innerWidth();
		var clickOffset = Math.max(0,e.clientX - els.progressBar.offset().left);
		var newTime = player.getDuration()*(clickOffset/totalWidth);
		player.seekTo(newTime);
	});

	els.progressBar.on('mousedown', function (e) {
		progressBarMouseDown = true;
	});

	els.progressBar.on('mouseup', function (e) {
		progressBarMouseDown = false;
	});

	$('body').on('mousemove', function (e) {
		if(progressBarMouseDown) {
			var totalWidth = els.progressBar.innerWidth();
			var clickOffset = Math.max(0,e.clientX - els.progressBar.offset().left);
			els.progressBar.find('div').css('width',clickOffset);
		}
	});


	// Fullscreen video
	$('.Youtube-bodyControlGoFullscreen').on('click', function() {
		iframe = document.getElementById('youtubeVideo');
		playFullscreen(iframe);
	});

	// Close and Destroy Video element
	$('.Youtube-bodyClose').on('click', function() {
		destroyVideo();
		$('.page-body').removeClass('quickview-blur');
		$('.Youtube').scrollRelease();
	});

	$(document).keyup(function(e) {
		if (e.keyCode == 27) { // escape key maps to keycode `27`
			destroyVideo();
			$('.page-body').removeClass('quickview-blur');
			$('.Youtube').scrollRelease();
		}
	});

	$(".Youtube-bodyControlPlayPauseButton").on('click', function() {
		if (flip === false) {
			player.playVideo();
		} else {
			player.pauseVideo();
		}
	});

	function escapeClose() {
		$(document).keyup(function(e) {
		     if (e.keyCode == 27) { // escape key maps to keycode `27`
		       if ( $('.Youtube').hasClass('is-open') ) {
		         destroyVideo();
		       }
		    }
		});
	};

	function playFullscreen (){
	  var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
	  if (requestFullScreen) {
	    requestFullScreen.bind(iframe)();
	  }
	};

	function updateProgressBar(){
		if(!progressBarMouseDown) {
	    // Update the value of our progress bar accordingly.
	    var scrubberWrapperWidth = els.progressBar.innerWidth();
	    var duration = (player.getCurrentTime() / player.getDuration()) * 100;
	    var progress = duration * scrubberWrapperWidth / 100;
	    els.progressBarDiv.css({
	    	width: progress + 'px'
	    });
		}
	 	window.requestAnimationFrame(updateProgressBar);
	};

	function destroyVideo() {
		$('.Youtube').animate(
			{opacity:0 }, {display:'none'}
		);
		player.destroy();
		$('.Youtube').removeClass('is-open');
	};

	function animatePlayPauseBtn() {
		   $animation.attr({
		      "from": flip ? pause : play,
		      "to": flip ? play : pause
		   }).get(0).beginElement();
	};

	function minTwoDigits(seconds) {
	  return (seconds < 10 ? '0' : '') + seconds;
	}

	function getRemainingTime() {
		var time = player.getDuration() - player.getCurrentTime();
		var minutes = Math.floor(time / 60);
		var seconds = Math.floor(time - minutes * 60);
		var finalTime = '-' + minutes + ':' + minTwoDigits(seconds);
	    $('.Youtube-bodyControlTimeRemaining').text(finalTime);
	};

}(jQuery));