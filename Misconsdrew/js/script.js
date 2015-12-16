$(document).ready(function() {


	
    $('#fullpage').fullpage({
   	 anchors:['section1', 'section2', 'section3', 'section4', 'section5'],
    	 loopHorizontal: false,
    	 keyboardScrolling: false,
    	 menu: true,
    	  
    });

	$("#questiona").click(function() {
		$("#explain").fadeIn(500);
	});
	
	$("#explain").click(function() {
		$("#explain").fadeOut(500);
	});
	
	$(".maplink").click(function() {
		$(".map").fadeToggle(500);
	});
	
	
	$(".nav").click(function() {
		$(".map").fadeOut(500);
	});
	
	$(".map").click(function() {
		$(".map").fadeOut(500);
	});	
	
	$("#gamea_title").mouseenter(function() {
		$("#gameaback").fadeTo(100, 1);
	});
	$("#gamea_title").mouseleave(function() {
		$("#gameaback").fadeTo(200, 0);
	});
	
	$("#gameb_title").mouseenter(function() {
		$("#gamebback").fadeTo(100, 1);
	});
	$("#gameb_title").mouseleave(function() {
		$("#gamebback").fadeTo(200, 0);
	});
	
	$("#gamec_title").mouseenter(function() {
		$("#gamecback").fadeTo(100, 1);
	});
	$("#gamec_title").mouseleave(function() {
		$("#gamecback").fadeTo(200, 0);
	});
	
	$("#gamed_title").mouseenter(function() {
		$("#gamedback").fadeTo(100, 1);
	});
	$("#gamed_title").mouseleave(function() {
		$("#gamedback").fadeTo(200, 0);
	});
	
	$("#gamee_title").mouseenter(function() {
		$("#gameeback").fadeTo(100, 1);
	});
	$("#gamee_title").mouseleave(function() {
		$("#gameeback").fadeTo(200, 0);
	});
	
});