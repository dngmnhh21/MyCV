// header fixed
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    // Do something
    if(scroll>=70 && $("#headerFixed").hasClass("show")==false){
        $("#headerFixed").addClass("show");
    }else if(scroll<70 && $("#headerFixed").hasClass("show")){
        $("#headerFixed").removeClass("show");
    }
   
});
