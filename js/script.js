$(document).ready(function(){
	var $secAll = $('section'); 
	var $secNav = $('section.navigation');
	var $secEve = $('section.events');

	//$secAll.addClass('fix');

	function scrollNum(){
		return $(document).scrollTop();
	};
	function eventSlide(scrollNum){
		//console.log(scrollNum);
		var $body = $('body');
		var slideWide = $('.events .sec-wrap').width();
		var leftOne = 0;
		var leftTwo = slideWide;
		var leftThr = slideWide * 2;
		var allWide = slideWide * 3;
		var eventTop = $secEve.offset().top;
		var eventPos = eventTop - scrollNum;
		console.log(eventPos);
		if( eventPos < 1 ){
			console.log('at the top');
			$secEve.css({
				'margin-top' : scrollNum
			});
		}
		if( scrollNum < allWide ){
			
		}
	};

	$(document).on('scroll',function(){
		eventSlide(scrollNum())
	});
});