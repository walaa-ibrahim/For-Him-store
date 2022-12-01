//navbar-toggler event

$('.nav-toggle').click(function (e) { 
	e.preventDefault();
	$('body').css('overflow-y', 'hidden');
	$('#nav-list').fadeIn(300);
});
$('.closed i').click(function () { 
	$('#nav-list').fadeOut(300);
	$('body').css('overflow-y', 'scroll');
 });
//hide placeholder onfocus
var placeAttr='';
	$('[placeholder]').focus(function(){
		placeAttr =$(this).attr('placeholder');
		$(this).attr('placeholder','');
	}).blur(function(){
		$(this).attr('placeholder', placeAttr);
	});
//fire new-slick
$('.new-slick').slick({
   rtl:true,
   slidesToShow: 3,
   slidesToScroll: 1,
   prevArrow:'.prev-arrow',
	nextArrow:'.next-arrow',
   responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
});
//fire selc-slick
$('.selc-slick').slick({
	rtl:true,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow:'.prev1-arrow',
	nextArrow:'.next1-arrow',
	responsive: [
		 {
		   breakpoint: 1024,
		   settings: {
			 slidesToShow: 3,
			 slidesToScroll: 3,
			 infinite: true,
			 dots: true
		   }
		 },
		 {
		   breakpoint: 768,
		   settings: {
			 slidesToShow: 2,
			 slidesToScroll: 2
		   }
		 },
		 {
		   breakpoint: 480,
		   settings: {
			 slidesToShow: 1,
			 slidesToScroll: 1
		   }
		 }
	   ]
 });
 //fire discount-slick
$('.discount-slick').slick({
	rtl:true,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow:'.prev2-arrow',
	nextArrow:'.next2-arrow',
	responsive: [
		 {
		   breakpoint: 1024,
		   settings: {
			 slidesToShow: 3,
			 slidesToScroll: 3,
			 infinite: true,
			 dots: true
		   }
		 },
		 {
		   breakpoint: 768,
		   settings: {
			 slidesToShow: 2,
			 slidesToScroll: 2
		   }
		 },
		 {
		   breakpoint: 480,
		   settings: {
			 slidesToShow: 1,
			 slidesToScroll: 1
		   }
		 }
	   ]
 });
 //fire input[type='range'] when mouse move
 $('.search input[type="range"]').mousemove(function (e) { 
	 // values: e.clientX, e.clientY, e.pageX, e.pageY
	 var x=$('#inpPrice').val();
  	$('.price').text(x);
	 
 });
 