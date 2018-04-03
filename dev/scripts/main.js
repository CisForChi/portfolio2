
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$.fn.randomOrder = function(animate) {
  this.each(function() {
    var image = $(this);
    
    // Viewport Dimensions
    var vpHeight = $(window).height();
    var vpWidth = $(window).width();
    
    // Image Position
    var xPos = getRandomInt(0, vpWidth - image.width());
    var yPos = getRandomInt(0, vpHeight - image.height());
    var zIndex = getRandomInt(0,13);
    
    // Animation Duration
    if(animate) var dur = 500;
    else var dur = 0;
    
    image.animate({left: xPos, top: yPos, 'z-index': zIndex}, dur);
  });
};

//Setup
$('img').randomOrder(false);
$('img').draggable({stack: "img"});

// Change after 10 Seconds
window.setInterval(function(){
  $('img').randomOrder(true);
}, 10000);

const ohHey = "Hello World";

console.log(ohHey);

$(".box-info").hover(function(){
    $('.hover-info').show();
},function(){
    $('.hover-info').hide();
});

(function($){
			// variables
			elementWidth = $('ul').width(),
			containerWidth = $('nav').width(),
			difference = elementWidth-containerWidth,
			finalWidth = difference * 1.5,
			element = $('ul');
			
			// active on click
			$('li').on('click', function(){
			  $('li').removeClass('active');
			  $(this).addClass('active');
			});
			
		  })(jQuery);
		  
		  
    //jQuery is required to run this code
$( document ).ready(function() {

  scaleVideoContainer();

  initBannerVideoSize('.video-container .poster img');
  initBannerVideoSize('.video-container .filter');
  initBannerVideoSize('.video-container video');

  $(window).on('resize', function() {
      scaleVideoContainer();
      scaleBannerVideoSize('.video-container .poster img');
      scaleBannerVideoSize('.video-container .filter');
      scaleBannerVideoSize('.video-container video');
  });

});

function scaleVideoContainer() {

  var height = $(window).height() + 5;
  var unitHeight = parseInt(height) + 'px';
  $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

  $(element).each(function(){
      $(this).data('height', $(this).height());
      $(this).data('width', $(this).width());
  });

  scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

  var windowWidth = $(window).width(),
  windowHeight = $(window).height() + 5,
  videoWidth,
  videoHeight;

  // console.log(windowHeight);

  $(element).each(function(){
      var videoAspectRatio = $(this).data('height')/$(this).data('width');

      $(this).width(windowWidth);

      if(windowWidth < 1000){
          videoHeight = windowHeight;
          videoWidth = videoHeight / videoAspectRatio;
          $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

          $(this).width(videoWidth).height(videoHeight);
      }

      $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

  });
}