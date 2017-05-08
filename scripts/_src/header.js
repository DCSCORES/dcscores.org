// Start nav menu function
function toggleNavMenu() {

	var menu = document.querySelector('.Navigation');

  if (menu.classList.contains('is-opened')) {
	    menu.classList.remove('is-opened');
	    menu.classList.add('is-closed');

	if ($(window).width() < 768 ) {
		$('body').css('position','relative');
		$('body').css('overflow','auto');
	} else {
		$('body').css('position','relative');
		$('body').css('overflow','auto');
	}

	$('.Hamburger').removeClass('is-active');
	$('.Header-mainNavigationToggleLabel').html('Menu');

  } else {
		menu.classList.remove('is-closed');
		menu.classList.add('is-opened');

		if ($(window).width() < 768 ) {
		$('body').css('position','relative');
		$('body').css('overflow','auto');
		} else {
			$('body').css('position','relative');
			$('body').css('overflow','hidden');
		}

		$('.Hamburger').addClass('is-active');
		$('.Header-mainNavigationToggleLabel').html('Close');
  }

$(document).keyup(function(e)
{
	if (e.keyCode == 27)  // Esc key maps to keycode '27'
		{
		 if (menu.classList.contains('is-opened')) {
			menu.classList.remove('is-opened');
			menu.classList.add('is-closed');

			$('body').css('position','relative');
			$('body').css('overflow','auto');
			$('.Hamburger').removeClass('is-active');
			$('.Header-mainNavigationToggleLabel').html('Menu');
			}
		}
	})
}

// Mobile accordion
$('.js-dropdownLink').on('click', function (e) {
  if ($('.Navigation').hasClass('is-opened')) {
    e.preventDefault();
    if ($(this).hasClass('is-opened')) {
      $(this).removeClass('is-opened');
    } else {
      $('.js-dropdownLink').removeClass('is-opened');
      $(this).addClass('is-opened');
    }
  };
});
















