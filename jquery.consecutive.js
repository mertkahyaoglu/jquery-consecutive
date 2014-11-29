/*!
 * jQuery Consecutive Plugin 
 * https://github.com/mertkahyaoglu/jquery-consecutive
 *
 * Copyright 2014, Mert Kahyaoğlu
 * version 0.1
 * MIT license
 */

(function($, window, undefined) {
	"use strict";

	$.fn.consecutive = function(options) {

		var options = $.extend({}, $.fn.consecutive.defaults, options);

		return this.each(function() {

			var $this = $(this);

	        $(this).find('> '+options.id).hide().each(function( index, element ) {
		        if(options.animation == 'slide'){
		        	$(element).delay(index*options.delay)
		        	          .animate({width:'toggle'},options.animationDelay);
		        }else {
		        	$(element).delay(index*options.delay).fadeIn(options.animationDelay);
		        }
		    });

		});

		return $this;
	};

	$.fn.consecutive.defaults = {
		id: 		    '#item',
		animation:      'fade',
		delay:		    1000,
		animationDelay: 500
	};

})(jQuery);