$(document).ready(function(){
	var $win = $(window);
	var $wra = $('#wrapper');
	var $nav = $('.navigation');
	var $bod = $('.body');
	var $quo = $('.quote');

	var navHigh = $nav.height();
	var winHigh = $win.height();
	var oldHigh = $quo.height();
	var addTop  = navHigh * 10;

	var scr = 0;
	var adjScr = 0;
	var adjScrKid = 0;
	var doQuo = false;
	var doDld = false;
	var doKid = false;
	var doTen = false;
	var doFoo = false;
	var rotImg = 0;

	var browCur = $win.width();
	var dtBrWid = 1600;
	var dtBrMid = 1200;
	var dtBrSma = 960;

	function doScroll(){
		scr = $win.scrollTop();
		// Set .quote section boolean
		if(scr>addTop){ doQuo = true; }
		else{ doQuo = false; }
		// Minimize nav on scroll point
		if(scr>addTop*1.7){ $nav.addClass('min'); }
		else{ $nav.removeClass('min'); }
		// Set .downloads section boolean
		if(scr>addTop*2.1){ doDld = true; }
		else{ doDld = false; }
		// Set .kids section boolean
		if(scr>addTop*2.5){ doKid = true; }
		else{ doKid = false; }
		// Set .teens section boolean
		if(scr>addTop*2.9){ doTen = true; }
		else{ doTen = false; }
		// Set .teens section boolean
		if(scr>addTop*3.4){ doFoo = true; }
		else{ doFoo = false; }
		// Return current scroll position
		return scr;
	};

	function fixEvents(){
		$('.events .sec-wrap').addClass('fix').css({
			top		: navHigh
		});
		if( browCur >= 1400 ){
			addTop = navHigh * 8.6;
		}
		else if( browCur >= 1200 && browCur < 1400 ){
			addTop = navHigh * 8.8;
		}
		else if( browCur >= 960 && browCur < 1200 ){
			addTop = navHigh * 9;
		}
		else{
			addTop = navHigh * 10;
		}
		//oldHigh = $quo.height();
		$quo.css({
			height	: function(){
				return oldHigh+(addTop*0.6);
			}
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
				var left = (scr*-0.1)+100;
				if( left < 36 ){ left = 36; }
				return left + '%';
			}
		});
		$('.event.ev-3').css({
			left : function(){
				var left = (scr*-0.1)+164;
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
					var top = (adjScr*0.18)-100;
					if( top > 45 ){ top = 45; }
					return top + 'px';
				}
			});
			$('.qu-pad').css({
				height	: function(){
					var high = 500-(adjScr*0.2);
					return high + 'px';
				}
			});
			$('.qu-cont').css({
				'padding-top': function(){
					var pad = adjScr*0.08;
					return pad + 'px';
				}
			});			
		}
		// Start of Downloads section.
		if( doDld ){
			adjScrDld = scr-addTop*2.1;
			$('.dl-bg').css({
				opacity : function(){
					var op = adjScrDld*0.004;
					if( op > 1 ){ op = 1; }
					return op;
				}
			});
			$('.dl-fir').css({
				'margin-top': function(){
					var top = adjScrDld*0.6;
					return top + 'px';
				}
			});
			rotImg = adjScrDld*0.02;
			$('.dl-img').css({
				'-webkit-transform' : 'rotate('+ rotImg +'deg)',
                '-moz-transform' : 'rotate('+ rotImg +'deg)',
                '-ms-transform' : 'rotate('+ rotImg +'deg)',
                'transform' : 'rotate('+ rotImg +'deg)',
                'margin-top': function(){
                	var top = adjScrDld*0.4;
					return top + 'px';
                }
			});
		}
		// Start of Kids section
		if( doKid ){
			// .kids elements
			adjScrKid = scr-addTop*2.5;
			$('.kd-fir').css({
				'margin-top': function(){
					var top = adjScrKid*0.25;
					return top + 'px';
				}
			});
			$('.bub-01').css({
				top : function(){
					var top = 70-adjScrKid*0.02;
					return top + '%';
				}
			});
			$('.bub-02').css({
				top : function(){
					var top = 70-adjScrKid*0.055;
					return top + '%';
				}
			});
			$('.bub-03').css({
				top : function(){
					var top = 100-adjScrKid*0.15;
					return top + '%';
				}
			});
		}
		if( doTen ){
			adjScrTen = scr-addTop*2.5;
			$('.tn-fir').css({
				'margin-top': function(){
					var top = adjScrTen*0.1;
					return top + 'px';
				}
			});
			$('.mrk-01').css({
				top : function(){
					var top = 120-adjScrTen*0.085;
					return top + '%';
				}
			});
			$('.mrk-02').css({
				top : function(){
					var top = 80-adjScrTen*0.04;
					return top + '%';
				}
			});
			$('.mrk-03').css({
				top : function(){
					var top = 180-adjScrTen*0.1;
					return top + '%';
				}
			});
			$('.mrk-04').css({
				top : function(){
					var top = 60-adjScrTen*0.015;
					return top + '%';
				}
			});			
		}
		if( doFoo ){
			adjScrFoo = scr-addTop*3.4;
			$('footer .rip-1').css({
				top : function(){
					var top = (210-(adjScrFoo*-0.066))* -1;
					if( top < -280 ){ top = -280; }
					return top + 'px';
				}
			});
			$('footer .rip-2').css({
				top : function(){
					var top = (adjScrFoo*0.05)-280;
					if( top > -238 ){ top = -238; }
					return top + 'px';
				}
			});
			$('.foot-cont').css({
				'padding-top': function(){
					var top = adjScrFoo*0.26;
					if( top > 275 ){ top = 275; }
					return top + 'px';
				}
			});
		}
	};

	setDims();
	$win.resize(function(){
		navHigh = $nav.height();
		winHigh = $win.height();
		browCur = $win.width();
		setDims();
	});
	$win.on('scroll',function(){
		moveOnScr(doScroll());
	});
	setTimeout(function(){
		$('.social-nav').addClass('open');
	},500);
	setTimeout(function(){
		$('.social-nav').removeClass('open');
	},5500);
});