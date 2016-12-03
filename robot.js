$(function(){
	console.log("init");
	$('.countdown').ClassyCountdown({
	    theme: "flat-colors",
	    end: $.now() + 10000
	});
})