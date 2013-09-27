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

	var $quoCon = $('.qu-cont');
	var $quoImg = $('.qu-img');
	var $quoAtt = $('.qu-attr');
	var $dldBg  = $('.dl-bg');
	var $dldCon = $('.dl-cont');

	var $kdShpOne = $('.kd-shape-1');
	var $kdShpTwo = $('.kd-shape-2');
	var $kdShpThr = $('.kd-shape-3');

	var $tnShpOne = $('.tn-shape-1');
	var $tnShpTwo = $('.tn-shape-2');
	var $tnShpThr = $('.tn-shape-3');

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
		//console.log(scrollAdj);
		var scrollCur = scrollNum - scrollAdj;
		if( !topLat ){
			$quoCon.css({
				padding: function(){
					var pad = 144-scrollCur*0.3;
					if( pad > 144 ){ pad = 144; }
					else if( pad < 20 ){ pad = 20;}
					return pad + 'px 5%';
				}
			});
			$quoImg.css({
				right: scrollCur*0.15+50
			}).addClass('show');
			$quoAtt.css({
				left: scrollCur*0.2
			});
			$dldBg.css({
				opacity: scrollCur*0.0015
			});
			$dldCon.css({
				padding: function(){
					var pad = scrollCur*0.2+80;
					if( pad > 220 ){ pad = 220; }
					else if( pad < 80 ){ pad = 80;}
					return pad + 'px 5%';
				}
			});
		}
		else{
			$quoImg.removeClass('show');
		}
	};
	function kidSec(scrollNum){
		var scrollCur = scrollNum - scrollAdj;
		if( !topLat ){
			$kdShpOne.css({
				top: function(){
					var top = 85 - scrollCur*0.04;
					if( top > 85 ){ top = 85; }
					else if( top < 10 ){ top = 10; }
					return top + '%';
				}
			});
			$kdShpTwo.css({
				top: function(){
					var top = 105 - scrollCur*0.085;
					if( top > 105 ){ top = 105; }
					else if( top < -40 ){ top = -40; }
					return top + '%';
				}
			});
			$kdShpThr.css({
				top: function(){
					var top = 120 - scrollCur*0.14;
					if( top > 120 ){ top = 120; }
					else if( top < -90 ){ top = -90; }
					return top + '%';
				}
			});
		}
		else{
			
		}
	};
	function teenSec(scrollNum){
		var scrollCur = scrollNum - scrollAdj;
		if( !topLat ){
			$tnShpOne.css({
				top: function(){
					var top = 110 - scrollCur*0.04;
					if( top > 110 ){ top = 110; }
					else if( top < 10 ){ top = 10; }
					return top + '%';
				}
			});
			$tnShpTwo.css({
				top: function(){
					var top = 140 - scrollCur*0.085;
					if( top > 140 ){ top = 140; }
					else if( top < -40 ){ top = -40; }
					return top + '%';
				}
			});
			$tnShpThr.css({
				top: function(){
					var top = 160 - scrollCur*0.14;
					if( top > 160 ){ top = 160; }
					else if( top < -90 ){ top = -90; }
					return top + '%';
				}
			});
		}
		else{
			
		}
	};

	$(window).on('scroll',function(){
		scrollNum = $(window).scrollTop();
		eventSlide(scrollNum);
		quoteSec(scrollNum);
		kidSec(scrollNum);
		teenSec(scrollNum);
	});
});