$(document).ready(function(){
	var $win = $(window);
	var $wra = $('#wrapper');
	var $nav = $('.navigation');
	var $bod = $('.body');
	var $quo = $('.quote');

	var navHigh = $nav.height();
	var winHigh = $win.height();
	var oldHigh = $quo.height();
	var addTop  = navHigh * 4;

	var scr = 0;
	var adjScr = 0;
	var adjScrKid = 0;
	var doQuo = false;
	var doKid = false;
	var rotImg = 0;

	function doScroll(){
		scr = $win.scrollTop();
		// Set .quote section boolean
		if(scr>addTop){ doQuo = true; }
		else{ doQuo = false; }
		// Set .kids section boolean
		if(scr>addTop*3){ doKid = true; }
		else{ doKid = false; }
		// Return current scroll position
		return scr;
	};

	function fixEvents(){
		$('.events .sec-wrap').addClass('fix').css({
			top		: navHigh
		});
		addTop = navHigh * 4;
		oldHigh = $quo.height();
		$quo.css({
			height	: (oldHigh+(addTop*0.15))
		});
		$('.quote .sec-wrap').css({
			top 	: addTop
		});
	};

	function setDims(){
		$bod.css({
			top 	: navHigh,
			height 	: (winHigh - navHigh)
		});
		fixEvents();
	};

	function moveOnScr(scr){
		// Events section
		$('.event.ev-2').css({
			left : function(){
				var left = (scr*-0.25)+100;
				if( left < 36 ){ left = 36; }
				return left + '%';
			}
		});
		$('.event.ev-3').css({
			left : function(){
				var left = (scr*-0.25)+164;
				if( left < 36 ){ left = 36; }
				return left + '%';
			}
		});
		// Start of quote section
		if( doQuo ){
			// Quote elements
			adjScr = scr-addTop;
			$('.quote .rip.rip-2').css({
				top 	: function(){
					var top = (adjScr*0.12)-100;
					if( top > 50 ){ top = 50; }
					return top + 'px';
				}
			});
			$('.qu-pad').css({
				height	: function(){
					var high = 260-(adjScr*0.18);
					return high + 'px';
				}
			});
			$('.qu-cont').css({
				'padding-top': function(){
					var pad = adjScr*0.06;
					return pad + 'px';
				}
			});
			// Downloads elements
			$('.dl-bg').css({
				opacity : function(){
					var op = adjScr*0.0008;
					if( op > 1 ){ op = 1; }
					return op;
				}
			});
			$('.dl-fir').css({
				'margin-top': function(){
					var top = adjScr*0.12;
					return top + 'px';
				}
			});
			rotImg = adjScr*0.015;
			$('.dl-img').css({
				'-webkit-transform' : 'rotate('+ rotImg +'deg)',
                '-moz-transform' : 'rotate('+ rotImg +'deg)',
                '-ms-transform' : 'rotate('+ rotImg +'deg)',
                'transform' : 'rotate('+ rotImg +'deg)'
			});
		}
		// Start of Kids section
		if( doKid ){
			// .kids elements
			adjScrKid = scr-addTop*3;
			$('.kd-fir').css({
				'margin-top': function(){
					var top = adjScrKid*0.12;
					return top + 'px';
				}
			});
			$('.bub-01').css({
				top : function(){
					var top = 80-adjScrKid*0.015;
					return top + '%';
				}
			});
			$('.bub-02').css({
				top : function(){
					var top = 80-adjScrKid*0.04;
					return top + '%';
				}
			});
			$('.bub-03').css({
				top : function(){
					var top = 110-adjScrKid*0.102;
					return top + '%';
				}
			});
			// .teens elements
			$('.teens .rip-1').css({
				top : function(){
					var top = (220-(adjScrKid*-0.035))* -1;
					if( top < -280 ){ top = -280; }
					return top + 'px';
				}
			});
			$('.teens .rip-2').css({
				top : function(){
					var top = (adjScrKid*0.025)-280;
					if( top > -242 ){ top = -242; }
					return top + 'px';
				}
			});
		}
	};

	setDims();
	$win.resize(function(){
		navHigh = $nav.height();
		winHigh = $win.height();
		setDims();
	});
	$win.on('scroll',function(){
		moveOnScr(doScroll());
	});
});