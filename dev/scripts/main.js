

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

