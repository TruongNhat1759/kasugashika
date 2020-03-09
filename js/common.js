// JavaScript Document
$(function() {
    'use strict';
  	var obj= {
	  	init: function(){
		    this.toTop();
			this.smoothScroll();
			this.anchorScroll();
			this.Gnavi();	
	  	},
	  	toTop: function(){
			$('#totop').hide();
			$(window).bind('load scroll', function() {
				  if($(this).scrollTop() > 70){
					  $('#totop').fadeIn();
				  }
				  else{
					  $('#totop').fadeOut();
				  }
			});
			$('#totop').click(function(){
				$('body, html').animate({ scrollTop: 0 }, 500);
				return false;
			});
	  	},
	  	smoothScroll : function(){
			$('a[href^="#"]').click(function() {
                if ($($(this).attr('href')).length) {
                    var p = $($(this).attr('href')).offset();
                    if ($(window).width() > 640) {
                        $('html,body').animate({ scrollTop: p.top - 100 }, 500);
                    } else {
                        $('html,body').animate({ scrollTop: p.top - 20 }, 500);
                    }
                }
                return false;
            });
		},
	  	anchorScroll : function(){
		  	$(window).bind("load", function() {
                var hash1 = location.hash;
                var $root = $('html, body');
                if (hash1 !== "") {
                    var top01 = $(hash1).offset().top;
                    if ($(window).width() > 640) {
                        $root.animate({ scrollTop: top01 - 100 }, 500);
                    } else {
                        $root.animate({ scrollTop: top01 - 20 }, 500);
                    }
                }
            });		
		},
		Gnavi: function () {
		  $('.over').hover(function () {
		    if ($(this).hasClass('flag')) {
		      return false;
		    } else {
		      $(this).find('.submenu').stop().slideToggle();
		    }
		  });
		  $('.over').click(function() {
              if ($(this).hasClass('flag')) {
                  if ($(this).hasClass('active')) {
                      $('.submenu').stop().slideUp();
                      $(this).removeClass('active');
                  } else {
                      $('.over').removeClass('active');
                      $('.submenu').stop().slideUp();
                      $(this).addClass('active');
                      $(this).find('.submenu').stop().slideToggle();
                  }
              }
          });
		  $('.menu-icon').click(function () {
		    if ($(this).hasClass('active')) {
		      $('.menu-icon').removeClass('active');
		      $('#gnavi').stop().slideUp();
		      $('.submenu').stop().slideUp();
		      $('.over').removeClass('active');
		    } else {
		      $(this).addClass('active');
		      $('#gnavi').stop().slideDown();
		    }
		  });
          $(window).bind('load scroll', function() {
			var vW = $(window).width(),
			  	wS = $(window).scrollTop(),
			  	pM = $('#mainvisual').offset().top,
			  	hM = $('#mainvisual').outerHeight() - 92,
			  	vG = $('#gnavi').outerHeight() - 92,
			  	hG = $('#gnavi').height();
			if (vW > 640) {
			  if (wS > pM + hM) {
			      $('#gnavi').addClass('fixed');
			      $('#mainvisual').css('margin-bottom', vG);
			  } else {
			      $('#gnavi').removeClass('fixed');
			      $('#mainvisual').css('margin-bottom', '');
			  }
			} else {
				$('#gnavi').removeClass('fixed');
				$('#mainvisual').css('margin-bottom', '');
			}
	      });
		  $(window).bind('load resize', function () {
              var vW = $(window).width();
              if (vW > 640) {
              	$('.menu-icon').removeClass('active');
              	$('.over').removeClass('active');
              	$('.over').removeClass('flag');
              	$('.submenu').removeAttr('style');
              	$('#gnavi').removeAttr('style');
              } else {
				$('.over').addClass('flag');
			}
          });
          $(window).bind('load resize scroll', function () {
          	var vW = $(window).width(),
          		vS = $(window).scrollTop(),
          		vM = $('#mainvisual').offset().top + $('#mainvisual').outerHeight() - 92;
          	if (vW > 640) {
          		$('.h-contact').fadeIn();
          		$('.footer-fixed').hide();
          	  	if (vS > 70) {
          	  		$('.h-contact').addClass('fixed');
          	  	} else {
          	  		$('.h-contact').removeClass('fixed');
          	  	}
          	  	if (vS > vM) {
          	  		$('.h-contact').css('top', 100);
          	  	} else {
          	  		$('.h-contact').css('top', '');
          	  	}
          	} else {
          		$('.h-contact').fadeOut();
          		  if(vS > 70){
      			  	$('.footer-fixed').fadeIn();
          		  }
          		  else{
      			  	$('.footer-fixed').fadeOut();
          		  }
          	}
          });
		},
  };
  obj.init();
});


