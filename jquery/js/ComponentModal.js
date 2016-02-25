(function ( $ ) {

	$.fn.ComponentModal = function(options) {
		var defaultContent = '<p>Ingresa un contenido.!</p>';

		this.filter( "a" ).each(function() {
            var self = $( this ),
            	selfContent = self.data('content') || defaultContent;
            self.on('click', function(e){

		    	var modal = ''+
		    		'<div class="overload popup_js">' +
				        '<div class="helper"></div>' +
				        '<div class="popup popup-inner-js richtext">' +
					        '<a href="javascript:void(0)" class="btn_close btn_close_js">X</a>' +
					        selfContent +
				        '</div>' +
			    	'</div>';
			    $('body').append(modal);	
		    	
		    	var popup = $('.popup_js');
		    	var popupInner = $('.popup-inner-js');
		    	popup.addClass('active');
	    		popup.fadeIn();

		    	var btn_close = $(".btn_close_js");
		    	btn_close.click(function(){
			        popup.removeClass('active');
			        popup.fadeOut(function(){
			        	popup.remove();
			        });
			    });

			    $('body').on('click', function(){
			    	popup.removeClass('active');
	    			popup.fadeOut(function(){
	    				popup.remove();
	    			});
			    });
			    popupInner.on('click', function(e){
			    	e.stopPropagation();
			    })

			    e.stopPropagation();
		    });
        });

	    return this;
	};

}( jQuery ));
