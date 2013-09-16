$(document).ready(function(){
	var $bodyCl = $('#wrapper .body');
	var bodyTop = $bodyCl.offset().top;
	$bodyCl.addClass('fixed');

	var $secAll = $('section'); 
	var $secNav = $('section.navigation');
	var $secEve = $('section.events');

	var $eveOne = $('.event.ev-1');
	var $eveTwo = $('.event.ev-2');
	var $eveThr = $('.event.ev-3');
	var eveWide = $('.events .sec-wrap').width();
	var leftOne = 0;
	var leftTwo = eveWide;
	var leftThr = eveWide*2.1;
	var posThr = 0;
	var topLat = true;
	var scrollNum = 0;
	var scrollAdj = 0;

	var $quoImg = $('.qu-img');
	var $quoAtt = $('.qu-attr');
	var $dldBg  = $('.dl-bg');
	var $dldCon = $('.dl-cont');

	function scrollNum(){
		return $(window).scrollTop();
	};
	function eventSlide(scrollNum){
		posThr = leftThr - scrollNum*0.88;
		if( posThr > -10 ){
			if( topLat == false ){
				$bodyCl.addClass('fixed').css({
					top: bodyTop
				});
			}
			$eveOne.css({
				left: leftOne - scrollNum*0.7
			});
			$eveTwo.css({
				left: leftTwo - scrollNum*0.8
			});
			$eveThr.css({
				left: posThr
			});
			topLat = true;
			scrollAdj = 0;
		}
		else{
			if( topLat == true ){
				$bodyCl.removeClass('fixed').css({
					top: scrollNum + bodyTop
				});
				scrollAdj = scrollNum;
			}
			topLat = false;
		}
	};
	function quoteSec(scrollNum){
		console.log(scrollAdj);
		var scrollCur = scrollNum - scrollAdj;
		if( !topLat ){
			$quoImg.css({
				right: scrollCur*0.15+50
			}).addClass('show');
			$quoAtt.css({
				left: scrollCur*0.2
			});
			$dldBg.css({
				opacity: scrollCur*0.002
			});
			$dldCon.css({
				padding: function(){
					var pad = scrollCur*0.2+80;
					if( pad > 195 ){ pad = 195; }
					else if( pad < 80 ){ pad = 80;}
					return pad + 'px 5%';
				}
			});
		}
		else{
			$quoImg.removeClass('show');
		}
	};

	$(window).on('scroll',function(){
		scrollNum = $(window).scrollTop();
		eventSlide(scrollNum);
		quoteSec(scrollNum);
	});
});