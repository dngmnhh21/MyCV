// header fixed
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if(scroll>=70 && $("#headerFixed").hasClass("show")==false){
        $("#headerFixed").addClass("show");
    }else if(scroll<70 && $("#headerFixed").hasClass("show")){
        $("#headerFixed").removeClass("show");
    }
   
});

//mouse scroll
$(window).scroll(function () {
    var scroll = $('.about_me').offset().top-$(window).scrollTop();
    if(scroll <= $(window).height() && $('.mouseScroll').hasClass('hidden')==false){
        $('.mouseScroll').addClass('hidden');
    } 
    if($(window).scrollTop()==0){
        $('.mouseScroll').removeClass('hidden');
    }
    
});

//typing 

var typed = new Typed('.auto-type', {
    strings: ['FREELANCER', 'PROGRAMMER','DEVELOPER'],
    typeSpeed: 100,
    backSpeed: 70,
    fadeOutClass: 'typed-fade-out',
    cursorChar: '|',
    loop:true
  });