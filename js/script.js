$("body").on("click", "#open_popup", function(e){
	var btn_close = $(".btn_close_js");
	var popup = $(".popup_js");
	console.log(e);
    popup.addClass('active');
    popup.fadeIn();
    btn_close.click(function(){
        popup.removeClass('active');
        popup.fadeOut();
    });
})