var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var bodyPos = $('body').scrollTop();
var image1Pos = $('#image1-container').offset().top;
var image2Pos = $('#image2-container').offset().top;
var image3Pos = $('#image3-container').offset().top;
var image4Pos = $('#image4-container').offset().top;

function resizeFunction(){
	windowHeight = window.innerHeight;
	windowWidth = window.innerWidth;
	logoWidth = $('.main-logo').width();
	// image1Pos = $('#image1-container').offset().top;
	// image2Pos = $('#image2-container').offset().top;
	// image3Pos = $('#image3-container').offset().top;
	// image4Pos = $('#image4-container').offset().top;
	logoSize();
}

function logoSize(){
	if (logoWidth > 500) {
		$('.main-logo').attr('src', 'assets/img/logo-800.png');
	}else if(logoWidth > 400){}{
		$('.main-logo').attr('src', 'assets/img/logo-500.png');
	}else if(logoWidth > 250){
		$('.main-logo').attr('src', 'assets/img/logo-350.png');
	}else{
		$('.main-logo').attr('src', 'assets/img/logo-250.png');
	}
}

function scrollFunction(){
	bodyPos = $('body').scrollTop();
	image1Pos = $('#image1-container').offset().top;
	image2Pos = $('#image2-container').offset().top;
	image3Pos = $('#image3-container').offset().top;
	image4Pos = $('#image4-container').offset().top;
	// $('body').css('background-color', '#000000');
	// console.log("works");
	if (image1Pos <= 0) {
		$('#image1-content-container').addClass('container-fixed');
		$('.main-logo-content').css('display', 'none');
		// console.log("works");
	}else{
		$('#image1-content-container').removeClass('container-fixed');
		$('.main-logo-content').css('display', 'block');
	}
	if (image2Pos <= 0) {
		$('#image2-content-container').addClass('container-fixed');
		// console.log("works");
	}else{
		$('#image2-content-container').removeClass('container-fixed');
	}
	if (image3Pos <= 0) {
		$('#image3-content-container').addClass('container-fixed');
		// console.log("works");
	}else{
		$('#image3-content-container').removeClass('container-fixed');
	}
	if (image4Pos <= 0) {
		$('#image4-content-container').addClass('container-fixed');
		// console.log("works");
	}else{
		$('#image4-content-container').removeClass('container-fixed');
	}


}


// -----------------------------------------------------	DOCUMENT READY		-----------------------------------------------------

$(document).ready(function(){
	if (windowWidth > 500) {
		$('.main-logo').attr('src', 'assets/img/logo-800.png');
	}else{
		$('.main-logo').attr('src', 'assets/img/logo-500.png');
	}

	$('.spacer-30').css('opacity', '1');

// window.onresize = resizeFunction;
	$('body').on('resize', resizeFunction);
	$('body').on('scroll', scrollFunction);
	// window.onscroll = scrollFunction;
// console.log("works");

});