$(document).ready(function(){
	var $win = $(window);
	var $wra = $('#wrapper');
	var $nav = $('.navigation');
	var $bod = $('.body');
	var $quo = $('.quote');
	var $secEv = $('.events .sec-wrap');
	var $evOne = $('.event.ev-1');
	var $evTwo = $('.event.ev-2');
	var $evThr = $('.event.ev-3');
	var $secQu = $('.quote .sec-wrap');
	var $ripTwo = $('.rip.rip-2');
	var $ripPad = $('.qu-pad');
	var $quoCon = $('.qu-cont');
	var $dldBg = $('.dl-bg');

	var navHigh = $nav.height();
	var winHigh = $win.height();
	var oldHigh = $quo.height();
	var addTop  = navHigh * 4;

	var scr = 0;
	var adjScr = 0;
	var doQuo = false;

	function doScroll(){
		scr = $win.scrollTop();
		// Set .quote section boolean.
		if(scr>addTop){ doQuo = true; }
		else{ doQuo = false; }
		return scr;
	};

	function fixEvents(){
		$secEv.addClass('fix').css({
			top		: navHigh
		});
		addTop = navHigh * 4;
		oldHigh = $quo.height();
		$quo.css({
			height	: (oldHigh+(addTop*0.3))
		});
		$secQu.css({
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
		$evTwo.css({
			left : function(){
				var left = (scr*-0.25)+100;
				if( left < 36 ){ left = 36; }
				return left + '%';
			}
		});
		$evThr.css({
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
			$ripTwo.css({
				top 	: function(){
					var top = (adjScr*0.12)-100;
					if( top > 50 ){ top = 50; }
					return top + 'px';
				}
			});
			$ripPad.css({
				height	: function(){
					var high = 260-(adjScr*0.18);
					return high + 'px';
				}
			});
			$quoCon.css({
				'padding-top': function(){
					var pad = adjScr*0.06;
					return pad + 'px';
				}
			});
			// Downloads elements
			$dldBg.css({
				opacity : function(){
					var op = adjScr*0.0008;
					if( op > 1 ){ op = 1; }
					return op;
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
		var scr = doScroll();
		console.log(scr);
		moveOnScr(scr);
	});
});