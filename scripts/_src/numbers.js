// Count up for impact values
if($('#numberOne').length){

  var easingFn = function (t, b, c, d) {
    var ts = (t /= d) * t;
    var tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
  }

  var options = {
    useEasing : true,
    easingFn: easingFn,
    useGrouping : true,
  };

  var maxcount_01 = document.getElementById('numberOne').innerHTML;
  var maxcount_02 = document.getElementById('numberTwo').innerHTML;
  var maxcount_03 = document.getElementById('numberThree').innerHTML;

  var countup_01 = new CountUp("numberOne", 0, maxcount_01, 0, 2.5, options);
  var countup_02 = new CountUp("numberTwo", 0, maxcount_02, 0, 2.5, options);
  var countup_03 = new CountUp("numberThree", 0, maxcount_03, 0, 2.5, options);


  $(window).on('scroll', function () {

  if(($('#numberOne').offset().top - $(window).scrollTop()) < ($(window).height() / 1)) {

  	countup_01.start();
  	countup_02.start();
  	countup_03.start();

		}
	});
}