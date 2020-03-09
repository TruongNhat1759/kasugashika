$(function() {
	'use strict';
	var obj = {
		init: function() {
			this.topJS();
			this.Overnotes();
		},
		topJS: function () {
			$(window).bind('load', function () {
				$('.idx-slider').fadeIn();
				$('.idx-slider ul').slick({
					autoplay: true,
					autoplaySpeed: 6000,
					dots: false,
					arrows: false,
					pauseOnFocus: false,
					pauseOnHover: false,
					pauseOnDotsHover: false,
					fade: true,
				 	slidesToShow: 1,
				 	slidesToScroll: 1,
				 	infinite: true,
				});
			});
		},
		Overnotes: function () {
			$.ajax({
				'url' : 'column/_custom/',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
					 	var tlt = val.title.length < 20 ? val.title : val.title.substr(0,15)+'...';
						var $li = $('<li><span>'+val.date+'</span><a href="column/'+val.url+'">'+tlt+'</a></li>');
						$li.appendTo('.b01-blog');	
					});
				}
			});
		},
	};
  obj.init();
});
