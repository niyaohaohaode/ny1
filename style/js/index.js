$(function() {
	$('.slideNavBtn').click(function() {
		if ($('#navBtn_control').is(':hidden')) {
			$('#navBtn_control').show(); 
		} else { 
			$('#navBtn_control').hide();
		}
	})
})
$(document).ready(function() {
	$('.flexslider').flexslider({
		directionNav: true,
		pauseOnAction: false,
		animationSpeed: 300,
		slideshowSpeed: 3000,
		animation: "fade"
	});
});
