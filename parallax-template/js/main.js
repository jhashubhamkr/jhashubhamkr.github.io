oldScroll=0;
$(window).scroll(function () {
	var scrollTop = $(this).scrollTop();
	var windowBottom=window.scrollY + window.innerHeight;
	
	$("#a1>.parallax-bg").css('top',(scrollTop*0.4));
	var limit=$("#dataCount").data('count');
	
	for (var i = 2; i <= limit+1; i++) {
		if (windowBottom>$("#a"+i).offset().top) {
			var tScrollTop=scrollTop-$("#a"+i).offset().top;
			$("#a"+i+">.parallax-bg").css('top',(tScrollTop*0.4));
		}
	}
	var offset=$("#popOut").offset().top;
	var curHeight=$("#popOut").outerHeight(true);
	$("#popOut").css('margin-top',(-80+(scrollTop*0.15))+'px');

	if (scrollTop>100) {
		$("nav").css("background", "#1C79A1");
		$('nav').css('background-image','none');
		$('nav').css('box-shadow','5px 5px 15px 0 rgba(0,0,0,0.15)');
		$('.pop-out-info').css('opacity','0');
	}
	if (scrollTop<100) {
		$('nav').css('background','transparent');
		$('nav').css('background-image','linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0))');
		$('nav').css('box-shadow','none');
		$('.pop-out-info').css('opacity','1');
	}
	if (scrollTop>500) {
		if (oldScroll>scrollTop) {
			//up
			$('nav').css('margin-top',0);
		}else{
			//down
			$('nav').css('margin-top',"-70px");
		}
	}
	oldScroll=scrollTop;
});

$(document).ready(function(){
	var scrollTop = $(this).scrollTop();
	if (scrollTop>400) {
		$("nav").css("background", "#1C79A1");
	}
});